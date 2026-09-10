"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { constructionServices } from "@/data/construction";

interface ConstructionSectorsConsoleProps {
  phoneNumber?: string;
  formattedPhone?: string;
}

export default function ConstructionSectorsConsole({
  phoneNumber = "+919488021183",
  formattedPhone = "+91 94880 21183",
}: ConstructionSectorsConsoleProps) {
  return (
    <div className="w-full">
      {/* 6 Civil Construction Service Cards - 3 Per Line on Laptop (lg:grid-cols-3) with Sleek Card Proportions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {constructionServices.map((service, idx) => {
          const isFeatured = idx === 0;

          return (
            <Link
              key={service.number}
              href={`/contact?service=${encodeURIComponent(service.title)}`}
              className="group relative block w-full rounded-[26px] overflow-hidden bg-gradient-to-b from-[#24221e] via-[#1a1916] to-[#12110f] border border-[#33302a] hover:border-[#e3c381]/50 p-6 sm:p-7 min-h-[230px] sm:min-h-[240px] lg:min-h-[250px] flex flex-col justify-end shadow-lg shadow-black/15 hover:shadow-2xl hover:shadow-[#e3c381]/15 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Subtle top ambient glow */}
              <div
                aria-hidden="true"
                className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none"
              />

              {/* Bottom Content Area: Title & Small Description */}
              <div className="relative z-10 pr-16 sm:pr-20">
                <h3
                  className={`text-[20px] sm:text-[22px] font-bold leading-snug mb-2 transition-colors duration-300 ${
                    isFeatured
                      ? "text-[#e3c381]"
                      : "text-white group-hover:text-[#e3c381]"
                  }`}
                >
                  {service.title}
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-white/70 font-sans leading-relaxed line-clamp-2">
                  {service.description}
                </p>
              </div>

              {/* Bottom-Right Inverted Corner Cutout Notch (Matches Section Background #FAF8F5) */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 right-0 w-[68px] h-[68px] bg-[#FAF8F5] rounded-tl-[22px] pointer-events-none z-10"
              />

              {/* Top Concave Fillet Curve */}
              <svg
                aria-hidden="true"
                className="absolute right-0 bottom-[67px] w-5 h-5 text-[#FAF8F5] fill-current pointer-events-none z-10"
                viewBox="0 0 20 20"
              >
                <path d="M20,0 L20,20 L0,20 A 20 20 0 0 0 20 0 Z" />
              </svg>

              {/* Left Concave Fillet Curve */}
              <svg
                aria-hidden="true"
                className="absolute bottom-0 right-[67px] w-5 h-5 text-[#FAF8F5] fill-current pointer-events-none z-10"
                viewBox="0 0 20 20"
              >
                <path d="M0,20 L20,20 L20,0 A 20 20 0 0 0 0 20 Z" />
              </svg>

              {/* Bottom-Right Circular Action Button with Arrow */}
              <div className="absolute bottom-2.5 right-2.5 z-20 pointer-events-none">
                <div
                  className={`h-[48px] w-[48px] rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                    isFeatured
                      ? "bg-[#e3c381] text-[#171714] shadow-[#e3c381]/25"
                      : "bg-[#252320] text-white border border-white/10 group-hover:bg-[#e3c381] group-hover:text-[#171714] group-hover:border-transparent group-hover:shadow-[#e3c381]/30 group-hover:scale-105"
                  }`}
                >
                  <ArrowUpRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
