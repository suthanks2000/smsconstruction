"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, Images, ArrowUpRight } from "lucide-react";
import { CatalogImage } from "@/data/interiorDesign";

interface CatalogGalleryDrawerProps {
  categoryTitle: string;
  images: CatalogImage[];
}

const emptySubscribe = () => () => { };

export default function CatalogGalleryDrawer({
  categoryTitle,
  images,
}: CatalogGalleryDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  // Prevent background scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!images || images.length === 0) return null;

  const modalContent = isOpen ? (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${categoryTitle} Expanded Design Catalog`}
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-6 lg:p-10 bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
      onClick={() => setIsOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl h-[94dvh] sm:h-auto sm:max-h-[90vh] flex flex-col rounded-t-[24px] sm:rounded-[28px] bg-[#FAF8F3] border border-[#E7E0D4] shadow-2xl overflow-hidden"
      >
        {/* Header - Sticky on Mobile & Desktop */}
        <div className="flex items-center justify-between px-4 py-3 sm:px-8 sm:py-5 border-b border-[#E7E0D4] bg-white sticky top-0 z-20 shrink-0">
          <div className="min-w-0 pr-3">
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-widest uppercase text-[#B08A52] block">
              DESIGN CATALOG ARCHIVE
            </span>
            <h3 className="text-[16px] sm:text-[24px] font-semibold text-[#171614] leading-tight truncate">
              {categoryTitle} — Visual Catalog
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#FAF8F3] hover:bg-[#171614] hover:text-white text-[#171614] transition-colors duration-200 border border-[#E7E0D4] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A52] shrink-0"
            aria-label="Close catalog gallery"
          >
            <X size={17} />
          </button>
        </div>

        {/* Scrollable Grid of Extra Images */}
        <div className="overflow-y-auto p-3.5 sm:p-8 space-y-3.5 sm:space-y-6 flex-1 overscroll-contain">
          <div className="flex items-center justify-between text-[12px] sm:text-[14px] text-[#68645D] font-sans">
            <p>Curated Design Collection</p>
            <span className="px-2.5 py-0.5 rounded-full bg-white border border-[#E7E0D4] text-[#171614] font-medium text-[11px] sm:text-[12px] shrink-0">
              {images.length} Designs
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5 lg:gap-6">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-[4/3] rounded-[14px] sm:rounded-[18px] overflow-hidden bg-[#171614] border border-[#E7E0D4] group shadow-sm hover:shadow-md transition-shadow"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Frame Number Badge */}
                <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-sm text-white/90 font-mono text-[9px] sm:text-[11px] leading-none pointer-events-none">
                  #{String(idx + 1).padStart(2, "0")}
                </div>
                {/* Bottom Caption Overlay with 2-line clamp */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 via-40% to-transparent pointer-events-none p-2 sm:p-3.5 flex items-end">
                  <p className="text-white text-[11px] sm:text-[13px] font-sans font-medium leading-tight line-clamp-2 drop-shadow-sm">
                    {img.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer - Sticky */}
        <div className="px-4 py-3 sm:px-8 sm:py-4 border-t border-[#E7E0D4] bg-white sticky bottom-0 z-20 shrink-0 flex items-center justify-between gap-3 text-[12px] sm:text-[13px] text-[#77736C] font-sans">
          <span className="hidden sm:inline">SMS Construction • Interior Studio Catalog</span>
          <span className="sm:hidden text-[11px] text-[#908B82]">{images.length} Curated Photos</span>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="px-4 py-1.5 rounded-full bg-[#171614] hover:bg-[#B08A52] text-white font-medium text-[12px] sm:text-[13px] transition-colors"
          >
            Done Viewing
          </button>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-full border border-[#E7E0D4] bg-white hover:bg-[#171614] hover:text-white text-[#171614] font-sans text-[13px] font-medium transition-all duration-300 shadow-sm hover:shadow group cursor-pointer"
        aria-label={`Explore ${images.length} more ${categoryTitle} catalog photos`}
      >
        <Images size={15} className="text-[#B08A52] group-hover:text-white transition-colors" />
        <span>Explore More ({images.length} Additional Designs)</span>
        <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>

      {/* Lightbox / Drawer Modal rendered via Portal */}
      {isClient && modalContent ? createPortal(modalContent, document.body) : null}
    </>
  );
}
