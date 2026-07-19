"use client";

import React from "react";
import Image from "next/image";
import Card from "./Card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  location: string;
  avatarSrc?: string;
  rating?: number;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  location,
  avatarSrc,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <Card className="flex flex-col justify-between h-full">
      <div>
        <div className="flex gap-1 text-[#B08A52] mb-5">
          {Array.from({ length: rating }).map((_, i) => (
            <span key={i} className="material-symbols-outlined text-[18px]">
              star
            </span>
          ))}
        </div>
        <p className="font-serif text-[18px] md:text-[21px] text-[#171714] leading-relaxed italic mb-6">
          &ldquo;{quote}&rdquo;
        </p>
      </div>
      <div className="flex items-center gap-4 pt-5 border-t border-[#EFEAE2]">
        <div className="w-11 h-11 rounded-full bg-[#F2EDE3] relative overflow-hidden flex-shrink-0 border border-[#E7E0D4] flex items-center justify-center text-[#B08A52] font-semibold text-base">
          {avatarSrc ? (
            <Image src={avatarSrc} alt={author} fill className="object-cover" />
          ) : (
            author.charAt(0)
          )}
        </div>
        <div>
          <h4 className="font-sans font-bold text-[15px] text-[#171714]">{author}</h4>
          <p className="font-sans text-[13px] text-[#68645D]">
            {role} • <span className="text-[#B08A52]">{location}</span>
          </p>
        </div>
      </div>
    </Card>
  );
}
