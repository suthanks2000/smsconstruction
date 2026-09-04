import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Phone, MessageSquare, CheckCircle2 } from "lucide-react";
import {
  coreServices,
  interiorSpecialties,
  processMilestones,
  trustPillars,
  serviceFaqs,
} from "@/data/services";
import ServiceFaqAccordion from "./components/ServiceFaqAccordion";

export const metadata: Metadata = {
  title: "Construction & Interior Design Services in Nagercoil | SMS Construction",
  description:
    "Explore construction, interior design, planning, survey support, and fabrication services from SMS Construction in Nagercoil, Tamil Nadu.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Construction & Interior Design Services in Nagercoil | SMS Construction",
    description:
      "Explore construction, interior design, planning, survey support, and fabrication services from SMS Construction in Nagercoil, Tamil Nadu.",
    url: "https://smsconstruction.in/services",
    siteName: "SMS Construction",
    images: [
      {
        url: "/images/services/interior.jpg",
        width: 1200,
        height: 630,
        alt: "SMS Construction Services Hub in Nagercoil",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction & Interior Design Services in Nagercoil | SMS Construction",
    description:
      "Explore construction, interior design, planning, survey support, and fabrication services from SMS Construction in Nagercoil, Tamil Nadu.",
    images: ["/images/services/interior.jpg"],
  },
};

export default function ServicesPage() {
  const phoneNumber = "+919488021183";
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
    ],
  };

  const serviceCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "SMS Construction Services Catalog",
    description:
      "Full-scope construction and interior design services provided by SMS Construction in Nagercoil, Tamil Nadu.",
    itemListElement: coreServices.map((service, idx) => ({
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
          addressLocality: "Nagercoil",
          addressRegion: "Tamil Nadu",
          addressCountry: "IN",
        },
      },
    })),
  };

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

      <main className="bg-[#FAF8F3] text-[#171714] selection:bg-[#B08A52] selection:text-white">
        {/* ===================================================================
            SECTION 1: HERO
        =================================================================== */}
        <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
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
                <li aria-current="page" className="text-[#171714] font-medium">
                  Services
                </li>
              </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Editorial Typography */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3.5">
                  OUR SERVICES
                </span>

                <h1 className="font-serif text-[34px] sm:text-[48px] lg:text-[60px] font-bold text-[#171714] leading-[1.12] tracking-tight mb-5 sm:mb-6">
                  Construction &amp; Interior Design Services in Nagercoil
                </h1>

                <p className="text-[17px] sm:text-[19px] leading-relaxed text-[#68645D] max-w-[600px] mb-8 sm:mb-10 font-sans">
                  From interior design and construction to planning, approvals support, and custom
                  fabrication, SMS Construction helps bring projects from idea to completion.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-5">
                  <a
                    href="#service-directory"
                    className="inline-flex items-center justify-center gap-2.5 min-h-[52px] px-7 py-3.5 rounded-full bg-[#171714] text-white font-sans font-medium text-[15px] hover:bg-[#B08A52] transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98]"
                  >
                    <span>Explore Our Services</span>
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center min-h-[52px] px-7 py-3.5 rounded-full border border-[#B08A52] text-[#B08A52] font-sans font-medium text-[15px] hover:bg-[#B08A52] hover:text-white transition-all duration-300 active:scale-[0.98]"
                  >
                    Get a Free Quote
                  </Link>
                </div>

                {/* Studio Footnote */}
                <div className="mt-8 sm:mt-12 pt-6 border-t border-[#E7E0D4]/70 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-[#77736C]">
                  <span className="flex items-center gap-1.5 font-medium text-[#171714]">
                    <span className="h-2 w-2 rounded-full bg-[#B08A52]" />
                    5 Core Disciplines
                  </span>
                  <span>Turnkey Execution</span>
                  <span>Nagercoil &amp; Kanyakumari District</span>
                </div>
              </div>

              {/* Right Column: Architectural Hero Image Treatment */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-[500px] lg:max-w-none">
                  {/* Image Frame */}
                  <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden border border-[#E7E0D4] bg-[#F2EDE3] shadow-md">
                    <Image
                      src="/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-living-room-wide.webp"
                      alt="Living room and false ceiling architecture at Nagarajan Residence in Nagercoil by SMS Construction"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                    {/* Bottom Floating Architectural Badge */}
                    <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-sm border border-[#E7E0D4] text-[#171714] shadow-sm">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-[11px] uppercase tracking-wider text-[#B08A52] font-semibold">
                            Featured Execution
                          </p>
                          <p className="font-serif text-[15px] font-semibold text-[#171714]">
                            Nagarajan Residence, Theroor
                          </p>
                        </div>
                        <Link
                          href="/projects/nagarajan-residence-nagercoil-theroor"
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FAF8F3] hover:bg-[#B08A52] hover:text-white transition-colors duration-200"
                          aria-label="View Nagarajan Residence Project"
                        >
                          <ArrowUpRight size={15} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 2: SERVICE DIRECTORY
        =================================================================== */}
        <section
          id="service-directory"
          className="py-20 sm:py-28 lg:py-32 scroll-mt-24 border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Section Header */}
            <div className="max-w-[760px] mb-12 sm:mb-16">
              <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                SERVICE DIRECTORY
              </span>
              <h2 className="font-serif text-[30px] sm:text-[42px] lg:text-[48px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-4">
                Structured Disciplines for Every Phase
              </h2>
              <p className="text-[16px] sm:text-[18px] text-[#68645D] leading-relaxed">
                Rather than coordinating disjointed contractors, SMS Construction operates as a
                single accountable studio across design, planning, structural execution, and interior
                styling.
              </p>
            </div>

            {/* Horizontal Editorial Rows */}
            <div className="divide-y divide-[#E7E0D4] border-y border-[#E7E0D4]">
              {coreServices.map((service) => (
                <article
                  key={service.id}
                  className="group relative transition-colors duration-300 hover:bg-white/70 py-10 sm:py-12 lg:py-14"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start lg:items-center">
                    {/* Left: Number + Title */}
                    <div className="lg:col-span-5 flex items-baseline sm:items-center gap-5 sm:gap-6">
                      <span className="font-serif text-[28px] sm:text-[36px] font-semibold text-[#B08A52] tracking-tight shrink-0">
                        {service.number}
                      </span>
                      <div>
                        <h3 className="font-serif text-[22px] sm:text-[28px] lg:text-[32px] font-bold text-[#171714] tracking-tight group-hover:text-[#B08A52] transition-colors duration-300">
                          <Link href={service.href} className="focus:outline-none focus-visible:underline">
                            {service.title}
                          </Link>
                        </h3>
                        <p className="mt-1 text-[14px] font-sans text-[#77736C]">
                          Nagercoil &amp; Regional Sites
                        </p>
                      </div>
                    </div>

                    {/* Center: Description & Scope Pills */}
                    <div className="lg:col-span-4 flex flex-col gap-3">
                      <p className="text-[16px] text-[#68645D] leading-relaxed">
                        {service.description}
                      </p>
                      {/* Capability Tags */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-block px-2.5 py-1 text-[12px] font-sans font-medium rounded-md bg-[#F2EDE3] text-[#68645D] border border-[#E7E0D4]/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Visual Thumbnail & Explore Action */}
                    <div className="lg:col-span-3 flex items-center justify-between lg:justify-end gap-6 pt-2 lg:pt-0">
                      {/* Architectural Thumbnail Preview */}
                      <div className="relative h-16 w-24 sm:h-20 sm:w-32 rounded-xl overflow-hidden border border-[#E7E0D4] shrink-0 bg-[#F2EDE3]">
                        <Image
                          src={service.image}
                          alt={service.alt}
                          fill
                          sizes="(max-width: 640px) 96px, 128px"
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      {/* Explore Button */}
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-1.5 font-sans font-semibold text-[14px] text-[#171714] group-hover:text-[#B08A52] transition-colors duration-200"
                      >
                        <span>{service.ctaText}</span>
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1 text-[#B08A52]"
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3: INTERIOR DESIGN SPECIALTIES
        =================================================================== */}
        <section className="py-20 sm:py-28 lg:py-32 bg-[#F6F3EB] border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
              <div className="max-w-[700px]">
                <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                  SIGNATURE CAPABILITY
                </span>
                <h2 className="font-serif text-[30px] sm:text-[42px] lg:text-[48px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-3">
                  Interior Design
                </h2>
                <p className="font-serif text-[19px] sm:text-[22px] italic text-[#68645D]">
                  Spaces designed around how you live.
                </p>
              </div>

              <Link
                href="/interior-design"
                className="inline-flex items-center gap-2 font-sans font-medium text-[15px] text-[#B08A52] hover:text-[#80633D] transition-colors pb-1 border-b border-[#B08A52]/40 shrink-0 self-start md:self-end"
              >
                <span>Explore Full Interior Design Practice</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Asymmetrical Editorial Collage (NOT a generic grid!) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
              {/* 1. Bedroom - Large Prominent Tile */}
              <div className="lg:col-span-7 group relative h-[360px] sm:h-[420px] rounded-[24px] overflow-hidden border border-[#E7E0D4] bg-[#FAF8F3] shadow-sm">
                <Image
                  src={interiorSpecialties[0].image}
                  alt={interiorSpecialties[0].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 flex items-end justify-between gap-4 text-white">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-[#FBE18D] font-medium block mb-1">
                      01 / Specialty
                    </span>
                    <h3 className="font-serif text-[24px] sm:text-[30px] font-bold leading-tight">
                      {interiorSpecialties[0].title}
                    </h3>
                    <p className="text-[14px] sm:text-[15px] text-white/80 mt-1 max-w-[440px]">
                      {interiorSpecialties[0].description}
                    </p>
                  </div>
                  <Link
                    href={interiorSpecialties[0].href}
                    className="h-10 w-10 shrink-0 rounded-full bg-white/20 hover:bg-[#B08A52] text-white flex items-center justify-center transition-colors duration-300 backdrop-blur-sm"
                    aria-label="Explore Bedroom Interiors"
                  >
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>

              {/* 2. Kitchen - Medium Vertical Tile */}
              <div className="lg:col-span-5 group relative h-[360px] sm:h-[420px] rounded-[24px] overflow-hidden border border-[#E7E0D4] bg-[#FAF8F3] shadow-sm">
                <Image
                  src={interiorSpecialties[1].image}
                  alt={interiorSpecialties[1].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 flex items-end justify-between gap-4 text-white">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-[#FBE18D] font-medium block mb-1">
                      02 / Specialty
                    </span>
                    <h3 className="font-serif text-[24px] sm:text-[30px] font-bold leading-tight">
                      {interiorSpecialties[1].title}
                    </h3>
                    <p className="text-[14px] sm:text-[15px] text-white/80 mt-1">
                      {interiorSpecialties[1].description}
                    </p>
                  </div>
                  <Link
                    href={interiorSpecialties[1].href}
                    className="h-10 w-10 shrink-0 rounded-full bg-white/20 hover:bg-[#B08A52] text-white flex items-center justify-center transition-colors duration-300 backdrop-blur-sm"
                    aria-label="Explore Kitchen Interiors"
                  >
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>

              {/* 3. False Ceiling - Compact Tile */}
              <div className="lg:col-span-4 group relative h-[320px] sm:h-[360px] rounded-[24px] overflow-hidden border border-[#E7E0D4] bg-[#FAF8F3] shadow-sm">
                <Image
                  src={interiorSpecialties[2].image}
                  alt={interiorSpecialties[2].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between gap-3 text-white">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-[#FBE18D] font-medium block mb-1">
                      03 / Specialty
                    </span>
                    <h3 className="font-serif text-[22px] sm:text-[24px] font-bold leading-tight">
                      {interiorSpecialties[2].title}
                    </h3>
                    <p className="text-[13px] text-white/80 mt-1">
                      {interiorSpecialties[2].description}
                    </p>
                  </div>
                  <Link
                    href={interiorSpecialties[2].href}
                    className="h-9 w-9 shrink-0 rounded-full bg-white/20 hover:bg-[#B08A52] text-white flex items-center justify-center transition-colors duration-300 backdrop-blur-sm"
                    aria-label="Explore False Ceiling Interiors"
                  >
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>

              {/* 4. TV Unit - Compact Tile */}
              <div className="lg:col-span-4 group relative h-[320px] sm:h-[360px] rounded-[24px] overflow-hidden border border-[#E7E0D4] bg-[#FAF8F3] shadow-sm">
                <Image
                  src={interiorSpecialties[3].image}
                  alt={interiorSpecialties[3].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between gap-3 text-white">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-[#FBE18D] font-medium block mb-1">
                      04 / Specialty
                    </span>
                    <h3 className="font-serif text-[22px] sm:text-[24px] font-bold leading-tight">
                      {interiorSpecialties[3].title}
                    </h3>
                    <p className="text-[13px] text-white/80 mt-1">
                      {interiorSpecialties[3].description}
                    </p>
                  </div>
                  <Link
                    href={interiorSpecialties[3].href}
                    className="h-9 w-9 shrink-0 rounded-full bg-white/20 hover:bg-[#B08A52] text-white flex items-center justify-center transition-colors duration-300 backdrop-blur-sm"
                    aria-label="Explore TV Unit Interiors"
                  >
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>

              {/* 5. Wall Decor - Compact Tile */}
              <div className="lg:col-span-4 group relative h-[320px] sm:h-[360px] rounded-[24px] overflow-hidden border border-[#E7E0D4] bg-[#FAF8F3] shadow-sm">
                <Image
                  src={interiorSpecialties[4].image}
                  alt={interiorSpecialties[4].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between gap-3 text-white">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-[#FBE18D] font-medium block mb-1">
                      05 / Specialty
                    </span>
                    <h3 className="font-serif text-[22px] sm:text-[24px] font-bold leading-tight">
                      {interiorSpecialties[4].title}
                    </h3>
                    <p className="text-[13px] text-white/80 mt-1">
                      {interiorSpecialties[4].description}
                    </p>
                  </div>
                  <Link
                    href={interiorSpecialties[4].href}
                    className="h-9 w-9 shrink-0 rounded-full bg-white/20 hover:bg-[#B08A52] text-white flex items-center justify-center transition-colors duration-300 backdrop-blur-sm"
                    aria-label="Explore Wall Decor Interiors"
                  >
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>

              {/* 6. Terrace Garden - Wide Architectural Panorama Tile */}
              <div className="lg:col-span-12 group relative h-[280px] sm:h-[340px] rounded-[24px] overflow-hidden border border-[#E7E0D4] bg-[#FAF8F3] shadow-sm">
                <Image
                  src={interiorSpecialties[5].image}
                  alt={interiorSpecialties[5].alt}
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
                  <div className="max-w-[680px]">
                    <span className="text-[11px] uppercase tracking-widest text-[#FBE18D] font-medium block mb-1">
                      06 / Specialty
                    </span>
                    <h3 className="font-serif text-[24px] sm:text-[30px] font-bold leading-tight">
                      {interiorSpecialties[5].title}
                    </h3>
                    <p className="text-[14px] sm:text-[15px] text-white/85 mt-1">
                      {interiorSpecialties[5].description}
                    </p>
                  </div>
                  <Link
                    href={interiorSpecialties[5].href}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#171714] font-sans font-medium text-[13px] hover:bg-[#B08A52] hover:text-white transition-colors duration-200 self-start sm:self-auto shrink-0"
                  >
                    <span>View Terrace Garden Design</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 4: HOW WE WORK (PROCESS)
        =================================================================== */}
        <section className="py-20 sm:py-28 lg:py-32 border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Section Header */}
            <div className="max-w-[760px] mb-14 sm:mb-20">
              <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                HOW WE WORK
              </span>
              <h2 className="font-serif text-[30px] sm:text-[42px] lg:text-[48px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-4">
                From idea to completion.
              </h2>
              <p className="text-[16px] sm:text-[18px] text-[#68645D] leading-relaxed">
                Every project follows a disciplined sequence to ensure design accuracy, budget
                rigor, and smooth structural execution from start to finish.
              </p>
            </div>

            {/* Continuous Editorial Timeline */}
            <ol className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
              {processMilestones.map((milestone, idx) => (
                <li
                  key={milestone.step}
                  className="relative flex flex-col p-6 sm:p-8 rounded-[20px] bg-white border border-[#E7E0D4] shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {/* Step Header */}
                  <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-[#E7E0D4]/70">
                    <span className="font-serif text-[28px] font-semibold text-[#B08A52]">
                      {milestone.step}
                    </span>
                    <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-[#77736C]">
                      Milestone {idx + 1} of 6
                    </span>
                  </div>

                  <h3 className="font-serif text-[21px] font-bold text-[#171714] mb-2.5">
                    {milestone.title}
                  </h3>

                  <p className="text-[15px] leading-relaxed text-[#68645D]">
                    {milestone.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ===================================================================
            SECTION 5: SERVICES THROUGH REAL PROJECTS (PROOF SECTION)
        =================================================================== */}
        <section className="py-20 sm:py-28 lg:py-32 bg-[#F6F3EB] border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Header with View All Link */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
              <div className="max-w-[700px]">
                <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                  WORK IN PRACTICE
                </span>
                <h2 className="font-serif text-[30px] sm:text-[42px] lg:text-[48px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-3">
                  See Our Work in Context
                </h2>
                <p className="text-[16px] sm:text-[18px] text-[#68645D] leading-relaxed">
                  Real projects demonstrate how our civil, design, and interior capabilities coalesce
                  into refined, functional residential spaces.
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

            {/* Featured Project Showcase: Nagarajan Residence */}
            <div className="bg-white rounded-[28px] overflow-hidden border border-[#E7E0D4] shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Visual Imagery Side */}
                <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[460px] bg-[#171714]">
                  <Image
                    src="/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-living-room.webp"
                    alt="Living room interior design at Nagarajan Residence in Theroor, Nagercoil by SMS Construction"
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-[#171714]/80 backdrop-blur-sm text-white text-[12px] font-medium tracking-wide">
                    Featured Case Study
                  </div>
                </div>

                {/* Editorial Details Side */}
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
                      A bespoke residential interior project balancing Burma teak veneers, fluted
                      wood partitions, custom TV console units, and layered ambient lighting profiles.
                    </p>

                    {/* Integrated Scopes List */}
                    <div className="space-y-2.5 mb-8">
                      <p className="text-[12px] font-sans font-semibold uppercase tracking-wider text-[#171714]">
                        Services Coordinated:
                      </p>
                      <ul className="space-y-1.5 text-[14px] text-[#68645D]">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-[#B08A52] shrink-0" />
                          <span>Architectural Interior Drafting &amp; 3D Modeling</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-[#B08A52] shrink-0" />
                          <span>Custom TV Media Unit Joinery &amp; Fluting</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-[#B08A52] shrink-0" />
                          <span>False Ceiling Drywall &amp; Recessed Ambient Lighting</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-[#B08A52] shrink-0" />
                          <span>Modular Kitchen Fabrication &amp; Master Wardrobes</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Case Study Link */}
                  <Link
                    href="/projects/nagarajan-residence-nagercoil-theroor"
                    className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-xl bg-[#FAF8F3] hover:bg-[#B08A52] text-[#171714] hover:text-white border border-[#E7E0D4] hover:border-[#B08A52] font-sans font-semibold text-[14px] transition-all duration-300"
                  >
                    <span>Read Full Nagarajan Residence Case Study</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 6: WHY SMS CONSTRUCTION (TRUST SECTION)
        =================================================================== */}
        <section className="py-20 sm:py-28 lg:py-32 border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Header */}
            <div className="max-w-[760px] mb-14 sm:mb-18">
              <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                THE STUDIO ADVANTAGE
              </span>
              <h2 className="font-serif text-[30px] sm:text-[42px] lg:text-[48px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-4">
                One Team. From Idea to Completion.
              </h2>
              <p className="text-[16px] sm:text-[18px] text-[#68645D] leading-relaxed">
                By uniting architectural planning, structural construction, and interior millwork, we
                eliminate the disputes, timeline delays, and compromises that occur when managing
                unrelated contractors.
              </p>
            </div>

            {/* 5 Grounded Trust Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {trustPillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className={`p-7 sm:p-8 rounded-[20px] bg-white border border-[#E7E0D4] shadow-sm flex flex-col justify-between ${
                    index === 3 ? "lg:col-span-1" : index === 4 ? "md:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  <div>
                    <div className="h-11 w-11 rounded-xl bg-[#F6F3EB] border border-[#E7E0D4] flex items-center justify-center text-[#B08A52] mb-5">
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
            SECTION 7: FAQ
        =================================================================== */}
        <section className="py-20 sm:py-28 lg:py-32 bg-[#F6F3EB] border-b border-[#E7E0D4]">
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
                  Direct answers regarding our architectural services, service boundaries across
                  Nagercoil, consultation booking, and turnkey delivery.
                </p>

                <div className="p-6 rounded-[20px] bg-white border border-[#E7E0D4] shadow-sm">
                  <h3 className="font-serif text-[18px] font-bold text-[#171714] mb-2">
                    Have a specific question about your plot or property?
                  </h3>
                  <p className="text-[14px] text-[#68645D] mb-4">
                    Our team in Nagercoil is available for site evaluations and initial design discussions.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-sans font-semibold text-[14px] text-[#B08A52] hover:text-[#80633D] transition-colors"
                  >
                    <span>Connect with our team</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* Right Column: Accessible Accordion */}
              <div className="lg:col-span-7 bg-white rounded-[24px] p-6 sm:p-8 lg:p-10 border border-[#E7E0D4] shadow-sm">
                <ServiceFaqAccordion items={serviceFaqs} />
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 8: FINAL LEAD CTA
        =================================================================== */}
        <section className="relative overflow-hidden py-24 sm:py-32 bg-[#171614] text-white">
          {/* Subtle Ambient Radial Accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#B08A52]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-[980px] mx-auto px-5 sm:px-8 text-center">
            <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.25em] uppercase text-[#FBE18D] mb-4">
              START YOUR PROJECT
            </span>

            <h2 className="font-serif text-[34px] sm:text-[48px] lg:text-[56px] font-bold text-[#FAF8F3] leading-[1.14] tracking-tight mb-6">
              Ready to build or transform your space?
            </h2>

            <p className="text-[17px] sm:text-[19px] leading-relaxed text-[#FAF8F3]/80 max-w-[680px] mx-auto mb-10 font-sans">
              Discuss your construction, interior design, or renovation project with SMS
              Construction in Nagercoil.
            </p>

            {/* Direct Action CTAs */}
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
                <span>Call Studio</span>
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

            {/* Footer Trust Guarantee */}
            <p className="mt-10 text-[13px] text-white/50 tracking-wide font-sans">
              SMS Construction • Nagercoil, Kanyakumari District, Tamil Nadu • Direct Engineer Consultation
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
