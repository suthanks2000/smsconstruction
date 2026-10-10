# SMS Construction — Google Apps Script Contact Form & Google Sheets Integration

This backend handles every enquiry submitted from [smsconstruction.in/contact](https://smsconstruction.in/contact) and delivers them directly to **`smsconstructionngl@gmail.com`**.
1. **Google Sheets Storage**: Records each enquiry as a new row in a Google Sheet named **`SMS Construction - Customer Enquiries`** with columns for lead management. Never overwrites previous rows.
2. **Email Notification**: Dispatches a luxury branded HTML email with one-click phone dialer, email reply-to, and project scope details.
3. **Concurrency-Safe**: Uses `LockService` to queue simultaneous submissions and prevent sheet corruption.
4. **Anti-Spam & Validation**: Server-side validation, length limits, bot honeypot trap, and HTML injection escaping.

---

## 1. Google Sheets Setup (Choose Option A or Option B)

### Option A: Let Apps Script Auto-Create the Spreadsheet (Easiest)
1. You do not need to create anything manually!
2. When you run `setupSpreadsheet` or deploy the Web App, the script will automatically create a new spreadsheet named **`SMS Construction - Customer Enquiries`** in your Google Drive with luxury styled headers and column widths pre-formatted.

### Option B: Connect an Existing Spreadsheet
1. Open Google Sheets and create a sheet named:
   ```
   SMS Construction - Customer Enquiries
   ```
2. Look at the URL in your browser address bar:
   ```
   https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
   ```
   The string between `/d/` and `/edit` is your **Spreadsheet ID** (`1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`).
3. Open `google-apps-script/Code.gs` and paste that ID into `SPREADSHEET_ID`:
   ```javascript
   var SPREADSHEET_ID = "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms";
   ```

---

## 2. Spreadsheet Columns & Data Structure

Every submission appends a row with the following 9 columns:

| Column | Header | Description | Example |
| :---: | :--- | :--- | :--- |
| **A** | **Timestamp (IST)** | Exact date & time enquiry was received | `10 Oct 2026, 02:15 PM (IST)` |
| **B** | **Customer Name** | Full name of the client | `Karthik Raja` |
| **C** | **Phone Number** | Phone with text-formatting preservation | `+91 94880 21183` |
| **D** | **Email Address** | Client's email address | `client@example.com` |
| **E** | **Service / Scope** | Requested service category | `Construction` |
| **F** | **Site Location** | Location of the property / site | `Vadasery, Nagercoil` |
| **G** | **Project Requirements** | Full project details / client message | `Looking to build a 2400 sqft residential villa...` |
| **H** | **Lead Status** | Default: `New Enquiry` (soft green highlight) | `New Enquiry` |
| **I** | **Internal Notes** | Blank for your team's follow-up notes | *Followed up on 11 Oct; site visit booked.* |

---

## 3. Deployment Steps in Google Apps Script

1. Open **[script.google.com](https://script.google.com/home)** and click **New Project**.
2. Rename project: **`SMS Construction Contact Webhook`**.
3. Replace the code in `Code.gs` with the updated [google-apps-script/Code.gs](./Code.gs).
4. Click **Save** (`Ctrl + S`).
5. In the toolbar function dropdown, select **`setupSpreadsheet`** and click **`▶ Run`**.
6. When prompted, click **Review permissions** > Select your Google account > **Advanced** > **Go to SMS Construction Contact Webhook (unsafe)** > **Allow**.
7. In the Execution log below, you will see:
   ```
   ✅ Spreadsheet is ready!
   Name: SMS Construction - Customer Enquiries
   Spreadsheet ID: ...
   Spreadsheet URL: ...
   ```
8. Click **Deploy** (top right) > **New deployment**:
   - Type (`⚙`): **Web app**
   - Description: `SMS Construction Sheet & Email Webhook v2`
   - Execute as: **`Me (your_email@gmail.com)`**
   - Who has access: **`Anyone`** *(Must be Anyone)*
9. Click **Deploy** and copy the **Web App URL** (`https://script.google.com/macros/s/.../exec`).

---

## 4. Connect to Next.js Frontend

Add the Web App URL to your environment variables:

- **Local Development** (`.env.local`):
  ```bash
  NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL="https://script.google.com/macros/s/AKfycbx.../exec"
  ```
- **Cloudflare Pages Production**:
  Cloudflare Dashboard > Workers & Pages > **sms-construction** > Settings > Environment variables > Add `NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL`.

---

## 5. Verification Checklist

1. Open `http://localhost:3000/contact` (or your deployed URL).
2. Submit a sample enquiry.
3. Check **Google Sheets**:
   - Open `SMS Construction - Customer Enquiries`.
   - Confirm exactly **one new row** was appended at the bottom.
   - Confirm phone number formatting, timestamps, and customer details are intact.
4. Check **Inbox** (`suthanks2000@gmail.com` during testing):
   - Confirm luxury HTML notification email was received.
   - Click "Reply" to verify it replies directly to the customer's email.
5. When ready for production handover:
   - Change `var RECIPIENT_EMAIL = "smsconstructionngl@gmail.com";` in `Code.gs`.
   - In Apps Script, click **Deploy** > **Manage deployments** > Edit (pencil icon) > Version: **New version** > **Deploy**.
