"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  helperText?: string;
  rows?: number;
}

export function Input({ label, error, helperText, className = "", ...props }: InputProps) {
  return (
    <div className="w-full mb-5">
      <label className="block font-sans font-medium text-[15px] text-[#171714] mb-2">
        {label} {props.required && <span className="text-[#C44536]">*</span>}
      </label>
      <input
        className={`w-full min-h-[52px] bg-white border border-[#E7E0D4] rounded-[16px] px-4 md:px-5 py-3.5 font-sans text-[16px] text-[#171714] placeholder-[#68645D]/50 transition-all duration-300 focus:outline-none focus:border-[#B08A52] focus:ring-1 focus:ring-[#B08A52] touch-target ${
          error ? "border-[#C44536] focus:border-[#C44536] focus:ring-[#C44536]" : ""
        } ${className}`}
        {...props}
      />
      {error && <p className="text-[#C44536] text-[13px] mt-1.5 font-medium">{error}</p>}
      {helperText && !error && <p className="text-[#68645D] text-[13px] mt-1.5">{helperText}</p>}
    </div>
  );
}

export function Textarea({ label, error, helperText, rows = 4, className = "", ...props }: TextareaProps) {
  return (
    <div className="w-full mb-5">
      <label className="block font-sans font-medium text-[15px] text-[#171714] mb-2">
        {label} {props.required && <span className="text-[#C44536]">*</span>}
      </label>
      <textarea
        rows={rows}
        className={`w-full bg-white border border-[#E7E0D4] rounded-[16px] px-4 md:px-5 py-3.5 font-sans text-[16px] text-[#171714] placeholder-[#68645D]/50 transition-all duration-300 focus:outline-none focus:border-[#B08A52] focus:ring-1 focus:ring-[#B08A52] ${
          error ? "border-[#C44536] focus:border-[#C44536] focus:ring-[#C44536]" : ""
        } ${className}`}
        {...props}
      />
      {error && <p className="text-[#C44536] text-[13px] mt-1.5 font-medium">{error}</p>}
      {helperText && !error && <p className="text-[#68645D] text-[13px] mt-1.5">{helperText}</p>}
    </div>
  );
}
