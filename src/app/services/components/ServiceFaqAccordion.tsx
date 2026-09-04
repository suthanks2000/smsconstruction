"use client";

import { useState } from "react";
interface FaqItem {
  question: string;
  answer: string;
}

interface ServiceFaqAccordionProps {
  items: FaqItem[];
}

export default function ServiceFaqAccordion({ items }: ServiceFaqAccordionProps) {
  // First item open by default for immediate context
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="divide-y divide-[#E7E0D4] border-y border-[#E7E0D4]">
      {items.map((faq, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-btn-${index}`;

        return (
          <div key={index} className="transition-colors duration-200">
            <h3>
              <button
                id={buttonId}
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="group flex w-full items-center justify-between gap-6 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A52] focus-visible:ring-offset-2 min-h-[64px]"
              >
                <span
                  className={`font-serif text-[18px] sm:text-[21px] font-semibold transition-colors duration-200 ${
                    isOpen ? "text-[#B08A52]" : "text-[#171714] group-hover:text-[#B08A52]"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                    isOpen
                      ? "border-[#B08A52] bg-[#B08A52] text-white rotate-45"
                      : "border-[#E7E0D4] bg-white text-[#171714] group-hover:border-[#B08A52]"
                  }`}
                  aria-hidden="true"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-200"
                  >
                    <path
                      d="M7 1V13M1 7H13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0 pb-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-[16px] sm:text-[17px] leading-relaxed text-[#68645D] pr-4 sm:pr-12">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
