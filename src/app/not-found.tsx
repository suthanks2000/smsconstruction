import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "404 — Page Not Found | SMS Construction",
  description:
    "This space hasn't been built yet. The page you're looking for may have moved, been removed, or never existed.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
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

      {/* Architectural Outer Frame Container */}
      <div className="relative z-10 w-full max-w-2xl mx-auto text-center">
        {/* Architectural Marker / Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E7E0D4] bg-white/90 backdrop-blur-xs mb-8 shadow-xs">
          <Compass className="w-3.5 h-3.5 text-[#B08A52]" aria-hidden="true" />
          <span className="font-sans font-semibold text-[11px] sm:text-[12px] tracking-[0.22em] text-[#B08A52] uppercase">
            404 — PAGE NOT FOUND
          </span>
        </div>

        {/* Single H1 Heading */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.18] text-[#171614] font-medium tracking-tight mb-5">
          This space hasn&apos;t been built yet.
        </h1>

        {/* Supporting text */}
        <p className="font-sans text-[15px] sm:text-[17px] text-[#77736C] max-w-lg mx-auto leading-relaxed mb-10">
          The page you&apos;re looking for may have moved, been removed, or never existed.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-8">
          {/* Primary CTA */}
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#171614] text-[#FAF8F3] hover:bg-[#B08A52] font-sans font-semibold text-[14px] sm:text-[15px] transition-colors duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B08A52] focus-visible:ring-offset-2"
          >
            <span>Back to Home</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[#E7E0D4] bg-white text-[#171614] hover:border-[#171614] hover:bg-[#FAF8F3] font-sans font-semibold text-[14px] sm:text-[15px] transition-colors duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B08A52] focus-visible:ring-offset-2"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Optional Tertiary CTA */}
        <div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-[13.5px] font-sans font-medium text-[#77736C] hover:text-[#171614] underline underline-offset-4 transition-colors duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B08A52] rounded-xs"
          >
            <span>Contact Us</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
