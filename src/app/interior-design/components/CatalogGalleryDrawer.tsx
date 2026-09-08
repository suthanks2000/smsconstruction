"use client";

import { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  X,
  Images,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
} from "lucide-react";
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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  // Prevent background scroll when drawer or lightbox is open
  useEffect(() => {
    if (isOpen || lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, lightboxIndex]);

  // Lightbox Navigation handlers
  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : prev > 0 ? prev - 1 : images.length - 1
    );
  }, [images.length]);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : prev < images.length - 1 ? prev + 1 : 0
    );
  }, [images.length]);

  // Keyboard navigation for Escape, ArrowLeft, ArrowRight
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxIndex !== null) {
          setLightboxIndex(null);
        } else if (isOpen) {
          setIsOpen(false);
        }
      } else if (lightboxIndex !== null) {
        if (e.key === "ArrowLeft") {
          handlePrev();
        } else if (e.key === "ArrowRight") {
          handleNext();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, lightboxIndex, handlePrev, handleNext]);

  if (!images || images.length === 0) return null;

  // Lightbox Modal Content (Full Screen Zoom View)
  const lightboxModal =
    lightboxIndex !== null ? (
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Full screen photo viewer"
        className="fixed inset-0 z-[300] flex flex-col bg-[#0C0C0C]/96 backdrop-blur-2xl transition-all duration-300 animate-in fade-in"
        onClick={() => setLightboxIndex(null)}
      >
        {/* Lightbox Header */}
        <div
          className="flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4 border-b border-white/10 shrink-0 bg-[#0C0C0C]/80 z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#B08A52]/20 border border-[#B08A52]/40 text-[#D8B67D] font-mono text-[11px] sm:text-[12px] font-semibold tracking-wide shrink-0">
              {String(lightboxIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-white/50 block">
                {categoryTitle}
              </span>
              <p className="text-[13px] sm:text-[14px] text-white/90 truncate font-medium">
                {images[lightboxIndex].alt}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 border border-white/10 focus:outline-none shrink-0 cursor-pointer"
            aria-label="Close full view"
          >
            <X size={18} />
          </button>
        </div>

        {/* Lightbox Center Image Stage */}
        <div
          className="flex-1 relative flex items-center justify-center p-3 sm:p-6 lg:p-10 select-none overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Previous Arrow */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/15 backdrop-blur-md transition-all active:scale-95 cursor-pointer shadow-lg"
            aria-label="Previous photo"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Main Full Image View (contain = completely uncropped full view) */}
          <div className="relative w-full h-full max-w-5xl max-h-[78vh] flex items-center justify-center">
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              fill
              sizes="(max-width: 1024px) 100vw, 85vw"
              className="object-contain drop-shadow-2xl transition-all duration-300 animate-in fade-in zoom-in-95"
              priority
            />
          </div>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-2 sm:right-6 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/15 backdrop-blur-md transition-all active:scale-95 cursor-pointer shadow-lg"
            aria-label="Next photo"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Lightbox Footer Bar */}
        <div
          className="px-4 py-3 sm:px-8 sm:py-4 border-t border-white/10 bg-[#0C0C0C]/90 shrink-0 flex items-center justify-between gap-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-[12px] sm:text-[13px] text-white/70 max-w-xl truncate">
            {images[lightboxIndex].alt}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="hidden sm:inline text-[11px] font-mono text-white/40">
              Use ← → arrow keys to browse
            </span>
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="px-4 py-1.5 rounded-full bg-white/15 hover:bg-[#B08A52] text-white text-[12px] font-medium transition-colors cursor-pointer"
            >
              Back to Catalog
            </button>
          </div>
        </div>
      </div>
    ) : null;

  // Drawer Modal Content
  const modalContent = isOpen ? (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${categoryTitle} Expanded Design Catalog`}
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
      onClick={() => setIsOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl h-[96dvh] sm:h-auto sm:max-h-[90vh] flex flex-col rounded-t-[26px] sm:rounded-[28px] bg-[#FAF8F3] border border-[#E7E0D4] shadow-2xl overflow-hidden"
      >
        {/* Mobile Pull Bar Indicator */}
        <div className="sm:hidden pt-2.5 pb-1 bg-white flex justify-center shrink-0 border-b border-[#E7E0D4]/40">
          <div className="w-12 h-1.5 rounded-full bg-[#D7D0C4]" />
        </div>

        {/* Header - Sticky on Mobile & Desktop */}
        <div className="flex items-center justify-between px-4 py-3 sm:px-8 sm:py-5 border-b border-[#E7E0D4] bg-white sticky top-0 z-20 shrink-0">
          <div className="min-w-0 pr-3">
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-widest uppercase text-[#B08A52] flex items-center gap-1.5 mb-0.5">
              <Sparkles size={11} className="text-[#B08A52]" />
              DESIGN ARCHIVE • TAP ANY PHOTO TO ZOOM
            </span>
            <h3 className="text-[17px] sm:text-[24px] font-semibold text-[#171614] leading-tight truncate">
              {categoryTitle} — Design Catalog
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#FAF8F3] hover:bg-[#171614] hover:text-white text-[#171614] transition-colors duration-200 border border-[#E7E0D4] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A52] shrink-0 cursor-pointer"
            aria-label="Close catalog gallery"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Editorial Grid of Extra Images */}
        <div className="overflow-y-auto p-3.5 sm:p-8 space-y-3.5 sm:space-y-6 flex-1 overscroll-contain">
          <div className="flex items-center justify-between text-[12px] sm:text-[13px] text-[#68645D] font-sans px-1">
            <span className="font-medium text-[#171614]">
              Showing {images.length} Curated Concepts
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-white border border-[#E7E0D4] text-[#B08A52] font-semibold text-[11px] sm:text-[12px] shrink-0">
              Interactive Lightbox
            </span>
          </div>

          {/* Unique Editorial Rhythm Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6">
            {images.map((img, idx) => {
              // Create dynamic rhythm: every 5th item is featured full-width span on mobile
              const isFeatured = idx % 5 === 0;

              return (
                <div
                  key={idx}
                  onClick={() => setLightboxIndex(idx)}
                  className={`relative group rounded-[16px] sm:rounded-[20px] overflow-hidden bg-[#171614] border border-[#E7E0D4] shadow-xs hover:shadow-xl hover:border-[#B08A52] transition-all duration-300 cursor-pointer transform-gpu active:scale-[0.98] ${
                    isFeatured
                      ? "col-span-2 aspect-[16/10] sm:aspect-[16/10] lg:col-span-1 lg:aspect-[4/3]"
                      : "col-span-1 aspect-[3/4] sm:aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes={
                      isFeatured
                        ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        : "(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                    }
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Top Badge: Frame Number & Zoom Cue */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none z-10">
                    <span className="px-2 py-0.5 rounded-md bg-black/65 backdrop-blur-md text-white/90 font-mono text-[10px] sm:text-[11px] leading-tight border border-white/10">
                      #{String(idx + 1).padStart(2, "0")}
                    </span>

                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#B08A52]/90 backdrop-blur-md text-white font-sans text-[10px] font-medium shadow-sm transition-opacity opacity-90 group-hover:opacity-100">
                      <Maximize2 size={10} />
                      <span className="hidden sm:inline">Tap to view</span>
                      <span className="sm:hidden">Zoom</span>
                    </span>
                  </div>

                  {/* Gradient Overlay & Bottom Caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 via-45% to-transparent pointer-events-none p-2.5 sm:p-4 flex items-end">
                    <p className="text-white text-[11px] sm:text-[13px] font-sans font-medium leading-snug line-clamp-2 drop-shadow-sm group-hover:text-[#F3E7D3] transition-colors">
                      {img.alt}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer - Sticky */}
        <div className="px-4 py-3 sm:px-8 sm:py-4 border-t border-[#E7E0D4] bg-white sticky bottom-0 z-20 shrink-0 flex items-center justify-between gap-3 text-[12px] sm:text-[13px] text-[#77736C] font-sans">
          <span className="hidden sm:inline">SMS Construction • Interior Studio Catalog</span>
          <span className="text-[12px] text-[#908B82]">Tap any photo for full view</span>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="px-5 py-2 rounded-full bg-[#171614] hover:bg-[#B08A52] text-white font-medium text-[12px] sm:text-[13px] transition-colors cursor-pointer shrink-0"
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
        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto max-w-full px-4 sm:px-5 py-2.5 rounded-full border border-[#E7E0D4] bg-white hover:bg-[#171614] hover:text-white text-[#171614] font-sans text-[12.5px] sm:text-[13px] font-medium transition-all duration-300 shadow-sm hover:shadow group cursor-pointer text-center"
        aria-label={`Explore ${images.length} more ${categoryTitle} catalog photos`}
      >
        <Images size={15} className="text-[#B08A52] group-hover:text-white transition-colors shrink-0" />
        <span className="truncate">Explore More ({images.length} Additional Designs)</span>
        <ArrowUpRight
          size={14}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
        />
      </button>

      {/* Lightbox / Drawer Modal rendered via Portal */}
      {isClient && modalContent ? createPortal(modalContent, document.body) : null}
      {isClient && lightboxModal ? createPortal(lightboxModal, document.body) : null}
    </>
  );
}
