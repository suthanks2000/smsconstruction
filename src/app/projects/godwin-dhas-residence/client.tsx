"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GodwinDhasResidenceClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  // Fetch project data
  const project = projects.find(
    (p) => p.slug === "godwin-dhas-residence"
  );

  useLayoutEffect(() => {
    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      // Hero Intro Animation
      gsap.fromTo(
        ".hero-reveal",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.2,
        }
      );

      // Section Scroll Reveals
      const revealSections =
        gsap.utils.toArray<HTMLElement>(".scroll-reveal");
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
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (!project) return null;

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-[#FDFBF7] text-[#171614] overflow-x-hidden selection:bg-[#B08A52] selection:text-white pt-24 md:pt-32"
    >
      {/* 1. EDITORIAL HEADER & METADATA BAR */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto w-full mb-12 md:mb-16">
        {/* Navigation Breadcrumb */}
        <div className="hero-reveal flex items-center justify-between pb-8 border-b border-[#E7E0D4] text-[11px] font-sans tracking-[0.2em] uppercase text-[#77736C]">
          <Link
            href="/projects"
            className="group flex items-center gap-2 hover:text-[#B08A52] transition-colors"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            <span>Back to Projects</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-[#B08A52] font-semibold">Project 05</span>
            <span className="hidden sm:inline text-[#E7E0D4]">/</span>
            <span className="hidden sm:inline">Turnkey Interiors</span>
          </div>
        </div>

        {/* Title & Headline */}
        <div className="pt-10 md:pt-14 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <span className="hero-reveal inline-block text-[11px] uppercase tracking-[0.3em] font-medium text-[#B08A52] mb-3">
              {project.location}
            </span>
            <h1 className="hero-reveal font-serif text-[42px] sm:text-[60px] md:text-[76px] lg:text-[88px] leading-[0.95] tracking-[-0.03em] font-normal text-[#171614]">
              {project.title}
            </h1>
          </div>
          <p className="hero-reveal max-w-md text-[14px] md:text-[15px] leading-[1.7] text-[#77736C]">
            {project.description}
          </p>
        </div>

        {/* Project Meta Strip */}
        <div className="hero-reveal grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-[#E7E0D4]">
          <div>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-[#77736C] mb-1">
              Category
            </span>
            <span className="font-serif text-[18px] md:text-[20px] text-[#171614]">
              {project.category}
            </span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-[#77736C] mb-1">
              Area
            </span>
            <span className="font-serif text-[18px] md:text-[20px] text-[#171614]">
              {project.area}
            </span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-[#77736C] mb-1">
              Duration
            </span>
            <span className="font-serif text-[18px] md:text-[20px] text-[#171614]">
              {project.duration}
            </span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-[#77736C] mb-1">
              Completed
            </span>
            <span className="font-serif text-[18px] md:text-[20px] text-[#171614]">
              {project.completionDate}
            </span>
          </div>
        </div>
      </section>

      {/* 2. HERO IMAGE BANNER */}
      <section className="scroll-reveal px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto w-full mb-20 md:mb-28">
        <div
          onClick={() => setSelectedImage(project.image)}
          className="relative w-full h-[60vh] sm:h-[75vh] md:h-[85vh] rounded-3xl overflow-hidden cursor-pointer group shadow-2xl"
        >
          <Image
            src={project.image}
            alt={project.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover transition-transform duration-[1.8s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white z-10 pointer-events-none">
            <span className="text-[10px] md:text-[11px] font-sans tracking-[0.25em] uppercase text-white/80 block mb-1">
              Presidential Suite
            </span>
            <span className="font-serif text-[24px] md:text-[32px] text-white">
              Floating Velvet Bed Platform &amp; Monolithic Canopy Lighting
            </span>
          </div>
          <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md text-white/90 text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Click to expand
          </div>
        </div>
      </section>

      {/* 3. PROJECT GALLERY - CURATED SPACES MASONRY */}
      <section className="scroll-reveal px-6 md:px-12 lg:px-20 pt-4 md:pt-8 pb-32 max-w-[1440px] mx-auto w-full">
        {/* EDITORIAL GRID GALLERY */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Row 1: 7 / 5 Split */}
          <div
            onClick={() =>
              setSelectedImage(
                "/images/projects/godwin-dhas-residence/master-suite-floating-bed-hero.webp"
              )
            }
            className="md:col-span-7 relative w-full h-[50vh] md:h-[75vh] overflow-hidden rounded-2xl group cursor-pointer"
          >
            <Image
              src="/images/projects/godwin-dhas-residence/master-suite-floating-bed-hero.webp"
              alt="Presidential master bedroom suite with floating illuminated platform bed"
              width={1024}
              height={576}
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 60vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-2xl" />
            <div className="absolute bottom-6 left-6 pointer-events-none z-10">
              <span className="text-white font-sans text-[11px] tracking-[0.2em] uppercase font-semibold">
                Presidential Suite &amp; Neon Canopy Portal
              </span>
            </div>
          </div>

          <div
            onClick={() =>
              setSelectedImage(
                "/images/projects/godwin-dhas-residence/high-gloss-acrylic-modular-kitchen.webp"
              )
            }
            className="md:col-span-5 relative w-full h-[50vh] md:h-[75vh] overflow-hidden rounded-2xl group cursor-pointer"
          >
            <Image
              src="/images/projects/godwin-dhas-residence/high-gloss-acrylic-modular-kitchen.webp"
              alt="High-gloss white acrylic modular kitchen with rose gold handles and breakfast bar"
              width={1024}
              height={576}
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 40vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-2xl" />
            <div className="absolute bottom-6 left-6 pointer-events-none z-10">
              <span className="text-white font-sans text-[11px] tracking-[0.2em] uppercase font-semibold">
                High-Gloss Acrylic Kitchen Suite
              </span>
            </div>
          </div>

          {/* Row 2: 6 / 6 Dual Grid */}
          <div
            onClick={() =>
              setSelectedImage(
                "/images/projects/godwin-dhas-residence/architectural-jali-wood-partition.webp"
              )
            }
            className="md:col-span-6 relative w-full h-[45vh] md:h-[60vh] overflow-hidden rounded-2xl group cursor-pointer"
          >
            <Image
              src="/images/projects/godwin-dhas-residence/architectural-jali-wood-partition.webp"
              alt="Bespoke red cedar vertical wood slats with white CNC geometric jali cutwork"
              width={1280}
              height={576}
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-2xl" />
            <div className="absolute bottom-6 left-6 pointer-events-none z-10">
              <span className="text-white font-sans text-[11px] tracking-[0.2em] uppercase font-semibold">
                Red Cedar &amp; CNC Jali Architectural Partition
              </span>
            </div>
          </div>

          <div
            onClick={() =>
              setSelectedImage(
                "/images/projects/godwin-dhas-residence/breakfast-counter-pendant-lights.webp"
              )
            }
            className="md:col-span-6 relative w-full h-[45vh] md:h-[60vh] overflow-hidden rounded-2xl group cursor-pointer"
          >
            <Image
              src="/images/projects/godwin-dhas-residence/breakfast-counter-pendant-lights.webp"
              alt="Dining pass-through breakfast bar with globe pendant lighting and fluted framing"
              width={576}
              height={1024}
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-2xl" />
            <div className="absolute bottom-6 left-6 pointer-events-none z-10">
              <span className="text-white font-sans text-[11px] tracking-[0.2em] uppercase font-semibold">
                Illuminated Dining Bar &amp; Pendant Cluster
              </span>
            </div>
          </div>

          {/* Row 3: 4 / 4 / 4 Triple Grid */}
          <div
            onClick={() =>
              setSelectedImage(
                "/images/projects/godwin-dhas-residence/dining-vanity-backlit-mirror.webp"
              )
            }
            className="md:col-span-4 relative w-full h-[40vh] md:h-[55vh] overflow-hidden rounded-2xl group cursor-pointer"
          >
            <Image
              src="/images/projects/godwin-dhas-residence/dining-vanity-backlit-mirror.webp"
              alt="Floating teak vanity with matte black ceramic basin and touch-sensor backlit mirror"
              width={576}
              height={1024}
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 33vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-2xl" />
            <div className="absolute bottom-6 left-6 pointer-events-none z-10">
              <span className="text-white font-sans text-[11px] tracking-[0.2em] uppercase font-semibold">
                Floating Vanity &amp; Backlit Touch Mirror
              </span>
            </div>
          </div>

          <div
            onClick={() =>
              setSelectedImage(
                "/images/projects/godwin-dhas-residence/living-tv-unit-fluted-marble.webp"
              )
            }
            className="md:col-span-4 relative w-full h-[40vh] md:h-[55vh] overflow-hidden rounded-2xl group cursor-pointer"
          >
            <Image
              src="/images/projects/godwin-dhas-residence/living-tv-unit-fluted-marble.webp"
              alt="Living room media console with Statuario marble TV panel and dark fluted slats"
              width={576}
              height={1024}
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 33vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-2xl" />
            <div className="absolute bottom-6 left-6 pointer-events-none z-10">
              <span className="text-white font-sans text-[11px] tracking-[0.2em] uppercase font-semibold">
                Statuario Marble &amp; Fluted Louver TV Wall
              </span>
            </div>
          </div>

          <div
            onClick={() =>
              setSelectedImage(
                "/images/projects/godwin-dhas-residence/bedroom-curved-platform-bed.webp"
              )
            }
            className="md:col-span-4 relative w-full h-[40vh] md:h-[55vh] overflow-hidden rounded-2xl group cursor-pointer"
          >
            <Image
              src="/images/projects/godwin-dhas-residence/bedroom-curved-platform-bed.webp"
              alt="Curved contemporary platform bed with floating side drawers and tufted headboard"
              width={1280}
              height={576}
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 33vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-2xl" />
            <div className="absolute bottom-6 left-6 pointer-events-none z-10">
              <span className="text-white font-sans text-[11px] tracking-[0.2em] uppercase font-semibold">
                Curved Platform Bed &amp; Diamond Tufting
              </span>
            </div>
          </div>

          {/* Row 4: 6 / 6 Dual Grid */}
          <div
            onClick={() =>
              setSelectedImage(
                "/images/projects/godwin-dhas-residence/master-suite-canopy-lighting.webp"
              )
            }
            className="md:col-span-6 relative w-full h-[45vh] md:h-[60vh] overflow-hidden rounded-2xl group cursor-pointer"
          >
            <Image
              src="/images/projects/godwin-dhas-residence/master-suite-canopy-lighting.webp"
              alt="Close-up of canopy overhead neon lighting channels and metallic wall texture"
              width={1024}
              height={576}
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-2xl" />
            <div className="absolute bottom-6 left-6 pointer-events-none z-10">
              <span className="text-white font-sans text-[11px] tracking-[0.2em] uppercase font-semibold">
                Canopy Architectural Illumination Detail
              </span>
            </div>
          </div>

          <div
            onClick={() =>
              setSelectedImage(
                "/images/projects/godwin-dhas-residence/master-suite-wide-perspective.webp"
              )
            }
            className="md:col-span-6 relative w-full h-[45vh] md:h-[60vh] overflow-hidden rounded-2xl group cursor-pointer"
          >
            <Image
              src="/images/projects/godwin-dhas-residence/master-suite-wide-perspective.webp"
              alt="Expansive wide angle view of the master suite with floating console and dressing portal"
              width={576}
              height={1024}
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-2xl" />
            <div className="absolute bottom-6 left-6 pointer-events-none z-10">
              <span className="text-white font-sans text-[11px] tracking-[0.2em] uppercase font-semibold">
                Master Suite Living Volume &amp; Dressing Suite
              </span>
            </div>
          </div>

          {/* Row 5: 4 / 4 / 4 Triple Grid */}
          <div
            onClick={() =>
              setSelectedImage(
                "/images/projects/godwin-dhas-residence/staircase-under-step-storage.webp"
              )
            }
            className="md:col-span-4 relative w-full h-[40vh] md:h-[55vh] overflow-hidden rounded-2xl group cursor-pointer"
          >
            <Image
              src="/images/projects/godwin-dhas-residence/staircase-under-step-storage.webp"
              alt="Custom under-stair stepped storage cabinetry and washbasin counter"
              width={1280}
              height={576}
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 33vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-2xl" />
            <div className="absolute bottom-6 left-6 pointer-events-none z-10">
              <span className="text-white font-sans text-[11px] tracking-[0.2em] uppercase font-semibold">
                Under-Stair Storage &amp; Stainless Balustrade
              </span>
            </div>
          </div>

          <div
            onClick={() =>
              setSelectedImage(
                "/images/projects/godwin-dhas-residence/lounge-curved-cove-ceiling.webp"
              )
            }
            className="md:col-span-4 relative w-full h-[40vh] md:h-[55vh] overflow-hidden rounded-2xl group cursor-pointer"
          >
            <Image
              src="/images/projects/godwin-dhas-residence/lounge-curved-cove-ceiling.webp"
              alt="Living lounge with curved cove false ceiling, recessed light slats and gold wall sconces"
              width={1280}
              height={960}
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 33vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-2xl" />
            <div className="absolute bottom-6 left-6 pointer-events-none z-10">
              <span className="text-white font-sans text-[11px] tracking-[0.2em] uppercase font-semibold">
                Curved Ceiling Cove &amp; Parallel Rafters
              </span>
            </div>
          </div>

          <div
            onClick={() =>
              setSelectedImage(
                "/images/projects/godwin-dhas-residence/teak-kitchen-wicker-baskets.webp"
              )
            }
            className="md:col-span-4 relative w-full h-[40vh] md:h-[55vh] overflow-hidden rounded-2xl group cursor-pointer"
          >
            <Image
              src="/images/projects/godwin-dhas-residence/teak-kitchen-wicker-baskets.webp"
              alt="Teak modular kitchen with wicker vegetable pull-out baskets and overhead cabinets"
              width={960}
              height={1280}
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 33vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-2xl" />
            <div className="absolute bottom-6 left-6 pointer-events-none z-10">
              <span className="text-white font-sans text-[11px] tracking-[0.2em] uppercase font-semibold">
                Teak Kitchen Joinery &amp; Wicker Baskets
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. IN-DEPTH CASE STUDY SECTION */}
      <section className="scroll-reveal bg-[#171614] text-white py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          {/* Section Header */}
          <div className="max-w-2xl mb-16 md:mb-24">
            <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#B08A52] block mb-3">
              The Architectural Journey
            </span>
            <h2 className="font-serif text-[38px] sm:text-[48px] md:text-[56px] leading-[1.05] tracking-[-0.02em]">
              Hospitality-Grade Luxury Meets Precision Joinery.
            </h2>
          </div>

          {/* Narrative Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 border-t border-white/10 pt-16">
            <div>
              <h3 className="font-serif text-[24px] md:text-[28px] text-[#B08A52] mb-4">
                The Brief &amp; Spatial Vision
              </h3>
              <p className="text-white/70 leading-[1.8] text-[15px] mb-6">
                {project.requirements}
              </p>
              <p className="text-white/70 leading-[1.8] text-[15px]">
                {project.concept}
              </p>
            </div>

            <div>
              <h3 className="font-serif text-[24px] md:text-[28px] text-[#B08A52] mb-4">
                Engineering &amp; Execution
              </h3>
              <p className="text-white/70 leading-[1.8] text-[15px] mb-6">
                {project.process}
              </p>
              <p className="text-white/70 leading-[1.8] text-[15px]">
                {project.solutions}
              </p>
            </div>
          </div>

          {/* Materials & Palette */}
          <div className="mt-20 pt-16 border-t border-white/10">
            <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#B08A52] block mb-6">
              Specified Materials &amp; Finishes
            </span>
            <div className="flex flex-wrap gap-3">
              {project.materials.map((mat) => (
                <span
                  key={mat}
                  className="px-4 py-2 rounded-full border border-white/15 bg-white/5 text-[12px] md:text-[13px] tracking-wide text-white/80"
                >
                  {mat}
                </span>
              ))}
            </div>
          </div>

          {/* Client Testimonial */}
          <div className="mt-20 pt-16 border-t border-white/10">
            <div className="max-w-3xl">
              <div className="flex gap-1 text-[#B08A52] mb-6 text-[18px]">
                {"★".repeat(5)}
              </div>
              <blockquote className="font-serif text-[24px] sm:text-[30px] md:text-[36px] leading-[1.25] text-white/90 italic mb-8">
                &ldquo;{project.clientReview.text}&rdquo;
              </blockquote>
              <div>
                <span className="block font-sans text-[13px] uppercase tracking-[0.2em] font-semibold text-white">
                  {project.clientReview.author}
                </span>
                <span className="block text-[12px] text-[#B08A52] tracking-wide">
                  {project.clientReview.role} &bull; Nagercoil
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. RELATED SERVICES WE OFFER */}
      <section className="scroll-reveal px-6 md:px-12 lg:px-20 py-24 max-w-[1440px] mx-auto w-full">
        <div className="border-t border-[#E7E0D4] pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#B08A52] block mb-2">
                Expertise Deployed
              </span>
              <h2 className="font-serif text-[32px] md:text-[42px] leading-tight text-[#171614]">
                Services In This Project
              </h2>
            </div>
            <Link
              href="/services"
              className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#B08A52] hover:underline"
            >
              Explore All Services →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                number: "01",
                title: "Turnkey Interiors",
                description:
                  "End-to-end master bedroom architectural canopies, modular kitchens, and ambient false ceilings.",
                href: "/services#turnkey",
              },
              {
                number: "02",
                title: "CNC & Architectural Millwork",
                description:
                  "Precision water-jet cut jali partitions, vertical wood slating, and stepped under-stair storage.",
                href: "/services#carpentry",
              },
              {
                number: "03",
                title: "Architectural Lighting",
                description:
                  "Under-bed neon float glow, flush canopy light slots, amber pendant globes, and touch backlit mirrors.",
                href: "/services#electrical",
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
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#B08A52] group-hover:w-full transition-all duration-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROJECT NAVIGATION — CONTINUOUS LOOP */}
      <section className="scroll-reveal px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-[1440px] mx-auto border-t border-[#E7E0D4] pt-12 md:pt-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
            {/* Previous */}
            <Link
              href="/projects/dr-arun-kumar-residence-nagercoil"
              className="group flex flex-col items-center md:items-start text-center md:text-left transition-opacity hover:opacity-70"
            >
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#77736C] mb-3 flex items-center gap-3">
                <span className="text-[#B08A52] transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>
                Previous Project
              </span>
              <h3 className="font-serif text-[24px] md:text-[32px] text-[#171614] leading-none">
                Dr. Arun Kumar Residence
              </h3>
            </Link>

            {/* Next */}
            <Link
              href="/projects/nagarajan-residence-nagercoil-theroor"
              className="group flex flex-col items-center md:items-end text-center md:text-right transition-opacity hover:opacity-70"
            >
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#77736C] mb-3 flex items-center gap-3">
                Next Project
                <span className="text-[#B08A52] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
              <h3 className="font-serif text-[24px] md:text-[32px] text-[#171614] leading-none">
                Nagarajan Residence
              </h3>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA — LEAD FOCUSED */}
      <section
        className="scroll-reveal px-6 md:px-10 lg:px-16 pb-16 md:pb-20"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-[1440px] mx-auto overflow-hidden rounded-[24px] bg-[#171614] text-white relative">
          <div
            className="absolute top-0 right-0 w-[280px] h-[280px] rounded-full bg-[#B08A52]/10 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative px-6 md:px-10 lg:px-14 py-10 md:py-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-3xl">
              <p className="font-sans text-[9px] tracking-[0.25em] uppercase font-semibold text-[#B08A52] mb-4">
                Have a space in mind?
              </p>
              <h2
                id="cta-heading"
                className="font-serif font-bold text-white leading-[0.92] tracking-[-0.04em] text-[38px] sm:text-[48px] md:text-[60px]"
              >
                Let&apos;s create
                <br />
                something beautiful.
              </h2>
              <p className="mt-4 max-w-md text-[12px] md:text-[13px] leading-[1.65] text-white/55">
                Tell us what you&apos;re planning and let&apos;s explore what&apos;s
                possible for your space.
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

      {/* FULLSCREEN IMAGE VIEWER LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[999999] flex items-center justify-center bg-[#171614]/98 backdrop-blur-xl"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 md:top-8 md:right-8 flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full bg-white/10 hover:bg-[#B08A52] text-white backdrop-blur-md transition-all duration-300 z-50 group shadow-lg"
            onClick={() => setSelectedImage(null)}
            aria-label="Close Lightbox"
          >
            <span className="font-sans text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-bold">
              Close
            </span>
            <svg
              className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:rotate-90"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Image Container */}
          <div
            className="relative w-full max-w-6xl h-full max-h-[90vh] px-4 md:px-20 py-10 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
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
