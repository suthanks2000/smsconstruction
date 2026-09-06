import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  MessageSquare,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import {
  interiorCategories,
  realProjectShowcase,
  approachSteps,
  craftDetails,
  interiorFaqs,
} from "@/data/interiorDesign";
import ServiceFaqAccordion from "../services/components/ServiceFaqAccordion";
import BedroomVideoPlayer from "./components/BedroomVideoPlayer";
import CatalogGalleryDrawer from "./components/CatalogGalleryDrawer";
import LocationMarquee from "./components/LocationMarquee";

export const metadata: Metadata = {
  title: "Interior Design in Nagercoil & Kanyakumari | SMS Construction",
  description:
    "Explore bespoke interior design services from SMS Construction across Nagercoil and all over Kanyakumari District, including bedrooms, kitchens, false ceilings, TV units, wall decor and terrace gardens.",
  alternates: {
    canonical: "/interior-design",
  },
  openGraph: {
    title: "Interior Design in Nagercoil & Kanyakumari | SMS Construction",
    description:
      "Explore bespoke interior design services from SMS Construction across Nagercoil and all over Kanyakumari District, including bedrooms, kitchens, false ceilings, TV units, wall decor and terrace gardens.",
    url: "https://smsconstruction.in/interior-design",
    siteName: "SMS Construction",
    images: [
      {
        url: "/images/catalog/bedroom/bedroom-interior-design-01.webp",
        width: 1600,
        height: 1279,
        alt: "Contemporary Interior Design in Nagercoil and Kanyakumari by SMS Construction",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design in Nagercoil & Kanyakumari | SMS Construction",
    description:
      "Explore bespoke interior design services from SMS Construction across Nagercoil and all over Kanyakumari District, including bedrooms, kitchens, false ceilings, TV units, wall decor and terrace gardens.",
    images: ["/images/catalog/bedroom/bedroom-interior-design-01.webp"],
  },
};

export default function InteriorDesignPage() {
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
        name: "Interior Design",
        item: "https://smsconstruction.in/interior-design",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Interior Design Services",
    serviceType: "Residential Interior Design",
    description:
      "Bespoke residential interior design, space planning, modular kitchen fabrication, bedroom joinery, false ceiling lighting, TV units, wall decor and terrace gardens in Nagercoil.",
    url: "https://smsconstruction.in/interior-design",
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
      name: "Interior Design Catalog Specialties",
      itemListElement: interiorCategories.map((c, idx) => ({
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
    mainEntity: interiorFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // Find category data helper
  const bedroom = interiorCategories.find((c) => c.id === "bedroom")!;
  const kitchen = interiorCategories.find((c) => c.id === "kitchen")!;
  const falseCeiling = interiorCategories.find((c) => c.id === "false-ceiling")!;
  const tvUnit = interiorCategories.find((c) => c.id === "tv-unit")!;
  const terraceGarden = interiorCategories.find((c) => c.id === "terrace-garden")!;
  const wallDecor = interiorCategories.find((c) => c.id === "wall-decor")!;

  return (
    <>
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

      <main className="bg-[#FAF8F3] text-[#171614] selection:bg-[#B08A52] selection:text-white min-h-screen">
        {/* ══════════════════════════════════════════════════════
            1. COMPACT EDITORIAL HERO (100vh)
        ══════════════════════════════════════════════════════ */}
        <div className="min-h-[100dvh] flex flex-col pt-24 md:pt-32 bg-[#FAF8F3]">
          <section
            data-header-theme="light"
            className="flex-grow flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto w-full pb-8 md:pb-12"
          >
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6">
              <ol className="flex items-center gap-2 text-[12px] sm:text-[13px] font-sans text-[#77736C]">
                <li>
                  <Link href="/" className="hover:text-[#B08A52] transition-colors duration-200">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-[#B08A52]/60">
                  /
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#B08A52] transition-colors duration-200">
                    Services
                  </Link>
                </li>
                <li aria-hidden="true" className="text-[#B08A52]/60">
                  /
                </li>
                <li aria-current="page" className="text-[#171614] font-medium">
                  Interior Design
                </li>
              </ol>
            </nav>

            <p className="font-sans text-[11px] tracking-[0.28em] uppercase font-semibold text-[#B08A52] mb-4 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[#B08A52]" aria-hidden="true" />
              SMS Construction • Interior Studio
            </p>

            <h1
              className="text-[#171614] font-serif leading-[1.05] tracking-[-0.02em] mb-5 max-w-4xl"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              Interior Design in Nagercoil &amp; Across Kanyakumari<span className="text-[#B08A52]">.</span>
            </h1>

            <p className="font-sans text-[16px] md:text-[18px] leading-[1.7] text-[#55524D] max-w-2xl mb-8 md:mb-10">
              Bespoke residential interiors crafted around your family&apos;s daily routines — blending thoughtful space planning, custom millwork, ambient illumination, and direct on-site execution.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 min-h-[52px] sm:min-h-[56px] px-8 py-3.5 rounded-full bg-[#171614] text-white font-sans font-semibold text-[15px] hover:bg-[#B08A52] hover:shadow-lg hover:shadow-[#B08A52]/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300"
              >
                <span>Start Your Interior Project</span>
                <ArrowRight size={17} />
              </Link>

              <a
                href="#bedroom"
                className="group inline-flex items-center justify-center gap-2.5 min-h-[52px] sm:min-h-[56px] px-7 py-3.5 rounded-full bg-white text-[#171614] border border-[#E7E0D4] font-sans font-semibold text-[15px] hover:border-[#B08A52] hover:text-[#B08A52] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <span>Explore 6 Living Spaces</span>
                <span className="text-[#B08A52] transition-transform duration-300 group-hover:translate-y-0.5">
                  ↓
                </span>
              </a>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════
              2. INFINITE MARQUEE TICKER
          ══════════════════════════════════════════════════════ */}
          <div className="mt-auto">
            <LocationMarquee />
          </div>
        </div>

        {/* ===================================================================
            SECTION 2: INTRO SECTION (SPLIT EDITORIAL)
        =================================================================== */}
        <section className="py-20 sm:py-28 border-b border-[#E7E0D4] bg-white">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-5">
                <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                  DESIGNED AROUND YOU
                </span>
                <h2 className="font-serif text-[32px] sm:text-[44px] lg:text-[50px] font-bold text-[#171614] leading-[1.16] tracking-tight">
                  Interiors that work beautifully in everyday life.
                </h2>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-6 text-[17px] sm:text-[18px] text-[#68645D] leading-relaxed font-sans">
                <p>
                  Every interior begins with how the space needs to function. We consider layout,
                  storage, materials, lighting and custom elements to create spaces that feel
                  considered as well as practical.
                </p>
                <p>
                  From full-height wardrobe joinery and ergonomic modular kitchens to false ceiling coves
                  and fluted timber media backdrops, our team manages design through direct site
                  execution across Nagercoil and Kanyakumari.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3: CATEGORY QUICK JUMP NAVIGATION
        =================================================================== */}
        <nav
          aria-label="Interior Categories Navigation"
          className="sticky top-20 z-30 bg-[#FAF8F3]/95 backdrop-blur-md border-b border-[#E7E0D4] py-3.5 transition-colors"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-1 text-[13px] font-sans">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#B08A52] shrink-0 mr-2 hidden sm:inline">
                Jump To:
              </span>
              {interiorCategories.map((cat) => (
                <a
                  key={cat.anchorId}
                  href={`#${cat.anchorId}`}
                  className="shrink-0 px-4 py-2 rounded-full bg-white hover:bg-[#171614] hover:text-white border border-[#E7E0D4] text-[#171614] font-medium transition-all duration-200 shadow-sm"
                >
                  {cat.title}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* ===================================================================
            SECTION 4: SPACES WE DESIGN (CORE EDITORIAL CATALOG EXPERIENCE)
        =================================================================== */}
        <section className="py-20 sm:py-28 lg:py-32 border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Master Section Header */}
            <div className="max-w-[760px] mb-16 sm:mb-24">
              <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                SERVICE &amp; CATEGORY SHOWCASE
              </span>
              <h2 className="font-serif text-[32px] sm:text-[44px] lg:text-[52px] font-bold text-[#171614] leading-[1.16] tracking-tight mb-4">
                Spaces We Design
              </h2>
              <p className="text-[17px] sm:text-[18px] text-[#68645D] leading-relaxed">
                Explore our curated interior design catalog. Each category showcases distinct
                capabilities, bespoke joinery solutions, and architectural finishes.
              </p>
            </div>

            <div className="space-y-28 sm:space-y-40">
              {/* -------------------------------------------------------------
                  01 BEDROOM SECTION (#bedroom)
                  Asymmetric feature + supporting frames + optional video block
              ------------------------------------------------------------- */}
              <article
                id="bedroom"
                className="scroll-mt-36 p-6 sm:p-10 lg:p-12 rounded-[32px] bg-white border border-[#E7E0D4] shadow-sm"
              >
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E7E0D4] mb-10">
                  <div>
                    <span className="text-[12px] font-sans font-semibold tracking-widest uppercase text-[#B08A52] mb-2 block">
                      {bedroom.eyebrow}
                    </span>
                    <h3 className="font-serif text-[30px] sm:text-[40px] font-bold text-[#171614] tracking-tight">
                      {bedroom.title}
                    </h3>
                    <p className="text-[16px] text-[#68645D] max-w-xl mt-2">
                      {bedroom.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <CatalogGalleryDrawer
                      categoryTitle={bedroom.title}
                      images={bedroom.extraImages}
                    />
                  </div>
                </div>

                {/* Asymmetric Composition */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-8">
                  {/* Large Primary Image (7 cols) */}
                  <div className="lg:col-span-7 relative aspect-[4/3] rounded-[24px] overflow-hidden bg-[#171614] shadow-md group">
                    <Image
                      src={bedroom.primaryImage.src}
                      alt={bedroom.primaryImage.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded-full bg-[#171614]/80 backdrop-blur-sm text-white font-sans text-[12px]">
                      Primary Catalog Composition
                    </div>
                  </div>

                  {/* Right: 2 Supporting Images Stacked (5 cols) */}
                  <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                    <div className="relative aspect-[16/10] rounded-[20px] overflow-hidden bg-[#171614] border border-[#E7E0D4] group">
                      <Image
                        src={bedroom.supportingImages[0].src}
                        alt={bedroom.supportingImages[0].alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="relative aspect-[16/10] rounded-[20px] overflow-hidden bg-[#171614] border border-[#E7E0D4] group">
                      <Image
                        src={bedroom.supportingImages[1].src}
                        alt={bedroom.supportingImages[1].alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Secondary Row: 2 Supporting Images + Media Block */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#E7E0D4]">
                  <div className="relative aspect-[16/10] rounded-[20px] overflow-hidden bg-[#171614] border border-[#E7E0D4] group">
                    <Image
                      src={bedroom.supportingImages[2].src}
                      alt={bedroom.supportingImages[2].alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="relative aspect-[16/10] rounded-[20px] overflow-hidden bg-[#171614] border border-[#E7E0D4] group">
                    <Image
                      src={bedroom.supportingImages[3].src}
                      alt={bedroom.supportingImages[3].alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Optional Video Block */}
                  {bedroom.video && (
                    <BedroomVideoPlayer
                      src={bedroom.video.src}
                      poster={bedroom.video.poster}
                      title={bedroom.video.title}
                    />
                  )}
                </div>

                {/* Highlights Strip */}
                <div className="mt-8 pt-6 border-t border-[#E7E0D4] flex flex-wrap items-center gap-3">
                  <span className="text-[12px] font-mono uppercase tracking-wider text-[#77736C]">
                    Key Capabilities:
                  </span>
                  {bedroom.highlights.map((item) => (
                    <span
                      key={item}
                      className="px-3.5 py-1.5 rounded-full bg-[#FAF8F3] border border-[#E7E0D4] text-[12px] font-sans font-medium text-[#171614]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>

              {/* -------------------------------------------------------------
                  02 KITCHEN SECTION (#kitchen)
                  Different visual composition: Left Stack + Right Large Feature
              ------------------------------------------------------------- */}
              <article
                id="kitchen"
                className="scroll-mt-36 p-6 sm:p-10 lg:p-12 rounded-[32px] bg-white border border-[#E7E0D4] shadow-sm"
              >
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E7E0D4] mb-10">
                  <div>
                    <span className="text-[12px] font-sans font-semibold tracking-widest uppercase text-[#B08A52] mb-2 block">
                      {kitchen.eyebrow}
                    </span>
                    <h3 className="font-serif text-[30px] sm:text-[40px] font-bold text-[#171614] tracking-tight">
                      {kitchen.title}
                    </h3>
                    <p className="text-[16px] text-[#68645D] max-w-xl mt-2">
                      {kitchen.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <CatalogGalleryDrawer
                      categoryTitle={kitchen.title}
                      images={kitchen.extraImages}
                    />
                  </div>
                </div>

                {/* Inverted Composition: Left 4-grid stack + Right Large Feature */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center mb-8">
                  {/* Left: 4 Supporting Images in 2x2 Grid (6 cols) */}
                  <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-5 order-2 lg:order-1">
                    {kitchen.supportingImages.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-[4/3] rounded-[18px] overflow-hidden bg-[#171614] border border-[#E7E0D4] group"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Right: Large Primary Feature (6 cols) */}
                  <div className="lg:col-span-6 order-1 lg:order-2">
                    <div className="relative aspect-[16/11] rounded-[24px] overflow-hidden bg-[#171614] shadow-md group">
                      <Image
                        src={kitchen.primaryImage.src}
                        alt={kitchen.primaryImage.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded-full bg-[#171614]/80 backdrop-blur-sm text-white font-sans text-[12px]">
                        Primary Kitchen Layout
                      </div>
                    </div>
                  </div>
                </div>

                {/* Highlights Strip */}
                <div className="mt-8 pt-6 border-t border-[#E7E0D4] flex flex-wrap items-center gap-3">
                  <span className="text-[12px] font-mono uppercase tracking-wider text-[#77736C]">
                    Key Capabilities:
                  </span>
                  {kitchen.highlights.map((item) => (
                    <span
                      key={item}
                      className="px-3.5 py-1.5 rounded-full bg-[#FAF8F3] border border-[#E7E0D4] text-[12px] font-sans font-medium text-[#171614]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>

              {/* -------------------------------------------------------------
                  03 FALSE CEILING SECTION (#false-ceiling)
                  Architectural geometric grid highlighting lighting & planes
              ------------------------------------------------------------- */}
              <article
                id="false-ceiling"
                className="scroll-mt-36 p-6 sm:p-10 lg:p-12 rounded-[32px] bg-white border border-[#E7E0D4] shadow-sm"
              >
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E7E0D4] mb-10">
                  <div>
                    <span className="text-[12px] font-sans font-semibold tracking-widest uppercase text-[#B08A52] mb-2 block">
                      {falseCeiling.eyebrow}
                    </span>
                    <h3 className="font-serif text-[30px] sm:text-[40px] font-bold text-[#171614] tracking-tight">
                      {falseCeiling.title}
                    </h3>
                    <p className="text-[16px] text-[#68645D] max-w-xl mt-2">
                      {falseCeiling.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <CatalogGalleryDrawer
                      categoryTitle={falseCeiling.title}
                      images={falseCeiling.extraImages}
                    />
                  </div>
                </div>

                {/* Architectural Grid: Wide Top Feature + 4-Column Bottom Strip */}
                <div className="space-y-6 sm:space-y-8">
                  <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-[24px] overflow-hidden bg-[#171614] shadow-md group">
                    <Image
                      src={falseCeiling.primaryImage.src}
                      alt={falseCeiling.primaryImage.alt}
                      fill
                      sizes="(max-width: 1360px) 100vw, 1360px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded-full bg-[#171614]/80 backdrop-blur-sm text-white font-sans text-[12px]">
                      Perimeter Cove &amp; Spot Scheme
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {falseCeiling.supportingImages.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-[4/3] rounded-[18px] overflow-hidden bg-[#171614] border border-[#E7E0D4] group"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(max-width: 768px) 50vw, 25vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlights Strip */}
                <div className="mt-8 pt-6 border-t border-[#E7E0D4] flex flex-wrap items-center gap-3">
                  <span className="text-[12px] font-mono uppercase tracking-wider text-[#77736C]">
                    Key Capabilities:
                  </span>
                  {falseCeiling.highlights.map((item) => (
                    <span
                      key={item}
                      className="px-3.5 py-1.5 rounded-full bg-[#FAF8F3] border border-[#E7E0D4] text-[12px] font-sans font-medium text-[#171614]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>

              {/* -------------------------------------------------------------
                  04 TV UNIT SECTION (#tv-unit)
                  Grand Editorial Feature + 5 Detail Frames
              ------------------------------------------------------------- */}
              <article
                id="tv-unit"
                className="scroll-mt-36 p-6 sm:p-10 lg:p-12 rounded-[32px] bg-white border border-[#E7E0D4] shadow-sm"
              >
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E7E0D4] mb-10">
                  <div>
                    <span className="text-[12px] font-sans font-semibold tracking-widest uppercase text-[#B08A52] mb-2 block">
                      {tvUnit.eyebrow}
                    </span>
                    <h3 className="font-serif text-[30px] sm:text-[40px] font-bold text-[#171614] tracking-tight">
                      {tvUnit.title}
                    </h3>
                    <p className="text-[16px] text-[#68645D] max-w-xl mt-2">
                      {tvUnit.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <CatalogGalleryDrawer
                      categoryTitle={tvUnit.title}
                      images={tvUnit.extraImages}
                    />
                  </div>
                </div>

                {/* High Impact Editorial Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-8">
                  {/* Large Square Hero (6 cols) */}
                  <div className="lg:col-span-6 relative aspect-square rounded-[24px] overflow-hidden bg-[#171614] shadow-md group">
                    <Image
                      src={tvUnit.primaryImage.src}
                      alt={tvUnit.primaryImage.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded-full bg-[#171614]/80 backdrop-blur-sm text-white font-sans text-[12px]">
                      Signature Media Wall
                    </div>
                  </div>

                  {/* 5 Smaller Detail Images (6 cols) */}
                  <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
                    {tvUnit.supportingImages.map((img, idx) => (
                      <div
                        key={idx}
                        className={`relative aspect-[4/3] rounded-[18px] overflow-hidden bg-[#171614] border border-[#E7E0D4] group ${idx === 4 ? "col-span-2 sm:col-span-2 aspect-[16/9]" : ""
                          }`}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(max-width: 768px) 50vw, 25vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlights Strip */}
                <div className="mt-8 pt-6 border-t border-[#E7E0D4] flex flex-wrap items-center gap-3">
                  <span className="text-[12px] font-mono uppercase tracking-wider text-[#77736C]">
                    Key Capabilities:
                  </span>
                  {tvUnit.highlights.map((item) => (
                    <span
                      key={item}
                      className="px-3.5 py-1.5 rounded-full bg-[#FAF8F3] border border-[#E7E0D4] text-[12px] font-sans font-medium text-[#171614]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>

              {/* -------------------------------------------------------------
                  05 TERRACE GARDEN SECTION (#terrace-garden)
                  Lighter, open, biophilic composition
              ------------------------------------------------------------- */}
              <article
                id="terrace-garden"
                className="scroll-mt-36 p-6 sm:p-10 lg:p-12 rounded-[32px] bg-white border border-[#E7E0D4] shadow-sm"
              >
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E7E0D4] mb-10">
                  <div>
                    <span className="text-[12px] font-sans font-semibold tracking-widest uppercase text-[#B08A52] mb-2 block">
                      {terraceGarden.eyebrow}
                    </span>
                    <h3 className="font-serif text-[30px] sm:text-[40px] font-bold text-[#171614] tracking-tight">
                      {terraceGarden.title}
                    </h3>
                    <p className="text-[16px] text-[#68645D] max-w-xl mt-2">
                      {terraceGarden.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <CatalogGalleryDrawer
                      categoryTitle={terraceGarden.title}
                      images={terraceGarden.extraImages}
                    />
                  </div>
                </div>

                {/* Open Biophilic Composition: Top Feature + 4-card supporting layout */}
                <div className="space-y-6 sm:space-y-8">
                  <div className="relative aspect-[16/10] sm:aspect-[21/9] rounded-[24px] overflow-hidden bg-[#171614] shadow-md group">
                    <Image
                      src={terraceGarden.primaryImage.src}
                      alt={terraceGarden.primaryImage.alt}
                      fill
                      sizes="(max-width: 1360px) 100vw, 1360px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded-full bg-[#171614]/80 backdrop-blur-sm text-white font-sans text-[12px]">
                      Biophilic Terrace Retreat
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                    {terraceGarden.supportingImages.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-[4/3] rounded-[18px] overflow-hidden bg-[#171614] border border-[#E7E0D4] group"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(max-width: 768px) 50vw, 25vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlights Strip */}
                <div className="mt-8 pt-6 border-t border-[#E7E0D4] flex flex-wrap items-center gap-3">
                  <span className="text-[12px] font-mono uppercase tracking-wider text-[#77736C]">
                    Key Capabilities:
                  </span>
                  {terraceGarden.highlights.map((item) => (
                    <span
                      key={item}
                      className="px-3.5 py-1.5 rounded-full bg-[#FAF8F3] border border-[#E7E0D4] text-[12px] font-sans font-medium text-[#171614]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>

              {/* -------------------------------------------------------------
                  06 WALL DECOR SECTION (#wall-decor)
                  Focused single-feature editorial section (1 image only)
              ------------------------------------------------------------- */}
              <article
                id="wall-decor"
                className="scroll-mt-36 p-6 sm:p-10 lg:p-12 rounded-[32px] bg-white border border-[#E7E0D4] shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  {/* Left: Large Portrait Image (5 cols) */}
                  <div className="lg:col-span-5">
                    <div className="relative aspect-[3/4] rounded-[24px] overflow-hidden bg-[#171614] shadow-md group">
                      <Image
                        src={wallDecor.primaryImage.src}
                        alt={wallDecor.primaryImage.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded-full bg-[#171614]/80 backdrop-blur-sm text-white font-sans text-[12px]">
                        Architectural Feature Treatment
                      </div>
                    </div>
                  </div>

                  {/* Right: Short Editorial Copy + CTA (7 cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-center">
                    <span className="text-[12px] font-sans font-semibold tracking-widest uppercase text-[#B08A52] mb-2 block">
                      {wallDecor.eyebrow}
                    </span>
                    <h3 className="font-serif text-[32px] sm:text-[42px] font-bold text-[#171614] leading-[1.14] mb-4">
                      {wallDecor.title}
                    </h3>
                    <p className="text-[17px] text-[#68645D] leading-relaxed mb-6 font-sans">
                      {wallDecor.description}
                    </p>
                    <p className="text-[15px] text-[#68645D] leading-relaxed mb-8 font-sans">
                      From open-slat timber foyer dividers and recessed display niches to textured
                      lime plasters, our custom wall treatments provide focal depth and elegant
                      spatial separation without closing off daylight.
                    </p>

                    <div className="space-y-3 mb-8">
                      {wallDecor.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2.5 text-[14px] text-[#171614]">
                          <CheckCircle2 size={16} className="text-[#B08A52] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 font-sans font-semibold text-[14px] text-[#B08A52] hover:text-[#80633D] transition-colors self-start pb-1 border-b border-[#B08A52]"
                    >
                      <span>Discuss Custom Wall Treatments</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 5: OUR APPROACH (PROCESS)
        =================================================================== */}
        <section className="py-20 sm:py-28 lg:py-32 bg-[#F6F3EB] border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-2xl mb-14 sm:mb-20">
              <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                OUR APPROACH
              </span>
              <h2 className="font-serif text-[30px] sm:text-[42px] lg:text-[48px] font-bold text-[#171614] leading-[1.18] tracking-tight mb-4">
                From your idea to a considered interior.
              </h2>
              <p className="text-[16px] sm:text-[18px] text-[#68645D] leading-relaxed">
                A disciplined six-stage methodology connecting initial discovery through precise
                on-site joinery execution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {approachSteps.map((step) => (
                <div
                  key={step.step}
                  className="p-8 rounded-[24px] bg-white border border-[#E7E0D4] shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-[14px] font-bold text-[#B08A52] block mb-4">
                      {step.step}
                    </span>
                    <h3 className="font-serif text-[22px] font-bold text-[#171614] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[15px] text-[#68645D] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 6: DETAILS MATTER (CRAFT & DETAIL)
        =================================================================== */}
        <section className="py-20 sm:py-28 lg:py-32 bg-white border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-2xl mb-14 sm:mb-20">
              <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                DETAILS MATTER
              </span>
              <h2 className="font-serif text-[30px] sm:text-[42px] lg:text-[48px] font-bold text-[#171614] leading-[1.18] tracking-tight mb-4">
                The small decisions shape the whole space.
              </h2>
              <p className="text-[16px] sm:text-[18px] text-[#68645D] leading-relaxed">
                Our workshop standards prioritize material integrity, shadow lines, hardware
                longevity, and lighting calibration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {craftDetails.map((detail) => (
                <div
                  key={detail.title}
                  className="group bg-[#FAF8F3] rounded-[24px] overflow-hidden border border-[#E7E0D4] shadow-sm flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/3] bg-[#171614] overflow-hidden">
                    <Image
                      src={detail.image}
                      alt={detail.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-[19px] font-bold text-[#171614] mb-2">
                      {detail.title}
                    </h3>
                    <p className="text-[14px] text-[#68645D] leading-relaxed">
                      {detail.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 7: REAL PROJECT PROOF (GROUP B - NAGARAJAN RESIDENCE)
            Note: Explicitly separated from the catalog above!
        =================================================================== */}
        <section className="py-20 sm:py-28 lg:py-32 bg-[#FAF8F3] border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
              <div className="max-w-[700px]">
                <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                  FROM OUR PROJECTS
                </span>
                <h2 className="font-serif text-[30px] sm:text-[42px] lg:text-[48px] font-bold text-[#171614] leading-[1.18] tracking-tight mb-3">
                  See Interior Design in Real Spaces
                </h2>
                <p className="text-[16px] sm:text-[18px] text-[#68645D] leading-relaxed">
                  Real residential executions demonstrate how our spatial planning, joinery crafting,
                  and finish coordination come together in actual homes.
                </p>
              </div>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 font-sans font-semibold text-[15px] text-[#171614] hover:text-[#B08A52] transition-colors pb-1 border-b border-[#171614] hover:border-[#B08A52] shrink-0"
              >
                <span>View All Projects</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Featured Project Showcase Card */}
            <div className="bg-white rounded-[32px] overflow-hidden border border-[#E7E0D4] shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Media Side */}
                <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[460px] bg-[#171614]">
                  <Image
                    src={realProjectShowcase.image}
                    alt={realProjectShowcase.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute bottom-5 left-5 px-3.5 py-1.5 rounded-full bg-[#171614]/85 backdrop-blur-sm text-white text-[12px] font-medium tracking-wide">
                    Real Project Proof • {realProjectShowcase.location}
                  </div>
                </div>

                {/* Editorial Information Side */}
                <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 text-[13px] text-[#B08A52] font-semibold tracking-wider uppercase mb-2">
                      <span>{realProjectShowcase.location}</span>
                      <span>{realProjectShowcase.scale}</span>
                    </div>

                    <h3 className="font-serif text-[28px] sm:text-[34px] font-bold text-[#171614] mb-4">
                      {realProjectShowcase.title}
                    </h3>

                    <p className="text-[15px] sm:text-[16px] text-[#68645D] leading-relaxed mb-6 font-sans">
                      {realProjectShowcase.description}
                    </p>

                    <div className="space-y-2.5 mb-8">
                      <p className="text-[12px] font-sans font-semibold uppercase tracking-wider text-[#171614]">
                        Executed Interior Features:
                      </p>
                      <ul className="space-y-2 text-[14px] text-[#68645D]">
                        {realProjectShowcase.highlights.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-[#B08A52] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    href={realProjectShowcase.href}
                    className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-full bg-[#FAF8F3] hover:bg-[#171614] text-[#171614] hover:text-white border border-[#E7E0D4] font-sans font-semibold text-[14px] transition-all duration-300 shadow-sm"
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
            SECTION 8: SERVICE AREA (LOCAL SEO & COVERAGE)
        =================================================================== */}
        <section className="py-16 sm:py-20 bg-white border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-8">
                <span className="text-[12px] font-sans font-semibold tracking-widest uppercase text-[#B08A52] mb-2 block">
                  BASED IN NAGERCOIL
                </span>
                <h2 className="font-serif text-[26px] sm:text-[34px] font-bold text-[#171614] leading-[1.2] mb-3">
                  Interior Design in Nagercoil and Surrounding Areas
                </h2>
                <p className="text-[16px] text-[#68645D] leading-relaxed max-w-2xl font-sans">
                  SMS Construction is based in Nagercoil, Tamil Nadu, helping clients plan and
                  create interior spaces suited to their homes and project requirements across
                  Nagercoil, Suchindram, Theroor, and Kanyakumari District.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3 p-6 rounded-[22px] bg-[#FAF8F3] border border-[#E7E0D4]">
                <div className="flex items-center gap-2 text-[13px] text-[#171614] font-medium">
                  <MapPin size={16} className="text-[#B08A52]" />
                  <span>25/1 Muthamizh St, Near Court Road, Nagercoil</span>
                </div>
                <div className="flex items-center gap-2 text-[13px] text-[#171614] font-medium">
                  <Phone size={16} className="text-[#B08A52]" />
                  <span>{formattedPhone}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 9: FREQUENTLY ASKED QUESTIONS
        =================================================================== */}
        <section className="py-20 sm:py-28 lg:py-32 bg-[#F6F3EB] border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              <div className="lg:col-span-5">
                <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                  COMMON QUESTIONS
                </span>
                <h2 className="font-serif text-[30px] sm:text-[42px] lg:text-[46px] font-bold text-[#171614] leading-[1.18] tracking-tight mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-[16px] text-[#68645D] leading-relaxed mb-8">
                  Clear answers regarding our interior design process, room specialties, Nagercoil
                  coverage, pricing quotations, and turnkey execution.
                </p>

                <div className="p-6 rounded-[22px] bg-white border border-[#E7E0D4] shadow-sm">
                  <h3 className="font-serif text-[18px] font-bold text-[#171614] mb-2">
                    Planning an interior renovation or new build?
                  </h3>
                  <p className="text-[14px] text-[#68645D] mb-4">
                    Visit our studio or invite our engineers for a preliminary on-site spatial review.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-sans font-semibold text-[14px] text-[#B08A52] hover:text-[#80633D] transition-colors"
                  >
                    <span>Schedule an Interior Consultation</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 bg-white rounded-[24px] p-6 sm:p-8 lg:p-10 border border-[#E7E0D4] shadow-sm">
                <ServiceFaqAccordion items={interiorFaqs} />
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 10: DISCIPLINE HUB BAR (COMPLEMENTARY SERVICES)
        =================================================================== */}
        <section className="py-12 bg-white border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[#B08A52]">
                  Explore Architecture &amp; Construction Disciplines
                </p>
                <p className="font-serif text-[18px] font-bold text-[#171614]">
                  Complementary Services by SMS Construction
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[13px] font-sans">
                <Link
                  href="/services"
                  className="px-4 py-2 rounded-full bg-[#FAF8F3] hover:bg-[#B08A52] hover:text-white border border-[#E7E0D4] text-[#171614] font-medium transition-colors"
                >
                  Services Hub
                </Link>
                <Link
                  href="/construction"
                  className="px-4 py-2 rounded-full bg-[#FAF8F3] hover:bg-[#B08A52] hover:text-white border border-[#E7E0D4] text-[#171614] font-medium transition-colors"
                >
                  Construction
                </Link>
                <Link
                  href="/design-planning"
                  className="px-4 py-2 rounded-full bg-[#FAF8F3] hover:bg-[#B08A52] hover:text-white border border-[#E7E0D4] text-[#171614] font-medium transition-colors"
                >
                  Design &amp; Planning
                </Link>
                <Link
                  href="/survey-approvals"
                  className="px-4 py-2 rounded-full bg-[#FAF8F3] hover:bg-[#B08A52] hover:text-white border border-[#E7E0D4] text-[#171614] font-medium transition-colors"
                >
                  Survey &amp; Approvals
                </Link>
                <Link
                  href="/fabrication-works"
                  className="px-4 py-2 rounded-full bg-[#FAF8F3] hover:bg-[#B08A52] hover:text-white border border-[#E7E0D4] text-[#171614] font-medium transition-colors"
                >
                  Fabrication Works
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 11: FINAL LEAD CONVERSION CTA
        =================================================================== */}
        <section className="relative overflow-hidden py-24 sm:py-32 bg-[#171614] text-white">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#B08A52]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-[980px] mx-auto px-5 sm:px-8 text-center">
            <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.25em] uppercase text-[#FBE18D] mb-4">
              START YOUR INTERIOR PROJECT
            </span>

            <h2 className="font-serif text-[34px] sm:text-[48px] lg:text-[56px] font-bold text-[#FAF8F3] leading-[1.14] tracking-tight mb-6">
              Ready to transform your space?
            </h2>

            <p className="text-[17px] sm:text-[19px] leading-relaxed text-[#FAF8F3]/80 max-w-[680px] mx-auto mb-10 font-sans">
              Tell us about your home, the spaces you want to improve, and what you have in mind.
            </p>

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
              SMS Construction • Interior Design &amp; Joinery Studio • Nagercoil, Tamil Nadu
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
