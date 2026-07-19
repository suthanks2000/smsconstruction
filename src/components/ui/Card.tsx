"use client";

import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function Card({ children, className = "", hoverEffect = true }: CardProps) {
  return (
    <div
      className={`bg-white rounded-[24px] border border-[#E7E0D4] p-6 lg:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] ${
        hoverEffect
          ? "transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)] hover:border-[#B08A52]/40"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
