"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Plus, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface FaqItemType {
  q?: string;
  question?: string;
  a?: string;
  answer?: string;
}

export interface ModernFaqProps {
  items: FaqItemType[];
  badgeText?: string;
  title?: string;
  titleAccent?: string;
  subtitle?: string;
  description?: string;
  consultationHeading?: string;
  consultationDesc?: string;
  consultationLinkText?: string;
  consultationHref?: string;
  sectionId?: string;
  className?: string;
}

export default function ModernFaq({
  items,
  badgeText,
  title = "Frequently Asked Questions",
  titleAccent = ".",
  subtitle = "Everything you need to know",
  description,
  consultationHeading,
  consultationDesc,
  consultationLinkText = "Schedule a Consultation",
  consultationHref = "/contact",
  sectionId = "faq-section",
  className = "py-16 md:py-24 bg-[#FAFAFA] border-t border-[#E7E0D4]/60 relative",
}: ModernFaqProps) {
  const [open, setOpen] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".faq-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".faq-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id={sectionId} className={className}>
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-24">
          {/* Left: Heading & Context */}
          <div className="lg:w-[38%] shrink-0">
            <div className="lg:sticky lg:top-32 faq-heading">
              {badgeText && (
                <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                  {badgeText}
                </span>
              )}
              <h2 className="text-[34px] sm:text-[44px] lg:text-[clamp(2.6rem,4.5vw,4.5rem)] font-serif font-bold leading-[1.05] tracking-[-0.03em] text-[#171614] mb-3">
                {title}
                {titleAccent && (
                  <span className="text-[#B08A52]">{titleAccent}</span>
                )}
              </h2>
              {subtitle && (
                <span className="text-[17px] sm:text-[19px] text-[#C89A47] font-medium block mb-4">
                  {subtitle}
                </span>
              )}
              {description && (
                <p className="text-[15px] sm:text-[16px] text-[#68645D] leading-relaxed mb-6 font-sans">
                  {description}
                </p>
              )}

              {/* Consultation / Contact Card */}
              {consultationHeading && (
                <div className="p-6 rounded-[22px] bg-white border border-[#E7E0D4] shadow-sm mt-6">
                  <h3 className="font-serif text-[17px] sm:text-[18px] font-bold text-[#171614] mb-2 leading-snug">
                    {consultationHeading}
                  </h3>
                  {consultationDesc && (
                    <p className="text-[13.5px] sm:text-[14px] text-[#68645D] mb-4 font-sans leading-relaxed">
                      {consultationDesc}
                    </p>
                  )}
                  <Link
                    href={consultationHref}
                    className="inline-flex items-center gap-2 font-sans font-semibold text-[13.5px] sm:text-[14px] text-[#B08A52] hover:text-[#80633D] transition-colors"
                  >
                    <span>{consultationLinkText}</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="lg:w-[62%] flex flex-col gap-4">
            {items.map((faq, i) => {
              const question = faq.q || faq.question || "";
              const answer = faq.a || faq.answer || "";
              const isOpen = open === i;

              return (
                <div
                  key={i}
                  className="faq-item bg-white rounded-[20px] border border-[#E7E0D4] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
                >
                  <button
                    type="button"
                    className="w-full text-left px-6 md:px-8 py-6 md:py-7 flex justify-between items-center bg-white group-hover:bg-[#FAF8F5] transition-colors duration-200 cursor-pointer"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-sans font-semibold text-[16px] md:text-[17px] pr-6 md:pr-8 leading-snug transition-colors duration-300 ${
                        isOpen ? "text-[#C89A47]" : "text-[#1F1F1F]"
                      }`}
                    >
                      {question}
                    </span>
                    <span
                      className="text-[#C89A47] transition-transform duration-300 shrink-0 bg-[#F8F4EE] w-10 h-10 rounded-full flex items-center justify-center shadow-xs"
                      style={{
                        transform: isOpen ? "rotate(135deg)" : "rotate(0deg)",
                      }}
                      aria-hidden="true"
                    >
                      <Plus size={20} strokeWidth={2.5} />
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                    aria-hidden={!isOpen}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 md:px-8 pb-7 pt-2 text-[#555] text-[15px] md:text-[16px] leading-[1.8] font-sans">
                        {answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
