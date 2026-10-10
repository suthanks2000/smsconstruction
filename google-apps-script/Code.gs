/**
 * SMS Construction — Google Apps Script Backend for Contact Form
 * 
 * Features:
 * 1. Automatically appends every valid enquiry to Google Sheets ("SMS Construction - Customer Enquiries")
 * 2. Concurrency-safe sheet writes using LockService (prevents write collisions)
 * 3. Delivers branded HTML notification email to recipient with client reply-to
 * 4. Full server-side validation, sanitization, length limits, and anti-spam honeypot
 * 
 * Deployment:
 * - Deploy as Web App
 * - Execute as: Me (your Google account)
 * - Who has access: Anyone
 */

// ============================================================================
// CONFIGURATION
// ============================================================================

// Recipient email address (Official production client email)
var RECIPIENT_EMAIL = "smsconstructionngl@gmail.com";

// Google Spreadsheet Configuration:
// - If your script is created via Google Sheet > Extensions > Apps Script: leave SPREADSHEET_ID empty ("").
// - If using a standalone script: paste your Google Sheet ID here (found in its URL between /d/ and /edit).
// - If left empty and not bound: the script automatically creates or finds "SMS Construction - Customer Enquiries" in your Google Drive!
var SPREADSHEET_ID = "";

// Tab name inside the spreadsheet
var SHEET_TAB_NAME = "Customer Enquiries";

// Field length limits to prevent payload abuse
var LIMITS = {
  name: 120,
  phone: 30,
  email: 120,
  projectType: 80,
  location: 150,
  message: 3000
};

// ============================================================================
// HTTP POST HANDLER
// ============================================================================

/**
 * Handle incoming form submissions from https://smsconstruction.in/contact
 */
function doPost(e) {
  // Concurrency lock to prevent simultaneous sheet write collisions
  var lock = LockService.getScriptLock();
  var hasLock = false;

  try {
    // Wait up to 10 seconds for concurrent write queue
    hasLock = lock.tryLock(10000);
    if (!hasLock) {
      return jsonResponse({
        status: "error",
        message: "Server is currently busy processing another enquiry. Please try again in a few moments."
      });
    }

    var rawData = {};

    // 1. Parse incoming request body
    if (e && e.postData && e.postData.contents) {
      try {
        rawData = JSON.parse(e.postData.contents);
      } catch (parseError) {
        rawData = e.parameter || {};
      }
    } else if (e && e.parameter) {
      rawData = e.parameter;
    }

    // 2. Anti-spam honeypot trap: If the hidden honeypot is filled, discard silently
    if (rawData.honeypot && String(rawData.honeypot).trim() !== "") {
      return jsonResponse({
        status: "success",
        message: "Enquiry accepted."
      });
    }

    // 3. Extract and sanitize fields
    var name = sanitize(rawData.name || "");
    var phone = sanitize(rawData.phone || "");
    var email = sanitize(rawData.email || "");
    var projectType = sanitize(rawData.projectType || "");
    var location = sanitize(rawData.location || "");
    var message = sanitize(rawData.message || "");

    // 4. Server-side validation
    var errors = [];

    if (!name || name.length < 2) {
      errors.push("Valid name is required (at least 2 characters).");
    } else if (name.length > LIMITS.name) {
      errors.push("Name exceeds maximum allowed length.");
    }

    if (!phone) {
      errors.push("Phone number is required.");
    } else if (!/^[0-9+\s\-()]{7,20}$/.test(phone)) {
      errors.push("Please provide a valid phone number (digits only, 7-15 numbers).");
    } else if (phone.length > LIMITS.phone) {
      errors.push("Phone number exceeds maximum allowed length.");
    }

    if (!email) {
      errors.push("Email address is required.");
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      errors.push("Please provide a valid email address.");
    } else if (email.length > LIMITS.email) {
      errors.push("Email exceeds maximum allowed length.");
    }

    if (!projectType) {
      errors.push("Project type is required.");
    } else if (projectType.length > LIMITS.projectType) {
      errors.push("Project type exceeds maximum allowed length.");
    }

    if (!message || message.length < 5) {
      errors.push("Message/project details must be at least 5 characters.");
    } else if (message.length > LIMITS.message) {
      errors.push("Message exceeds maximum allowed length (" + LIMITS.message + " characters).");
    }

    if (location && location.length > LIMITS.location) {
      errors.push("Location exceeds maximum allowed length.");
    }

    if (errors.length > 0) {
      return jsonResponse({
        status: "error",
        message: errors.join(" ")
      });
    }

    // 5. Format timestamp in Indian Standard Time (IST)
    var timestampStr = Utilities.formatDate(
      new Date(),
      "Asia/Kolkata",
      "dd MMM yyyy, hh:mm a"
    ) + " (IST)";

    // 6. RECORD ENQUIRY IN GOOGLE SHEETS
    var sheetResult = appendEnquiryToSheet({
      timestamp: timestampStr,
      name: name,
      phone: phone,
      email: email,
      projectType: projectType,
      location: location,
      message: message,
      status: "New Enquiry"
    });

    if (!sheetResult.success) {
      throw new Error("Unable to save enquiry to Google Sheets: " + sheetResult.error);
    }

    // 7. CONSTRUCT & SEND NOTIFICATION EMAIL
    var emailResult = sendEnquiryNotificationEmail({
      name: name,
      phone: phone,
      email: email,
      projectType: projectType,
      location: location,
      message: message,
      timestampStr: timestampStr
    });

    if (!emailResult.success) {
      throw new Error("Unable to send notification email: " + emailResult.error);
    }

    // 8. Return JSON success
    return jsonResponse({
      status: "success",
      message: "Enquiry saved to spreadsheet and notification email dispatched successfully."
    });

  } catch (error) {
    return jsonResponse({
      status: "error",
      message: "Server error processing submission: " + (error.message || error.toString())
    });
  } finally {
    if (hasLock) {
      lock.releaseLock();
    }
  }
}

/**
 * Handle HTTP GET requests (used for health-checks and verification)
 */
function doGet(e) {
  try {
    var target = getOrInitSheet();
    return jsonResponse({
      status: "ok",
      service: "SMS Construction Contact Form Webhook",
      recipient: RECIPIENT_EMAIL,
      spreadsheet: target.ss.getName(),
      spreadsheetUrl: target.ss.getUrl(),
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    return jsonResponse({
      status: "ok",
      service: "SMS Construction Contact Form Webhook",
      recipient: RECIPIENT_EMAIL,
      note: "Spreadsheet initialization pending: " + err.toString(),
      timestamp: new Date().toISOString()
    });
  }
}

// ============================================================================
// GOOGLE SHEETS STORAGE ENGINE
// ============================================================================

/**
 * Obtains or initializes the target Google Spreadsheet and Enquiry sheet
 */
function getOrInitSheet() {
  var ss;

  // 1. If SPREADSHEET_ID is explicitly configured, open by ID
  if (SPREADSHEET_ID && String(SPREADSHEET_ID).trim() !== "") {
    ss = SpreadsheetApp.openById(String(SPREADSHEET_ID).trim());
  } else {
    // 2. Try getting active spreadsheet if bound
    try {
      ss = SpreadsheetApp.getActiveSpreadsheet();
    } catch (e) {
      // Not a bound script
    }

    // 3. If still null, search Drive for existing spreadsheet or auto-create it
    if (!ss) {
      var files = DriveApp.getFilesByName("SMS Construction - Customer Enquiries");
      if (files.hasNext()) {
        var file = files.next();
        ss = SpreadsheetApp.openById(file.getId());
      } else {
        ss = SpreadsheetApp.create("SMS Construction - Customer Enquiries");
      }
    }
  }

  if (!ss) {
    throw new Error("Could not access or create target Google Spreadsheet.");
  }

  // Find or create the dedicated tab
  var sheet = ss.getSheetByName(SHEET_TAB_NAME);
  if (!sheet) {
    // Check if the default first sheet is empty and rename it, or insert new sheet
    var firstSheet = ss.getSheets()[0];
    if (firstSheet && firstSheet.getLastRow() === 0 && firstSheet.getName() === "Sheet1") {
      firstSheet.setName(SHEET_TAB_NAME);
      sheet = firstSheet;
    } else {
      sheet = ss.insertSheet(SHEET_TAB_NAME);
    }
  }

  // Ensure header row exists with styling
  if (sheet.getLastRow() === 0) {
    var headers = [
      "Timestamp (IST)",
      "Customer Name",
      "Phone Number",
      "Email Address",
      "Service / Scope",
      "Site Location",
      "Project Requirements / Message",
      "Lead Status",
      "Internal Notes"
    ];

    sheet.appendRow(headers);

    // Style the header row
    var headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#171614"); // Dark luxury background matching website
    headerRange.setFontColor("#C89A47");   // Warm Gold text matching brand
    headerRange.setFontSize(11);
    headerRange.setFontFamily("Arial");
    headerRange.setHorizontalAlignment("center");
    headerRange.setVerticalAlignment("middle");
    headerRange.setWrap(false);
    sheet.setRowHeight(1, 38);
    sheet.setFrozenRows(1);

    // Set appropriate column widths
    sheet.setColumnWidth(1, 180); // Timestamp
    sheet.setColumnWidth(2, 170); // Name
    sheet.setColumnWidth(3, 140); // Phone
    sheet.setColumnWidth(4, 210); // Email
    sheet.setColumnWidth(5, 170); // Service
    sheet.setColumnWidth(6, 150); // Location
    sheet.setColumnWidth(7, 340); // Message
    sheet.setColumnWidth(8, 130); // Status
    sheet.setColumnWidth(9, 200); // Internal Notes
  }

  return { ss: ss, sheet: sheet };
}

/**
 * Safely appends a new enquiry row to the Google Sheet.
 * NEVER overwrites or clears existing rows.
 */
function appendEnquiryToSheet(data) {
  try {
    var target = getOrInitSheet();
    var sheet = target.sheet;

    // Append new row at the bottom
    sheet.appendRow([
      data.timestamp,
      data.name,
      "'" + data.phone, // Prefix with apostrophe to ensure digits/plus sign are preserved as text
      data.email,
      data.projectType,
      data.location || "Not Specified",
      data.message,
      data.status || "New Enquiry",
      ""
    ]);

    // Format the newly appended row
    var lastRow = sheet.getLastRow();
    var rowRange = sheet.getRange(lastRow, 1, 1, 9);
    rowRange.setVerticalAlignment("top");
    rowRange.setFontFamily("Arial");
    rowRange.setFontSize(10);
    sheet.setRowHeight(lastRow, 30);

    // Alignment formatting
    sheet.getRange(lastRow, 1).setHorizontalAlignment("center"); // Timestamp
    sheet.getRange(lastRow, 3).setHorizontalAlignment("center"); // Phone
    sheet.getRange(lastRow, 8).setHorizontalAlignment("center"); // Status
    
    // Status column pill color highlight
    var statusCell = sheet.getRange(lastRow, 8);
    statusCell.setFontWeight("bold");
    statusCell.setBackground("#E8F5E9"); // Subtle soft green
    statusCell.setFontColor("#2E7D32");

    return { success: true, sheetUrl: target.ss.getUrl() };
  } catch (err) {
    return { success: false, error: err.toString() };
  }
}

// ============================================================================
// EMAIL DISPATCH ENGINE
// ============================================================================

/**
 * Dispatches styled HTML notification email with reply-to set to client email
 */
function sendEnquiryNotificationEmail(data) {
  try {
    var subject = "New Project Enquiry: " + escapeHtml(data.name) + " — " + escapeHtml(data.projectType) + " | SMS Construction";

    var htmlBody = [
      '<!DOCTYPE html>',
      '<html>',
      '<head>',
      '<meta charset="utf-8">',
      '<style>',
      '  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; background-color: #f5f4f0; margin: 0; padding: 20px; color: #171614; }',
      '  .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e5e0d8; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }',
      '  .header { background: #171614; padding: 28px 32px; color: #ffffff; border-bottom: 3px solid #C89A47; }',
      '  .header h1 { margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.5px; }',
      '  .header p { margin: 6px 0 0; color: #C89A47; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1.5px; }',
      '  .content { padding: 32px; }',
      '  .field-group { margin-bottom: 20px; border-bottom: 1px solid #f0ede7; padding-bottom: 16px; }',
      '  .field-group:last-child { border-bottom: none; }',
      '  .label { font-size: 12px; font-weight: 600; text-transform: uppercase; color: #8c857b; letter-spacing: 1px; margin-bottom: 6px; }',
      '  .value { font-size: 16px; font-weight: 500; color: #171614; line-height: 1.5; }',
      '  .value a { color: #B08A52; text-decoration: none; font-weight: 600; }',
      '  .message-box { background: #faf8f5; border: 1px solid #e8e3dc; border-radius: 12px; padding: 18px; white-space: pre-wrap; font-size: 15px; color: #2c2926; line-height: 1.6; }',
      '  .footer { background: #faf8f5; padding: 20px 32px; font-size: 12px; color: #8c857b; text-align: center; border-top: 1px solid #e8e3dc; }',
      '</style>',
      '</head>',
      '<body>',
      '  <div class="container">',
      '    <div class="header">',
      '      <h1>SMS Construction</h1>',
      '      <p>Website Contact Enquiry</p>',
      '    </div>',
      '    <div class="content">',
      '      <div class="field-group">',
      '        <div class="label">Client Name</div>',
      '        <div class="value">' + escapeHtml(data.name) + '</div>',
      '      </div>',
      '      <div class="field-group">',
      '        <div class="label">Phone Number</div>',
      '        <div class="value"><a href="tel:' + escapeHtml(data.phone) + '">' + escapeHtml(data.phone) + '</a></div>',
      '      </div>',
      '      <div class="field-group">',
      '        <div class="label">Email Address</div>',
      '        <div class="value"><a href="mailto:' + escapeHtml(data.email) + '">' + escapeHtml(data.email) + '</a></div>',
      '      </div>',
      '      <div class="field-group">',
      '        <div class="label">Project Scope</div>',
      '        <div class="value" style="color: #B08A52; font-weight: 600;">' + escapeHtml(data.projectType) + '</div>',
      '      </div>',
      (data.location ? [
        '      <div class="field-group">',
        '        <div class="label">Site Location</div>',
        '        <div class="value">' + escapeHtml(data.location) + '</div>',
        '      </div>'
      ].join('\n') : ''),
      '      <div class="field-group">',
      '        <div class="label">Project Requirements / Message</div>',
      '        <div class="message-box">' + escapeHtml(data.message) + '</div>',
      '      </div>',
      '      <div class="field-group">',
      '        <div class="label">Submission Received</div>',
      '        <div class="value" style="font-size: 13px; color: #68645D;">' + escapeHtml(data.timestampStr) + '</div>',
      '      </div>',
      '    </div>',
      '    <div class="footer">',
      '      This enquiry was submitted from the official SMS Construction website (<a href="https://smsconstruction.in" style="color: #B08A52;">smsconstruction.in</a>).<br>',
      '      Saved in Google Sheet: <strong>SMS Construction - Customer Enquiries</strong>.<br>',
      '      You can reply directly to this email to contact <strong>' + escapeHtml(data.name) + '</strong>.',
      '    </div>',
      '  </div>',
      '</body>',
      '</html>'
    ].join('\n');

    var textBody = [
      "SMS Construction — New Project Enquiry",
      "========================================",
      "Client Name:  " + data.name,
      "Phone:        " + data.phone,
      "Email:        " + data.email,
      "Scope:        " + data.projectType,
      (data.location ? "Location:     " + data.location : ""),
      "Date:         " + data.timestampStr,
      "",
      "Requirements:",
      "----------------------------------------",
      data.message,
      "========================================",
      "Saved to Google Sheet: SMS Construction - Customer Enquiries",
      "Reply directly to this email to contact " + data.name + " (" + data.email + ")."
    ].filter(Boolean).join("\n");

    MailApp.sendEmail({
      to: RECIPIENT_EMAIL,
      subject: subject,
      body: textBody,
      htmlBody: htmlBody,
      replyTo: data.email,
      name: "SMS Construction Web Portal"
    });

    return { success: true };
  } catch (err) {
    return { success: false, error: err.toString() };
  }
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * One-click helper function to initialize or verify the Google Sheet from Apps Script editor
 */
function setupSpreadsheet() {
  var target = getOrInitSheet();
  Logger.log("✅ Spreadsheet is ready!");
  Logger.log("Name: " + target.ss.getName());
  Logger.log("Spreadsheet ID: " + target.ss.getId());
  Logger.log("Spreadsheet URL: " + target.ss.getUrl());
}

/**
 * Helper to generate JSON ContentService output with proper MIME type
 */
function jsonResponse(data) {
  var output = ContentService.createTextOutput(JSON.stringify(data));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}

/**
 * Sanitize string inputs
 */
function sanitize(val) {
  if (typeof val !== "string") {
    val = String(val || "");
  }
  return val.trim();
}

/**
 * Safe HTML escaping to prevent HTML injection in email clients
 */
function escapeHtml(text) {
  if (!text) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
