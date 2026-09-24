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
          {/* Left: Heading */}
          <div className="lg:w-[35%] shrink-0">
            <div className="sticky top-32 faq-heading">
              <h2 className="text-[clamp(2.5rem,8vw,5.5rem)] md:text-[clamp(3rem,5vw,5.5rem)] leading-[0.9] tracking-[-0.04em] text-[#171614] mb-4">
                Frequently Asked Questions<span className="text-[#B08A52]">.</span>
              </h2>
              <span className="text-lg md:text-xl text-[#C89A47] block">
                Everything you need to know
              </span>
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
