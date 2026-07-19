"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  category: string;
  location: string;
  imageSrc: string;
  href?: string;
  aspectRatio?: string;
  className?: string;
}

export default function ProjectCard({
  title,
  category,
  location,
  imageSrc,
  href = "/projects",
  aspectRatio = "aspect-[4/3]",
  className = "",
}: ProjectCardProps) {
  return (
    <Link href={href} className={`group block ${className}`}>
      <div className={`relative overflow-hidden rounded-[24px] ${aspectRatio} mb-4 bg-[#F2EDE3]`}>
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <span className="text-white text-small font-medium flex items-center gap-1.5">
            <span>View Case Study</span>
            <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-1">
              arrow_forward
            </span>
          </span>
        </div>
      </div>
      <div className="flex justify-between items-start gap-4">
        <div>
          <div className="text-section-label text-[12px] mb-1">{category} • {location}</div>
          <h3 className="font-serif text-[22px] md:text-[24px] font-bold text-[#171714] group-hover:text-[#B08A52] transition-colors duration-300">
            {title}
          </h3>
        </div>
        <div className="w-10 h-10 rounded-full border border-[#E7E0D4] flex items-center justify-center text-[#171714] group-hover:bg-[#B08A52] group-hover:border-[#B08A52] group-hover:text-white transition-all duration-300 flex-shrink-0 mt-1 touch-target">
          <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-0.5">
            arrow_forward
          </span>
        </div>
      </div>
    </Link>
  );
}
