import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  MessageSquare,
  CheckCircle2,
  MapPin,
  Hammer,
  Layers,
  Building2,
  HardHat,
  ShieldCheck,
} from "lucide-react";
import {
  constructionServices,
  constructionApproachSteps,
  whyChoosePillars,
  constructionFaqs,
  geoLocalities,
} from "@/data/construction";
import ServiceFaqAccordion from "../services/components/ServiceFaqAccordion";

export const metadata: Metadata = {
  title: "Civil & Building Construction Contractors in Nagercoil | Residential, Commercial & Industrial | SMS Construction",
  description:
    "Premier civil construction contractors in Nagercoil & Kanyakumari District. Expert builders for residential homes, commercial complexes, industrial sheds, structural RCC framing, DTCP approvals, and turnkey delivery.",
  keywords: [
    "Civil Construction Contractors Nagercoil",
    "Building Construction Company Nagercoil",
    "Commercial Building Contractors Kanyakumari",
    "Residential House Construction Nagercoil",
    "Industrial Shed Builders Kanyakumari",
    "Turnkey Civil Contractors Tamil Nadu",
    "RCC Framed Structure Contractors Nagercoil",
    "DTCP Building Plan Approvals Nagercoil",
    "Structural Renovation Contractors Kanyakumari",
    "Best Civil Engineers in Nagercoil",
    "SMS Construction Nagercoil",
  ],
  alternates: {
    canonical: "https://smsconstruction.in/construction",
  },
  openGraph: {
    title: "Civil & Building Construction Contractors in Nagercoil | SMS Construction",
    description:
      "All-sector civil construction in Nagercoil: residential villas, commercial complexes, industrial sheds, RCC framing, and turnkey handover by SMS Construction.",
    url: "https://smsconstruction.in/construction",
    siteName: "SMS Construction",
    images: [
      {
        url: "/images/services/civil-construction-hero.jpg",
        width: 1200,
        height: 675,
        alt: "Civil building construction site in Nagercoil by SMS Construction",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Civil & Building Construction in Nagercoil | SMS Construction",
    description:
      "Turnkey residential, commercial, and industrial civil construction in Nagercoil & Kanyakumari District. Quality materials, IS code compliance, transparent BOQ.",
    images: ["/images/services/civil-construction-hero.jpg"],
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Nagercoil",
    "geo.position": "8.1833;77.4119",
    ICBM: "8.1833, 77.4119",
  },
};

export default function ConstructionPage() {
  const phoneNumber = "+919488021183";
  const formattedPhone = "+91 94880 21183";
  const whatsappNumber = "919488021183";

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
      {
        "@type": "ListItem",
        position: 3,
        name: "Construction",
        item: "https://smsconstruction.in/construction",
      },
    ],
  };

  // Structured Data 2: HomeAndConstructionBusiness & GeneralContractor
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "GeneralContractor"],
    name: "SMS Construction",
    description:
      "Premier civil, commercial, and residential building construction contractor in Nagercoil, Tamil Nadu. Ground-up construction, RCC structural works, industrial sheds, and turnkey delivery.",
    url: "https://smsconstruction.in/construction",
    telephone: phoneNumber,
    image: "https://smsconstruction.in/images/services/civil-construction-hero.jpg",
    priceRange: "₹₹",
    openingHours: "Mo-Sa 08:30-19:30",
    address: {
      "@type": "PostalAddress",
      streetAddress: "25/1 Muthamizh St, Near Court Road",
      addressLocality: "Nagercoil",
      addressRegion: "Tamil Nadu",
      postalCode: "629001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 8.1833,
      longitude: 77.4119,
    },
    areaServed: geoLocalities.map((loc) => ({
      "@type": "Place",
      name: `${loc}, Kanyakumari District, Tamil Nadu`,
    })),
  };

  // Structured Data 3: Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Civil & Building Construction Services",
    serviceType: "Civil, Residential, Commercial & Industrial Construction",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "SMS Construction",
      telephone: phoneNumber,
    },
    description:
      "End-to-end civil building construction across Nagercoil and Kanyakumari: residential homes, commercial plazas, industrial facilities, structural RCC framing, and turnkey execution.",
    url: "https://smsconstruction.in/construction",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Comprehensive Construction Sectors",
      itemListElement: constructionServices.map((service, idx) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${service.title} (${service.category})`,
          description: service.description,
        },
        position: idx + 1,
      })),
    },
  };

  // Structured Data 4: HowTo Schema for the 4-Step Approach
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Our Approach: 4-Stage Construction Execution Methodology",
    description:
      "A structured 4-step civil construction methodology deployed by SMS Construction in Nagercoil across residential, commercial, and industrial builds.",
    step: constructionApproachSteps.map((step, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: `${step.step} ${step.title}: ${step.subtitle}`,
      text: step.description,
    })),
  };

  // Structured Data 5: FAQPage Schema for AEO
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
      {/* 5 Structured Data Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-[#FAF8F3] text-[#171714] selection:bg-[#B08A52] selection:text-white">
        {/* ===================================================================
            SECTION 1: HERO (100dvh - EDITORIAL HERO OVER FULL-BLEED IMAGE)
        =================================================================== */}
        <section
          data-header-theme="dark"
          aria-label="Civil Construction Hero"
          className="relative w-full min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-between pt-20 pb-4 sm:pt-22 sm:pb-5 lg:pt-22 lg:pb-4 bg-[#171714] text-white overflow-hidden border-b border-[#2A2925]"
        >
          {/* Full-Bleed Civil Construction Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <Image
              src="/images/services/civil-construction-hero.jpg"
              alt="Civil RCC residential and commercial building construction site in Nagercoil by SMS Construction"
              fill
              priority
              sizes="100vw"
              className="object-cover object-right lg:object-[center_35%]"
            />
            {/* Overlay - Restored to the elegant soft style */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#171714]/80 via-[#171714]/40 to-[#171714]/10" />
          </div>

          {/* Main Content Area */}
          <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 w-full flex-1 flex flex-col justify-between">
            {/* Top / Middle Area: Breadcrumbs, Editorial Copy & CTAs */}
            <div className="flex-1 flex flex-col justify-center max-w-3xl my-auto py-3 sm:py-5 lg:py-6">
              {/* Breadcrumb Navigation */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-3.5 sm:mb-4.5">
                <nav aria-label="Breadcrumb">
                  <ol className="flex items-center gap-2 text-[12px] sm:text-[12.5px] font-sans text-white/75">
                    <li>
                      <Link
                        href="/"
                        className="hover:text-[#e3c381] transition-colors duration-200"
                      >
                        Home
                      </Link>
                    </li>
                    <li aria-hidden="true" className="text-[#C89A47]/70">
                      /
                    </li>
                    <li>
                      <Link
                        href="/services"
                        className="hover:text-[#e3c381] transition-colors duration-200"
                      >
                        Services
                      </Link>
                    </li>
                    <li aria-hidden="true" className="text-[#C89A47]/70">
                      /
                    </li>
                    <li aria-current="page" className="text-white font-medium">
                      Construction
                    </li>
                  </ol>
                </nav>
              </div>

              {/* Editorial Copy */}
              <div className="inline-flex items-center gap-2 text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] uppercase text-[#e3c381] mb-2.5 sm:mb-3.5">
                <Hammer size={13} />
                <span>SMS CONSTRUCTION • CIVIL, COMMERCIAL &amp; RESIDENTIAL CONTRACTORS</span>
              </div>
              <h1
                className="intro-elem text-white leading-[1.1] tracking-[-0.02em] mb-3.5 sm:mb-4.5"
                style={{ fontSize: "clamp(1.95rem, 3.6vw, 3.35rem)" }}
              >
                Civil &amp; Building Construction in Nagercoil<span className="text-[#e3c381]">.</span>
              </h1>

              <p className="text-[14.5px] sm:text-[15.5px] lg:text-[16px] leading-relaxed text-white/90 max-w-2xl mb-6 sm:mb-7 font-sans">
                Professional turnkey civil construction across Nagercoil and Kanyakumari District.
                From bespoke residential homes and commercial complexes to industrial sheds, heavy RCC
                framing, and municipal approvals—engineered for decades of structural excellence.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="group relative overflow-hidden inline-flex items-center justify-center gap-2.5 min-h-[48px] sm:min-h-[50px] px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#e3c381] to-[#C89A47] text-[#171714] font-sans font-semibold text-[13.5px] sm:text-[14.5px] hover:shadow-lg hover:shadow-[#C89A47]/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-out text-center shadow-md"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight size={15} />
                </Link>

                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center justify-center gap-2.5 min-h-[48px] sm:min-h-[50px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white font-sans font-medium text-[13.5px] sm:text-[14.5px] hover:bg-white hover:text-[#171714] transition-all duration-300 active:scale-[0.98]"
                >
                  <Phone size={14} className="text-[#e3c381] group-hover:text-[#171714]" />
                  <span>Call {formattedPhone}</span>
                </a>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hello%2C%20I%20would%20like%20to%20consult%20regarding%20construction%20in%20Nagercoil.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 min-h-[48px] sm:min-h-[50px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-[#25D366] bg-[#25D366]/10 backdrop-blur-sm text-[#25D366] hover:bg-[#25D366] hover:text-white font-sans font-medium text-[13.5px] sm:text-[14.5px] transition-all duration-300 active:scale-[0.98]"
                >
                  <MessageSquare size={15} className="text-[#25D366] group-hover:text-white transition-colors" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Engineering Spec Footnote */}
            <div className="w-full pt-3 sm:pt-3.5 pb-1 border-t border-white/15 grid grid-cols-2 gap-x-4 gap-y-2 sm:flex sm:flex-wrap sm:items-center sm:justify-start sm:gap-x-5 lg:gap-x-6 sm:gap-y-2 text-[11.5px] sm:text-[12px] lg:text-[12.5px] mt-auto">
              <span className="flex items-center gap-1.5 font-medium text-white">
                <CheckCircle2 size={13.5} className="text-[#e3c381] shrink-0" />
                <span>Turnkey Civil &amp; Structural Execution</span>
              </span>
              <span className="hidden sm:inline text-white/25">•</span>
              <span className="flex items-center gap-1.5 font-medium text-white">
                <CheckCircle2 size={13.5} className="text-[#e3c381] shrink-0" />
                <span>IS 456 &amp; 1893 RCC Standards</span>
              </span>
              <span className="hidden sm:inline text-white/25">•</span>
              <span className="flex items-center gap-1.5 font-medium text-white">
                <CheckCircle2 size={13.5} className="text-[#e3c381] shrink-0" />
                <span>DTCP &amp; Municipal Clearances</span>
              </span>
              <span className="hidden sm:inline text-white/25">•</span>
              <span className="flex items-center gap-1.5 font-medium text-white">
                <CheckCircle2 size={13.5} className="text-[#e3c381] shrink-0" />
                <span>Nagercoil &amp; Kanyakumari District</span>
              </span>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 2: EDITORIAL INTRO (ALL-SECTOR CIVIL CONSTRUCTION)
        =================================================================== */}
        <section className="py-20 sm:py-28 border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              {/* Left Column: Heading */}
              <div className="lg:col-span-5">
                <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                  ALL-SECTOR CIVIL CONSTRUCTION / 01
                </span>
                <h2 className="font text-[30px] sm:text-[42px] lg:text-[48px] text-[#171714] leading-[1.18] tracking-tight">
                  Every structure requires engineering discipline, structural integrity, and purpose-driven execution.
                </h2>
              </div>

              {/* Right Column: 2 Concise Paragraphs */}
              <div className="lg:col-span-7 flex flex-col gap-6 text-[17px] sm:text-[18px] text-[#68645D] leading-relaxed font-sans">
                <p>
                  Whether developing an independent family villa, a multi-storey commercial retail
                  complex, or an expansive industrial warehouse, a successful build requires deep
                  structural expertise, soil-specific foundation engineering, high-grade certified
                  materials, and disciplined on-site execution. At SMS Construction, we manage projects
                  end-to-end from initial plot contour survey to architectural design, municipal approvals,
                  and complete turnkey delivery.
                </p>
                <p>
                  Based in Nagercoil, our civil engineers combine practical spatial planning with
                  certified Fe550D TMT reinforcement, high-strength concrete batching, and coastal weather
                  protection. We build spaces that deliver long-term commercial productivity, residential
                  comfort, and unwavering structural safety across Kanyakumari District.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3: CONSTRUCTION CAPABILITIES & SECTORS (6 Core Disciplines)
        =================================================================== */}
        <section
          aria-labelledby="services-heading"
          className="py-20 sm:py-28 lg:py-32 bg-[#F6F3EB] border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Header */}
            <div className="max-w-[760px] mb-14 sm:mb-20">
              <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                CONSTRUCTION CAPABILITIES &amp; SECTORS
              </span>
              <h2
                id="services-heading"
                className="font-serif text-[30px] sm:text-[42px] lg:text-[48px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-4"
              >
                Comprehensive Civil Construction Across All Sectors
              </h2>
              <p className="text-[16px] sm:text-[18px] text-[#68645D] leading-relaxed">
                From luxury residential homes to high-footfall commercial spaces and heavy industrial
                sheds, our civil contracting services cover every technical, statutory, and structural
                milestone.
              </p>
            </div>

            {/* 6 Core Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {constructionServices.map((service) => (
                <div
                  key={service.number}
                  className="p-8 sm:p-9 rounded-[24px] bg-white border border-[#E7E0D4] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-[#E7E0D4]/70">
                      <span className="font-serif text-[26px] font-semibold text-[#B08A52]">
                        {service.number}
                      </span>
                      <div className="h-10 w-10 rounded-xl bg-[#FAF8F3] border border-[#E7E0D4] flex items-center justify-center text-[#B08A52]">
                        <span className="material-symbols-outlined text-[22px]">
                          {service.icon}
                        </span>
                      </div>
                    </div>

                    <div className="mb-3">
                      <span className="inline-block text-[11px] font-sans font-semibold uppercase tracking-wider text-[#B08A52] mb-1">
                        {service.category}
                      </span>
                      <h3 className="font-serif text-[22px] font-bold text-[#171714] leading-snug">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-[15px] text-[#68645D] leading-relaxed mb-6 font-sans">
                      {service.description}
                    </p>

                    <ul className="space-y-2 pt-2 border-t border-[#E7E0D4]/70 text-[13px] text-[#68645D]">
                      {service.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2">
                          <CheckCircle2 size={15} className="text-[#B08A52] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E7E0D4]/70">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-[13px] font-sans font-semibold text-[#171714] hover:text-[#B08A52] transition-colors"
                    >
                      <span>Inquire regarding {service.title}</span>
                      <ArrowRight size={14} className="text-[#B08A52]" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 4: OUR APPROACH ("Building Step By Step")
        =================================================================== */}
        <section
          aria-labelledby="approach-heading"
          className="py-20 sm:py-28 lg:py-32 border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Header */}
            <div className="max-w-[760px] mb-14 sm:mb-20">
              <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                ENGINEERING ROADMAP
              </span>
              <h2
                id="approach-heading"
                className="font-serif text-[30px] sm:text-[42px] lg:text-[48px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-4"
              >
                Structured Construction From Foundation To Handover
              </h2>
              <p className="text-[16px] sm:text-[18px] text-[#68645D] leading-relaxed">
                A disciplined 4-stage civil engineering process that guarantees structural accuracy,
                cost transparency, and on-time milestone delivery across residential and commercial builds.
              </p>
            </div>

            {/* 4-Step Editorial Process Grid */}
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 list-none">
              {constructionApproachSteps.map((step, idx) => (
                <li
                  key={step.step}
                  className="p-7 sm:p-8 rounded-[24px] bg-white border border-[#E7E0D4] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-[#E7E0D4]/70">
                      <span className="font-serif text-[28px] font-semibold text-[#B08A52]">
                        {step.step}
                      </span>
                      <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-[#77736C]">
                        Stage {idx + 1} of 4
                      </span>
                    </div>

                    <h3 className="font-serif text-[22px] font-bold text-[#171714] mb-1.5">
                      {step.title}
                    </h3>

                    <p className="text-[12px] font-sans font-semibold uppercase tracking-wider text-[#B08A52] mb-3">
                      {step.subtitle}
                    </p>

                    <p className="text-[14px] leading-relaxed text-[#68645D] font-sans">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ===================================================================
            SECTION 5: WHY CHOOSE SMS CONSTRUCTION
        =================================================================== */}
        <section
          aria-labelledby="why-choose-heading"
          className="py-20 sm:py-28 lg:py-32 bg-[#F6F3EB] border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Header */}
            <div className="max-w-[760px] mb-14 sm:mb-18">
              <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                WHY WORK WITH US
              </span>
              <h2
                id="why-choose-heading"
                className="font-serif text-[30px] sm:text-[42px] lg:text-[48px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-4"
              >
                Engineered With Integrity. Delivered With Certainty.
              </h2>
              <p className="text-[16px] sm:text-[18px] text-[#68645D] leading-relaxed">
                Why homeowners, commercial enterprises, and industrial developers across Kanyakumari
                trust SMS Construction for critical building projects.
              </p>
            </div>

            {/* 4 Value Proposition Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {whyChoosePillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-7 sm:p-8 rounded-[24px] bg-white border border-[#E7E0D4] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
                >
                  <div>
                    <div className="h-11 w-11 rounded-xl bg-[#FAF8F3] border border-[#E7E0D4] flex items-center justify-center text-[#B08A52] mb-5">
                      <span className="material-symbols-outlined text-[24px]">
                        {pillar.icon}
                      </span>
                    </div>

                    <h3 className="font-serif text-[20px] font-bold text-[#171714] mb-1.5">
                      {pillar.title}
                    </h3>

                    <p className="text-[12px] font-sans font-semibold uppercase tracking-wider text-[#B08A52] mb-3">
                      {pillar.subtitle}
                    </p>

                    <p className="text-[14px] text-[#68645D] leading-relaxed font-sans">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 6: INTEGRATED ARCHITECTURE & SYNERGY
        =================================================================== */}
        <section className="py-20 sm:py-28 border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Left Column: Cross-Discipline Message */}
              <div className="lg:col-span-7">
                <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                  INTEGRATED CIVIL &amp; INTERIOR PRACTICE
                </span>
                <h2 className="font-serif text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-5">
                  From Groundwork &amp; Structural Framing to Commercial &amp; Living Interiors.
                </h2>
                <p className="text-[17px] leading-relaxed text-[#68645D] mb-6 font-sans">
                  When civil construction, structural engineering, and interior fitouts are handled
                  under one responsible roof, electrical conduits, recessed lighting junction boxes,
                  commercial HVAC sleeves, and plumbing drops are cast directly into the concrete
                  shell—eliminating wall breaking, structural patching, and budget waste later.
                </p>
                <p className="text-[16px] leading-relaxed text-[#68645D] mb-8 font-sans">
                  Whether building a high-profile retail showroom, a medical clinic, or an independent
                  residence, our unified team ensures structural precision matches architectural aesthetics
                  throughout the build cycle.
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
                <div className="p-8 sm:p-10 rounded-[24px] bg-[#F6F3EB] border border-[#E7E0D4] shadow-sm space-y-6">
                  <div className="flex items-center gap-3 text-[#B08A52]">
                    <Layers size={22} />
                    <span className="text-[12px] font-sans font-semibold uppercase tracking-wider text-[#171714]">
                      Turnkey Civil Synergy
                    </span>
                  </div>

                  <h3 className="font-serif text-[22px] font-bold text-[#171714]">
                    Zero Inter-Contractor Friction
                  </h3>

                  <ul className="space-y-3 text-[14px] text-[#68645D]">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#B08A52] shrink-0 mt-0.5" />
                      <span>Commercial floor plates engineered for flexible partition reconfigurations</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#B08A52] shrink-0 mt-0.5" />
                      <span>Plumbing drops and drainage cores aligned with sanitary layouts</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#B08A52] shrink-0 mt-0.5" />
                      <span>Concealed electrical lines and 3-phase commercial wiring cast into slabs</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#B08A52] shrink-0 mt-0.5" />
                      <span>Single responsible engineering desk from excavation to final painting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 7: LOCAL SERVICE AREA (GEO / LOCAL SEO)
        =================================================================== */}
        <section
          aria-labelledby="local-geo-heading"
          className="py-20 sm:py-28 bg-[#F6F3EB] border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Left Column: Local Context */}
              <div className="lg:col-span-7">
                <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                  BASED IN NAGERCOIL
                </span>
                <h2
                  id="local-geo-heading"
                  className="font-serif text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-5"
                >
                  Civil &amp; Commercial Construction Across Nagercoil and Kanyakumari District
                </h2>
                <p className="text-[17px] leading-relaxed text-[#68645D] mb-6">
                  SMS Construction is centrally located in Nagercoil, Tamil Nadu, providing complete
                  civil construction, commercial contracting, and structural development across the
                  entire Kanyakumari District. Having our permanent engineering presence in Nagercoil
                  ensures immediate site mobilization, daily quality supervision, and reliable local
                  material sourcing.
                </p>
                <p className="text-[16px] leading-relaxed text-[#68645D] mb-8">
                  We actively manage projects in Nagercoil City, Vadasery, Kottar, Ozhuginasery,
                  Parvathipuram, Suchindram, Theroor, Kanyakumari, Marthandam, Thuckalay, Colachel,
                  Karungal, Kulasekharam, and surrounding regional business centers.
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {geoLocalities.map((place) => (
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
                    <p className="text-[12px] font-mono text-[#B08A52] pt-1">
                      GPS: 8.1833° N, 77.4119° E
                    </p>
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
                      <span className="text-[#77736C]">Site Consultations:</span>
                      <span className="font-medium text-[#171714]">Monday – Saturday</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 8: FAQ (AEO & DIRECT ANSWER KNOWLEDGE BASE)
        =================================================================== */}
        <section
          aria-labelledby="faq-heading"
          className="py-20 sm:py-28 lg:py-32 border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              {/* Left Column: Context & Contact Prompt */}
              <div className="lg:col-span-5">
                <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                  DIRECT ANSWERS &bull; AEO KNOWLEDGE
                </span>
                <h2
                  id="faq-heading"
                  className="font-serif text-[30px] sm:text-[42px] lg:text-[46px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-4"
                >
                  Frequently Asked Questions on Construction
                </h2>
                <p className="text-[16px] sm:text-[17px] text-[#68645D] leading-relaxed mb-8">
                  Authoritative engineering answers regarding our residential, commercial, and
                  industrial building capabilities, DTCP permissions, material standards, and costs in
                  Nagercoil.
                </p>

                <div className="p-6 rounded-[20px] bg-[#F6F3EB] border border-[#E7E0D4] shadow-sm">
                  <h3 className="font-serif text-[18px] font-bold text-[#171714] mb-2">
                    Have architectural drawings or an empty plot ready?
                  </h3>
                  <p className="text-[14px] text-[#68645D] mb-4">
                    Our structural engineering team is available for on-site plot inspections, soil
                    evaluations, and structural feasibility reviews in Nagercoil.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-sans font-semibold text-[14px] text-[#B08A52] hover:text-[#80633D] transition-colors"
                  >
                    <span>Schedule an On-Site Consultation</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* Right Column: Accessible Light Accordion */}
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
            SECTION 9: FINAL LEAD CTA
        =================================================================== */}
        <section
          aria-label="Start Your Construction Project"
          className="relative overflow-hidden py-24 sm:py-32 bg-[#171614] text-white"
        >
          {/* Subtle Ambient Radial Accent */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#B08A52]/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-[980px] mx-auto px-5 sm:px-8 text-center">
            <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.25em] uppercase text-[#FBE18D] mb-4">
              START YOUR CONSTRUCTION PROJECT
            </span>

            <h2 className="font-serif text-[34px] sm:text-[48px] lg:text-[56px] font-bold text-[#FAF8F3] leading-[1.14] tracking-tight mb-6">
              Planning a residential, commercial, or civil build in Nagercoil?
            </h2>

            <p className="text-[17px] sm:text-[19px] leading-relaxed text-[#FAF8F3]/80 max-w-[680px] mx-auto mb-10 font-sans">
              Connect with our senior civil engineering team to review your plot, discuss requirements,
              and receive a transparent, itemized Bill of Quantities (BOQ).
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#FBE18D] hover:bg-[#FCD372] text-[#171614] font-sans font-semibold text-[15px] transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <span>Get a Free Quote &amp; BOQ</span>
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
                href={`https://wa.me/${whatsappNumber}?text=Hello%2C%20I%20would%20like%20to%20consult%20regarding%20construction%20in%20Nagercoil.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-[#25D366] bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white font-sans text-[15px] transition-all duration-200"
              >
                <MessageSquare size={16} />
                <span>WhatsApp</span>
              </a>
            </div>

            <p className="mt-10 text-[13px] text-white/50 tracking-wide font-sans">
              SMS Construction &bull; Civil Engineering &amp; Building Contractors &bull; Nagercoil, Tamil Nadu
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
