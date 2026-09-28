"use client";

import React, { useEffect, useRef } from "react";

const stats = [
  {
    target: 150,
    suffix: "+",
    title: "Projects Completed",
    description:
      "Successfully delivered luxury residential and turnkey commercial spaces",
  },
  {
    target: 15,
    suffix: "+",
    title: "Years Experience",
    description:
      "Crafting architectural landmarks with premium workmanship",
  },
  {
    target: 100,
    suffix: "%",
    title: "Happy Clients",
    description:
      "Exceptional ratings from homeowners and studio partners",
  },
];

export default function AboutStats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      stats.forEach((stat, i) => {
        if (numRefs.current[i]) {
          numRefs.current[i]!.textContent = stat.target.toString();
        }
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const duration = 1800; // 1.8 seconds

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const ease = 1 - Math.pow(1 - progress, 3);

            stats.forEach((stat, i) => {
              const el = numRefs.current[i];
              if (el) {
                const currentVal = Math.round(ease * stat.target);
                el.textContent = currentVal.toString();
              }
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              stats.forEach((stat, i) => {
                const el = numRefs.current[i];
                if (el) el.textContent = stat.target.toString();
              });
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-5 pt-3"
    >
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="relative p-4 sm:p-5 lg:p-6 rounded-[22px] bg-white/80 backdrop-blur-xl border border-white/90 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(176,138,82,0.14)] hover:border-[#B08A52]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
          style={{
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          {/* Subtle frosted glass specular highlight */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-[#FAF8F3]/50 pointer-events-none rounded-[22px]" />

          <div className="relative z-10">
            {/* Number + Suffix */}
            <div className="flex items-baseline gap-0.5 mb-2">
              <span
                ref={(el) => {
                  numRefs.current[idx] = el;
                }}
                className="font-serif text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-[#171714] leading-none tracking-tight"
              >
                0
              </span>
              <span className="font-serif text-[20px] sm:text-[24px] lg:text-[28px] font-bold text-[#B08A52] leading-none">
                {stat.suffix}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-sans font-bold text-[13.5px] sm:text-[15px] lg:text-[16px] text-[#171714] mb-1.5 leading-snug">
              {stat.title}
            </h3>
          </div>

          {/* Description */}
          <p className="relative z-10 font-sans text-[12px] sm:text-[12.5px] lg:text-[13px] text-[#68645D] leading-relaxed">
            {stat.description}
          </p>
        </div>
      ))}
    </div>
  );
}
