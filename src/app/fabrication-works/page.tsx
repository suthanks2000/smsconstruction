import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  MessageSquare,
  CheckCircle2,
  Hammer,
  Layers,
  Ruler,
  Compass,
  Sparkles,
} from "lucide-react";
import {
  fabricationServices,
  materialComparison,
  fabricationProcessSteps,
  fabricationContextCategories,
  fabricationQualityDetails,
  fabricationFaqs,
} from "@/data/fabricationWorks";
import { geoLocalities } from "@/data/geo";
import ModernFaq from "@/components/ModernFaq";
import LocalServiceArea from "@/components/LocalServiceArea";
import ConversionCTA from "@/components/ConversionCTA";

export const metadata: Metadata = {
  title: "ACP, Steel & Aluminium Fabrication in Nagercoil | SMS Construction",
  description:
    "Explore ACP, steel and aluminium fabrication services from SMS Construction in Nagercoil, Tamil Nadu, for architectural, construction and interior project requirements.",
  alternates: {
    canonical: "/fabrication-works",
  },
  openGraph: {
    title: "ACP, Steel & Aluminium Fabrication in Nagercoil | SMS Construction",
    description:
      "Explore ACP, steel and aluminium fabrication services from SMS Construction in Nagercoil, Tamil Nadu, for architectural, construction and interior project requirements.",
    url: "https://smsconstruction.in/fabrication-works",
    siteName: "SMS Construction",
    images: [
      {
        url: "/images/services/fabrication-works-hero.webp",
        width: 1200,
        height: 630,
        alt: "Real ACP fabrication and architectural panel installation project in Kanyakumari district, Tamil Nadu by SMS Construction",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ACP, Steel & Aluminium Fabrication in Nagercoil | SMS Construction",
    description:
      "Explore ACP, steel and aluminium fabrication services from SMS Construction in Nagercoil, Tamil Nadu, for architectural, construction and interior project requirements.",
    images: ["/images/services/fabrication-works-hero.webp"],
  },
};

export default function FabricationWorksPage() {
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
        name: "Fabrication Works",
        item: "https://smsconstruction.in/fabrication-works",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Architectural Fabrication Services",
    serviceType: "ACP, Steel & Aluminium Architectural Fabrication",
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
      name: "Fabrication Services",
      itemListElement: fabricationServices.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
        position: index + 1,
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
            SECTION 1: HERO
            Premium fabrication-focused hero over full-bleed real WebP image
        =================================================================== */}
        <section
          data-header-theme="dark"
          aria-label="Fabrication Works Hero"
          className="relative w-full min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-between pt-20 pb-4 sm:pt-22 sm:pb-5 lg:pt-22 lg:pb-4 bg-[#171714] text-white overflow-hidden border-b border-[#2A2925]"
        >
          {/* Full-Bleed Local WebP Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <Image
              src="/images/services/fabrication-works-hero.webp"
              alt="Real ACP fabrication and architectural panel installation project in Kanyakumari district, Tamil Nadu by SMS Construction"
              fill
              loading="lazy"
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Soft architectural gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#171714]/80 via-[#171714]/50 to-[#171714]/15" />
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
                Architectural Fabrication in Nagercoil<span className="text-[#e3c381]">.</span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-[14.5px] sm:text-[15.5px] lg:text-[16.5px] leading-[1.65] sm:leading-[1.7] text-white/90 max-w-2xl mb-7 sm:mb-8 lg:mb-9 font-sans">
                From ACP detailing to steel and aluminium fabrication, we create practical fabricated
                elements designed to integrate with construction and interior spaces.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-3.5 lg:gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto group relative overflow-hidden inline-flex items-center justify-center gap-2.5 min-h-[48px] sm:min-h-[50px] px-7 py-3 rounded-full bg-gradient-to-r from-[#e3c381] to-[#C89A47] text-[#171714] font-sans font-semibold text-[13.5px] sm:text-[14.5px] hover:shadow-lg hover:shadow-[#C89A47]/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-out text-center shadow-md"
                >
                  <span>Discuss Your Fabrication Project</span>
                  <ArrowRight size={15} />
                </Link>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Hello%20SMS%20Construction%2C%20I%20would%20like%20to%20discuss%20a%20fabrication%20requirement%20for%20my%20property.`}
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

            {/* Architectural Fabrication Footnote */}
            <div className="w-full pt-3.5 sm:pt-4 pb-1 border-t border-white/15 grid grid-cols-2 gap-x-4 gap-y-2 sm:flex sm:flex-wrap sm:items-center sm:justify-start sm:gap-x-5 lg:gap-x-6 sm:gap-y-2 text-[11.5px] sm:text-[12px] lg:text-[12.5px] mt-auto">
              <span className="flex items-center gap-1.5 font-medium text-white">
                <Layers size={13} className="text-[#e3c381] shrink-0" />
                <span>ACP Works</span>
              </span>
              <span className="hidden sm:inline-block text-white/30">•</span>
              <span className="flex items-center gap-1.5 text-white/80">
                <Hammer size={13} className="text-[#e3c381] shrink-0" />
                <span>Steel Fabrication</span>
              </span>
              <span className="hidden sm:inline-block text-white/30">•</span>
              <span className="flex items-center gap-1.5 text-white/80">
                <Ruler size={13} className="text-[#e3c381] shrink-0" />
                <span>Aluminium Fabrication</span>
              </span>
              <span className="hidden sm:inline-block text-white/30">•</span>
              <span className="flex items-center gap-1.5 text-white/80">
                <Compass size={13} className="text-[#e3c381] shrink-0" />
                <span>Site-Coordinated Detailing</span>
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
                  <span>BUILT WITH PRECISION</span>
                </div>
                <h2
                  id="intro-heading"
                  className="text-[28px] sm:text-[38px] lg:text-[44px] font-bold text-[#171714] leading-[1.15] tracking-tight"
                >
                  Fabrication that becomes part of the architecture<span className="text-[#B08A52]">.</span>
                </h2>
              </div>

              {/* Right Column: Narrative & Clarity Points */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-[15.5px] sm:text-[16.5px] leading-relaxed text-[#68645D] font-sans pt-1">
                <p>
                  Fabricated elements need to work with the surrounding structure, finishes and
                  intended use. Our fabrication services cover ACP, steel and aluminium requirements
                  based on the scope of each project.
                </p>
                <p>
                  Rather than treating fabrication as an isolated welding task, SMS Construction
                  coordinates measurements, surface pre-treatments, and structural anchor zones
                  directly with ongoing civil construction and interior finishing workflows.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                  {[
                    {
                      label: "Architectural Fit",
                      desc: "Profiles planned to align cleanly with surrounding surfaces.",
                    },
                    {
                      label: "Material Focus",
                      desc: "Appropriate metal alloys and composite panels selected for longevity.",
                    },
                    {
                      label: "Site Coordination",
                      desc: "Anchor positions resolved during early construction stages.",
                    },
                  ].map((pillar) => (
                    <div
                      key={pillar.label}
                      className="p-3.5 sm:p-4 rounded-xl bg-[#FAF8F3] border border-[#E7E0D4]"
                    >
                      <h3 className="font-sans font-bold text-[14px] text-[#171714] mb-1">
                        {pillar.label}
                      </h3>
                      <p className="text-[12.5px] text-[#68645D] leading-snug">
                        {pillar.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3: FABRICATION SERVICES (THREE MATERIAL DIRECTIONS)
            Asymmetric, non-identical material-focused editorial layout
        =================================================================== */}
        <section
          id="fabrication-services"
          aria-labelledby="services-heading"
          className="py-16 sm:py-24 bg-[#FAF8F3] border-b border-[#E7E0D4] scroll-mt-28"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Section Header */}
            <div className="max-w-3xl mb-14 sm:mb-18">
              <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                WHAT WE FABRICATE
              </span>
              <h2
                id="services-heading"
                className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#171714] leading-[1.14] tracking-tight mb-4"
              >
                Three Material Directions<span className="text-[#B08A52]">.</span>
              </h2>
              <p className="text-[15.5px] sm:text-[16.5px] text-[#68645D] font-sans leading-relaxed">
                Dedicated fabrication for ACP, steel, and aluminium elements shaped to
                project-specific requirements. Rendered with clear dimensional precision and
                architectural balance.
              </p>
            </div>

            {/* Service 01: ACP Works (Asymmetric Split: Left Image + Right Text) */}
            <article
              id="acp-works"
              aria-labelledby="acp-heading"
              className="mb-16 sm:mb-20 p-6 sm:p-10 lg:p-12 rounded-[28px] bg-white border border-[#E7E0D4] shadow-xs scroll-mt-28"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                <div className="lg:col-span-6 relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-[#E7E0D4] bg-[#171714]">
                  <Image
                    src="/images/services/acp-works.webp"
                    alt="ACP panel fabrication for an architectural project by SMS Construction"
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#171714]/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#e3c381] uppercase tracking-wider">
                    01 • ACP WORKS
                  </div>
                </div>

                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[12px] font-mono font-semibold uppercase tracking-wider text-[#B08A52] block mb-2">
                      COMPOSITE PANEL SYSTEMS
                    </span>
                    <h3
                      id="acp-heading"
                      className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#171714] tracking-tight leading-tight mb-4"
                    >
                      ACP Works
                    </h3>
                    <p className="text-[15px] sm:text-[16px] text-[#68645D] leading-relaxed font-sans mb-6">
                      ACP fabrication for architectural and project-specific applications where
                      lightweight panel systems and clean finished surfaces are required.
                    </p>

                    <div className="space-y-3 mb-8">
                      {fabricationServices[0].considerations.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-[#B08A52] shrink-0 mt-0.5" />
                          <span className="text-[13.5px] sm:text-[14px] text-[#171714] font-sans">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#171714] hover:text-[#B08A52] transition-colors"
                  >
                    <span>Consult on ACP Works</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </article>

            {/* Service 02: Steel Fabrication (Reverse Split: Left Text + Right Image) */}
            <article
              id="steel-fabrication"
              aria-labelledby="steel-heading"
              className="mb-16 sm:mb-20 p-6 sm:p-10 lg:p-12 rounded-[28px] bg-white border border-[#E7E0D4] shadow-xs scroll-mt-28"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[12px] font-mono font-semibold uppercase tracking-wider text-[#B08A52] block mb-2">
                      METAL FRAMING &amp; COMPONENTS
                    </span>
                    <h3
                      id="steel-heading"
                      className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#171714] tracking-tight leading-tight mb-4"
                    >
                      Steel Fabrication
                    </h3>
                    <p className="text-[15px] sm:text-[16px] text-[#68645D] leading-relaxed font-sans mb-4">
                      Steel fabrication for project requirements where strength, structure or custom
                      fabricated elements form part of the design and construction scope.
                    </p>

                    {/* Engineering Note */}
                    <div className="p-4 rounded-xl bg-[#FAF8F3] border border-[#E7E0D4] text-[13px] text-[#68645D] font-sans mb-6">
                      <strong className="text-[#171714] font-semibold block mb-0.5">
                        Scope Clarity:
                      </strong>
                      Not every steel fabrication element is load-bearing. Where a project requires
                      engineered structural steel, structural calculations and formal approvals are
                      distinctly coordinated.
                    </div>

                    <div className="space-y-3 mb-8">
                      {fabricationServices[1].considerations.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-[#B08A52] shrink-0 mt-0.5" />
                          <span className="text-[13.5px] sm:text-[14px] text-[#171714] font-sans">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#171714] hover:text-[#B08A52] transition-colors"
                  >
                    <span>Consult on Steel Fabrication</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>

                <div className="lg:col-span-6 order-1 lg:order-2 relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-[#E7E0D4] bg-[#171714]">
                  <Image
                    src="/images/services/steel-fabrication.webp"
                    alt="Steel fabrication work at a construction site by SMS Construction"
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#171714]/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#e3c381] uppercase tracking-wider">
                    02 • STEEL FABRICATION
                  </div>
                </div>
              </div>
            </article>

            {/* Service 03: Aluminium Fabrication (Split with Lighter Technical Detail) */}
            <article
              id="aluminium-fabrication"
              aria-labelledby="aluminium-heading"
              className="p-6 sm:p-10 lg:p-12 rounded-[28px] bg-white border border-[#E7E0D4] shadow-xs scroll-mt-28"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                <div className="lg:col-span-6 relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-[#E7E0D4] bg-[#171714]">
                  <Image
                    src="/images/services/aluminium-fabrication.webp"
                    alt="Aluminium fabrication detail for an architectural project by SMS Construction"
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#171714]/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#e3c381] uppercase tracking-wider">
                    03 • ALUMINIUM FABRICATION
                  </div>
                </div>

                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[12px] font-mono font-semibold uppercase tracking-wider text-[#B08A52] block mb-2">
                      LIGHTWEIGHT ARCHITECTURAL PROFILES
                    </span>
                    <h3
                      id="aluminium-heading"
                      className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#171714] tracking-tight leading-tight mb-4"
                    >
                      Aluminium Fabrication
                    </h3>
                    <p className="text-[15px] sm:text-[16px] text-[#68645D] leading-relaxed font-sans mb-6">
                      Aluminium fabrication for lightweight architectural and project-specific elements
                      where the material suits the design and application.
                    </p>

                    <div className="space-y-3 mb-8">
                      {fabricationServices[2].considerations.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-[#B08A52] shrink-0 mt-0.5" />
                          <span className="text-[13.5px] sm:text-[14px] text-[#171714] font-sans">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#171714] hover:text-[#B08A52] transition-colors"
                  >
                    <span>Consult on Aluminium Fabrication</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ===================================================================
            SECTION 4: MATERIAL COMPARISON
            Compact AEO-friendly decision guide (no single material is best)
        =================================================================== */}
        <section
          aria-labelledby="comparison-heading"
          className="py-16 sm:py-24 bg-white border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                CHOOSING THE MATERIAL
              </span>
              <h2
                id="comparison-heading"
                className="text-[28px] sm:text-[38px] lg:text-[44px] font-bold text-[#171714] leading-[1.16] tracking-tight mb-4"
              >
                Which fabrication material fits your project?
              </h2>
              <p className="text-[15.5px] sm:text-[16.5px] text-[#68645D] font-sans leading-relaxed">
                Material selection depends on application, design intent, structural requirements,
                site exposure, and project scope. No single material is universally best.
              </p>
            </div>

            {/* 3 Comparison Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {materialComparison.map((item) => (
                <div
                  key={item.material}
                  className="p-7 sm:p-8 rounded-[24px] bg-[#FAF8F3] border border-[#E7E0D4] flex flex-col justify-between hover:border-[#B08A52]/50 hover:bg-white transition-all duration-300 shadow-2xs"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="font-serif text-[26px] font-bold text-[#171714]">
                        {item.material}
                      </span>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#B08A52] px-2.5 py-1 rounded-md bg-[#B08A52]/10">
                        {item.tagline}
                      </span>
                    </div>

                    <div className="mb-5">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#77736C] block mb-1.5">
                        Best Suited To:
                      </span>
                      <p className="text-[14px] text-[#171714] font-medium leading-relaxed font-sans">
                        {item.bestSuitedTo}
                      </p>
                    </div>

                    <div className="mb-5">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#77736C] block mb-1.5">
                        Characteristics:
                      </span>
                      <p className="text-[13.5px] text-[#68645D] leading-relaxed font-sans">
                        {item.characteristics}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E7E0D4] text-[12.5px] text-[#68645D] font-sans">
                    <span className="text-[#171714] font-semibold">Coordination:</span>{" "}
                    {item.siteCoordination}
                  </div>
                </div>
              ))}
            </div>

            {/* Comparison Callout Link */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F3] border border-[#E7E0D4] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="max-w-xl">
                <h3 className="font-bold text-[17px] text-[#171714] mb-1">
                  Need guidance on material selection for your drawings?
                </h3>
                <p className="text-[13.5px] text-[#68645D] font-sans">
                  We review project requirements and recommend the material direction that best
                  balances performance, aesthetic line, and site durability.
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#171714] hover:bg-[#B08A52] text-white font-sans font-semibold text-[13.5px] transition-colors"
              >
                <span>Discuss Your Requirements</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 5: FABRICATION PROCESS
            Clean architectural horizontal step flow (matching survey-approvals)
        =================================================================== */}
        <section
          aria-labelledby="process-heading"
          className="py-12 sm:py-16 lg:py-20 bg-[#FAF8F3] border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Centered Section Header */}
            <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
              <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                OUR APPROACH
              </span>
              <h2
                id="process-heading"
                className="text-[28px] sm:text-[38px] lg:text-[44px] font-bold text-[#171714] leading-[1.16] tracking-tight mb-4"
              >
                From drawing to finished detail<span className="text-[#B08A52]">.</span>
              </h2>
              <p className="text-[15.5px] sm:text-[16.5px] text-[#68645D] font-sans leading-relaxed max-w-2xl mx-auto">
                A disciplined fabrication approach connecting design intent to verified site
                installation without guesswork.
              </p>
            </div>

            {/* Continuous Architectural Line Step Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 lg:gap-x-8 gap-y-10 sm:gap-y-12">
              {fabricationProcessSteps.map((item, idx, arr) => (
                <div key={item.step} className="group flex flex-col">
                  {/* Step Number + Connecting Line */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <span className="font-bold text-[30px] sm:text-[36px] lg:text-[40px] text-[#171714] leading-none shrink-0 group-hover:text-[#B08A52] transition-colors duration-300">
                      {item.number}
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
            SECTION 6: DESIGN + FABRICATION CONNECTION
            Visual Progressive Relationship & Strong Internal Linking
        =================================================================== */}
        <section
          aria-labelledby="connection-heading"
          className="py-16 sm:py-24 bg-white border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-14">
              <div className="lg:col-span-6">
                <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                  SEAMLESS INTEGRATION
                </span>
                <h2
                  id="connection-heading"
                  className="text-[28px] sm:text-[38px] lg:text-[44px] font-bold text-[#171714] leading-[1.16] tracking-tight mb-4"
                >
                  Fabrication that follows the design<span className="text-[#B08A52]">.</span>
                </h2>
                <p className="text-[15.5px] sm:text-[16.5px] text-[#68645D] font-sans leading-relaxed">
                  Fabrication works best when the fabricated element is considered alongside the
                  surrounding architecture, interior or construction requirements. Early coordination
                  prevents on-site retrofitting and preserves structural integrity.
                </p>
              </div>

              {/* Progressive Flow Diagram: DESIGN → DETAIL → FABRICATE → INSTALL */}
              <div className="lg:col-span-6 p-6 sm:p-8 rounded-[24px] bg-[#FAF8F3] border border-[#E7E0D4]">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  {[
                    { label: "DESIGN", sub: "Architectural Intent" },
                    { label: "DETAIL", sub: "Shop Measurements" },
                    { label: "FABRICATE", sub: "Precision Workshop" },
                    { label: "INSTALL", sub: "Site Anchoring" },
                  ].map((stage, sIdx) => (
                    <div
                      key={stage.label}
                      className="p-3.5 rounded-xl bg-white border border-[#E7E0D4] flex flex-col justify-between"
                    >
                      <span className="font-mono text-[10px] font-bold text-[#B08A52] block mb-1">
                        0{sIdx + 1}
                      </span>
                      <h4 className="font-bold text-[14px] text-[#171714] tracking-tight">
                        {stage.label}
                      </h4>
                      <span className="text-[11px] text-[#77736C] font-sans mt-1">
                        {stage.sub}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3 Related Primary Services Internal Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-8 border-t border-[#E7E0D4]">
              <Link
                href="/design-planning"
                className="group p-6 rounded-2xl bg-[#FAF8F3] hover:bg-white border border-[#E7E0D4] hover:border-[#B08A52]/60 hover:shadow-xs transition-all duration-300"
              >
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#B08A52] block mb-1">
                  Visualization &amp; Drafting
                </span>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-[17px] text-[#171714] group-hover:text-[#B08A52] transition-colors">
                    Design &amp; Planning
                  </h3>
                  <ArrowRight size={15} className="text-[#171714] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-[13px] text-[#68645D] font-sans">
                  Coordinate architectural elevations, floor plans, and shop drawings before cutting metal.
                </p>
              </Link>

              <Link
                href="/construction"
                className="group p-6 rounded-2xl bg-[#FAF8F3] hover:bg-white border border-[#E7E0D4] hover:border-[#B08A52]/60 hover:shadow-xs transition-all duration-300"
              >
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#B08A52] block mb-1">
                  Structural Execution
                </span>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-[17px] text-[#171714] group-hover:text-[#B08A52] transition-colors">
                    Civil Construction
                  </h3>
                  <ArrowRight size={15} className="text-[#171714] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-[13px] text-[#68645D] font-sans">
                  Embed mounting plates, anchor fasteners, and sleeves during concrete casting.
                </p>
              </Link>

              <Link
                href="/interior-design"
                className="group p-6 rounded-2xl bg-[#FAF8F3] hover:bg-white border border-[#E7E0D4] hover:border-[#B08A52]/60 hover:shadow-xs transition-all duration-300"
              >
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#B08A52] block mb-1">
                  Spatial Finishing
                </span>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-[17px] text-[#171714] group-hover:text-[#B08A52] transition-colors">
                    Interior Design
                  </h3>
                  <ArrowRight size={15} className="text-[#171714] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-[13px] text-[#68645D] font-sans">
                  Harmonize custom metal accents, room partitions, and panelling with bespoke cabinetry.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 7: WHERE FABRICATION FITS
            Broad Contextual Use-Case Categories (No Invented Products)
        =================================================================== */}
        <section
          aria-labelledby="usecases-heading"
          className="py-16 sm:py-24 bg-[#FAF8F3] border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                INTEGRATED APPLICATIONS
              </span>
              <h2
                id="usecases-heading"
                className="text-[28px] sm:text-[38px] lg:text-[44px] font-bold text-[#171714] leading-[1.16] tracking-tight mb-4"
              >
                Where Fabrication Becomes Part of the Project<span className="text-[#B08A52]">.</span>
              </h2>
              <p className="text-[15.5px] sm:text-[16.5px] text-[#68645D] font-sans leading-relaxed">
                Fabricated elements serve broad functional and visual roles across different building
                zones, planned to work with the surrounding masonry, glass, and joinery.
              </p>
            </div>

            {/* 4 Contextual Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {fabricationContextCategories.map((cat) => (
                <div
                  key={cat.title}
                  className="p-6 sm:p-7 rounded-[22px] bg-white border border-[#E7E0D4] flex flex-col justify-between hover:border-[#B08A52]/50 hover:shadow-xs transition-all duration-300"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#FAF8F3] border border-[#E7E0D4] flex items-center justify-center text-[#B08A52] mb-4">
                      <span className="material-symbols-outlined text-[20px]">{cat.icon}</span>
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#B08A52] block mb-1">
                      {cat.subtitle}
                    </span>
                    <h3 className="font-bold text-[18px] text-[#171714] mb-3">
                      {cat.title}
                    </h3>
                    <p className="text-[13.5px] text-[#68645D] leading-relaxed font-sans">
                      {cat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 8: REAL PROJECT PROOF / CONSULTATION
            Factual consultation banner without unsupported project claims
        =================================================================== */}
        <section
          aria-labelledby="proof-heading"
          className="py-14 sm:py-20 bg-white border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="p-8 sm:p-12 rounded-[28px] bg-[#171714] text-white flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#C89A47]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-2xl">
                <span className="inline-block text-[11px] sm:text-[12px] font-mono font-medium tracking-[0.2em] uppercase text-[#e3c381] mb-3">
                  FROM FABRICATION TO FINISHED SPACE
                </span>
                <h2
                  id="proof-heading"
                  className="text-[24px] sm:text-[32px] lg:text-[36px] font-bold text-white tracking-tight leading-tight mb-3"
                >
                  Looking for fabrication for your project?
                </h2>
                <p className="text-[14.5px] sm:text-[15.5px] text-white/80 font-sans leading-relaxed">
                  Whether coordinating ACP panel cladding, custom steel framing, or architectural
                  aluminium elements, we review your drawings and site conditions to structure an
                  integrated plan.
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#e3c381] to-[#C89A47] text-[#171714] font-sans font-semibold text-[14px] hover:shadow-lg hover:shadow-[#C89A47]/20 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span>Discuss Your Requirements</span>
                  <ArrowRight size={15} />
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/20 text-white font-sans font-medium text-[14px] hover:bg-white hover:text-[#171714] transition-all duration-300"
                >
                  <span>View All Projects</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 9: QUALITY / DETAIL SECTION
            Design & quality considerations (no unsupported guarantees)
        =================================================================== */}
        <section
          aria-labelledby="quality-heading"
          className="py-16 sm:py-24 bg-[#FAF8F3] border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                DETAILS MATTER
              </span>
              <h2
                id="quality-heading"
                className="text-[28px] sm:text-[38px] lg:text-[44px] font-bold text-[#171714] leading-[1.16] tracking-tight mb-4"
              >
                Good fabrication is measured in the details<span className="text-[#B08A52]">.</span>
              </h2>
              <p className="text-[15.5px] sm:text-[16.5px] text-[#68645D] font-sans leading-relaxed">
                Precision in metalwork depends on disciplined workshop preparation, clean junction
                detailing, and careful site fitment. These principles guide every fabrication scope.
              </p>
            </div>

            {/* 6 Quality Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {fabricationQualityDetails.map((pillar) => (
                <div
                  key={pillar.aspect}
                  className="p-6 sm:p-7 rounded-[22px] bg-white border border-[#E7E0D4] flex flex-col justify-between hover:border-[#B08A52]/40 transition-all duration-300"
                >
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-[#FAF8F3] border border-[#E7E0D4] flex items-center justify-center text-[#B08A52] mb-4 shadow-2xs">
                      <span className="material-symbols-outlined text-[19px]">{pillar.icon}</span>
                    </div>
                    <h3 className="font-sans font-bold text-[17px] text-[#171714] mb-2">
                      {pillar.aspect}
                    </h3>
                    <p className="font-sans text-[13.5px] text-[#68645D] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 10: LOCAL SERVICE AREA (GEO / LOCAL SEO)
            Natural Nagercoil & Kanyakumari service context
        =================================================================== */}
        <LocalServiceArea
          badge="BASED IN NAGERCOIL"
          title={
            <>
              Fabrication Services in Nagercoil<span className="text-[#B08A52]">.</span>
            </>
          }
          titleClassName="text-[28px] sm:text-[38px] lg:text-[44px] font-bold text-[#171714] leading-[1.16] tracking-tight mb-4"
          description={[
            "SMS Construction is based in Nagercoil, Tamil Nadu, providing fabrication support for construction, architectural and interior project requirements within its actual service area across Kanyakumari District.",
            "Our local presence enables direct on-site dimensional verification, workshop pre-assembly, and coordinated installation for residential and commercial projects.",
          ]}
          deskTitle="Fabrication & Engineering Desk"
        />

        {/* ===================================================================
            SECTION 11: FAQ
            Using unified ModernFaq component with 8 factual answers
        =================================================================== */}
        <ModernFaq
          sectionId="faq-heading"
          title="Frequently Asked Questions"
          titleAccent="."
          subtitle="Everything you need to know about architectural fabrication services"
          items={fabricationFaqs}
          className="py-16 md:py-24 bg-[#FAFAFA] border-b border-[#E7E0D4] relative"
        />

        {/* ===================================================================
            SECTION 12: FINAL LEAD CTA
            Using unified ConversionCTA component
        =================================================================== */}
        <ConversionCTA
          theme="light"
          badge="START YOUR FABRICATION PROJECT"
          title="Have a detail to fabricate?"
          description="Tell us what you are building, the element you need fabricated, and where it needs to fit into the project. Our team will review your drawings and discuss the details."
          primaryBtnText="Discuss Your Project"
          primaryBtnHref="/contact"
          phoneNumber={phoneNumber}
          formattedPhone={formattedPhone}
          whatsappNumber={whatsappNumber}
          whatsappMessage="Hello SMS Construction, I would like to consult regarding fabrication works in Nagercoil."
          subtext="SMS Construction • Architectural & Metal Fabrication • Nagercoil, Tamil Nadu"
        />
      </main>
    </>
  );
}
