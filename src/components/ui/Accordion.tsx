"use client";

import React, { useState } from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export default function Accordion({ items, className = "" }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="bg-white rounded-[24px] border border-[#E7E0D4] overflow-hidden transition-all duration-300 shadow-sm"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 md:px-8 py-5 md:py-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:bg-[#FAF8F3] min-h-[56px] touch-target"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-[18px] md:text-[22px] font-semibold text-[#171714]">
                {item.question}
              </span>
              <div
                className={`w-10 h-10 rounded-full border border-[#E7E0D4] flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${
                  isOpen ? "bg-[#B08A52] text-white border-[#B08A52] rotate-180" : "text-[#171714]"
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">
                  keyboard_arrow_down
                </span>
              </div>
            </button>
            <div
              className={`accordion-content ${isOpen ? "open" : ""}`}
            >
              <div className="px-6 md:px-8 pb-6 pt-2 text-[#68645D] text-body border-t border-[#EFEAE2]/60">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
