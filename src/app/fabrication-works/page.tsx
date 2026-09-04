import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  MessageSquare,
  CheckCircle2,
  Hammer,
  Maximize2,
  Layers,
  Sparkles,
  Shield,
  Ruler,
  Compass,
} from "lucide-react";
import {
  fabricationCategories,
  fabricationProcessSteps,
  fabricationDetailPillars,
  fabricationAudienceScenarios,
  fabricationFaqs,
} from "@/data/fabricationWorks";
import ServiceFaqAccordion from "../services/components/ServiceFaqAccordion";

export const metadata: Metadata = {
  title: "Fabrication Works in Nagercoil | SMS Construction",
  description:
    "Explore custom fabrication works from SMS Construction in Nagercoil, integrated with interior and construction projects where required.",
  alternates: {
    canonical: "/fabrication-works",
  },
  openGraph: {
    title: "Fabrication Works in Nagercoil | SMS Construction",
    description:
      "Explore custom fabrication works from SMS Construction in Nagercoil, integrated with interior and construction projects where required.",
    url: "https://smsconstruction.in/fabrication-works",
    siteName: "SMS Construction",
    images: [
      {
        url: "/images/services/fabrication.jpg",
        width: 1200,
        height: 630,
        alt: "Custom architectural metalwork and fabrication elements in Nagercoil by SMS Construction",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fabrication Works in Nagercoil | SMS Construction",
    description:
      "Explore custom fabrication works from SMS Construction in Nagercoil, integrated with interior and construction projects where required.",
    images: ["/images/services/fabrication.jpg"],
  },
};

export default function FabricationWorksPage() {
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
        name: "Fabrication Works",
        item: "https://smsconstruction.in/fabrication-works",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fabrication Works",
    serviceType: "Architectural & Interior Custom Fabrication",
    provider: {
      "@type": "LocalBusiness",
      name: "SMS Construction",
      address: {
        "@type": "PostalAddress",
        streetAddress: "25/1 Muthamizh Street, Near Court Road",
        addressLocality: "Nagercoil",
        addressRegion: "Tamil Nadu",
        postalCode: "629001",
        addressCountry: "IN",
      },
      telephone: "+919488021183",
      url: "https://smsconstruction.in",
    },
    areaServed: {
      "@type": "City",
      name: "Nagercoil",
    },
    description:
      "Custom architectural metalwork, decorative partitions, stair railings, custom frames, and interior fabrication integrated with construction and interior projects in Nagercoil.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Fabrication Works Offerings",
      itemListElement: fabricationCategories.map((cat, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: cat.title,
          description: cat.description,
        },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: fabricationFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="bg-[#FAF8F3] text-[#171614] min-h-screen selection:bg-[#B08A52]/20 selection:text-[#171614]">
      {/* Schema Injection */}
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

      {/* SECTION 1: HERO */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 border-b border-[#E7E0D4] overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Breadcrumb Navigation & Hub Link */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center flex-wrap gap-2 text-xs uppercase tracking-widest text-[#77736C]">
                <li>
                  <Link
                    href="/"
                    className="hover:text-[#B08A52] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B08A52]"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-[#E7E0D4]">
                  /
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-[#B08A52] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B08A52]"
                  >
                    Services
                  </Link>
                </li>
                <li aria-hidden="true" className="text-[#E7E0D4]">
                  /
                </li>
                <li className="text-[#171614] font-medium" aria-current="page">
                  Fabrication Works
                </li>
              </ol>
            </nav>

            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#77736C] hover:text-[#B08A52] transition-colors duration-200"
            >
              <span>&larr; Services</span>
            </Link>
          </div>

          {/* Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#171614]/5 border border-[#E7E0D4] mb-6">
                  <Hammer className="w-3.5 h-3.5 text-[#B08A52]" />
                  <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#77736C]">
                    FABRICATION WORKS
                  </span>
                </div>

                {/* H1 */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#171614] tracking-tight leading-[1.1] mb-6">
                  Custom Fabrication Works for Your Space
                </h1>

                {/* Supporting Copy */}
                <p className="text-lg sm:text-xl text-[#77736C] font-light leading-relaxed max-w-2xl mb-8">
                  Purpose-built elements that bring together design, function and the practical
                  requirements of a project.
                </p>

                {/* Primary & Secondary CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#171614] text-[#FAF8F3] text-sm uppercase tracking-widest font-medium rounded-sm hover:bg-[#B08A52] transition-colors duration-300 shadow-sm group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A52]"
                  >
                    <span>Discuss a Fabrication Project</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-transparent text-[#171614] border border-[#E7E0D4] text-sm uppercase tracking-widest font-medium rounded-sm hover:border-[#171614] hover:bg-[#171614]/5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A52]"
                  >
                    <span>Explore Our Work</span>
                  </Link>
                </div>
              </div>

              {/* Technical Specifications Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-12 mt-12 border-t border-[#E7E0D4]">
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-widest text-[#77736C] mb-1">
                    Execution Method
                  </span>
                  <p className="text-sm font-medium text-[#171614]">Custom Made-to-Measure</p>
                </div>
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-widest text-[#77736C] mb-1">
                    Integration
                  </span>
                  <p className="text-sm font-medium text-[#171614]">Civil &amp; Interior Works</p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="block text-[11px] font-mono uppercase tracking-widest text-[#77736C] mb-1">
                    Location
                  </span>
                  <p className="text-sm font-medium text-[#171614]">Nagercoil, Tamil Nadu</p>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] rounded-sm overflow-hidden border border-[#E7E0D4] bg-[#E7E0D4]/30 shadow-md group">
                <Image
                  src="/images/services/fabrication.jpg"
                  alt="Custom architectural metalwork and fabrication elements in Nagercoil"
                  width={800}
                  height={1000}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="w-full h-full object-cover grayscale-[15%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171614]/75 via-transparent to-transparent opacity-90" />
                
                {/* Visual Label */}
                <div className="absolute bottom-6 left-6 right-6 text-[#FAF8F3]">
                  <p className="text-xs font-mono uppercase tracking-widest text-[#B08A52] mb-1">
                    Architectural Fabrication
                  </p>
                  <p className="text-sm font-light text-[#FAF8F3]/90">
                    Bespoke metalwork and customized architectural accents crafted for Nagercoil projects.
                  </p>
                </div>

                {/* Workshop Quality Badge */}
                <div className="absolute top-4 right-4 bg-[#171614]/80 backdrop-blur-sm border border-[#FAF8F3]/10 px-3 py-1.5 rounded-sm">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#FAF8F3]/90">
                    Workshop &bull; On-Site Fitting
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FABRICATION AS PART OF THE PROJECT */}
      <section className="py-20 lg:py-28 border-b border-[#E7E0D4] bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#B08A52] block mb-4">
              DESIGNED TO FIT
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#171614] tracking-tight leading-tight mb-8">
              Fabrication that belongs to the space.
            </h2>
            <div className="space-y-6 text-base sm:text-lg text-[#77736C] font-light leading-relaxed">
              <p>
                Custom-fabricated elements are most effective when developed as part of a broader
                architectural or interior vision. Instead of forcing standard retail components into
                unique room dimensions, bespoke fabrication allows dimensions, mounting details,
                and profiles to be configured specifically for the site&apos;s physical tolerances.
              </p>
              <p>
                From boundary gates that reflect the building facade to fluted living room screens
                coordinated with ceiling drops, custom fabrication bridges the gap between raw
                structural civil work and refined interior living. The result is seamless fit,
                tactile solidity, and a finish that belongs naturally to the space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT WE FABRICATE (CUSTOM ELEMENTS FOR THE PROJECT) */}
      <section className="py-20 lg:py-28 border-b border-[#E7E0D4] bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#B08A52] block mb-3">
                EDITORIAL DIRECTORY
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#171614] tracking-tight">
                Custom Elements for the Project
              </h2>
            </div>
            <p className="text-sm text-[#77736C] max-w-md font-light">
              A curated range of made-to-measure metalwork, spatial partitions, and interior
              sub-frameworks designed and fitted for residential and commercial environments.
            </p>
          </div>

          {/* Asymmetric Editorial List */}
          <div className="space-y-8">
            {fabricationCategories.map((category, idx) => (
              <div
                key={category.id}
                className="bg-[#FFFFFF] p-8 lg:p-10 rounded-sm border border-[#E7E0D4] hover:border-[#B08A52] transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Column 1: Number, Title & Material Focus */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-mono text-[#B08A52] font-light">
                        {category.number}
                      </span>
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#77736C]">
                        Scope
                      </span>
                    </div>
                    <h3 className="text-2xl font-light text-[#171614] group-hover:text-[#B08A52] transition-colors mb-2">
                      {category.title}
                    </h3>
                    <div className="inline-block text-xs font-mono text-[#B08A52] bg-[#FAF8F3] border border-[#E7E0D4] px-2.5 py-1 rounded-sm">
                      {category.materialFocus}
                    </div>
                  </div>

                  {/* Column 2: Narrative Description & Details */}
                  <div className={category.image ? "lg:col-span-5" : "lg:col-span-8"}>
                    <p className="text-base text-[#77736C] font-light leading-relaxed mb-6">
                      {category.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-[#E7E0D4]/70">
                      {category.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs text-[#171614]/80 font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B08A52] shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 3: Asset Preview (when available) */}
                  {category.image && (
                    <div className="lg:col-span-3">
                      <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#E7E0D4] bg-[#FAF8F3]">
                        <Image
                          src={category.image}
                          alt={category.alt || category.title}
                          width={400}
                          height={300}
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: FROM MEASUREMENT TO INSTALLATION (OUR FABRICATION PROCESS) */}
      <section className="py-20 lg:py-28 border-b border-[#E7E0D4] bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#B08A52] block mb-3">
              OUR FABRICATION PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#171614] tracking-tight mb-4">
              Measure. Make. Fit. Finish.
            </h2>
            <p className="text-base text-[#77736C] font-light leading-relaxed">
              A disciplined progression from on-ground dimension verification to workshop crafting,
              multi-coat surface treatment, and careful on-site installation.
            </p>
          </div>

          {/* Process Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            {fabricationProcessSteps.map((step) => (
              <div
                key={step.number}
                className="p-6 rounded-sm border border-[#E7E0D4] bg-[#FAF8F3] hover:border-[#B08A52] transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-mono text-[#B08A52] font-light">
                      {step.number}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#77736C]">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-medium text-[#171614] mb-1 group-hover:text-[#B08A52] transition-colors">
                    {step.title}
                  </h3>

                  <div className="text-[11px] font-mono text-[#B08A52] uppercase tracking-wider mb-3">
                    {step.action}
                  </div>

                  <p className="text-xs text-[#77736C] font-light leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E7E0D4]/70 mt-auto">
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-[#77736C] mb-1">
                    On-Site Role
                  </span>
                  <p className="text-xs font-medium text-[#171614]">{step.siteRole}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: DETAILS MATTER (CRAFT & DETAIL) */}
      <section className="py-20 lg:py-28 border-b border-[#E7E0D4] bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
            <div className="lg:col-span-7">
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#B08A52] block mb-3">
                CRAFT &amp; DETAIL
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#171614] tracking-tight leading-tight mb-6">
                The finish is part of the design.
              </h2>
              <p className="text-base sm:text-lg text-[#77736C] font-light leading-relaxed">
                The difference between ordinary metal contracting and architectural fabrication lies in
                the transitions. Smooth ground joints, balanced visual weights, deburred perimeter
                edges, and durable multi-coat finishes ensure that custom features feel refined and
                permanent.
              </p>
            </div>

            <div className="lg:col-span-5 flex items-center justify-end">
              <div className="relative aspect-[4/3] w-full max-w-md rounded-sm overflow-hidden border border-[#E7E0D4] shadow-sm">
                <Image
                  src="/images/screen5_detail.jpg"
                  alt="Architectural fabrication detail and joinery finish by SMS Construction"
                  width={600}
                  height={450}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-[#171614]/80 backdrop-blur-sm px-3 py-1 rounded-sm text-[11px] font-mono text-[#FAF8F3]">
                  Craft Detail &bull; Joinery Transition
                </div>
              </div>
            </div>
          </div>

          {/* Detail Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fabricationDetailPillars.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-[#FFFFFF] p-6 rounded-sm border border-[#E7E0D4] hover:shadow-sm transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[#B08A52] uppercase tracking-widest">
                      Detail {pillar.number}
                    </span>
                    <span className="text-[11px] font-mono text-[#77736C] bg-[#FAF8F3] px-2 py-0.5 rounded-sm border border-[#E7E0D4]">
                      {pillar.focus}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-[#171614] mb-2">{pillar.title}</h3>
                  <p className="text-xs text-[#77736C] font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FABRICATION + INTERIOR DESIGN (CROSS-SERVICE ARCHITECTURE) */}
      <section className="py-20 lg:py-28 border-b border-[#E7E0D4] bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#B08A52] block mb-3">
              CROSS-DISCIPLINE SYNERGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#171614] tracking-tight mb-4">
              Built to work with the interior.
            </h2>
            <p className="text-base text-[#77736C] font-light leading-relaxed">
              When custom fabrication is planned alongside interior design, metal and joinery elements
              align naturally with false ceilings, electrical conduits, and surrounding cabinetry
              without requiring destructive on-site modifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-sm bg-[#FAF8F3] border border-[#E7E0D4]">
              <span className="text-xs font-mono text-[#B08A52] uppercase tracking-widest block mb-2">
                01 / Partitions &amp; Dividers
              </span>
              <h3 className="text-lg font-light text-[#171614] mb-3">Zoned Living Spaces</h3>
              <p className="text-xs text-[#77736C] font-light leading-relaxed mb-6">
                Decorative fluted screens and metal-profiled room dividers separate living, dining,
                and prayer spaces while allowing natural airflow and light to filter through.
              </p>
              <Link
                href="/interior-design#false-ceiling"
                className="inline-flex items-center gap-1 text-xs uppercase tracking-widest font-medium text-[#B08A52] hover:text-[#171614] transition-colors"
              >
                <span>View Ceiling &amp; Screen Integrations</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-sm bg-[#FAF8F3] border border-[#E7E0D4]">
              <span className="text-xs font-mono text-[#B08A52] uppercase tracking-widest block mb-2">
                02 / Media &amp; Wall Backing
              </span>
              <h3 className="text-lg font-light text-[#171614] mb-3">Concealed Strength</h3>
              <p className="text-xs text-[#77736C] font-light leading-relaxed mb-6">
                Rigid internal metal frameworks anchor heavy stone slabs, TV units, and cantilevered
                consoles securely into concrete without exposing screws or sagging over time.
              </p>
              <Link
                href="/interior-design#tv-unit"
                className="inline-flex items-center gap-1 text-xs uppercase tracking-widest font-medium text-[#B08A52] hover:text-[#171614] transition-colors"
              >
                <span>View TV Unit Joinery</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-sm bg-[#FAF8F3] border border-[#E7E0D4]">
              <span className="text-xs font-mono text-[#B08A52] uppercase tracking-widest block mb-2">
                03 / Architectural Enclosures
              </span>
              <h3 className="text-lg font-light text-[#171614] mb-3">Flush Wall Transitions</h3>
              <p className="text-xs text-[#77736C] font-light leading-relaxed mb-6">
                Custom metal surrounds and door sub-frames coordinate with masonry lines and tile
                edges to create shadow reveals and clean flush architectural boundaries.
              </p>
              <Link
                href="/construction"
                className="inline-flex items-center gap-1 text-xs uppercase tracking-widest font-medium text-[#B08A52] hover:text-[#171614] transition-colors"
              >
                <span>View Construction Coordination</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: REAL PROJECT PROOF */}
      <section className="py-20 lg:py-28 border-b border-[#E7E0D4] bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#E7E0D4] bg-[#FFFFFF] shadow-sm group">
                <Image
                  src="/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-decorative-partition.webp"
                  alt="Custom fabricated fluted decorative partition dividing the living and foyer at Nagarajan Residence in Theroor, Nagercoil"
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171614]/65 via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-5 left-5 right-5 text-[#FAF8F3]">
                  <p className="text-xs font-mono uppercase tracking-widest text-[#B08A52] mb-1">
                    Finished Project Proof
                  </p>
                  <p className="text-sm font-light text-[#FAF8F3]">
                    Nagarajan Residence &mdash; Theroor, Nagercoil
                  </p>
                </div>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-6">
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#B08A52] block mb-3">
                FROM OUR PROJECTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#171614] tracking-tight leading-tight mb-6">
                See the Finished Work
              </h2>
              <p className="text-base sm:text-lg text-[#77736C] font-light leading-relaxed mb-6">
                At the Nagarajan Residence in Theroor, our team designed, fabricated, and installed
                a custom vertical fluted screen to demarcate the foyer from the main living area.
              </p>
              <p className="text-sm sm:text-base text-[#77736C] font-light leading-relaxed mb-8">
                Measuring exact floor-to-ceiling heights after floor tiling allowed the screen to be
                anchored securely with concealed top and bottom fixings, providing clean visual
                separation while preserving natural ambient light across the home.
              </p>

              {/* Verified Project Attributes */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#E7E0D4] mb-8">
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-widest text-[#77736C] mb-1">
                    Fabricated Item
                  </span>
                  <p className="text-sm font-medium text-[#171614]">Floor-to-Ceiling Fluted Screen</p>
                </div>
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-widest text-[#77736C] mb-1">
                    Spatial Role
                  </span>
                  <p className="text-sm font-medium text-[#171614]">Foyer &amp; Living Room Division</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/projects/nagarajan-residence-nagercoil-theroor"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#171614] text-[#FAF8F3] text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-[#B08A52] transition-colors group"
                >
                  <span>View Full Project Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-medium text-[#171614] hover:text-[#B08A52] transition-colors px-4 py-3.5"
                >
                  <span>All Projects</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: WHO THIS IS FOR */}
      <section className="py-20 lg:py-28 border-b border-[#E7E0D4] bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#B08A52] block mb-3">
              PRACTICAL FIT
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#171614] tracking-tight mb-4">
              When Custom Fabrication Makes Sense
            </h2>
            <p className="text-base text-[#77736C] font-light leading-relaxed">
              Standard retail elements rarely match the exact architectural nuances of a bespoke home.
              Here is when custom fabrication delivers the highest value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fabricationAudienceScenarios.map((scenario) => (
              <div
                key={scenario.number}
                className="p-6 rounded-sm border border-[#E7E0D4] bg-[#FAF8F3] hover:border-[#B08A52] transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-[#B08A52] uppercase tracking-widest block mb-2">
                    Scenario {scenario.number}
                  </span>
                  <h3 className="text-lg font-light text-[#171614] mb-3">{scenario.title}</h3>
                  <p className="text-xs text-[#77736C] font-light leading-relaxed mb-6">
                    {scenario.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E7E0D4]/70">
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-[#77736C] mb-1">
                    Our Solution
                  </span>
                  <p className="text-xs font-medium text-[#171614]">{scenario.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: LOCAL SEO (BASED IN NAGERCOIL) */}
      <section className="py-20 lg:py-28 border-b border-[#E7E0D4] bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#B08A52] block mb-3">
                BASED IN NAGERCOIL
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#171614] tracking-tight leading-tight mb-6">
                Fabrication Works in Nagercoil
              </h2>
              <div className="space-y-4 text-base text-[#77736C] font-light leading-relaxed max-w-2xl mb-8">
                <p>
                  SMS Construction is based in Nagercoil, Tamil Nadu, providing fabrication-related
                  services as part of its construction and interior projects within its actual
                  service area across Kanyakumari district.
                </p>
                <p>
                  Our workshop and site-fitting teams operate locally, enabling fast site measurements,
                  accurate trial fittings, and responsive aftercare for homeowners and commercial
                  clients across Nagercoil and neighboring regions.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#FFFFFF] rounded-sm border border-[#E7E0D4]">
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-[#77736C] mb-1">
                    Studio Location
                  </span>
                  <p className="text-xs text-[#171614] font-medium leading-relaxed">
                    25/1 Muthamizh Street, Near Court Road, Nagercoil, Tamil Nadu 629001
                  </p>
                </div>
                <div className="p-4 bg-[#FFFFFF] rounded-sm border border-[#E7E0D4]">
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-[#77736C] mb-1">
                    Direct Contact
                  </span>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="text-xs text-[#171614] font-medium hover:text-[#B08A52] transition-colors block"
                  >
                    {formattedPhone}
                  </a>
                  <a
                    href="mailto:smsconstructionngl@gmail.com"
                    className="text-xs text-[#77736C] hover:text-[#B08A52] transition-colors block mt-0.5"
                  >
                    smsconstructionngl@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#FFFFFF] p-8 rounded-sm border border-[#E7E0D4] shadow-sm">
              <span className="text-xs font-mono tracking-widest uppercase text-[#B08A52] block mb-2">
                Custom Requirements
              </span>
              <h3 className="text-xl font-light text-[#171614] mb-4">
                Discuss Your Fabrication Idea
              </h3>
              <p className="text-xs text-[#77736C] font-light leading-relaxed mb-6">
                Have a reference photo, rough sketch, or specific room dimension? Our team can evaluate
                feasibility, material options, and mounting details for your project.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-xs text-[#171614]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B08A52]" />
                  <span>On-site dimension verification</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#171614]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B08A52]" />
                  <span>Coordinated with civil &amp; interior finishes</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#171614]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B08A52]" />
                  <span>Careful delivery and on-site fitting</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#171614] text-[#FAF8F3] text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-[#B08A52] transition-colors"
              >
                <span>Request a Custom Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: FAQ */}
      <section className="py-20 lg:py-28 border-b border-[#E7E0D4] bg-[#FFFFFF]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#B08A52] block mb-3">
              ANSWERS &amp; DETAILS
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#171614] tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-[#77736C] font-light max-w-xl mx-auto">
              Clear answers regarding custom fabrication, materials, interior integration, and
              consultations in Nagercoil.
            </p>
          </div>

          <ServiceFaqAccordion items={fabricationFaqs} />
        </div>
      </section>

      {/* SECTION 11: FINAL LEAD CTA */}
      <section className="py-20 lg:py-28 bg-[#171614] text-[#FAF8F3] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#B08A52] block mb-4">
              START A CUSTOM PROJECT
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-[#FAF8F3] tracking-tight leading-tight mb-6">
              Have something specific in mind?
            </h2>
            <p className="text-base sm:text-lg text-[#FAF8F3]/70 font-light leading-relaxed mb-10 max-w-2xl">
              Tell us what you need fabricated, where it will be used, and what you have in mind.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#B08A52] text-[#FAF8F3] text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-[#FFFFFF] hover:text-[#171614] transition-colors duration-300"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center gap-2 px-6 py-4 bg-transparent border border-[#FAF8F3]/20 text-[#FAF8F3] text-xs uppercase tracking-widest font-medium rounded-sm hover:border-[#FAF8F3] hover:bg-[#FAF8F3]/10 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#B08A52]" />
                <span>Call {formattedPhone}</span>
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-[#25D366]/20 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DISCIPLINE HUB BAR (Cross-service architecture navigation) */}
      <section className="py-8 bg-[#FAF8F3] border-t border-[#E7E0D4]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#77736C]">
              Service Architecture:
            </span>
            <div className="flex items-center flex-wrap gap-4 sm:gap-6 text-xs uppercase tracking-wider font-medium">
              <Link
                href="/services"
                className="text-[#77736C] hover:text-[#B08A52] transition-colors"
              >
                Services Hub
              </Link>
              <span className="text-[#E7E0D4]">&bull;</span>
              <Link
                href="/interior-design"
                className="text-[#77736C] hover:text-[#B08A52] transition-colors"
              >
                Interior Design
              </Link>
              <span className="text-[#E7E0D4]">&bull;</span>
              <Link
                href="/construction"
                className="text-[#77736C] hover:text-[#B08A52] transition-colors"
              >
                Construction
              </Link>
              <span className="text-[#E7E0D4]">&bull;</span>
              <Link
                href="/design-planning"
                className="text-[#77736C] hover:text-[#B08A52] transition-colors"
              >
                Design &amp; Planning
              </Link>
              <span className="text-[#E7E0D4]">&bull;</span>
              <Link
                href="/survey-approvals"
                className="text-[#77736C] hover:text-[#B08A52] transition-colors"
              >
                Survey &amp; Approvals
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
