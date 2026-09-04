"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function NagarajanResidenceClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [selectedImage]);

  // Fetch the specific project data
  const project = projects.find((p) => p.slug === "nagarajan-residence-nagercoil-theroor");

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      // Hero Intro Animation
      gsap.fromTo(
        ".hero-reveal",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: "power3.out", delay: 0.2 }
      );

      // Section Scroll Reveals
      const revealSections = gsap.utils.toArray<HTMLElement>(".scroll-reveal");
      revealSections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (!project) return null;

  return (
    <main ref={containerRef} className="bg-[#F7F3ED] text-[#171614] selection:bg-[#B08A52] selection:text-white">

      {/* FIXED BACK BUTTON */}
      <Link
        href="/projects"
        className="fixed bottom-6 left-6 md:bottom-12 md:left-12 z-50 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#171614] text-white shadow-2xl hover:bg-[#B08A52] hover:scale-110 transition-all duration-300 group"
        aria-label="Back to Projects"
      >
        <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </Link>

      {/* 2. HERO & INTRODUCTION */}
      <section className="pt-24 md:pt-28 pb-6 md:pb-12 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 lg:gap-12 items-start">

          {/* Left Side: Hero */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <p className="hero-reveal font-sans text-[11px] tracking-[0.28em] uppercase font-semibold text-[#B08A52] mb-4 md:mb-6">
              RESIDENTIAL INTERIOR DESIGN
            </p>
            <h1 className="hero-reveal font-serif font-bold text-[#171614] leading-[1.05] tracking-[-0.02em] mb-4 md:mb-6" style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}>
              Nagarajan<br />Residence
            </h1>
            <p className="hero-reveal font-sans text-[14px] tracking-[0.1em] text-[#77736C] uppercase mb-2 md:mb-12">
              Nagercoil (Theroor)
            </p>


          </div>

          {/* Right Side: Introduction & Details */}
          <div className="lg:col-span-7 flex flex-col gap-6 md:gap-10 lg:pl-10 scroll-reveal lg:mt-2">
            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[1.7] text-[#171614]/90">
              {project.overview} {project.requirements}
            </p>

            <div className="border-t border-[#E7E0D4] pt-6 md:pt-8">
              <h3 className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-[#171614] mb-3 md:mb-4">Services</h3>
              <ul className="font-sans text-[13px] md:text-[14px] text-[#77736C] flex flex-wrap items-center gap-x-4 md:gap-x-6 gap-y-2">
                <li>Bespoke Joinery</li>
                <li className="hidden md:inline-block w-1 h-1 rounded-full bg-[#B08A52]/50"></li>
                <li>Material Finishes</li>
                <li className="hidden md:inline-block w-1 h-1 rounded-full bg-[#B08A52]/50"></li>
                <li>Spatial Planning</li>
                <li className="hidden md:inline-block w-1 h-1 rounded-full bg-[#B08A52]/50"></li>
                <li>Lighting Design</li>
              </ul>
            </div>
          </div>

        </div>
      </section>



      {/* 10. PROJECT GALLERY - CURATED SPACES MASONRY */}
      <section className="scroll-reveal px-6 md:px-12 lg:px-20 pt-4 md:pt-8 pb-32 max-w-[1440px] mx-auto w-full">
        <div className="mb-12 max-w-2xl hidden">
          <h2 className="font-serif text-[32px] md:text-[40px] font-bold text-[#171614] leading-[1.1] tracking-[-0.02em] mb-4">Curated Spaces</h2>
          <p className="font-sans text-[14px] leading-[1.6] text-[#77736C]">
            A premium photo experience capturing the fine details, textures, and bespoke craftsmanship of the Nagarajan Residence.
          </p>
        </div>

        {/* EDITORIAL GRID GALLERY */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">

          {/* Row 1: 50/50 Split */}
          <div onClick={() => setSelectedImage("/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-living-room-wide.webp")} className="md:col-span-7 relative w-full h-[50vh] md:h-[75vh] overflow-hidden rounded-2xl group cursor-pointer">
            <Image src="/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-living-room-wide.webp" alt="Wide angle view of living space" width={1200} height={900} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 60vw" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 pointer-events-none z-10">
              <span className="text-white font-sans text-[11px] tracking-[0.2em] uppercase font-semibold">Living Area</span>
            </div>
          </div>
          <div onClick={() => setSelectedImage("/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-kitchen.webp")} className="md:col-span-5 relative w-full h-[50vh] md:h-[75vh] overflow-hidden rounded-2xl group cursor-pointer">
            <Image src="/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-kitchen.webp" alt="Kitchen interior" width={800} height={1000} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 40vw" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 pointer-events-none z-10">
              <span className="text-white font-sans text-[11px] tracking-[0.2em] uppercase font-semibold">Kitchen</span>
            </div>
          </div>

          {/* Row 2: Asymmetrical 3-Column */}
          <div onClick={() => setSelectedImage("/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-tv-unit-detail.webp")} className="md:col-span-3 relative w-full h-[40vh] md:h-[55vh] overflow-hidden rounded-2xl group cursor-pointer">
            <Image src="/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-tv-unit-detail.webp" alt="Close-up detail of the custom fluted TV unit" width={800} height={1200} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 25vw" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 pointer-events-none z-10">
              <span className="text-white font-sans text-[11px] tracking-[0.2em] uppercase font-semibold">Custom Details</span>
            </div>
          </div>
          <div onClick={() => setSelectedImage("/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-entrance.webp")} className="md:col-span-3 relative w-full h-[40vh] md:h-[55vh] overflow-hidden rounded-2xl group cursor-pointer">
            <Image src="/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-entrance.webp" alt="Entrance foyer at Nagarajan Residence" width={800} height={1000} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 25vw" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 pointer-events-none z-10">
              <span className="text-white font-sans text-[11px] tracking-[0.2em] uppercase font-semibold">Entrance Foyer</span>
            </div>
          </div>
          <div onClick={() => setSelectedImage("/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-interior-storage.webp")} className="md:col-span-6 relative w-full h-[40vh] md:h-[55vh] overflow-hidden rounded-2xl group cursor-pointer">
            <Image src="/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-interior-storage.webp" alt="Custom built-in interior storage" width={1000} height={800} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 50vw" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 pointer-events-none z-10">
              <span className="text-white font-sans text-[11px] tracking-[0.2em] uppercase font-semibold">Bespoke Storage</span>
            </div>
          </div>

          {/* Row 3: Asymmetrical 3-Column */}
          <div onClick={() => setSelectedImage("/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-tv-unit.webp")} className="md:col-span-5 relative w-full h-[40vh] md:h-[60vh] overflow-hidden rounded-2xl group cursor-pointer">
            <Image src="/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-tv-unit.webp" alt="TV unit and feature wall" width={1000} height={900} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 40vw" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 pointer-events-none z-10">
              <span className="text-white font-sans text-[11px] tracking-[0.2em] uppercase font-semibold">Feature Wall</span>
            </div>
          </div>
          <div onClick={() => setSelectedImage("/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-decorative-partition.webp")} className="md:col-span-3 relative w-full h-[40vh] md:h-[60vh] overflow-hidden rounded-2xl group cursor-pointer">
            <Image src="/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-decorative-partition.webp" alt="Decorative interior partition" width={800} height={1000} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 25vw" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 pointer-events-none z-10">
              <span className="text-white font-sans text-[11px] tracking-[0.2em] uppercase font-semibold">Transitional Space</span>
            </div>
          </div>
          <div onClick={() => setSelectedImage("/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-living-room.webp")} className="md:col-span-4 relative w-full h-[40vh] md:h-[60vh] overflow-hidden rounded-2xl group cursor-pointer">
            <Image src="/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-living-room.webp" alt="Living room interior" width={800} height={1000} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 pointer-events-none z-10">
              <span className="text-white font-sans text-[11px] tracking-[0.2em] uppercase font-semibold">Living Room</span>
            </div>
          </div>

          {/* Row 4: 50/50 Split */}
          <div onClick={() => setSelectedImage("/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-bedroom-interior.webp")} className="md:col-span-6 relative w-full h-[50vh] md:h-[70vh] overflow-hidden rounded-2xl group cursor-pointer">
            <Image src="/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-bedroom-interior.webp" alt="Bedroom interior" width={1000} height={800} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 50vw" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 pointer-events-none z-10">
              <span className="text-white font-sans text-[11px] tracking-[0.2em] uppercase font-semibold">Master Bedroom</span>
            </div>
          </div>
          <div onClick={() => setSelectedImage("/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-bedroom-wardrobe.webp")} className="md:col-span-6 relative w-full h-[50vh] md:h-[70vh] overflow-hidden rounded-2xl group cursor-pointer">
            <Image src="/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-bedroom-wardrobe.webp" alt="Bedroom interior with wardrobe" width={1000} height={800} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 50vw" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 pointer-events-none z-10">
              <span className="text-white font-sans text-[11px] tracking-[0.2em] uppercase font-semibold">Wardrobe</span>
            </div>
          </div>

        </div>


      </section>

      {/* ══════════════════════════════════════════════════════
    11. RELATED SERVICES — COMPACT EDITORIAL
══════════════════════════════════════════════════════ */}
      <section className="scroll-reveal px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="max-w-[1440px] mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8 md:mb-10">
            <div>
              <p className="font-sans text-[9px] tracking-[0.24em] uppercase font-semibold text-[#B08A52] mb-3">
                Explore More
              </p>
              <h2 className="font-serif text-[#171614] text-[32px] md:text-[42px] leading-[0.95] tracking-[-0.035em]">
                Related Services
              </h2>
            </div>
            <p className="font-sans text-[12px] leading-[1.6] text-[#77736C] max-w-sm">
              Explore the services behind spaces like this one.
            </p>
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {[
              {
                title: "Interior Design",
                description: "Thoughtful spaces shaped around how you live.",
                href: "/interior-design",
                number: "01",
              },
              {
                title: "Construction",
                description: "Reliable execution with attention to every detail.",
                href: "/construction",
                number: "02",
              },
              {
                title: "Design & Planning",
                description: "From ideas and layouts to a clear project direction.",
                href: "/design-planning",
                number: "03",
              },
            ].map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative overflow-hidden min-h-[170px] md:min-h-[190px] p-5 md:p-6 rounded-[18px] bg-white border border-[#E7E0D4] hover:border-[#B08A52]/50 transition-all duration-500"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-serif italic text-[18px] text-[#B08A52]">
                    {service.number}
                  </span>
                  <span className="w-9 h-9 rounded-full border border-[#E7E0D4] flex items-center justify-center text-[#171614] group-hover:bg-[#B08A52] group-hover:border-[#B08A52] group-hover:text-white transition-all duration-300">
                    ↗
                  </span>
                </div>
                <div className="absolute left-5 right-5 bottom-5 md:left-6 md:right-6 md:bottom-6">
                  <h3 className="font-serif text-[24px] md:text-[28px] leading-none text-[#171614] group-hover:text-[#B08A52] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[11px] md:text-[12px] leading-[1.5] text-[#77736C] max-w-xs">
                    {service.description}
                  </p>
                </div>
                {/* subtle bottom accent */}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#B08A52] group-hover:w-full transition-all duration-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
    12. PROJECT NAVIGATION — MINIMAL EDITORIAL
══════════════════════════════════════════════════════ */}
      <section className="scroll-reveal px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-[1440px] mx-auto border-t border-[#E7E0D4] pt-12 md:pt-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">

            {/* Previous */}
            <Link
              href="/projects"
              className="group flex flex-col items-center md:items-start text-center md:text-left transition-opacity hover:opacity-70"
            >
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#77736C] mb-3 flex items-center gap-3">
                <span className="text-[#B08A52] transition-transform duration-300 group-hover:-translate-x-1">←</span>
                All Projects
              </span>
              <h3 className="font-serif text-[24px] md:text-[32px] text-[#171614] leading-none">
                Back to Collection
              </h3>
            </Link>

            {/* Next */}
            <Link
              href="/projects/serene-villa-suchindram-nagercoil"
              className="group flex flex-col items-center md:items-end text-center md:text-right transition-opacity hover:opacity-70"
            >
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#77736C] mb-3 flex items-center gap-3">
                Next Project
                <span className="text-[#B08A52] transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
              <h3 className="font-serif text-[24px] md:text-[32px] text-[#171614] leading-none">
                Serene Villa
              </h3>
            </Link>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
    13. FINAL CTA — LEAD FOCUSED
══════════════════════════════════════════════════════ */}
      <section className="scroll-reveal px-6 md:px-10 lg:px-16 pb-16 md:pb-20" aria-labelledby="cta-heading">
        <div className="max-w-[1440px] mx-auto overflow-hidden rounded-[24px] bg-[#171614] text-white relative">
          {/* decorative accent */}
          <div className="absolute top-0 right-0 w-[280px] h-[280px] rounded-full bg-[#B08A52]/10 blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="relative px-6 md:px-10 lg:px-14 py-10 md:py-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-3xl">
              <p className="font-sans text-[9px] tracking-[0.25em] uppercase font-semibold text-[#B08A52] mb-4">
                Have a space in mind?
              </p>
              <h2 id="cta-heading" className="font-serif font-bold text-white leading-[0.92] tracking-[-0.04em] text-[38px] sm:text-[48px] md:text-[60px]">
                Let&apos;s create
                <br />
                something beautiful.
              </h2>
              <p className="mt-4 max-w-md text-[12px] md:text-[13px] leading-[1.65] text-white/55">
                Tell us what you&apos;re planning and let&apos;s explore
                what&apos;s possible for your space.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-between gap-8 min-w-[220px] bg-[#B08A52] text-[#171614] px-6 py-4 rounded-full text-[10px] uppercase tracking-[0.18em] font-semibold hover:bg-white transition-all duration-300 shrink-0"
            >
              <span>Start Your Project</span>
              <span className="text-[16px] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* SIMPLIFIED FULLSCREEN IMAGE VIEWER */}
      {selectedImage && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-[#171614]/98 backdrop-blur-xl" onClick={() => setSelectedImage(null)}>
          
          {/* Close button */}
          <button 
            className="absolute top-6 right-6 md:top-8 md:right-8 flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full bg-white/10 hover:bg-[#B08A52] text-white backdrop-blur-md transition-all duration-300 z-50 group shadow-lg" 
            onClick={() => setSelectedImage(null)}
            aria-label="Close Lightbox"
          >
            <span className="font-sans text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-bold">Close</span>
            <svg className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          {/* Image Container */}
          <div className="relative w-full max-w-6xl h-full max-h-[90vh] px-4 md:px-20 py-10 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <Image 
              src={selectedImage} 
              alt="Fullscreen project view" 
              fill 
              className="object-contain" 
              sizes="100vw" 
              priority 
            />
          </div>
        </div>
      )}
    </main>
  );
}
