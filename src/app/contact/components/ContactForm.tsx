"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Phone, ChevronDown } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  location: string;
  message: string;
  honeypot: string; // Anti-spam trap
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

const PROJECT_TYPES = [
  "Construction",
  "Interior Design",
  "Design & Planning",
  "Survey & Approvals",
  "Fabrication Works",
  "Renovation",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    location: "",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[0-9]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number (minimum 7 to 15 digits).";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address (e.g. name@example.com).";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message or project requirements.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot trap: if filled, silently discard
    if (formData.honeypot) {
      setIsSubmitted(true);
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate submission network handshake with anti-double-click guard
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSubmitted(true);
    } catch {
      setErrors({
        message: "Unable to submit your enquiry right now. Please call or email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      projectType: "",
      location: "",
      message: "",
      honeypot: "",
    });
    setErrors({});
    setIsSubmitted(false);
    setIsDropdownOpen(false);
  };

  if (isSubmitted) {
    return (
      <div
        className="p-8 sm:p-10 lg:p-12 rounded-[32px] sm:rounded-[36px] bg-white border border-[#E7E0D4]/80 shadow-[0_20px_50px_rgba(0,0,0,0.04)] text-center"
        role="alert"
        aria-live="polite"
      >
        <div className="w-16 h-16 rounded-full bg-[#FAF8F3] border border-[#E7E0D4] flex items-center justify-center text-[#B08A52] mx-auto mb-6 shadow-xs">
          <CheckCircle2 size={32} strokeWidth={2} />
        </div>

        <h3 className="font-serif text-[26px] sm:text-[32px] font-bold text-[#171714] mb-3 leading-tight">
          Thank you for contacting SMS Construction.
        </h3>

        <p className="font-sans text-[15px] sm:text-[16px] text-[#68645D] leading-relaxed max-w-lg mx-auto mb-8">
          Your enquiry has been submitted successfully. Our engineering and design team in Nagercoil will review your requirements.
        </p>

        <div className="p-6 rounded-[20px] bg-[#FAF8F3] border border-[#E7E0D4] max-w-md mx-auto text-left mb-8 space-y-2.5 text-[14px] font-sans">
          <p className="text-[12px] uppercase tracking-wider font-semibold text-[#B08A52] mb-1">
            Enquiry Summary
          </p>
          <div className="flex justify-between border-b border-[#E7E0D4]/60 pb-2">
            <span className="text-[#77736C]">Client Name:</span>
            <span className="font-medium text-[#171714]">{formData.name}</span>
          </div>
          <div className={`flex justify-between ${formData.location ? "border-b border-[#E7E0D4]/60 pb-2" : ""}`}>
            <span className="text-[#77736C]">Project Scope:</span>
            <span className="font-medium text-[#171714]">{formData.projectType || "General Inquiry"}</span>
          </div>
          {formData.location && (
            <div className="flex justify-between">
              <span className="text-[#77736C]">Site Location:</span>
              <span className="font-medium text-[#171714]">{formData.location}</span>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-[#E7E0D4] bg-[#FAF8F3] text-[#171714] font-sans font-semibold text-[14px] hover:border-[#171714] transition-colors"
          >
            Send Another Enquiry
          </button>
          <a
            href="tel:+919488021183"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#171714] hover:bg-[#B08A52] text-white font-sans font-semibold text-[14px] transition-colors"
          >
            <Phone size={14} />
            <span>Call +91 94880 21183</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="p-7 sm:p-10 lg:p-12 rounded-[32px] sm:rounded-[36px] bg-white border border-[#E7E0D4]/80 shadow-[0_20px_50px_rgba(0,0,0,0.04)] space-y-6 sm:space-y-7"
    >
      {/* Hidden honeypot field for anti-spam */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          value={formData.honeypot}
          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Row 1: Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        <div>
          <label
            htmlFor="name"
            className="block font-sans text-[13px] sm:text-[13.5px] font-semibold text-[#171714] mb-2"
          >
            Your Name <span className="text-[#B08A52]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: undefined });
            }}
            placeholder="Enter your name..."
            className={`w-full min-h-[52px] sm:min-h-[56px] px-5 sm:px-6 rounded-[16px] sm:rounded-[18px] bg-[#F8F8F7] border font-sans text-[15px] text-[#171714] placeholder-[#A09D96] outline-none transition-all focus:bg-white ${
              errors.name
                ? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500"
                : "border-[#E5E5E0] focus:border-[#171714] focus:ring-1 focus:ring-[#171714]"
            }`}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-[12.5px] text-red-600 font-sans flex items-center gap-1">
              <AlertCircle size={13} className="shrink-0" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block font-sans text-[13px] sm:text-[13.5px] font-semibold text-[#171714] mb-2"
          >
            Phone Number <span className="text-[#B08A52]">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={15}
            required
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            value={formData.phone}
            onChange={(e) => {
              const onlyNumbers = e.target.value.replace(/\D/g, "");
              setFormData({ ...formData, phone: onlyNumbers });
              if (errors.phone) setErrors({ ...errors, phone: undefined });
            }}
            placeholder="Enter your phone number..."
            className={`w-full min-h-[52px] sm:min-h-[56px] px-5 sm:px-6 rounded-[16px] sm:rounded-[18px] bg-[#F8F8F7] border font-sans text-[15px] text-[#171714] placeholder-[#A09D96] outline-none transition-all focus:bg-white ${
              errors.phone
                ? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500"
                : "border-[#E5E5E0] focus:border-[#171714] focus:ring-1 focus:ring-[#171714]"
            }`}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-[12.5px] text-red-600 font-sans flex items-center gap-1">
              <AlertCircle size={13} className="shrink-0" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Email & Project Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        <div>
          <label
            htmlFor="email"
            className="block font-sans text-[13px] sm:text-[13.5px] font-semibold text-[#171714] mb-2"
          >
            Email Address <span className="text-[#B08A52]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            spellCheck={false}
            autoCapitalize="none"
            required
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            value={formData.email}
            onChange={(e) => {
              const cleanEmail = e.target.value.replace(/\s/g, "");
              setFormData({ ...formData, email: cleanEmail });
              if (errors.email) {
                if (!cleanEmail || /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(cleanEmail)) {
                  setErrors({ ...errors, email: undefined });
                }
              }
            }}
            onBlur={() => {
              if (
                formData.email.trim() &&
                !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email.trim())
              ) {
                setErrors((prev) => ({
                  ...prev,
                  email: "Please enter a valid email address (e.g. name@example.com).",
                }));
              }
            }}
            placeholder="Enter your email address..."
            className={`w-full min-h-[52px] sm:min-h-[56px] px-5 sm:px-6 rounded-[16px] sm:rounded-[18px] bg-[#F8F8F7] border font-sans text-[15px] text-[#171714] placeholder-[#A09D96] outline-none transition-all focus:bg-white ${
              errors.email
                ? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500"
                : "border-[#E5E5E0] focus:border-[#171714] focus:ring-1 focus:ring-[#171714]"
            }`}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-[12.5px] text-red-600 font-sans flex items-center gap-1">
              <AlertCircle size={13} className="shrink-0" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        <div>
          <label
            id="projectType-label"
            className="block font-sans text-[13px] sm:text-[13.5px] font-semibold text-[#171714] mb-2"
          >
            Project Type <span className="text-[#B08A52]">*</span>
          </label>
          <div className="relative">
            {/* Custom Interactive Dropdown Button */}
            <button
              type="button"
              id="projectType"
              aria-haspopup="listbox"
              aria-expanded={isDropdownOpen}
              aria-labelledby="projectType-label projectType"
              aria-invalid={!!errors.projectType}
              aria-describedby={errors.projectType ? "type-error" : undefined}
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className={`w-full min-h-[52px] sm:min-h-[56px] px-5 sm:px-6 rounded-[16px] sm:rounded-[18px] bg-[#F8F8F7] border font-sans text-[15px] outline-none transition-all flex items-center justify-between text-left cursor-pointer ${
                formData.projectType ? "text-[#171714] font-medium" : "text-[#A09D96]"
              } ${
                errors.projectType
                  ? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500"
                  : isDropdownOpen
                  ? "bg-white border-[#171714] ring-1 ring-[#171714]"
                  : "border-[#E5E5E0] hover:border-[#171714] focus:bg-white"
              }`}
            >
              <span className="truncate">
                {formData.projectType || "Select your project type..."}
              </span>
              <ChevronDown
                size={17}
                className={`text-[#77736C] transition-transform duration-200 shrink-0 ml-2 ${
                  isDropdownOpen ? "rotate-180 text-[#171714]" : ""
                }`}
              />
            </button>

            {/* Hidden Input for Form Submission */}
            <input type="hidden" name="projectType" value={formData.projectType} />

            {/* Custom Dropdown Menu with Mobile-Optimized Touch Targets */}
            {isDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsDropdownOpen(false)}
                  aria-hidden="true"
                />
                <ul
                  role="listbox"
                  aria-label="Project Type"
                  className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 rounded-[20px] bg-white border border-[#E7E0D4] shadow-[0_16px_40px_rgba(0,0,0,0.12)] p-2 max-h-[290px] overflow-y-auto space-y-1"
                >
                  {PROJECT_TYPES.map((pt) => {
                    const isSelected = formData.projectType === pt;
                    return (
                      <li
                        key={pt}
                        role="option"
                        aria-selected={isSelected}
                        onClick={() => {
                          setFormData({ ...formData, projectType: pt });
                          if (errors.projectType) setErrors({ ...errors, projectType: undefined });
                          setIsDropdownOpen(false);
                        }}
                        className={`px-4 py-3 sm:py-2.5 rounded-[14px] text-[14.5px] font-sans cursor-pointer transition-all flex items-center justify-between ${
                          isSelected
                            ? "bg-[#FAF8F3] text-[#171714] font-semibold border border-[#E7E0D4]"
                            : "text-[#4A4742] hover:bg-[#F8F8F7] hover:text-[#171714] active:bg-[#F0EDE6]"
                        }`}
                      >
                        <span>{pt}</span>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </div>
          {errors.projectType && (
            <p id="type-error" className="mt-1.5 text-[12.5px] text-red-600 font-sans flex items-center gap-1">
              <AlertCircle size={13} className="shrink-0" />
              <span>{errors.projectType}</span>
            </p>
          )}
        </div>
      </div>

      {/* Row 3: Project Location */}
      <div>
        <label
          htmlFor="location"
          className="block font-sans text-[13px] sm:text-[13.5px] font-semibold text-[#171714] mb-2"
        >
          Project / Plot Location <span className="text-[#77736C] font-normal">(Optional)</span>
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          placeholder="e.g. Vadasery, Suchindram, Nagercoil..."
          className="w-full min-h-[52px] sm:min-h-[56px] px-5 sm:px-6 rounded-[16px] sm:rounded-[18px] bg-[#F8F8F7] border border-[#E5E5E0] font-sans text-[15px] text-[#171714] placeholder-[#A09D96] outline-none transition-all focus:bg-white focus:border-[#171714] focus:ring-1 focus:ring-[#171714]"
        />
      </div>

      {/* Row 4: Message / Requirements */}
      <div>
        <label
          htmlFor="message"
          className="block font-sans text-[13px] sm:text-[13.5px] font-semibold text-[#171714] mb-2"
        >
          Message / Project Requirements <span className="text-[#B08A52]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: undefined });
          }}
          placeholder="Enter your message or project requirements..."
          className={`w-full p-5 sm:p-6 rounded-[20px] sm:rounded-[22px] bg-[#F8F8F7] border font-sans text-[15px] text-[#171714] placeholder-[#A09D96] outline-none transition-all resize-y min-h-[130px] focus:bg-white ${
            errors.message
              ? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500"
              : "border-[#E5E5E0] focus:border-[#171714] focus:ring-1 focus:ring-[#171714]"
          }`}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-[12.5px] text-red-600 font-sans flex items-center gap-1">
            <AlertCircle size={13} className="shrink-0" />
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      {/* Bottom Row: Helper Note & Styled Submit Pill Button matching reference image */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="font-sans text-[13.5px] text-[#77736C] order-2 sm:order-1 text-center sm:text-left">
          Direct assistance? Call{" "}
          <a
            href="tel:+919488021183"
            className="font-semibold text-[#171714] hover:text-[#B08A52] underline underline-offset-2 transition-colors"
          >
            +91 94880 21183
          </a>
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto order-1 sm:order-2 min-h-[54px] px-8 py-3.5 rounded-full bg-[#171714] hover:bg-[#B08A52] text-white font-sans font-semibold text-[15px] inline-flex items-center justify-center gap-3 transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none cursor-pointer group"
        >
          {isSubmitting ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <span className="w-7 h-7 rounded-full bg-white text-[#171714] flex items-center justify-center shrink-0 group-hover:translate-x-0.5 transition-transform">
                <ArrowRight size={14} strokeWidth={2.5} />
              </span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
