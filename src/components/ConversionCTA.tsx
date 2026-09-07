import Link from "next/link";
import { ArrowRight, Phone, MessageSquare } from "lucide-react";

export interface ConversionCTAProps {
  badge?: string;
  title?: string;
  description?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  phoneNumber?: string;
  formattedPhone?: string;
  whatsappNumber?: string;
  whatsappMessage?: string;
  subtext?: string;
  className?: string;
  theme?: "light" | "dark";
}

/**
 * Reusable, high-performance Lead Conversion CTA section.
 * Zero-JS Server Component with responsive layout and customizable themes.
 */
export default function ConversionCTA({
  badge = "START YOUR PROJECT",
  title = "Ready to transform your space?",
  description = "Tell us about your home, the spaces you want to improve, and what you have in mind. Our team will prepare a tailored consultation and quotation.",
  primaryBtnText = "Get a Free Quote",
  primaryBtnHref = "/contact",
  phoneNumber = "+919488021183",
  formattedPhone = "+91 94880 21183",
  whatsappNumber = "919488021183",
  whatsappMessage = "Hello SMS Construction, I am interested in your services for my property.",
  subtext = "SMS Construction • Interior Design & Architecture Studio • Nagercoil, Tamil Nadu",
  className = "",
  theme = "light",
}: ConversionCTAProps) {
  const isDark = theme === "dark";

  return (
    <section
      className={`relative overflow-hidden pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 border-t border-b transition-colors ${
        isDark
          ? "bg-[#171614] border-white/10 text-white"
          : "bg-[#F6F3EB] border-[#E7E0D4] text-[#171614]"
      } ${className}`}
    >
      {/* Subtle luxury ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#B08A52]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[980px] mx-auto px-5 sm:px-8 text-center">
        {badge && (
          <span
            className={`inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.25em] uppercase mb-4 ${
              isDark ? "text-[#FBE18D]" : "text-[#B08A52]"
            }`}
          >
            {badge}
          </span>
        )}

        <h2
          className={`text-[32px] sm:text-[46px] lg:text-[52px] leading-[1.14] tracking-tight mb-5 ${
            isDark ? "text-[#FAF8F3]" : "text-[#171614]"
          }`}
        >
          {title}
        </h2>

        <p
          className={`text-[16px] sm:text-[18px] leading-relaxed max-w-[680px] mx-auto mb-9 font-sans ${
            isDark ? "text-[#FAF8F3]/80" : "text-[#68645D]"
          }`}
        >
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
          <Link
            href={primaryBtnHref}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-sans font-semibold text-[15px] transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98] ${
              isDark
                ? "bg-[#FBE18D] hover:bg-[#FCD372] text-[#171614]"
                : "bg-[#171614] hover:bg-[#B08A52] text-white"
            }`}
          >
            <span>{primaryBtnText}</span>
            <ArrowRight size={17} />
          </Link>

          <a
            href={`tel:${phoneNumber}`}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-sans font-semibold text-[15px] transition-all duration-300 shadow-xs active:scale-[0.98] ${
              isDark
                ? "bg-white/10 hover:bg-white/15 text-white border border-white/20"
                : "bg-white hover:bg-[#FAF8F5] text-[#171614] border border-[#E7E0D4] hover:border-[#B08A52]"
            }`}
          >
            <Phone size={17} className={isDark ? "text-white" : "text-[#B08A52]"} />
            <span>Call {formattedPhone}</span>
          </a>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-sans font-semibold text-[15px] transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98]"
          >
            <MessageSquare size={17} />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {subtext && (
          <p
            className={`mt-9 text-[13px] tracking-wide font-sans ${
              isDark ? "text-white/50" : "text-[#8C827A]"
            }`}
          >
            {subtext}
          </p>
        )}
      </div>
    </section>
  );
}
