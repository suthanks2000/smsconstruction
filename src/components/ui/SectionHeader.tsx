"use client";

import React from "react";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
  centered = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-10 lg:mb-16 ${centered ? "text-center mx-auto max-w-[760px]" : "max-w-[760px]"} ${className}`}>
      {label && <div className="text-section-label mb-2.5">{label}</div>}
      <h2 className="text-section-title mb-3.5">{title}</h2>
      {description && <p className="text-body text-[#68645D]">{description}</p>}
    </div>
  );
}
