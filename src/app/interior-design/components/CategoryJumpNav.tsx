"use client";

import React, { useState, useEffect, useRef } from "react";

export interface CategoryJumpNavProps {
  categories: Array<{
    anchorId: string;
    title: string;
    number?: string;
  }>;
}

export default function CategoryJumpNav({ categories }: CategoryJumpNavProps) {
  const [activeId, setActiveId] = useState<string>("");
  const pillRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      // Threshold below the fixed navbar + jump bar (~140-180px)
      const topThreshold = 180;
      const bottomThreshold = window.innerHeight * 0.6;

      let current = "";

      // Check which category is currently occupying the active reading viewport
      for (const cat of categories) {
        const el = document.getElementById(cat.anchorId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Element is active if its top has entered into view and its bottom is still below the top threshold
          if (rect.top <= topThreshold + 80 && rect.bottom >= topThreshold) {
            current = cat.anchorId;
            break;
          }
        }
      }

      // Fallback: If no section crossed topThreshold yet, check if any section's top is in viewport
      if (!current) {
        for (const cat of categories) {
          const el = document.getElementById(cat.anchorId);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= bottomThreshold && rect.bottom >= topThreshold) {
              current = cat.anchorId;
              break;
            }
          }
        }
      }

      // Update active state only if changed (clears to "" if outside all categories)
      setActiveId((prev) => (prev !== current ? current : prev));
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll(); // Initial check on mount

    return () => window.removeEventListener("scroll", onScroll);
  }, [categories]);

  // Keep active pill centered in horizontal scroll view on mobile/tablet
  useEffect(() => {
    if (activeId && pillRefs.current[activeId]) {
      pillRefs.current[activeId]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeId]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, anchorId: string) => {
    e.preventDefault();
    setActiveId(anchorId);
    const el = document.getElementById(anchorId);
    if (el) {
      const yOffset = el.getBoundingClientRect().top + window.scrollY - 150;
      window.scrollTo({
        top: yOffset,
        behavior: "smooth",
      });
      window.history.pushState(null, "", `#${anchorId}`);
    }
  };

  return (
    <nav
      aria-label="Interior Categories Navigation"
      className="sticky top-[87px] sm:top-[88px] z-30 bg-[#FAF8F3]/95 backdrop-blur-md border-b border-[#E7E0D4] py-2 sm:py-2.5 transition-colors shadow-xs w-full max-w-full"
    >
      <div className="max-w-[1360px] mx-auto px-3 sm:px-8 lg:px-12 w-full">
        <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar py-1 text-[13px] font-sans w-full max-w-full">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#B08A52] shrink-0 mr-1 hidden sm:inline">
            Jump To:
          </span>

          {categories.map((cat) => {
            const isActive = activeId === cat.anchorId;
            return (
              <a
                key={cat.anchorId}
                href={`#${cat.anchorId}`}
                ref={(el) => {
                  pillRefs.current[cat.anchorId] = el;
                }}
                onClick={(e) => handleClick(e, cat.anchorId)}
                className={`shrink-0 relative px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium text-[12.5px] sm:text-[13px] flex items-center gap-1.5 sm:gap-2 transition-all duration-300 ease-out cursor-pointer select-none whitespace-nowrap ${
                  isActive
                    ? "bg-[#171614] text-white border border-[#171614] shadow-sm scale-[1.02]"
                    : "bg-white text-[#555] hover:text-[#171614] hover:bg-[#FAF8F5] border border-[#E7E0D4] hover:border-[#B08A52]/50 shadow-xs"
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B08A52] shrink-0 animate-pulse" />
                )}
                <span>{cat.title}</span>
              </a>
            );
          })}
          {/* Spacer so the last pill can be scrolled completely into view on narrow screens */}
          <div className="shrink-0 w-3 sm:hidden" aria-hidden="true" />
        </div>
      </div>
    </nav>
  );
}
