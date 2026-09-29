import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogCTA() {
  return (
    <section
      aria-labelledby="blog-cta-heading"
      className="relative overflow-hidden pt-14 sm:pt-18 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 bg-[#F6F3EB] border-t border-[#E7E0D4] text-[#171614]"
    >
      {/* Subtle luxury ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#B08A52]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[980px] mx-auto px-5 sm:px-8 text-center">
        <span className="inline-block text-[11.5px] sm:text-[12.5px] font-sans font-semibold tracking-[0.25em] uppercase text-[#B08A52] mb-3.5">
          START YOUR PROJECT
        </span>

        <h2
          id="blog-cta-heading"
          className="text-[32px] sm:text-[44px] lg:text-[50px] font-bold text-[#171614] leading-[1.14] tracking-tight mb-4"
        >
          Planning a project?
        </h2>

        <p className="text-[16px] sm:text-[17.5px] leading-relaxed max-w-[620px] mx-auto mb-9 font-sans text-[#68645D]">
          Explore our construction, interior design, planning and fabrication services.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-sans font-semibold text-[15px] bg-[#171614] hover:bg-[#B08A52] text-white transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98]"
          >
            <span>Explore Services</span>
            <ArrowRight size={16} />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-sans font-semibold text-[15px] bg-white hover:bg-[#FAF8F5] text-[#171614] border border-[#E7E0D4] hover:border-[#171614] transition-all duration-300 active:scale-[0.98]"
          >
            <span>Start a Conversation</span>
            <ArrowRight size={15} className="text-[#B08A52]" />
          </Link>
        </div>

        <p className="mt-8 text-[13px] tracking-wide font-sans text-[#8C827A]">
          SMS Construction • Nagercoil Studio • Direct Engineering Consultations
        </p>
      </div>
    </section>
  );
}
