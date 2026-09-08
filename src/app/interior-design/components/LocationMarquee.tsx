"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const locationItems = [
  "Nagercoil",
  "Kanyakumari",
  "Marthandam",
  "Thuckalay",
  "Suchindram",
  "Theroor",
  "Colachel",
  "Karungal",
  "Kulasekharam",
  "Monday Market",
  "Asaripallam",
  "Parvathipuram",
  "Vadasery",
  "Villukuri",
  "Eraniel",
];

/* ─── LocationMarquee ───────────────────────────────────────────────────── */
export default function LocationMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const repeated = [
    ...locationItems,
    ...locationItems,
    ...locationItems,
    ...locationItems,
  ];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let direction = 1;

    const ctx = gsap.context(() => {
      const marqueeTween = gsap.to(track, {
        xPercent: -50,
        repeat: -1,
        duration: 28,
        ease: "none",
      });

      ScrollTrigger.create({
        onUpdate: (self) => {
          if (self.direction !== direction) {
            direction = self.direction;
            gsap.to(marqueeTween, {
              timeScale: direction,
              duration: 0.8,
              overwrite: true,
            });
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-[#171614] border-t border-b border-[#2A2928] overflow-hidden py-3.5 sm:py-4 select-none w-full max-w-full"
    >
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #171614, transparent)" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #171614, transparent)" }}
      />

      <div
        ref={trackRef}
        aria-hidden="true"
        className="flex items-center whitespace-nowrap w-max"
        style={{ willChange: "transform" }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-5 px-2">
            <span className="font-sans text-[12px] tracking-[0.22em] uppercase font-semibold text-[#B08A52]">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#B08A52] shrink-0" />
          </span>
        ))}
      </div>

      <ul className="sr-only">
        {locationItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
