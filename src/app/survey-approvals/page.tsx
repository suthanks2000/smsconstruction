import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  MessageSquare,
  CheckCircle2,
  Ruler,
  MapPin,
  Navigation,
  Crosshair,
  Info,
} from "lucide-react";
import {
  surveyServices,
  preparationServices,
  surveyFaqs,
} from "@/data/surveyApprovals";
import { geoLocalities } from "@/data/geo";
import ModernFaq from "@/components/ModernFaq";
import LocalServiceArea from "@/components/LocalServiceArea";
import ConversionCTA from "@/components/ConversionCTA";

export const metadata: Metadata = {
  title: "Land Survey & Approval Support in Nagercoil | SMS Construction",
  description:
    "Explore land and site survey services from SMS Construction in Nagercoil, including tape, digital, total station, building marking, topographical and contour surveys, layout preparation and FMB-related support.",
  alternates: {
    canonical: "/survey-approvals",
  },
  openGraph: {
    title: "Land Survey & Approval Support in Nagercoil | SMS Construction",
    description:
      "Explore land and site survey services from SMS Construction in Nagercoil, including tape, digital, total station, building marking, topographical and contour surveys, layout preparation and FMB-related support.",
    url: "https://smsconstruction.in/survey-approvals",
    siteName: "SMS Construction",
    images: [
      {
        url: "/images/services/survey.webp",
        width: 1200,
        height: 630,
        alt: "Land survey and site measurement services in Nagercoil by SMS Construction",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Land Survey & Approval Support in Nagercoil | SMS Construction",
    description:
      "Explore land and site survey services from SMS Construction in Nagercoil, including tape, digital, total station, building marking, topographical and contour surveys, layout preparation and FMB-related support.",
    images: ["/images/services/survey.webp"],
  },
};

export default function SurveyApprovalsPage() {
  const phoneNumber = "+919488021183";
  const formattedPhone = "+91 94880 21183";
  const whatsappNumber = "919488021183";

  // Structured Data Schemas (JSON-LD)
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
        name: "Survey & Approvals",
        item: "https://smsconstruction.in/survey-approvals",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Land Survey & Site Preparation Services",
    serviceType: "Pre-Construction Land Surveying & Layout Planning",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "SMS Construction",
      telephone: phoneNumber,
      address: {
        "@type": "PostalAddress",
        streetAddress: "25/1 Muthamizh Street, Near Court Road",
        addressLocality: "Nagercoil",
        addressRegion: "Tamil Nadu",
        postalCode: "629001",
        addressCountry: "IN",
      },
    },
    areaServed: geoLocalities.map((loc) => ({
      "@type": "City",
      name: loc,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Survey & Site Preparation Services",
      itemListElement: [
        ...surveyServices.map((service, index) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
          },
          position: index + 1,
        })),
        ...preparationServices.map((service, index) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
          },
          position: surveyServices.length + index + 1,
        })),
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: surveyFaqs.map((faq) => ({
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
      {/* 3 Structured Data Schemas */}
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
            SECTION 1: HERO (EDITORIAL HERO OVER FULL-BLEED REAL WEBP IMAGE)
            Style ref: construction & design-planning hero
        =================================================================== */}
        <section
          data-header-theme="dark"
          aria-label="Survey & Approvals Hero"
          className="relative w-full min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-between pt-20 pb-4 sm:pt-22 sm:pb-5 lg:pt-22 lg:pb-4 bg-[#171714] text-white overflow-hidden border-b border-[#2A2925]"
        >
          {/* Full-Bleed Real Survey WebP Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <Image
              src="/images/services/survey.webp"
              alt="Professional site survey and land measurement on a residential project site in Nagercoil by SMS Construction"
              fill
              loading="lazy"
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Soft architectural gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#171714]/92 via-[#171714]/70 to-[#171714]/35" />
          </div>

          {/* Main Content Container */}
          <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 w-full flex-1 flex flex-col justify-between pt-4 sm:pt-6 pb-2 sm:pb-3">

            {/* Middle Area: Editorial Copy & CTAs */}
            <div className="flex-1 flex flex-col justify-center max-w-3xl my-auto py-6 sm:py-8 lg:py-10">
              {/* H1 Heading */}
              <h1
                className="font-bold text-white leading-[1.12] sm:leading-[1.1] tracking-[-0.025em] mb-4 sm:mb-5 lg:mb-6"
                style={{ fontSize: "clamp(2.1rem, 3.9vw, 3.6rem)" }}
              >
                Land &amp; Site Survey Services in Nagercoil<span className="text-[#e3c381]">.</span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-[14.5px] sm:text-[15.5px] lg:text-[16.5px] leading-[1.65] sm:leading-[1.7] text-white/90 max-w-2xl mb-7 sm:mb-8 lg:mb-9 font-sans">
                Accurate site understanding starts with the right measurements. SMS Construction
                provides survey and project-preparation services that help establish a clearer
                foundation for planning and construction.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-3.5 lg:gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto group relative overflow-hidden inline-flex items-center justify-center gap-2.5 min-h-[48px] sm:min-h-[50px] px-7 py-3 rounded-full bg-gradient-to-r from-[#e3c381] to-[#C89A47] text-[#171714] font-sans font-semibold text-[13.5px] sm:text-[14.5px] hover:shadow-lg hover:shadow-[#C89A47]/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-out text-center shadow-md"
                >
                  <span>Discuss Your Site</span>
                  <ArrowRight size={15} />
                </Link>
                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 min-h-[48px] sm:min-h-[50px] px-4 sm:px-5 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-sans font-medium text-[12.5px] sm:text-[13.5px] hover:bg-white hover:text-[#171714] transition-all duration-300"
                  >
                    <Phone size={13} className="text-[#e3c381]" />
                    <span>Call {formattedPhone}</span>
                  </a>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Hello%20SMS%20Construction%2C%20I%20would%20like%20to%20discuss%20a%20site%20survey%20for%20my%20property%20in%20Nagercoil.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 min-h-[48px] sm:min-h-[50px] px-4 sm:px-5 py-2.5 rounded-full border border-[#25D366] bg-[#25D366]/10 backdrop-blur-sm text-[#25D366] hover:bg-[#25D366] hover:text-white font-sans font-medium text-[12.5px] sm:text-[13.5px] transition-all duration-300"
                  >
                    <MessageSquare size={14} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Architectural Survey Spec Footnote */}
            <div className="w-full pt-3.5 sm:pt-4 pb-1 border-t border-white/15 grid grid-cols-2 gap-x-4 gap-y-2 sm:flex sm:flex-wrap sm:items-center sm:justify-start sm:gap-x-5 lg:gap-x-6 sm:gap-y-2 text-[11.5px] sm:text-[12px] lg:text-[12.5px] mt-auto">
              <span className="flex items-center gap-1.5 font-medium text-white">
                <Crosshair size={13} className="text-[#e3c381] shrink-0" />
                <span>Total Station &amp; Digital Precision</span>
              </span>
              <span className="hidden sm:inline-block text-white/30">•</span>
              <span className="flex items-center gap-1.5 text-white/80">
                <Navigation size={13} className="text-[#e3c381] shrink-0" />
                <span>Boundary &amp; Contour Mapping</span>
              </span>
              <span className="hidden sm:inline-block text-white/30">•</span>
              <span className="flex items-center gap-1.5 text-white/80">
                <Ruler size={13} className="text-[#e3c381] shrink-0" />
                <span>On-Site Building Marking</span>
              </span>
              <span className="hidden sm:inline-block text-white/30">•</span>
              <span className="flex items-center gap-1.5 text-white/80">
                <MapPin size={13} className="text-[#e3c381] shrink-0" />
                <span>Serving All Kanyakumari District</span>
              </span>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 2: INTRODUCTION
            Editorial Two-Column Clarity Narrative
        =================================================================== */}
        <section
          aria-labelledby="intro-heading"
          className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              {/* Left Column: Eyebrow + H2 */}
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 text-[11.5px] sm:text-[12px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                  <span>START WITH THE SITE</span>
                </div>
                <h2
                  id="intro-heading"
                  className="text-[28px] sm:text-[38px] lg:text-[44px] font-bold text-[#171714] leading-[1.15] tracking-tight"
                >
                  Measure first. Plan with clarity<span className="text-[#B08A52]">.</span>
                </h2>
              </div>

              {/* Right Column: 2 Concise Paragraphs */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-[15.5px] sm:text-[16.5px] leading-relaxed text-[#68645D] font-sans pt-1">
                <p>
                  Every site in Nagercoil and across Kanyakumari District has its own natural grade,
                  access limits, and boundary characteristics. Physical measurement helps uncover
                  real spatial dimensions, orientation vectors, and adjacent property interfaces
                  before committing to architectural sketches or engineering plans.
                </p>
                <p>
                  Different survey methods serve specific project needs—from quick linear checks to
                  rigorous electro-optical total station coordinates. Accurate site documentation
                  translates directly into realistic layout preparation, reducing boundary doubts
                  and providing a dependable baseline for subsequent structural and construction
                  decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3 & 4: SURVEY SERVICES (INTERACTIVE EXPANDING HOVER CARDS)
            Cards with expanding circle hover effect & corner arrow
        =================================================================== */}
        <section
          id="survey-services"
          aria-labelledby="survey-services-heading"
          className="py-16 sm:py-24 lg:py-28 bg-[#FAF8F3] border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
              <div className="max-w-2xl">
                <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                  SURVEY SERVICES
                </span>
                <h2
                  id="survey-services-heading"
                  className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#171714] leading-[1.14] tracking-tight"
                >
                  The Right Survey for the Site<span className="text-[#B08A52]">.</span>
                </h2>
              </div>
              <p className="text-[15px] sm:text-[16px] text-[#68645D] max-w-md font-sans leading-relaxed">
                Six dedicated survey disciplines structured for residential, commercial, and
                irregular land parcels across Nagercoil and Kanyakumari District.
              </p>
            </div>

            {/* 6 Interactive Cards Grid (2 cols on tablet, 3 cols on desktop) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 auto-rows-fr">
              {surveyServices.map((service) => (
                <article
                  key={service.id}
                  id={service.id}
                  className="h-full relative overflow-hidden bg-white rounded-[20px] p-5 sm:p-6 md:p-8 border border-[#E7E0D4] hover:shadow-[0_24px_48px_rgba(23,23,20,0.08)] hover:-translate-y-2 transition-all duration-500 group flex flex-col items-start text-left z-0 scroll-mt-28"
                >
                  {/* Expanding Background Circle */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-[#C89A47] -z-10 transform scale-100 origin-center transition-transform duration-[600ms] ease-out group-hover:scale-[45]" />

                  {/* Top Right Corner Arrow */}
                  <div className="absolute top-0 right-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#C89A47] text-white rounded-bl-[20px] sm:rounded-bl-[24px] overflow-hidden pointer-events-none">
                    <span className="material-symbols-outlined text-[14px] sm:text-[16px] -mt-1 -mr-1 font-bold">
                      arrow_forward
                    </span>
                  </div>

                  {/* Header Row: Icon + Title */}
                  <div className="relative z-10 flex items-center gap-2 sm:gap-4 mb-3 sm:mb-4 pr-4">
                    <div className="shrink-0 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#F8F4EE] flex items-center justify-center group-hover:bg-white/20 transition-colors duration-500">
                      <span className="material-symbols-outlined text-[#C89A47] group-hover:text-white transition-colors duration-500 text-[16px] sm:text-[24px]">
                        {service.icon}
                      </span>
                    </div>
                    <h3 className="font-sans font-semibold text-[14px] sm:text-[18px] md:text-[20px] text-[#171714] group-hover:text-white transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="relative z-10 font-sans text-[11px] sm:text-[14px] text-[#68645D] leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 5: LAYOUT PREPARATION
            Distinct Architectural Line UI: Measurements to Usable Layout
        =================================================================== */}
        <section
          id="layout-preparation"
          aria-labelledby="layout-prep-heading"
          className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E7E0D4] scroll-mt-28"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch">
              {/* Left Column: Eyebrow, H2, Narrative & Feature Rows */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                   SITE &amp; LAYOUT PREPARATION
                  </span>
                  <h2
                    id="layout-prep-heading"
                    className="text-[28px] sm:text-[38px] lg:text-[44px] font-bold text-[#171714] leading-[1.16] tracking-tight mb-4"
                  >
                    From measurements to a usable layout<span className="text-[#B08A52]">.</span>
                  </h2>
                  <p className="text-[15.5px] sm:text-[16.5px] leading-relaxed text-[#171714] font-sans font-medium mb-3">
                    Site measurements and project requirements can be translated into a clearer layout
                    direction for the next stages of planning and execution.
                  </p>
                  <p className="text-[14.5px] sm:text-[15px] leading-relaxed text-[#68645D] mb-6 font-sans">
                    Our layout preparation service bridges field survey points with architectural CAD
                    drafting, accounting for access road widths, compound wall alignments, and planned
                    structural zones so that architects and engineers work from verified ground realities.
                  </p>
                </div>

                {/* Architectural Feature Rows */}
                <div className="space-y-3 pt-1">
                  {[
                    {
                      title: "Dimensioned Boundary Vectors",
                      desc: "Clear physical boundary CAD lines with statutory setback corridors.",
                      icon: "square_foot",
                    },
                    {
                      title: "Orientation & Solar Corridors",
                      desc: "Markers aligned to true north, prevailing wind, and solar movement.",
                      icon: "explore",
                    },
                    {
                      title: "CAD & Structural Readiness",
                      desc: "Seamless handoff into 2D architectural drafting and 3D elevations.",
                      icon: "design_services",
                    },
                  ].map((feat) => (
                    <div
                      key={feat.title}
                      className="p-3.5 sm:p-4 rounded-xl bg-[#FAF8F3] border border-[#E7E0D4] flex items-center gap-3.5 hover:border-[#B08A52]/40 transition-colors"
                    >
                      <div className="w-9 h-9 rounded-lg bg-white border border-[#E7E0D4] flex items-center justify-center shrink-0 text-[#B08A52] shadow-2xs">
                        <span className="material-symbols-outlined text-[19px]">{feat.icon}</span>
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-sans font-bold text-[14px] text-[#171714] leading-snug">
                          {feat.title}
                        </h4>
                        <p className="font-sans text-[12.5px] sm:text-[13px] text-[#68645D] leading-relaxed mt-0.5">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Premium Deliverable Card */}
              <div className="lg:col-span-5 flex flex-col mt-6 lg:mt-0">
                <div className="h-full p-7 sm:p-9 lg:p-10 rounded-[24px] bg-[#171714] text-white border border-[#2A2925] shadow-sm flex flex-col justify-between relative overflow-hidden group">
                  {/* Subtle top-right ambient gold glow */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#C89A47]/10 rounded-full blur-3xl pointer-events-none" />

                  <div>
                    {/* Header Badge & Icon */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-mono font-medium text-[#e3c381] uppercase tracking-wider">
                        DELIVERABLE 07
                      </span>
                      <span className="material-symbols-outlined text-white/40 text-[22px] group-hover:text-[#e3c381] transition-colors">
                        architecture
                      </span>
                    </div>

                    <h3 className="font-serif text-[22px] sm:text-[25px] font-bold text-white mb-3">
                      Dimensioned CAD Baseline
                    </h3>
                    <p className="text-[13.5px] sm:text-[14px] text-white/75 leading-relaxed mb-6 font-sans">
                      A clean, layered vector drawing of your plot dimensions and physical boundaries,
                      ready for the architect, structural engineer, and construction team.
                    </p>

                    {/* Specification Specs List */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2.5 mb-6 text-[12.5px] sm:text-[13px] font-sans">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-white/60">Drawing Format:</span>
                        <span className="text-white font-medium">DWG / DXF / Vector PDF</span>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-white/60">Boundary Model:</span>
                        <span className="text-white font-medium">Dimensioned Cadastral Line</span>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-white/60">Coordination:</span>
                        <span className="text-white font-medium">True North &amp; Setbacks</span>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-white/60">Readiness:</span>
                        <span className="text-[#e3c381] font-medium">Arch &amp; Structural Ready</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-between w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#e3c381] to-[#C89A47] text-[#171714] font-sans font-semibold text-[13.5px] hover:shadow-lg hover:shadow-[#C89A47]/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                  >
                    <span>Request Layout Preparation</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 6: FMB (FIELD MEASUREMENT BOOK)
            Educates with Careful, Accurate Framing (No Government Authority Claims)
        =================================================================== */}
        <section
          id="fmb"
          aria-labelledby="fmb-heading"
          className="py-16 sm:py-24 bg-[#FAF8F3] border-b border-[#E7E0D4] scroll-mt-28"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div className="lg:col-span-7">
                <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                  DOCUMENTATION
                </span>
                <h2
                  id="fmb-heading"
                  className="text-[28px] sm:text-[38px] lg:text-[44px] font-bold text-[#171714] leading-[1.16] tracking-tight mb-5"
                >
                  FMB (Field Measurement Book)<span className="text-[#B08A52]">.</span>
                </h2>
                <p className="text-[16px] sm:text-[17px] leading-relaxed text-[#68645D] mb-5 font-sans">
                  FMB refers to Field Measurement Book information used in land and site-related
                  contexts. FMB-related information may be relevant when understanding land
                  measurements and site documentation. Requirements and records can depend on the
                  property and applicable authorities.
                </p>
                <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#68645D] mb-6 font-sans">
                  When planning a new residential or commercial construction, cross-referencing
                  physical on-ground measurements with available registered document dimensions and
                  FMB sketches helps identify discrepancies early before any foundation trench is dug.
                </p>

                {/* Important Advisory Callout Box */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E7E0D4] flex items-start gap-3.5">
                  <Info size={18} className="text-[#B08A52] shrink-0 mt-0.5" />
                  <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#68645D] font-sans">
                    <strong className="text-[#171714] font-semibold">Please Note:</strong> SMS
                    Construction provides dimensional measurement support and documentation review
                    for project planning clarity. We do not act as an official government land-records
                    authority or issue statutory FMB certificates.
                  </p>
                </div>
              </div>

              {/* FMB Support Checklist Card */}
              <div className="lg:col-span-5">
                <div className="p-7 sm:p-9 rounded-[24px] bg-white border border-[#E7E0D4] shadow-xs">
                  <span className="text-[11.5px] font-mono font-semibold uppercase tracking-wider text-[#B08A52] block mb-2">
                    08 / Documentation Coordination
                  </span>
                  <h3 className="text-[22px] font-bold text-[#171714] mb-4">
                    Site Verification &amp; Cross-Checks
                  </h3>
                  <div className="space-y-3.5 text-[14px] text-[#68645D] font-sans mb-7">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#B08A52] shrink-0 mt-0.5" />
                      <span>Verifying on-site fence / wall lines against recorded dimensional figures</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#B08A52] shrink-0 mt-0.5" />
                      <span>Identifying diagonal variations or corner angle shifts across the plot</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#B08A52] shrink-0 mt-0.5" />
                      <span>Structuring clean dimensional summaries for your architectural designer</span>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full bg-[#171714] hover:bg-[#B08A52] text-white font-sans font-semibold text-[13.5px] transition-colors duration-200"
                  >
                    <span>Discuss Your Site Documentation</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 7: HOW THE SERVICES CONNECT
            Visual Progressive Flow from Site Measurement to Project Planning
        =================================================================== */}
        <section
          aria-labelledby="flow-heading"
          className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Centered Section Header */}
            <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
              <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                INTEGRATED ECOSYSTEM
              </span>
              <h2
                id="flow-heading"
                className="text-[28px] sm:text-[38px] lg:text-[44px] font-bold text-[#171714] leading-[1.16] tracking-tight mb-4"
              >
                From site measurement to project planning<span className="text-[#B08A52]">.</span>
              </h2>
              <p className="text-[15.5px] sm:text-[16.5px] text-[#68645D] font-sans leading-relaxed max-w-2xl mx-auto">
                Survey is never an isolated exercise. It feeds directly into spatial design,
                statutory drawings, and turnkey civil construction.
              </p>
            </div>

            {/* Progressive Horizontal Step Flow (Clean Editorial Line Design) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 lg:gap-x-8 gap-y-10 sm:gap-y-12">
              {[
                {
                  step: "1",
                  title: "Site Assessment",
                  desc: "Understanding physical boundaries, access roads, and existing terrain.",
                },
                {
                  step: "2",
                  title: "Precision Survey",
                  desc: "Capturing ground coordinates via tape, digital, or total station.",
                },
                {
                  step: "3",
                  title: "Data Verification",
                  desc: "Cross-referencing recorded deeds, diagonal lengths, and ground lines.",
                },
                {
                  step: "4",
                  title: "CAD Layout",
                  desc: "Synthesizing vector boundary plots with statutory setback corridors.",
                },
                {
                  step: "5",
                  title: "Design & Planning",
                  desc: "Architectural floor plans, structural layouts, and approval drawings.",
                },
                {
                  step: "6",
                  title: "Civil Construction",
                  desc: "On-site foundation marking, column setting, and turnkey build.",
                },
              ].map((item, idx, arr) => (
                <div key={item.step} className="group flex flex-col">
                  {/* Step Number + Connecting Line */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <span className="font-bold text-[30px] sm:text-[36px] lg:text-[40px] text-[#171714] leading-none shrink-0 group-hover:text-[#B08A52] transition-colors duration-300">
                      {item.step}
                    </span>
                    {idx !== arr.length - 1 ? (
                      <div className="flex-1 h-[1.5px] bg-[#E7E0D4] group-hover:bg-[#B08A52]/60 transition-colors duration-300" />
                    ) : (
                      <div className="hidden lg:block flex-1 h-[1.5px] bg-transparent" />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-sans font-bold text-[15px] sm:text-[16px] text-[#171714] mb-1.5 tracking-tight group-hover:text-[#B08A52] transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-[13px] sm:text-[13.5px] text-[#68645D] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 10: REAL PROJECT CONTEXT
            Nagarajan Residence, Nagercoil (Theroor)
        =================================================================== */}
        <section
          aria-labelledby="case-study-heading"
          className="py-16 sm:py-24 lg:py-28 bg-[#FAF8F3] border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Project Real Photography */}
              <div className="lg:col-span-6 relative rounded-[28px] overflow-hidden border border-[#E7E0D4] aspect-[4/3] bg-white shadow-xs">
                <Image
                  src="/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-entrance.webp"
                  alt="Nagarajan Residence in Theroor, Nagercoil — Site boundary and orientation executed by SMS Construction"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#171714]/80 backdrop-blur-md text-white text-[12.5px] font-sans">
                  <span className="font-semibold block text-[#e3c381]">Nagarajan Residence</span>
                  <span className="text-white/80">Theroor, Nagercoil • Site Verification &amp; Turnkey Execution</span>
                </div>
              </div>

              {/* Project Editorial Context */}
              <div className="lg:col-span-6">
                <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                  FROM SITE TO SPACE
                </span>
                <h2
                  id="case-study-heading"
                  className="text-[28px] sm:text-[38px] lg:text-[42px] font-bold text-[#171714] leading-[1.16] tracking-tight mb-4"
                >
                  Where Site Understanding Becomes the Starting Point<span className="text-[#B08A52]">.</span>
                </h2>
                <p className="text-[15.5px] sm:text-[16.5px] leading-relaxed text-[#68645D] mb-5 font-sans">
                  At the Nagarajan Residence project in Theroor (Nagercoil), accurate site
                  understanding formed the very first milestone. Physical verification of plot
                  boundaries, solar angles, and road access helped establish compound setbacks and
                  footing alignments prior to foundation excavation.
                </p>
                <p className="text-[15px] leading-relaxed text-[#68645D] mb-7 font-sans">
                  By confirming boundary dimensions and ground levels on-site early, the architectural
                  drawings translated seamlessly into structural framing without layout conflicts.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/projects/nagarajan-residence-nagercoil-theroor"
                    className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#171714] hover:bg-[#B08A52] text-white font-sans font-semibold text-[13.5px] transition-colors duration-200"
                  >
                    <span>View Nagarajan Residence Project</span>
                    <ArrowRight size={14} />
                  </Link>

                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full border border-[#E7E0D4] bg-white hover:bg-[#FAF8F3] text-[#171714] font-sans font-medium text-[13.5px] transition-colors"
                  >
                    <span>Browse All Projects</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 11: LOCAL SEO (GEO / LOCAL SERVICE AREA)
            Using the unified LocalServiceArea component with common geoLocalities
        =================================================================== */}
        <LocalServiceArea
          badge="BASED IN NAGERCOIL"
          title={
            <>
              Survey Services in Nagercoil<span className="text-[#B08A52]">.</span>
            </>
          }
          titleClassName="text-[28px] sm:text-[38px] lg:text-[44px] font-bold text-[#171714] leading-[1.16] tracking-tight mb-4"
          description={[
            "SMS Construction is based in Nagercoil, Tamil Nadu, providing survey and project-preparation services within its actual service area.",
            "Our permanent engineering presence in Nagercoil enables prompt on-site mobilization across Kanyakumari District to evaluate physical boundaries, access roads, and elevation contours firsthand.",
          ]}
          deskTitle="Survey & Engineering Desk"
          companyName="SMS Construction"
          phoneNumber={phoneNumber}
          formattedPhone={formattedPhone}
          email="smsconstructionngl@gmail.com"
          emailLabel="Inquiries:"
          hours="Monday – Saturday"
          className="py-16 sm:py-24 lg:py-28 bg-white border-b border-[#E7E0D4]"
          cardBgClassName="bg-[#FAF8F3]"
          pillBgClassName="bg-[#FAF8F3]"
        />

        {/* ===================================================================
            SECTION 12: FAQ (AEO & DIRECT ANSWER KNOWLEDGE BASE)
            Using unified ModernFaq component
        =================================================================== */}
        <ModernFaq
          sectionId="faq-heading"
          title="Frequently Asked Questions"
          titleAccent="."
          subtitle="Everything you need to know about site survey & planning"
          items={surveyFaqs}
          className="py-16 md:py-24 bg-[#FAFAFA] border-b border-[#E7E0D4] relative"
        />

        {/* ===================================================================
            SECTION 13: FINAL LEAD CTA
            Matching site architecture with unified ConversionCTA component
        =================================================================== */}
        <ConversionCTA
          theme="light"
          badge="START WITH THE SITE"
          title="Need clarity on your site before you build?"
          description="Tell us about your site, project requirements, and current stage. Our team will review your location and discuss the appropriate survey and layout preparation support."
          primaryBtnText="Discuss Your Site"
          primaryBtnHref="/contact"
          phoneNumber={phoneNumber}
          formattedPhone={formattedPhone}
          whatsappNumber={whatsappNumber}
          whatsappMessage="Hello SMS Construction, I would like to consult regarding a site survey in Nagercoil."
          subtext="SMS Construction • Land Survey & Architectural Planning • Nagercoil, Tamil Nadu"
        />
      </main>
    </>
  );
}
