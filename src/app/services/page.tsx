"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Layers,
  Building2,
  Crosshair,
  Sparkles,
} from "lucide-react";
import {
  primaryServices,
  serviceFaqs,
} from "@/data/services";
import { geoLocalities } from "@/data/geo";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import LocalServiceArea from "@/components/LocalServiceArea";
import ModernFaq from "@/components/ModernFaq";
import ConversionCTA from "@/components/ConversionCTA";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─── 5-Panel Hero Background Images ─────────────────────────────────────── */
const heroBackgroundPanels = [
  {
    title: "Interior Design",
    src: "/images/services/services-interior-design-portrait.jpg",
    alt: "Bespoke interior design in Nagercoil by SMS Construction",
  },
  {
    title: "Civil Construction",
    src: "/images/services/services-civil-construction-portrait.jpg",
    alt: "RCC civil building construction in Nagercoil by SMS Construction",
  },
  {
    title: "Design & Planning",
    src: "/images/services/services-design-planning-portrait.jpg",
    alt: "Architectural planning and structural drafting in Nagercoil",
  },
  {
    title: "Survey & Approvals",
    src: "/images/services/services-survey-approvals-portrait.jpg",
    alt: "Site survey and land measurements in Nagercoil",
  },
  {
    title: "Fabrication Works",
    src: "/images/services/services-fabrication-works-portrait.jpg",
    alt: "Custom architectural fabrication and steel works in Nagercoil",
  },
];

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeHeroIdx, setActiveHeroIdx] = useState(0);
  const phoneNumber = "+919488021183";
  const formattedPhone = "+91 94880 21183";
  const whatsappNumber = "919488021183";

  // Auto-cycle through the 5 service images on mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeroIdx((prev) => (prev + 1) % heroBackgroundPanels.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Section 4: Workflow Steps with floating outline icons
  const journeyWorkflowSteps = [
    {
      num: 1,
      title: "Survey & Discovery",
      description: "Understand site boundaries, contour levels, and physical land parameters before planning.",
      icon: Crosshair,
      href: "/survey-approvals",
    },
    {
      num: 2,
      title: "Design & Planning",
      description: "Develop 3D visual concepts, functional layouts, and authority engineering sets.",
      icon: Compass,
      href: "/design-planning",
    },
    {
      num: 3,
      title: "Civil Construction",
      description: "Execute structural RCC framing, masonry, and civil engineering on ground.",
      icon: Building2,
      href: "/construction",
    },
    {
      num: 4,
      title: "Interior Design",
      description: "Shape the living experience inside through custom millwork, false ceilings, and lighting.",
      icon: Sparkles,
      href: "/interior-design",
    },
    {
      num: 5,
      title: "Custom Fabrication",
      description: "Integrate specialized ACP panels, architectural steelwork, and aluminium fittings.",
      icon: Layers,
      href: "/fabrication-works",
    },
    {
      num: 6,
      title: "Finished Handover",
      description: "Complete walk-through handover of a unified, move-in-ready residential environment.",
      icon: CheckCircle2,
      href: "/projects",
    },
  ];

  /* ── GSAP Scroll & Hero Sequence ── */
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      // Intro elements reveal
      gsap.fromTo(
        ".intro-elem",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }
      );

      const mm = gsap.matchMedia();

      // Desktop Service Cards Scroll Reveal
      mm.add("(min-width: 768px)", () => {
        gsap.utils.toArray<HTMLElement>(".service-card-panel").forEach((panel) => {
          gsap.fromTo(
            panel,
            { opacity: 0, y: 45 },
            {
              opacity: 1,
              y: 0,
              duration: 0.85,
              ease: "power3.out",
              scrollTrigger: {
                trigger: panel,
                start: "top 85%",
              },
            }
          );
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Structured Data 1: BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://smsconstruction.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://smsconstruction.in/services",
      },
    ],
  };

  // Structured Data 2: ItemList (Five Primary Services in exact order)
  const serviceCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "SMS Construction Services Catalog",
    description:
      "Full-scope construction, interior design, planning, survey, and custom fabrication services by SMS Construction in Nagercoil, Tamil Nadu.",
    itemListElement: primaryServices.map((service, idx) => ({
      "@type": "Service",
      position: idx + 1,
      name: service.title,
      description: service.description,
      url: `https://smsconstruction.in${service.href}`,
      provider: {
        "@type": "HomeAndConstructionBusiness",
        name: "SMS Construction",
        telephone: phoneNumber,
        address: {
          "@type": "PostalAddress",
          streetAddress: "25/1 Muthamizh St, Near Court Road",
          addressLocality: "Nagercoil",
          addressRegion: "Tamil Nadu",
          postalCode: "629001",
          addressCountry: "IN",
        },
      },
    })),
  };

  // Structured Data 3: FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: serviceFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCatalogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main ref={containerRef} className="bg-[#FAF8F3] text-[#171714] selection:bg-[#B08A52] selection:text-white">
        {/* ══════════════════════════════════════════════════════
            1. COMPACT EDITORIAL HERO (100dvh) - 5-PANEL ARCHITECTURAL BG
        ══════════════════════════════════════════════════════ */}
        <section
          data-header-theme="dark"
          aria-label="Services Overview Hero"
          className="relative w-full h-[100dvh] max-h-[100dvh] flex flex-col justify-between pt-16 sm:pt-20 lg:pt-22 pb-2.5 sm:pb-3.5 bg-[#171714] text-white overflow-hidden border-b border-[#2A2925]"
        >
          {/* Background Images Layer */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Mobile View: Full-bleed crossfading portrait images */}
            <div className="md:hidden absolute inset-0">
              {heroBackgroundPanels.map((panel, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    activeHeroIdx === idx ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={panel.src}
                    alt={panel.alt}
                    fill
                    priority={idx === 0}
                    sizes="100vw"
                    className="object-cover object-center"
                  />
                </div>
              ))}
            </div>

            {/* Desktop View: 5 Vertical Architectural Image Panels */}
            <div className="hidden md:grid grid-cols-5 h-full w-full divide-x divide-white/10">
              {heroBackgroundPanels.map((panel, idx) => (
                <div
                  key={idx}
                  className="relative h-full w-full overflow-hidden bg-[#171714]"
                >
                  <Image
                    src={panel.src}
                    alt={panel.alt}
                    fill
                    priority
                    sizes="20vw"
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>

            {/* Soft Cinematic Gradient Overlay - Greatly reduced shadow so photos are bright and vivid */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#171714]/45 via-[#171714]/20 to-[#171714]/50 md:bg-gradient-to-r md:from-[#171714]/80 md:via-[#171714]/40 md:to-[#171714]/15" />
          </div>

          {/* Main Content Area - Vertically centered and strictly proportioned for 100dvh */}
          <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 w-full flex-1 flex flex-col justify-center my-auto min-h-0">
            <div className="max-w-3xl py-1 sm:py-3 lg:py-4">
              <p className="intro-elem font-sans text-[10.5px] sm:text-[11.5px] tracking-[0.25em] uppercase font-semibold text-[#e3c381] mb-2 sm:mb-3 flex items-center gap-2.5">
                <span className="inline-block w-6 sm:w-8 h-px bg-[#e3c381]" aria-hidden="true" />
                OUR SERVICES
              </p>

              <h1
                className="font-bold intro-elem text-white leading-[1.08] tracking-[-0.02em] mb-2.5 sm:mb-4 drop-shadow-sm"
                style={{ fontSize: "clamp(1.75rem, 3.8vw, 3.25rem)" }}
              >
                Construction &amp; Interior Design Services in Nagercoil<span className="text-[#e3c381]">.</span>
              </h1>

              <p className="intro-elem text-[13.5px] sm:text-[15px] lg:text-[16px] leading-relaxed text-white/90 max-w-2xl mb-4 sm:mb-6 font-sans drop-shadow-xs">
                From site measurement and planning to construction, interiors and fabrication, SMS Construction brings the key stages of a project together under one service ecosystem.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="intro-elem flex flex-wrap items-center gap-2.5 sm:gap-4">
                <Link
                  href="/contact"
                  className="group relative overflow-hidden inline-flex items-center justify-center gap-2 min-h-[44px] sm:min-h-[48px] px-6 sm:px-7 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#e3c381] to-[#C89A47] text-[#171714] font-sans font-semibold text-[13px] sm:text-[14px] hover:shadow-lg hover:shadow-[#C89A47]/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-out text-center shadow-md"
                >
                  <span>Start Your Project</span>
                  <ArrowRight size={14} />
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center min-h-[44px] sm:min-h-[48px] px-5 sm:px-6 py-2 sm:py-2.5 rounded-full border border-white/30 hover:border-white text-white font-sans font-medium text-[13px] sm:text-[14px] hover:bg-white/10 transition-all duration-300 active:scale-[0.98]"
                >
                  Explore Our Projects
                </Link>
              </div>
            </div>
          </div>

        </section>

        {/* ===================================================================
            SECTION 2 — SERVICE INTRO
            Concise Narrative on Connected Project Stages
        =================================================================== */}
        <section
          aria-labelledby="intro-heading"
          className="py-16 sm:py-24 bg-white border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                FROM IDEA TO EXECUTION
              </span>
              <h2
                id="intro-heading"
                className="text-[28px] sm:text-[38px] lg:text-[44px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-4"
              >
                One place for the stages that shape your project<span className="text-[#B08A52]">.</span>
              </h2>
              <p className="text-[16px] sm:text-[17.5px] leading-relaxed text-[#68645D] font-sans max-w-2xl mx-auto">
                A project often moves through several connected stages — understanding the site, developing the design, preparing plans, building the space and completing the details. Our services are structured around those stages.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3 — PRIMARY SERVICES (5 EDITORIAL CARDS)
            Directly modeled after the reference image layout & SMS Construction theme
        =================================================================== */}
        <section
          id="primary-services"
          aria-labelledby="services-index-heading"
          className="py-10 sm:py-14 lg:py-16 scroll-mt-24 border-b border-[#E7E0D4] bg-[#FAF8F3]"
        >
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Section Header: Matching reference image */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
              {/* Left Side: Pill Badge + Serif Heading */}
              <div className="max-w-xl">
                <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                  Our services
                </span>
                <h2
                  id="services-index-heading"
                  className="text-[28px] sm:text-[38px] lg:text-[46px] font-semibold text-[#171714] leading-[1.08] tracking-tight"
                >
                  What we can do <br />
                  <span className="font-semibold">for you</span>
                </h2>
              </div>

              {/* Right Side: Description + Pill CTA Button */}
              <div className="max-w-md lg:text-right flex flex-col lg:items-end gap-5">
                <p className="text-[15.5px] sm:text-[17px] text-[#68645D] leading-relaxed font-sans">
                  From design and planning to construction, interior fit-outs and custom fabrication, we provide quality architectural solutions tailored to your space.
                </p>
              </div>
            </div>

            {/* 5 Full-Width Horizontal Architectural Service Cards */}
            <div className="flex flex-col gap-6 sm:gap-8">
              {primaryServices.map((service, idx) => (
                <Link
                  key={service.id}
                  href={service.href}
                  className={`service-card-panel group w-full rounded-[24px] sm:rounded-[28px] overflow-hidden bg-white border border-[#E7E0D4] shadow-2xs hover:shadow-2xl hover:border-[#B08A52]/70 transition-all duration-500 flex flex-col ${idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                    }`}
                >
                  {/* Rich Portrait/Landscape Image Container */}
                  <div className="relative w-full md:w-[380px] lg:w-[440px] xl:w-[480px] min-h-[260px] sm:min-h-[300px] md:min-h-[360px] overflow-hidden bg-[#171714] shrink-0">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      loading="lazy"
                      quality={85}
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 440px, 480px"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Gradient Overlay for Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none" />

                  </div>

                  {/* Detailed Narrative, Deliverables Grid & CTA */}
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between flex-1 bg-white">
                    <div>
                      {/* Eyebrow */}
                      <span className="text-[12px] sm:text-[13px] font-mono uppercase tracking-[0.18em] text-[#B08A52] font-semibold block mb-2.5">
                        {service.eyebrow}
                      </span>

                      {/* Service Title */}
                      <h3 className="text-[24px] sm:text-[30px] lg:text-[34px] font-serif font-bold text-[#171714] leading-[1.18] mb-3.5 group-hover:text-[#B08A52] transition-colors">
                        {service.title}
                      </h3>

                      {/* Detailed Explanatory Narrative */}
                      <p className="text-[15px] sm:text-[16px] text-[#55514A] leading-[1.7] font-sans max-w-3xl mb-6">
                        {service.description}
                      </p>

                      {/* Key Deliverables Grid */}
                      <div className="pt-5 border-t border-[#E7E0D4]/70 mb-6">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#77736C] font-semibold block mb-3">
                          What This Service Covers
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
                          {service.subservices.map((sub, sIdx) => (
                            <div
                              key={sIdx}
                              className="flex items-center gap-2 text-[13px] sm:text-[13.5px] text-[#2C2A26] font-sans font-medium"
                            >
                              <CheckCircle2
                                size={15}
                                className="text-[#B08A52] shrink-0"
                              />
                              <span className="leading-snug">{sub}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom CTA Action Row */}
                    <div className="pt-5 border-t border-[#E7E0D4]/70 mt-auto flex items-center">
                      <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#171614] text-white group-hover:bg-[#B08A52] font-sans font-semibold text-[13px] tracking-wider uppercase transition-all duration-300 shadow-xs">
                        <span>{service.ctaText}</span>
                        <ArrowRight
                          size={14}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </div>

                    {/* Hidden crawlable text for SEO & AEO answer extraction */}
                    <span className="sr-only">
                      {service.title} in Nagercoil, Kanyakumari. Services include: {service.subservices.join(", ")}.
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 4: OUR APPROACH ("From Idea to Build" Continuous Workflow)
            Theme: Minimal Architectural Studio Workflow in Brand Theme (#FAF8F3 / White / Gold)
        =================================================================== */}
        <section
          aria-labelledby="journey-heading"
          className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#E7E0D4] relative"
        >
          <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Header */}
            <div className="max-w-[760px] mx-auto text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-2 sm:mb-2.5">
                <span>HOW THE SERVICES CONNECT</span>
              </div>
              <h2
                id="journey-heading"
                className="text-[28px] sm:text-[38px] lg:text-[42px] font-bold text-[#171714] leading-[1.16] tracking-tight mb-3"
              >
                From Site to Finished Space<span className="text-[#B08A52]">.</span>
              </h2>
              <p className="text-[15px] sm:text-[16px] text-[#68645D] leading-relaxed max-w-2xl mx-auto font-sans">
                A structured overview of how architectural services typically sequence through the lifecycle of a complete build.
              </p>
            </div>

            {/* Steps Row (Matching Design Planning Style: Floating Outline Icon with Offset Shadow + Number Badge + Description) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 lg:gap-6 xl:gap-6 mb-10">
              {journeyWorkflowSteps.map((step) => {
                const IconComp = step.icon;
                return (
                  <Link
                    key={step.num}
                    href={step.href}
                    className="group flex flex-col items-start text-left"
                  >
                    {/* Floating Outline Icon with Soft Warm Offset Shadow */}
                    <div className="relative inline-flex mb-5">
                      {/* Offset Shadow Shape in Brand Champagne Tone */}
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-2xl bg-[#E8DCC8] border border-[#D9CCA8]/40 transition-transform duration-300 ease-out group-hover:translate-x-2 group-hover:translate-y-2"
                      />
                      {/* Main Outline Icon Container */}
                      <div className="relative h-15 w-15 sm:h-16 sm:w-16 rounded-2xl bg-white border-2 border-[#171714] flex items-center justify-center text-[#171714] shadow-xs transition-transform duration-300 ease-out group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:border-[#B08A52]">
                        <IconComp
                          size={26}
                          strokeWidth={1.8}
                          className="text-[#171714] group-hover:text-[#B08A52] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Numbered Circle & Text Layout */}
                    <div className="flex items-start gap-3 w-full">
                      <span className="h-6 w-6 sm:h-7 sm:w-7 rounded-full border border-[#171714] flex items-center justify-center font-mono text-[11px] sm:text-[12px] font-bold text-[#171714] shrink-0 mt-0.5 bg-white group-hover:border-[#B08A52] group-hover:text-[#B08A52] transition-colors">
                        {step.num}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[15px] sm:text-[16px] font-bold text-[#171714] leading-snug mb-1 group-hover:text-[#B08A52] transition-colors duration-200">
                          {step.title}
                        </h3>
                        <p className="text-[12.5px] sm:text-[13px] text-[#68645D] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>


        {/* ===================================================================
            SECTION 6 — REAL PROJECT PROOF
            Nagarajan Residence, Nagercoil (Theroor) Case Study
        =================================================================== */}
        <section aria-labelledby="proof-heading" className="py-16 sm:py-24 lg:py-28 bg-[#FAF8F3] border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
              <div className="max-w-2xl">
                <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                  FROM OUR PROJECTS
                </span>
                <h2
                  id="proof-heading"
                  className="font-serif text-[30px] sm:text-[42px] lg:text-[48px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-3"
                >
                  See the Services in Real Spaces<span className="text-[#B08A52]">.</span>
                </h2>
                <p className="text-[16px] sm:text-[17.5px] text-[#68645D] font-sans leading-relaxed">
                  Real project photography showcasing how architectural planning and interior joinery manifest in built residential environments.
                </p>
              </div>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 font-sans font-semibold text-[15px] text-[#171714] hover:text-[#B08A52] transition-colors pb-1 border-b border-[#171714] hover:border-[#B08A52] shrink-0 self-start sm:self-auto"
              >
                <span>View All Projects</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="space-y-10 sm:space-y-14">
              {/* Card 1: Nagarajan Residence */}
              <div className="bg-white rounded-[32px] overflow-hidden border border-[#E7E0D4] shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Visual Imagery Side (Verified Real Photography) */}
                  <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[480px] bg-[#171714]">
                    <Image
                      src="/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-living-room.webp"
                      alt="Living room interior design and woodwork at Nagarajan Residence in Theroor, Nagercoil by SMS Construction"
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-[#171714]/80 backdrop-blur-sm text-white text-[12px] font-medium tracking-wide">
                      Real Project Photography • Theroor, Nagercoil
                    </div>
                  </div>

                  {/* Editorial Case Summary */}
                  <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 text-[12.5px] text-[#B08A52] font-mono font-semibold uppercase tracking-wider mb-2">
                        <span>Nagercoil (Theroor)</span>
                        <span>3,500 Sq. Ft.</span>
                      </div>

                      <h3 className="font-serif text-[28px] sm:text-[34px] font-bold text-[#171714] mb-3">
                        Nagarajan Residence
                      </h3>

                      <p className="text-[15px] sm:text-[16px] text-[#68645D] leading-relaxed font-sans mb-6">
                        A residential interior execution integrating bespoke teak veneers, custom fluted TV console joinery, false ceiling drywall with warm indirect illumination, and modular kitchen cabinetry.
                      </p>

                      {/* Integrated Scopes Supported by Actual Project Data */}
                      <div className="space-y-2.5 mb-8">
                        <span className="text-[11.5px] font-mono font-semibold uppercase tracking-wider text-[#171714] block mb-2">
                          Coordinated Scopes in this Build:
                        </span>
                        <ul className="space-y-2 text-[14px] text-[#68645D] font-sans">
                          <li className="flex items-center gap-2.5">
                            <CheckCircle2 size={16} className="text-[#B08A52] shrink-0" />
                            <span>Custom Fluted Wood TV Media Console</span>
                          </li>
                          <li className="flex items-center gap-2.5">
                            <CheckCircle2 size={16} className="text-[#B08A52] shrink-0" />
                            <span>Architectural False Ceilings with Recessed Lighting</span>
                          </li>
                          <li className="flex items-center gap-2.5">
                            <CheckCircle2 size={16} className="text-[#B08A52] shrink-0" />
                            <span>Modular Kitchen Joinery &amp; Master Bedroom Storage</span>
                          </li>
                          <li className="flex items-center gap-2.5">
                            <CheckCircle2 size={16} className="text-[#B08A52] shrink-0" />
                            <span>Interior Space Planning &amp; 3D Visual Drafting</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <Link
                      href="/projects/nagarajan-residence-nagercoil-theroor"
                      className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-full bg-[#FAF8F3] hover:bg-[#171714] text-[#171714] hover:text-white border border-[#E7E0D4] font-sans font-semibold text-[14px] transition-all duration-300"
                    >
                      <span>View Project</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 2: Dr. Arun Kumar Residence */}
              <div className="bg-white rounded-[32px] overflow-hidden border border-[#E7E0D4] shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Visual Imagery Side (Verified Real Photography) */}
                  <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[480px] bg-[#171714]">
                    <Image
                      src="/images/projects/dr-arun-kumar-residence-nagercoil/central-atrium-courtyard-chandelier-hero.webp"
                      alt="Triple-height central atrium courtyard with floating glass staircase at Dr. Arun Kumar Residence in Nagercoil"
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-[#171714]/80 backdrop-blur-sm text-white text-[12px] font-medium tracking-wide">
                      Real Project Photography • Nagercoil
                    </div>
                  </div>

                  {/* Editorial Case Summary */}
                  <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 text-[12.5px] text-[#B08A52] font-mono font-semibold uppercase tracking-wider mb-2">
                        <span>Nagercoil, Tamil Nadu</span>
                        <span>4,200 Sq. Ft.</span>
                      </div>

                      <h3 className="font-serif text-[28px] sm:text-[34px] font-bold text-[#171714] mb-3">
                        Dr. Arun Kumar Residence
                      </h3>

                      <p className="text-[15px] sm:text-[16px] text-[#68645D] leading-relaxed font-sans mb-6">
                        An architectural masterpiece featuring a triple-height atrium courtyard, glass-enclosed indoor garden, floating staircase, bespoke kitchen island, and luxury joinery.
                      </p>

                      {/* Integrated Scopes Supported by Actual Project Data */}
                      <div className="space-y-2.5 mb-8">
                        <span className="text-[11.5px] font-mono font-semibold uppercase tracking-wider text-[#171714] block mb-2">
                          Coordinated Scopes in this Build:
                        </span>
                        <ul className="space-y-2 text-[14px] text-[#68645D] font-sans">
                          <li className="flex items-center gap-2.5">
                            <CheckCircle2 size={16} className="text-[#B08A52] shrink-0" />
                            <span>Triple-Height Central Atrium &amp; Skylight Coffer</span>
                          </li>
                          <li className="flex items-center gap-2.5">
                            <CheckCircle2 size={16} className="text-[#B08A52] shrink-0" />
                            <span>Floating Glass Staircase &amp; SS Standoff Railings</span>
                          </li>
                          <li className="flex items-center gap-2.5">
                            <CheckCircle2 size={16} className="text-[#B08A52] shrink-0" />
                            <span>Glass-Enclosed Biophilic Courtyard Garden</span>
                          </li>
                          <li className="flex items-center gap-2.5">
                            <CheckCircle2 size={16} className="text-[#B08A52] shrink-0" />
                            <span>Modular Waterfall Island &amp; Quartz Countertops</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <Link
                      href="/projects/dr-arun-kumar-residence-nagercoil"
                      className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-full bg-[#FAF8F3] hover:bg-[#171714] text-[#171714] hover:text-white border border-[#E7E0D4] font-sans font-semibold text-[14px] transition-all duration-300"
                    >
                      <span>View Project</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 8 — LOCAL SEO
            Grounded Entity Representation in Nagercoil, Tamil Nadu
        =================================================================== */}
        <LocalBusinessSchema />
        <LocalServiceArea
          badge="BASED IN NAGERCOIL"
          title={
            <>
              Construction &amp; Interior Design Services in Nagercoil
              <span className="text-[#B08A52]">.</span>
            </>
          }
          description={[
            "SMS Construction is based in Nagercoil, Tamil Nadu, providing construction, interior design, design and planning, survey and fabrication services within its actual service area across Kanyakumari District.",
            "Our permanent engineering studio in Nagercoil ensures responsive site visits, prompt regulatory approvals, and disciplined quality control across Nagercoil, Suchindram, Theroor, Kanyakumari, Marthandam, and surrounding regions.",
          ]}
          localities={geoLocalities}
          deskTitle="Head Office & Engineering Desk"
          companyName="SMS Construction"
          addressLines={[
            "25/1 Muthamizh Street, Near Court Road",
            "Nagercoil, Tamil Nadu 629001, India",
          ]}
          phoneNumber={phoneNumber}
          formattedPhone={formattedPhone}
          email="smsconstructionngl@gmail.com"
          emailLabel="Inquiries:"
          hours="Monday – Saturday (9:00 AM – 6:00 PM)"
          className="py-16 sm:py-24 bg-[#F6F3EB] border-b border-[#E7E0D4]"
          cardBgClassName="bg-white"
        />

        {/* ===================================================================
            SECTION 9 — FREQUENTLY ASKED QUESTIONS
            10 Authoritative Service FAQs with Accessible Accordion
        =================================================================== */}
        <ModernFaq
          sectionId="service-faqs"
          badgeText="QUESTIONS & ANSWERS"
          title="Frequently Asked Questions"
          titleAccent="."
          subtitle="Everything you need to know"
          items={serviceFaqs}
          className="py-16 md:py-24 bg-[#FAFAFA] border-b border-[#E7E0D4] relative"
        />

        {/* ===================================================================
            SECTION 10 — FINAL CONVERSION CTA
            Strongest lead generation gateway with clear phone and quote actions
        =================================================================== */}
        <ConversionCTA
          theme="light"
          badge="START YOUR PROJECT"
          title="Not sure where to begin?"
          description="Tell us what you are planning to build, design, or transform. We can discuss the right starting point for your project and provide a transparent consultation."
          primaryBtnText="Get a Free Quote"
          primaryBtnHref="/contact"
          phoneNumber={phoneNumber}
          formattedPhone={formattedPhone}
          whatsappNumber={whatsappNumber}
          whatsappMessage="Hello SMS Construction, I would like to consult about your services for my property in Nagercoil."
          subtext="SMS Construction • Architecture, Civil & Interior Studio • Nagercoil, Tamil Nadu"
        />
      </main>
    </>
  );
}
