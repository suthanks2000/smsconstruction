"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface StatItem {
  id: string;
  prefix?: string;
  targetNumber: number;
  suffix?: string;
  title: string;
  subtitle: string;
  fontSizeClass?: string;
}

const STATS_DATA: StatItem[] = [
  {
    id: "years",
    targetNumber: 18,
    suffix: "+",
    title: "Years Civil Excellence",
    subtitle: "Proven builds across Nagercoil",
    fontSizeClass: "text-[36px] sm:text-[44px]",
  },
  {
    id: "supervision",
    targetNumber: 100,
    suffix: "%",
    title: "In-House Supervision",
    subtitle: "Zero sub-contracting policy",
    fontSizeClass: "text-[36px] sm:text-[44px]",
  },
  {
    id: "codes",
    prefix: "IS",
    targetNumber: 456,
    title: "Structural Codes",
    subtitle: "IS 875 wind & IS 1893 seismic",
    fontSizeClass: "text-[32px] sm:text-[40px] tracking-tight",
  },
  {
    id: "surprises",
    targetNumber: 0,
    suffix: "%",
    title: "Hidden Cost Surprises",
    subtitle: "Itemized BOQ milestone billing",
    fontSizeClass: "text-[36px] sm:text-[44px]",
  },
];

export default function ConstructionStatsRibbon() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const activeTweensRef = useRef<gsap.core.Tween[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion for accessibility compliance
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // Ensure all target numbers are shown immediately without animation
      STATS_DATA.forEach((stat, idx) => {
        const numEl = numberRefs.current[idx];
        if (numEl) {
          numEl.textContent = stat.targetNumber.toString();
        }
      });
      return;
    }

    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

    const ctx = gsap.context(() => {
      // Set initial hidden state for smooth entrance
      gsap.set(cards, {
        opacity: 0,
        y: 28,
        scale: 0.96,
      });

      // Initially set numbers to 0
      STATS_DATA.forEach((stat, idx) => {
        const numEl = numberRefs.current[idx];
        if (numEl && stat.targetNumber > 0) {
          numEl.textContent = "0";
        }
      });

      const playOpen = () => {
        // Kill any pending tweens
        activeTweensRef.current.forEach((t) => t.kill());
        activeTweensRef.current = [];

        // 1. Smooth entrance animation (Open)
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: "power2.out",
          overwrite: "auto",
        });

        // 2. Increment counter animation
        STATS_DATA.forEach((stat, idx) => {
          const numEl = numberRefs.current[idx];
          if (!numEl) return;

          if (stat.targetNumber > 0) {
            const counter = { val: 0 };
            const tween = gsap.to(counter, {
              val: stat.targetNumber,
              duration: 1.8,
              ease: "power2.out",
              onUpdate: () => {
                if (numEl) {
                  numEl.textContent = Math.round(counter.val).toString();
                }
              },
            });
            activeTweensRef.current.push(tween);
          } else {
            numEl.textContent = "0";
          }
        });
      };

      const playClose = (direction: number) => {
        // Kill any pending counter tweens
        activeTweensRef.current.forEach((t) => t.kill());
        activeTweensRef.current = [];

        // Smooth exit animation (Close)
        gsap.to(cards, {
          opacity: 0,
          y: direction > 0 ? -20 : 20,
          scale: 0.96,
          duration: 0.45,
          stagger: 0.04,
          ease: "power2.in",
          overwrite: "auto",
          onComplete: () => {
            // Reset counter values to 0 for next opening
            STATS_DATA.forEach((stat, idx) => {
              const numEl = numberRefs.current[idx];
              if (numEl && stat.targetNumber > 0) {
                numEl.textContent = "0";
              }
            });
          },
        });
      };

      // ScrollTrigger for entering and exiting viewport
      ScrollTrigger.create({
        trigger: container,
        start: "top 88%",
        end: "bottom 10%",
        onEnter: () => playOpen(),
        onLeave: (self) => playClose(self.direction),
        onEnterBack: () => playOpen(),
        onLeaveBack: (self) => playClose(self.direction),
      });
    }, container);

    return () => {
      activeTweensRef.current.forEach((t) => t.kill());
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
      aria-label="SMS Construction key civil statistics"
    >
      {STATS_DATA.map((stat, idx) => (
        <div
          key={stat.id}
          ref={(el) => {
            cardRefs.current[idx] = el;
          }}
          className="flex flex-col group will-change-transform"
        >
          <span
            className={`font-mono font-bold text-[#171714] leading-none mb-2 flex items-baseline ${stat.fontSizeClass}`}
          >
            {stat.prefix && <span className="mr-1.5">{stat.prefix}</span>}
            <span
              ref={(el) => {
                numberRefs.current[idx] = el;
              }}
              className="tabular-nums inline-block tracking-tight"
            >
              {stat.targetNumber}
            </span>
            {stat.suffix && (
              <span className="text-[#B08A52] ml-0.5 transition-transform duration-300 group-hover:scale-110 inline-block">
                {stat.suffix}
              </span>
            )}
          </span>
          <span className="text-[14px] font-bold text-[#171714] mb-0.5 tracking-tight">
            {stat.title}
          </span>
          <span className="text-[12px] text-[#68645D] leading-normal font-sans">
            {stat.subtitle}
          </span>
        </div>
      ))}
    </div>
  );
}
