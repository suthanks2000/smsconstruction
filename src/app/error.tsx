"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, RotateCw, AlertCircle } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log internally for developer observability without leaking details to UI
    console.error("SMS Construction Application Error:", error);
  }, [error]);

  return (
    <main
      data-header-theme="light"
      className="relative min-h-[82vh] flex items-center justify-center bg-[#FAF8F3] text-[#171614] px-5 sm:px-8 py-24 sm:py-32 selection:bg-[#B08A52] selection:text-white"
    >
      {/* Subtle Architectural Grid Lines */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#171614 1px, transparent 1px), linear-gradient(90deg, #171614 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 w-full max-w-xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E7E0D4] bg-white/90 backdrop-blur-xs mb-8 shadow-xs">
          <AlertCircle className="w-3.5 h-3.5 text-[#B08A52]" aria-hidden="true" />
          <span className="font-sans font-semibold text-[11px] sm:text-[12px] tracking-[0.22em] text-[#B08A52] uppercase">
            SOMETHING WENT WRONG
          </span>
        </div>

        {/* Single H1 */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.18] text-[#171614] font-medium tracking-tight mb-5">
          We couldn&apos;t load this page.
        </h1>

        {/* Supporting Text */}
        <p className="font-sans text-[15px] sm:text-[17px] text-[#77736C] max-w-md mx-auto leading-relaxed mb-10">
          Something unexpected happened. Please try again.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
          {/* Primary CTA: Reset */}
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#171614] text-[#FAF8F3] hover:bg-[#B08A52] font-sans font-semibold text-[14px] sm:text-[15px] transition-colors duration-200 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B08A52] focus-visible:ring-offset-2 active:scale-[0.98]"
          >
            <RotateCw className="w-4 h-4" aria-hidden="true" />
            <span>Try Again</span>
          </button>

          {/* Secondary CTA: Back to Home */}
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[#E7E0D4] bg-white text-[#171614] hover:border-[#171614] hover:bg-[#FAF8F3] font-sans font-semibold text-[14px] sm:text-[15px] transition-colors duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B08A52] focus-visible:ring-offset-2"
          >
            <span>Back to Home</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </main>
  );
}
