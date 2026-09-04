import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Phone, MessageSquare, CheckCircle2, MapPin, Layers, Hammer, ShieldCheck } from "lucide-react";
import {
  buildingCategories,
  constructionProcessSteps,
  sitePriorities,
  constructionTrustPillars,
  constructionFaqs,
} from "@/data/construction";
import ServiceFaqAccordion from "../services/components/ServiceFaqAccordion";

export const metadata: Metadata = {
  title: "Construction Services in Nagercoil | SMS Construction",
  description:
    "Explore construction services from SMS Construction in Nagercoil, Tamil Nadu, with planning, execution, quality coordination and project handover.",
  alternates: {
    canonical: "/construction",
  },
  openGraph: {
    title: "Construction Services in Nagercoil | SMS Construction",
    description:
      "Explore construction services from SMS Construction in Nagercoil, Tamil Nadu, with planning, execution, quality coordination and project handover.",
    url: "https://smsconstruction.in/construction",
    siteName: "SMS Construction",
    images: [
      {
        url: "/images/services/construction.jpg",
        width: 1200,
        height: 630,
        alt: "Construction Services in Nagercoil by SMS Construction",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Services in Nagercoil | SMS Construction",
    description:
      "Explore construction services from SMS Construction in Nagercoil, Tamil Nadu, with planning, execution, quality coordination and project handover.",
    images: ["/images/services/construction.jpg"],
  },
};

export default function ConstructionPage() {
  const phoneNumber = "+919488021183";
  const formattedPhone = "+91 94880 21183";
  const whatsappNumber = "919488021183";

  // Structured Data Schemas
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
      {
        "@type": "ListItem",
        position: 3,
        name: "Construction",
        item: "https://smsconstruction.in/construction",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Construction Services",
    serviceType: "Building and Residential Construction",
    description:
      "Comprehensive residential and commercial construction services in Nagercoil, including new builds, structural masonry, RCC framing, and turnkey execution.",
    url: "https://smsconstruction.in/construction",
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
    areaServed: [
      {
        "@type": "City",
        name: "Nagercoil",
      },
      {
        "@type": "AdministrativeArea",
        name: "Kanyakumari District",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Construction Building Capabilities",
      itemListElement: buildingCategories.map((c, idx) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: c.title,
          description: c.description,
        },
        position: idx + 1,
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: constructionFaqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-[#FAF8F3] text-[#171714] selection:bg-[#B08A52] selection:text-white">
        {/* ===================================================================
            SECTION 1: HERO
        =================================================================== */}
        <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Breadcrumb Navigation & Hub Link */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8">
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 text-[13px] font-sans text-[#77736C]">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-[#B08A52] transition-colors duration-200"
                    >
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true" className="text-[#B08A52]/60">
                    /
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="hover:text-[#B08A52] transition-colors duration-200"
                    >
                      Services
                    </Link>
                  </li>
                  <li aria-hidden="true" className="text-[#B08A52]/60">
                    /
                  </li>
                  <li aria-current="page" className="text-[#171714] font-medium">
                    Construction
                  </li>
                </ol>
              </nav>

              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-[12px] font-mono uppercase tracking-widest text-[#77736C] hover:text-[#B08A52] transition-colors duration-200"
              >
                <span>&larr; Services</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Structural Editorial Copy */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3.5">
                  CONSTRUCTION
                </span>

                <h1 className="font-serif text-[34px] sm:text-[48px] lg:text-[60px] font-bold text-[#171714] leading-[1.12] tracking-tight mb-5 sm:mb-6">
                  Construction Services in Nagercoil
                </h1>

                <p className="text-[17px] sm:text-[19px] leading-relaxed text-[#68645D] max-w-[600px] mb-8 sm:mb-10 font-sans">
                  From project planning and site understanding to execution and handover, SMS
                  Construction approaches each build with a clear, coordinated process.
                </p>

                {/* Primary & Secondary CTAs */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-5">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2.5 min-h-[52px] px-7 py-3.5 rounded-full bg-[#171714] text-white font-sans font-medium text-[15px] hover:bg-[#B08A52] transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98]"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowRight size={16} />
                  </Link>

                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center min-h-[52px] px-7 py-3.5 rounded-full border border-[#B08A52] text-[#B08A52] font-sans font-medium text-[15px] hover:bg-[#B08A52] hover:text-white transition-all duration-300 active:scale-[0.98]"
                  >
                    View Our Projects
                  </Link>
                </div>

                {/* Engineering Spec Footnote */}
                <div className="mt-8 sm:mt-12 pt-6 border-t border-[#E7E0D4]/70 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-[#77736C]">
                  <span className="flex items-center gap-1.5 font-medium text-[#171714]">
                    <span className="h-2 w-2 rounded-full bg-[#B08A52]" />
                    Site-to-Handover Execution
                  </span>
                  <span>Engineered Masonry &amp; Framing</span>
                  <span>Nagercoil &amp; Kanyakumari District</span>
                </div>
              </div>

              {/* Right Column: Architectural Construction Visual Frame */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-[500px] lg:max-w-none">
                  <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden border border-[#E7E0D4] bg-[#F2EDE3] shadow-md">
                    <Image
                      src="/images/services/construction.jpg"
                      alt="Architectural residential construction in Nagercoil by SMS Construction"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                    {/* Bottom Floating Technical Badge */}
                    <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-sm border border-[#E7E0D4] text-[#171714] shadow-sm">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-[11px] uppercase tracking-wider text-[#B08A52] font-semibold">
                            Engineering Practice
                          </p>
                          <p className="font-serif text-[15px] font-semibold text-[#171714]">
                            Ground-Up Civil Execution
                          </p>
                        </div>
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FAF8F3] text-[#B08A52]">
                          <Hammer size={15} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 2: CONSTRUCTION INTRO (BUILT WITH INTENT)
        =================================================================== */}
        <section className="py-20 sm:py-28 border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              {/* Left Column: Heading */}
              <div className="lg:col-span-5">
                <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                  BUILT WITH INTENT
                </span>
                <h2 className="font-serif text-[30px] sm:text-[42px] lg:text-[48px] font-bold text-[#171714] leading-[1.18] tracking-tight">
                  A clear path from plan to finished space.
                </h2>
              </div>

              {/* Right Column: 2 Concise Structural Paragraphs */}
              <div className="lg:col-span-7 flex flex-col gap-6 text-[17px] sm:text-[18px] text-[#68645D] leading-relaxed font-sans">
                <p>
                  Every successful construction project begins with a thorough understanding of the site
                  conditions, soil characteristics, and architectural requirements. We carefully
                  evaluate plot boundaries, orientation for natural cross-ventilation, and structural
                  load distributions before physical work commences on ground in Nagercoil.
                </p>
                <p>
                  From site grading and foundation engineering through masonry, slab casting, and
                  service conduit integration, our team manages the sequence with structured
                  discipline. Daily on-site supervision and clear milestone checks ensure structural
                  durability, timeline control, and a seamless handover without fragmented trades.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3: WHAT WE BUILD
        =================================================================== */}
        <section className="py-20 sm:py-28 lg:py-32 bg-[#F6F3EB] border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Section Header */}
            <div className="max-w-[760px] mb-14 sm:mb-20">
              <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                BUILDING SCOPES
              </span>
              <h2 className="font-serif text-[30px] sm:text-[42px] lg:text-[48px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-4">
                Construction for Spaces That Last
              </h2>
              <p className="text-[16px] sm:text-[18px] text-[#68645D] leading-relaxed">
                Whether creating an independent family residence, executing a ground-up build, or
                modernizing an existing structure, our team applies rigorous site coordination across
                every scope.
              </p>
            </div>

            {/* Asymmetrical Structural Grid (Not 4 identical cards!) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Category 1: Residential Construction - Large Feature Display */}
              <div className="lg:col-span-12 bg-white rounded-[28px] overflow-hidden border border-[#E7E0D4] shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[440px] bg-[#171714]">
                    <Image
                      src={buildingCategories[0].image}
                      alt={buildingCategories[0].alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-[#171714]/85 backdrop-blur-sm text-white text-[12px] font-medium tracking-wide">
                      Core Discipline
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-serif text-[24px] font-semibold text-[#B08A52]">
                          {buildingCategories[0].number}
                        </span>
                        <span className="text-[12px] font-sans font-semibold uppercase tracking-wider text-[#77736C]">
                          {buildingCategories[0].subtitle}
                        </span>
                      </div>

                      <h3 className="font-serif text-[28px] sm:text-[34px] font-bold text-[#171714] mb-4">
                        {buildingCategories[0].title}
                      </h3>

                      <p className="text-[16px] text-[#68645D] leading-relaxed mb-6">
                        {buildingCategories[0].description}
                      </p>

                      <div className="space-y-2 mb-8">
                        <p className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[#171714]">
                          Structural Capabilities:
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {buildingCategories[0].tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-[13px] font-sans rounded-md bg-[#FAF8F3] text-[#171714] border border-[#E7E0D4]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#171714] text-white hover:bg-[#B08A52] font-sans font-medium text-[14px] transition-colors duration-200"
                    >
                      <span>Discuss Residential Build</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Categories 2, 3, 4 - Structured Triplet Display */}
              {buildingCategories.slice(1).map((category) => (
                <div
                  key={category.id}
                  className="lg:col-span-4 bg-white rounded-[24px] overflow-hidden border border-[#E7E0D4] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
                >
                  <div>
                    <div className="relative aspect-[16/10] bg-[#171714] overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#171714]/80 backdrop-blur-sm text-white text-[11px] font-medium">
                        {category.number}
                      </div>
                    </div>

                    <div className="p-7">
                      <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[#B08A52] block mb-1.5">
                        {category.subtitle}
                      </span>
                      <h3 className="font-serif text-[22px] font-bold text-[#171714] mb-3">
                        {category.title}
                      </h3>
                      <p className="text-[14px] text-[#68645D] leading-relaxed mb-6">
                        {category.description}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-[#E7E0D4]/70">
                        <div className="flex flex-wrap gap-1.5">
                          {category.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 text-[11px] font-sans rounded bg-[#FAF8F3] text-[#68645D] border border-[#E7E0D4]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-7 pt-0">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-[13px] font-sans font-semibold text-[#171714] hover:text-[#B08A52] transition-colors"
                    >
                      <span>Inquire regarding {category.title}</span>
                      <ArrowRight size={14} className="text-[#B08A52]" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 4: OUR CONSTRUCTION PROCESS (EDITORIAL TIMELINE)
        =================================================================== */}
        <section className="py-20 sm:py-28 lg:py-32 border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Header */}
            <div className="max-w-[760px] mb-14 sm:mb-20">
              <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                OUR PROCESS
              </span>
              <h2 className="font-serif text-[30px] sm:text-[42px] lg:text-[48px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-4">
                From Site to Handover.
              </h2>
              <p className="text-[16px] sm:text-[18px] text-[#68645D] leading-relaxed">
                A structured, six-stage engineering sequence that brings transparency to project
                timelines, material batching, structural casting, and final building delivery.
              </p>
            </div>

            {/* Continuous Architectural Timeline */}
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {constructionProcessSteps.map((step, idx) => (
                <li
                  key={step.step}
                  className="p-7 sm:p-8 rounded-[20px] bg-white border border-[#E7E0D4] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-[#E7E0D4]/70">
                      <span className="font-serif text-[28px] font-semibold text-[#B08A52]">
                        {step.step}
                      </span>
                      <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-[#77736C]">
                        Stage {idx + 1} of 6
                      </span>
                    </div>

                    <h3 className="font-serif text-[21px] font-bold text-[#171714] mb-2.5">
                      {step.title}
                    </h3>

                    <p className="text-[15px] leading-relaxed text-[#68645D]">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ===================================================================
            SECTION 5: WHAT MATTERS ON SITE
        =================================================================== */}
        <section className="py-20 sm:py-28 lg:py-32 bg-[#F6F3EB] border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Header */}
            <div className="max-w-[760px] mb-14 sm:mb-18">
              <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                SITE DISCIPLINE
              </span>
              <h2 className="font-serif text-[30px] sm:text-[42px] lg:text-[48px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-4">
                The Details Behind a Good Build.
              </h2>
              <p className="text-[16px] sm:text-[18px] text-[#68645D] leading-relaxed">
                Practical engineering realities that separate long-lasting structural shells from
                short-lived builds.
              </p>
            </div>

            {/* 6 Practical On-Site Priorities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {sitePriorities.map((priority) => (
                <div
                  key={priority.title}
                  className="p-7 sm:p-8 rounded-[20px] bg-white border border-[#E7E0D4] shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="h-11 w-11 rounded-xl bg-[#FAF8F3] border border-[#E7E0D4] flex items-center justify-center text-[#B08A52] mb-5">
                      <span className="material-symbols-outlined text-[24px]">
                        {priority.icon}
                      </span>
                    </div>

                    <h3 className="font-serif text-[20px] sm:text-[22px] font-bold text-[#171714] mb-2.5">
                      {priority.title}
                    </h3>

                    <p className="text-[15px] text-[#68645D] leading-relaxed">
                      {priority.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 6: REAL PROJECT PROOF
        =================================================================== */}
        <section className="py-20 sm:py-28 lg:py-32 border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
              <div className="max-w-[700px]">
                <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                  OUR WORK
                </span>
                <h2 className="font-serif text-[30px] sm:text-[42px] lg:text-[48px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-3">
                  Construction in Real Spaces
                </h2>
                <p className="text-[16px] sm:text-[18px] text-[#68645D] leading-relaxed">
                  Real projects illustrate how structural masonry, concrete frame engineering, and
                  finish coordination operate in physical reality.
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

            {/* Featured Project Showcase */}
            <div className="bg-white rounded-[28px] overflow-hidden border border-[#E7E0D4] shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Visual Imagery */}
                <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[460px] bg-[#171714]">
                  <Image
                    src="/images/projects/modern-edge-residence.jpg"
                    alt="Modern residential villa construction in Nagercoil by SMS Construction"
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-[#171714]/85 backdrop-blur-sm text-white text-[12px] font-medium tracking-wide">
                    Residential Execution
                  </div>
                </div>

                {/* Editorial Details */}
                <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 text-[13px] text-[#B08A52] font-semibold tracking-wider uppercase mb-2">
                      <span>Nagercoil (Theroor)</span>
                      <span>3,500 Sq. Ft.</span>
                    </div>

                    <h3 className="font-serif text-[28px] sm:text-[34px] font-bold text-[#171714] mb-4">
                      Nagarajan Residence
                    </h3>

                    <p className="text-[15px] sm:text-[16px] text-[#68645D] leading-relaxed mb-6">
                      A bespoke residential build where structural space planning, multi-level ceiling
                      framing, and utility conduits were engineered to integrate seamlessly with custom
                      interior wood joinery.
                    </p>

                    <div className="space-y-2.5 mb-8">
                      <p className="text-[12px] font-sans font-semibold uppercase tracking-wider text-[#171714]">
                        Construction Scopes Managed:
                      </p>
                      <ul className="space-y-1.5 text-[14px] text-[#68645D]">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-[#B08A52] shrink-0" />
                          <span>Detailed Site Evaluation &amp; Layout Schematics</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-[#B08A52] shrink-0" />
                          <span>RCC Structural Coordination &amp; Masonry Work</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-[#B08A52] shrink-0" />
                          <span>Embedded MEP Conduits &amp; Wall Niche Preparation</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-[#B08A52] shrink-0" />
                          <span>Turnkey Execution to Final Key Handover</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <Link
                    href="/projects/nagarajan-residence-nagercoil-theroor"
                    className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-xl bg-[#FAF8F3] hover:bg-[#B08A52] text-[#171714] hover:text-white border border-[#E7E0D4] hover:border-[#B08A52] font-sans font-semibold text-[14px] transition-all duration-300"
                  >
                    <span>View Project Case Study</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 7: CONSTRUCTION + INTERIOR CONNECTION
        =================================================================== */}
        <section className="py-20 sm:py-28 bg-[#F6F3EB] border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Left Column: Cross-Discipline Message */}
              <div className="lg:col-span-7">
                <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                  INTEGRATED ARCHITECTURE
                </span>
                <h2 className="font-serif text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-5">
                  From Building the Space to Shaping the Interior.
                </h2>
                <p className="text-[17px] leading-relaxed text-[#68645D] mb-6 font-sans">
                  When structural construction and interior design are considered together from day
                  one, electrical points, recessed ceiling pockets, plumbing drops, and partition
                  anchors are engineered into the concrete shell—eliminating wall-breaking, patching,
                  and budget waste later.
                </p>
                <p className="text-[16px] leading-relaxed text-[#68645D] mb-8 font-sans">
                  Whether you engage SMS Construction for civil construction alone or complete
                  turnkey design-and-build, our engineers ensure every phase remains aligned with the
                  intended spatial experience.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/interior-design"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#171714] text-white hover:bg-[#B08A52] font-sans font-medium text-[14px] transition-colors"
                  >
                    <span>Explore Interior Design</span>
                    <ArrowRight size={15} />
                  </Link>

                  <Link
                    href="/design-planning"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#B08A52] text-[#B08A52] hover:bg-[#B08A52] hover:text-white font-sans font-medium text-[14px] transition-colors"
                  >
                    <span>Design &amp; Planning</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Synergy Card */}
              <div className="lg:col-span-5">
                <div className="p-8 sm:p-10 rounded-[24px] bg-white border border-[#E7E0D4] shadow-sm space-y-6">
                  <div className="flex items-center gap-3 text-[#B08A52]">
                    <Layers size={22} />
                    <span className="text-[12px] font-sans font-semibold uppercase tracking-wider text-[#171714]">
                      Design-Build Synergy
                    </span>
                  </div>

                  <h3 className="font-serif text-[22px] font-bold text-[#171714]">
                    No Disjointed Handoffs
                  </h3>

                  <ul className="space-y-3 text-[14px] text-[#68645D]">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#B08A52] shrink-0 mt-0.5" />
                      <span>Conduits cast directly into RCC slabs for false ceiling lighting</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#B08A52] shrink-0 mt-0.5" />
                      <span>Plumbing inlet/outlet heights aligned with modular kitchen cabinetry</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#B08A52] shrink-0 mt-0.5" />
                      <span>Window lintel elevations calibrated to match interior drapery pockets</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#B08A52] shrink-0 mt-0.5" />
                      <span>Single point of communication from foundation to final paint finish</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 8: WHY WORK WITH SMS CONSTRUCTION
        =================================================================== */}
        <section className="py-20 sm:py-28 lg:py-32 border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Header */}
            <div className="max-w-[760px] mb-14 sm:mb-18">
              <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                THE STUDIO ADVANTAGE
              </span>
              <h2 className="font-serif text-[30px] sm:text-[42px] lg:text-[48px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-4">
                A More Connected Way to Build.
              </h2>
              <p className="text-[16px] sm:text-[18px] text-[#68645D] leading-relaxed">
                Practical, factual value propositions that protect your budget, timeline, and
                architectural vision on site.
              </p>
            </div>

            {/* 5 Value Proposition Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {constructionTrustPillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className={`p-7 sm:p-8 rounded-[20px] bg-white border border-[#E7E0D4] shadow-sm flex flex-col justify-between ${
                    index === 3 ? "lg:col-span-1" : index === 4 ? "md:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  <div>
                    <div className="h-11 w-11 rounded-xl bg-[#FAF8F3] border border-[#E7E0D4] flex items-center justify-center text-[#B08A52] mb-5">
                      <span className="material-symbols-outlined text-[24px]">
                        {pillar.icon}
                      </span>
                    </div>

                    <h3 className="font-serif text-[20px] sm:text-[22px] font-bold text-[#171714] mb-2.5">
                      {pillar.title}
                    </h3>

                    <p className="text-[15px] text-[#68645D] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 9: LOCAL SERVICE AREA (GEO / LOCAL SEO)
        =================================================================== */}
        <section className="py-20 sm:py-28 bg-[#F6F3EB] border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Left Column: Local Context */}
              <div className="lg:col-span-7">
                <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                  BASED IN NAGERCOIL
                </span>
                <h2 className="font-serif text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-5">
                  Construction Services in Nagercoil and Surrounding Areas
                </h2>
                <p className="text-[17px] leading-relaxed text-[#68645D] mb-6">
                  SMS Construction is based in Nagercoil, Tamil Nadu, and works on residential,
                  commercial, and structural projects throughout Kanyakumari District. Having our
                  permanent engineering presence in Nagercoil ensures timely site inspections, daily
                  workforce coordination, and strict material auditing.
                </p>
                <p className="text-[16px] leading-relaxed text-[#68645D] mb-8">
                  We actively manage builds in Nagercoil, Suchindram, Theroor, Kanyakumari, Marthandam,
                  and neighboring regional localities.
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {[
                    "Nagercoil City",
                    "Theroor",
                    "Suchindram",
                    "Kanyakumari",
                    "Marthandam",
                    "Colachel",
                    "Villukuri",
                  ].map((place) => (
                    <span
                      key={place}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E7E0D4] text-[13px] font-sans text-[#68645D]"
                    >
                      <MapPin size={13} className="text-[#B08A52]" />
                      <span>{place}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Studio Coordinates Card */}
              <div className="lg:col-span-5">
                <div className="p-8 sm:p-10 rounded-[24px] bg-white border border-[#E7E0D4] shadow-sm">
                  <span className="text-[12px] font-sans font-semibold uppercase tracking-wider text-[#B08A52] block mb-2">
                    Head Office &amp; Engineering Desk
                  </span>
                  <h3 className="font-serif text-[24px] font-bold text-[#171714] mb-3">
                    SMS Construction
                  </h3>
                  <address className="not-italic text-[15px] text-[#68645D] leading-relaxed mb-6 space-y-1">
                    <p>25/1 Muthamizh Street, Near Court Road</p>
                    <p>Nagercoil, Tamil Nadu 629001, India</p>
                  </address>

                  <div className="pt-6 border-t border-[#E7E0D4] space-y-3 text-[14px]">
                    <div className="flex items-center justify-between">
                      <span className="text-[#77736C]">Direct Line:</span>
                      <a
                        href={`tel:${phoneNumber}`}
                        className="font-medium text-[#171714] hover:text-[#B08A52] transition-colors"
                      >
                        {formattedPhone}
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#77736C]">Inquiries:</span>
                      <a
                        href="mailto:smsconstructionngl@gmail.com"
                        className="font-medium text-[#171714] hover:text-[#B08A52] transition-colors"
                      >
                        smsconstructionngl@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#77736C]">Site Visits:</span>
                      <span className="font-medium text-[#171714]">Monday – Saturday</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 10: FAQ
        =================================================================== */}
        <section className="py-20 sm:py-28 lg:py-32 border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              {/* Left Column: Context & Contact Prompt */}
              <div className="lg:col-span-5">
                <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                  COMMON QUESTIONS
                </span>
                <h2 className="font-serif text-[30px] sm:text-[42px] lg:text-[46px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-[16px] sm:text-[17px] text-[#68645D] leading-relaxed mb-8">
                  Direct answers regarding our residential building process, site planning, Nagercoil
                  service boundaries, and quotation reviews.
                </p>

                <div className="p-6 rounded-[20px] bg-[#F6F3EB] border border-[#E7E0D4] shadow-sm">
                  <h3 className="font-serif text-[18px] font-bold text-[#171714] mb-2">
                    Have architectural drawings or a plot ready?
                  </h3>
                  <p className="text-[14px] text-[#68645D] mb-4">
                    Our engineering team is available for on-site plot reviews and structural feasibility consultations.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-sans font-semibold text-[14px] text-[#B08A52] hover:text-[#80633D] transition-colors"
                  >
                    <span>Schedule a Site Consultation</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* Right Column: Accessible Accordion */}
              <div className="lg:col-span-7 bg-white rounded-[24px] p-6 sm:p-8 lg:p-10 border border-[#E7E0D4] shadow-sm">
                <ServiceFaqAccordion items={constructionFaqs} />
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            INTERNAL ARCHITECTURE HUB BAR (OTHER DISCIPLINES)
        =================================================================== */}
        <section className="py-12 bg-[#FAF8F3] border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[#B08A52]">
                  Explore Full Service Architecture
                </p>
                <p className="font-serif text-[18px] font-bold text-[#171714]">
                  Complementary Disciplines by SMS Construction
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[13px] font-sans">
                <Link
                  href="/services"
                  className="px-4 py-2 rounded-full bg-white hover:bg-[#B08A52] hover:text-white border border-[#E7E0D4] text-[#171714] font-medium transition-colors"
                >
                  Services Hub
                </Link>
                <Link
                  href="/interior-design"
                  className="px-4 py-2 rounded-full bg-white hover:bg-[#B08A52] hover:text-white border border-[#E7E0D4] text-[#171714] font-medium transition-colors"
                >
                  Interior Design
                </Link>
                <Link
                  href="/design-planning"
                  className="px-4 py-2 rounded-full bg-white hover:bg-[#B08A52] hover:text-white border border-[#E7E0D4] text-[#171714] font-medium transition-colors"
                >
                  Design &amp; Planning
                </Link>
                <Link
                  href="/survey-approvals"
                  className="px-4 py-2 rounded-full bg-white hover:bg-[#B08A52] hover:text-white border border-[#E7E0D4] text-[#171714] font-medium transition-colors"
                >
                  Survey &amp; Approvals
                </Link>
                <Link
                  href="/fabrication-works"
                  className="px-4 py-2 rounded-full bg-white hover:bg-[#B08A52] hover:text-white border border-[#E7E0D4] text-[#171714] font-medium transition-colors"
                >
                  Fabrication Works
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 11: FINAL LEAD CTA
        =================================================================== */}
        <section className="relative overflow-hidden py-24 sm:py-32 bg-[#171614] text-white">
          {/* Subtle Ambient Radial Accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#B08A52]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-[980px] mx-auto px-5 sm:px-8 text-center">
            <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.25em] uppercase text-[#FBE18D] mb-4">
              START YOUR PROJECT
            </span>

            <h2 className="font-serif text-[34px] sm:text-[48px] lg:text-[56px] font-bold text-[#FAF8F3] leading-[1.14] tracking-tight mb-6">
              Planning a new build or construction project?
            </h2>

            <p className="text-[17px] sm:text-[19px] leading-relaxed text-[#FAF8F3]/80 max-w-[680px] mx-auto mb-10 font-sans">
              Tell us about your project, site, requirements and what you are planning to build.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#FBE18D] hover:bg-[#FCD372] text-[#171614] font-sans font-semibold text-[15px] transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <span>Get a Free Quote</span>
                <ArrowRight size={17} />
              </Link>

              <a
                href={`tel:${phoneNumber}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/30 hover:border-white text-white font-sans font-medium text-[15px] hover:bg-white/10 transition-all duration-300 active:scale-[0.98]"
              >
                <Phone size={16} />
                <span>Call {formattedPhone}</span>
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-white/80 hover:text-white font-sans text-[15px] hover:underline underline-offset-4 transition-colors duration-200"
              >
                <MessageSquare size={16} />
                <span>WhatsApp</span>
              </a>
            </div>

            <p className="mt-10 text-[13px] text-white/50 tracking-wide font-sans">
              SMS Construction • Civil Engineering &amp; Building Studio • Nagercoil, Tamil Nadu
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
