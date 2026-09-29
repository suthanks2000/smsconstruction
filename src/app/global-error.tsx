"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, RotateCw, AlertCircle } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log internally for developer observability
    console.error("SMS Construction Root Layout Error:", error);
  }, [error]);

  return (
    <html lang="en">
      <head>
        <title>Something Went Wrong | SMS Construction</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FAF8F3] text-[#171614] font-sans antialiased m-0 min-h-screen flex items-center justify-center px-5 sm:px-8 py-16 selection:bg-[#B08A52] selection:text-white">
        <main className="relative z-10 w-full max-w-xl mx-auto text-center">
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
            <button
              type="button"
              onClick={() => reset()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#171614] text-[#FAF8F3] hover:bg-[#B08A52] font-sans font-semibold text-[14px] sm:text-[15px] transition-colors duration-200 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B08A52] focus-visible:ring-offset-2 active:scale-[0.98]"
            >
              <RotateCw className="w-4 h-4" aria-hidden="true" />
              <span>Try Again</span>
            </button>

            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[#E7E0D4] bg-white text-[#171614] hover:border-[#171614] hover:bg-[#FAF8F3] font-sans font-semibold text-[14px] sm:text-[15px] transition-colors duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B08A52] focus-visible:ring-offset-2"
            >
              <span>Back to Home</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
