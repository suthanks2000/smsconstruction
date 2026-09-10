"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { MapPin } from "lucide-react";

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
      className="relative bg-[#141311]/85 backdrop-blur-md border-t border-white/10 overflow-hidden py-3 sm:py-3.5 select-none w-full max-w-full"
    >
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-16 sm:w-28 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #141311 25%, transparent)" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-16 sm:w-28 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #141311 25%, transparent)" }}
      />

      <div
        ref={trackRef}
        aria-hidden="true"
        className="flex items-center whitespace-nowrap w-max"
        style={{ willChange: "transform" }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 px-4 sm:px-5 group/loc">
            <MapPin size={20} className="text-[#e3c381] shrink-0 opacity-80 group-hover/loc:opacity-100 transition-opacity" />
            <span className="font-sans text-[11.5px] sm:text-[12px] tracking-[0.22em] uppercase font-medium text-white/85 group-hover/loc:text-[#e3c381] transition-colors">
              {item}
            </span>
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
