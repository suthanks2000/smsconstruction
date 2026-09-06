"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Images, ArrowUpRight } from "lucide-react";
import { CatalogImage } from "@/data/interiorDesign";

interface CatalogGalleryDrawerProps {
  categoryTitle: string;
  images: CatalogImage[];
}

export default function CatalogGalleryDrawer({
  categoryTitle,
  images,
}: CatalogGalleryDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#E7E0D4] bg-white hover:bg-[#171614] hover:text-white text-[#171614] font-sans text-[13px] font-medium transition-all duration-300 shadow-sm hover:shadow group cursor-pointer"
        aria-label={`Explore ${images.length} more ${categoryTitle} catalog photos`}
      >
        <Images size={15} className="text-[#B08A52] group-hover:text-white transition-colors" />
        <span>Explore More ({images.length} Additional Designs)</span>
        <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>

      {/* Lightbox / Drawer Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${categoryTitle} Expanded Design Catalog`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/75 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl max-h-[90vh] flex flex-col rounded-[28px] bg-[#FAF8F3] border border-[#E7E0D4] shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 sm:px-8 border-b border-[#E7E0D4] bg-white">
              <div>
                <span className="text-[11px] font-sans font-semibold tracking-widest uppercase text-[#B08A52]">
                  DESIGN CATALOG ARCHIVE
                </span>
                <h3 className="font-serif text-[22px] sm:text-[26px] font-bold text-[#171614]">
                  {categoryTitle} — Extended Visual Catalog
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF8F3] hover:bg-[#171614] hover:text-white text-[#171614] transition-colors duration-200 border border-[#E7E0D4] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A52]"
                aria-label="Close catalog gallery"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Grid of Extra Images */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
              <p className="text-[14px] text-[#68645D] font-sans">
                Showing {images.length} curated design compositions from our workshop and studio
                catalog.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {images.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-[4/3] rounded-[18px] overflow-hidden bg-[#171614] border border-[#E7E0D4] group shadow-sm"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none p-4 flex items-end">
                      <p className="text-white text-[12px] font-sans leading-tight">
                        {img.alt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 sm:px-8 border-t border-[#E7E0D4] bg-white flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-[#77736C] font-sans">
              <span>SMS Construction • Interior Studio Catalog</span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-[#171614] font-semibold hover:text-[#B08A52] transition-colors"
              >
                Done Viewing
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
