"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function FloatingCTA() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="md:hidden fixed bottom-4 left-3 right-3 z-50 flex items-center gap-2 p-2 bg-[#FAF8F3]/95 backdrop-blur-xl rounded-[20px] border border-[#E7E0D4] shadow-[0_8px_32px_rgba(23,23,20,0.12)] transition-all duration-300">
      {/* Call Now */}
      <a
        href="tel:+919443123456"
        className="flex-1 min-h-[48px] bg-[#171714] text-white px-3 rounded-[14px] font-sans font-semibold text-[14px] flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
        aria-label="Call Now"
      >
        <span className="material-symbols-outlined text-[18px]">call</span>
        <span>Call</span>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919443123456?text=Hi%20SMS%20Construction,%20I'd%20like%20to%20inquire%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 min-h-[48px] bg-[#B08A52] text-white px-3 rounded-[14px] font-sans font-semibold text-[14px] flex items-center justify-center gap-1.5 active:scale-95 transition-transform shadow-[0_4px_12px_rgba(176,138,82,0.3)]"
        aria-label="WhatsApp Inquiry"
      >
        <span className="material-symbols-outlined text-[18px]">chat</span>
        <span>WhatsApp</span>
      </a>

      {/* Book Consultation */}
      <Link
        href="/contact"
        className="min-h-[48px] px-3 bg-[#F2EDE3] text-[#171714] border border-[#E7E0D4] rounded-[14px] font-sans font-semibold text-[13px] flex items-center justify-center gap-1 active:scale-95 transition-transform"
        aria-label="Book Consultation"
      >
        <span className="material-symbols-outlined text-[18px]">calendar_month</span>
        <span className="hidden sm:inline">Book</span>
      </Link>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-12 h-[48px] bg-white border border-[#E7E0D4] rounded-[14px] flex items-center justify-center text-[#171714] active:scale-95 transition-transform shadow-sm"
          aria-label="Scroll to top"
        >
          <span className="material-symbols-outlined text-[20px]">keyboard_arrow_up</span>
        </button>
      )}
    </div>
  );
}
