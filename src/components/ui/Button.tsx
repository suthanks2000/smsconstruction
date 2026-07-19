"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "secondary" | "link";
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  icon?: string;
  fullWidthMobile?: boolean;
}

export default function Button({
  variant = "primary",
  children,
  href,
  onClick,
  className = "",
  type = "button",
  icon,
  fullWidthMobile = false,
}: ButtonProps) {
  let baseStyles =
    "inline-flex items-center justify-center font-sans font-medium text-[16px] transition-all duration-300 gap-2 cursor-pointer touch-target";

  if (fullWidthMobile) {
    baseStyles += " w-full sm:w-auto";
  }

  if (variant === "primary") {
    baseStyles +=
      " min-h-[52px] bg-[#B08A52] text-white px-7 py-3.5 rounded-[16px] hover:bg-[#80633D] shadow-[0_4px_20px_rgba(176,138,82,0.25)] hover:-translate-y-0.5 active:translate-y-0";
  } else if (variant === "secondary") {
    baseStyles +=
      " min-h-[52px] bg-transparent border border-[#B08A52] text-[#B08A52] px-7 py-3.5 rounded-[16px] hover:bg-[#B08A52] hover:text-white hover:-translate-y-0.5 active:translate-y-0";
  } else if (variant === "link") {
    baseStyles +=
      " min-h-[44px] text-[#B08A52] hover:text-[#80633D] p-0 underline-offset-4 hover:underline group";
  }

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
      {variant === "link" && !icon && (
        <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">
          arrow_forward
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${baseStyles} ${className}`}>
      {content}
    </button>
  );
}
