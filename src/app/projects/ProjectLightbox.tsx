"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";

export interface LightboxImageItem {
  src: string;
  alt: string;
  label: string;
}

interface ProjectLightboxProps {
  images: LightboxImageItem[];
  containerId?: string;
}

export default function ProjectLightbox({
  images,
  containerId = "project-gallery-grid",
}: ProjectLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  // Close lightbox
  const handleClose = useCallback(() => {
    setCurrentIndex(null);
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  }, []);

  // Previous image
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + images.length) % images.length;
    });
  }, [images.length]);

  // Next image
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % images.length;
    });
  }, [images.length]);

  // Listen to clicks on the gallery container via event delegation
  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const onContainerClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const button = target.closest<HTMLButtonElement>("[data-gallery-index]");
      if (button && container.contains(button)) {
        e.preventDefault();
        const indexStr = button.getAttribute("data-gallery-index");
        if (indexStr !== null) {
          const idx = parseInt(indexStr, 10);
          if (!isNaN(idx) && idx >= 0 && idx < images.length) {
            triggerRef.current = button;
            setCurrentIndex(idx);
          }
        }
      }
    };

    container.addEventListener("click", onContainerClick);
    return () => container.removeEventListener("click", onContainerClick);
  }, [containerId, images.length]);

  // Handle body scroll locking and keyboard navigation
  useEffect(() => {
    if (currentIndex === null) return;

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus close button on open
    const timer = setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow || "unset";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [currentIndex, handleClose, handlePrev, handleNext]);

  if (currentIndex === null || !images[currentIndex]) {
    return null;
  }

  const currentImage = images[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox viewer"
      className="fixed inset-0 z-[999999] flex items-center justify-center bg-[#171614]/96 backdrop-blur-xl"
      onClick={handleClose}
    >
      {/* Top Header Controls */}
      <div
        className="absolute top-4 left-4 right-4 md:top-6 md:left-8 md:right-8 flex items-center justify-between z-50 pointer-events-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 pointer-events-auto">
          <span className="font-sans text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-semibold text-white/90">
            {currentImage.label}
          </span>
          <span className="text-white/40 text-[11px]">|</span>
          <span className="font-mono text-[11px] text-[#B08A52] font-semibold">
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        <button
          ref={closeBtnRef}
          type="button"
          onClick={handleClose}
          aria-label="Close fullscreen gallery"
          className="pointer-events-auto flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-white/10 hover:bg-[#B08A52] text-white border border-white/15 backdrop-blur-md transition-all duration-300 group shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <span className="font-sans text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-bold">
            Close
          </span>
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:rotate-90"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Navigation: Previous Button */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          aria-label="Previous image"
          className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 md:w-14 md:h-14 rounded-full bg-black/40 hover:bg-[#B08A52] text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <svg
            className="w-5 h-5 -translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Main Image Container */}
      <div
        className="relative w-full max-w-6xl h-full max-h-[82vh] md:max-h-[86vh] px-4 md:px-20 py-12 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          fill
          className="object-contain"
          sizes="100vw"
        />
      </div>

      {/* Navigation: Next Button */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          aria-label="Next image"
          className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 md:w-14 md:h-14 rounded-full bg-black/40 hover:bg-[#B08A52] text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <svg
            className="w-5 h-5 translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}

      {/* Bottom Hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-[11px] font-sans tracking-[0.15em] uppercase hidden sm:block pointer-events-none">
        Use Arrow Keys ← → to navigate • ESC to close
      </div>
    </div>
  );
}
