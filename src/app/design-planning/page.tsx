import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Phone,
  MessageSquare,
  CheckCircle2,
  Building2,
  Layers,
  Eye,
  FileCheck2,
} from "lucide-react";
import {
  designServices,
  planningServices,
  designPlanningFaqs,
} from "@/data/designPlanning";
import ModernFaq from "@/components/ModernFaq";
import LocalServiceArea from "@/components/LocalServiceArea";
import ConversionCTA from "@/components/ConversionCTA";

export const metadata: Metadata = {
  title: "Design & Planning Services in Nagercoil | SMS Construction",
  description:
    "Explore design and planning services from SMS Construction in Nagercoil, including 3D elevation, interior design, walkthrough visualization, structural design, drawings and building plans.",
  alternates: {
    canonical: "/design-planning",
  },
  openGraph: {
    title: "Design & Planning Services in Nagercoil | SMS Construction",
    description:
      "Explore design and planning services from SMS Construction in Nagercoil, including 3D elevation, interior design, walkthrough visualization, structural design, drawings and building plans.",
    url: "https://smsconstruction.in/design-planning",
    siteName: "SMS Construction",
    images: [
      {
        url: "/images/services/planning.webp",
        width: 1200,
        height: 630,
        alt: "Architectural Design and Planning Services in Nagercoil by SMS Construction",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Design & Planning Services in Nagercoil | SMS Construction",
    description:
      "Explore design and planning services from SMS Construction in Nagercoil, including 3D elevation, interior design, walkthrough visualization, structural design, drawings and building plans.",
    images: ["/images/services/planning.webp"],
  },
};

export default function DesignPlanningPage() {
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
        name: "Design & Planning",
        item: "https://smsconstruction.in/design-planning",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Design & Planning Services in Nagercoil",
    serviceType: "Architectural Design, Spatial Planning, and 3D Visualization",
    description:
      "Architectural space planning, 3D elevation, interior design direction, walkthrough visualization, structural coordination, and pre-construction building plans in Nagercoil.",
    url: "https://smsconstruction.in/design-planning",
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
      { "@type": "City", name: "Nagercoil" },
      { "@type": "AdministrativeArea", name: "Kanyakumari District" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Design & Planning Offerings",
      itemListElement: [
        ...designServices.map((service, idx) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
          },
          position: idx + 1,
        })),
        ...planningServices.map((service, idx) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.shortDescription,
          },
          position: designServices.length + idx + 1,
        })),
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: designPlanningFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const connectionSteps = [
    {
      num: 1,
      title: "Spatial Concept",
      description: "Define exterior massing, room zoning, and overarching architectural character.",
      icon: Compass,
    },
    {
      num: 2,
      title: "3D Visualization",
      description: "Realistic 3D elevations and spatial walkthroughs to experience the space beforehand.",
      icon: Eye,
    },
    {
      num: 3,
      title: "Statutory Planning",
      description: "Dimensioned floor plans, Vastu alignments, and authority documentation sets.",
      icon: FileCheck2,
    },
    {
      num: 4,
      title: "Engineering Paths",
      description: "Pre-mapping electrical points, plumbing drops, and column load alignment.",
      icon: Layers,
    },
    {
      num: 5,
      title: "Ground Build",
      description: "Flawless transition into civil masonry, structural framing, and turnkey finishes.",
      icon: Building2,
    },
  ];

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
            SECTION 1: HERO (100dvh - EDITORIAL HERO OVER FULL-BLEED IMAGE)
            Exact style & layout ref from src/app/construction
        =================================================================== */}
        <section
          data-header-theme="dark"
          aria-label="Design & Planning Hero"
          className="relative w-full min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-between pt-20 pb-4 sm:pt-22 sm:pb-5 lg:pt-22 lg:pb-4 bg-[#171714] text-white overflow-hidden border-b border-[#2A2925]"
        >
          {/* Full-Bleed Architectural Planning Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <Image
              src="/images/services/planning.webp"
              alt="Architectural design drawings and space planning in Nagercoil by SMS Construction"
              fill
              loading="lazy"
              sizes="100vw"
              className="object-cover object-right lg:object-[center_35%]"
            />
            {/* Elegant Soft Overlay Gradient matching Construction */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#171714]/85 via-[#171714]/50 to-[#171714]/20" />
          </div>

          {/* Main Content Area */}
          <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 w-full flex-1 flex flex-col justify-between pt-4 sm:pt-6 pb-2 sm:pb-3">

            {/* Middle Area: Editorial Copy & CTAs */}
            <div className="flex-1 flex flex-col justify-center max-w-3xl my-auto py-6 sm:py-8 lg:py-10">
              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-2 text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.2em] sm:tracking-[0.24em] uppercase text-[#e3c381] mb-3.5 sm:mb-4 lg:mb-5">
                <Compass size={13} className="shrink-0 text-[#e3c381]" />
                <span>SMS CONSTRUCTION • DESIGN &amp; PLANNING STUDIO</span>
              </div>

              {/* H1 Heading */}
              <h1
                className="font-bold intro-elem text-white leading-[1.12] sm:leading-[1.1] tracking-[-0.025em] mb-4 sm:mb-5 lg:mb-6"
                style={{ fontSize: "clamp(2rem, 3.8vw, 3.5rem)" }}
              >
                Design &amp; Planning Services in Nagercoil<span className="text-[#e3c381]">.</span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-[14.5px] sm:text-[15.5px] lg:text-[16.5px] leading-[1.65] sm:leading-[1.7] text-white/90 max-w-2xl mb-7 sm:mb-8 lg:mb-9 font-sans">
                From visualizing the finished space to preparing the plans that guide execution,
                SMS Construction brings design and planning together before the work begins.
              </p>

              {/* Primary & Secondary CTAs with clean responsive fitting */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-3.5 lg:gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto group relative overflow-hidden inline-flex items-center justify-center gap-2.5 min-h-[48px] sm:min-h-[50px] px-7 py-3 rounded-full bg-gradient-to-r from-[#e3c381] to-[#C89A47] text-[#171714] font-sans font-semibold text-[13.5px] sm:text-[14.5px] hover:shadow-lg hover:shadow-[#C89A47]/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-out text-center shadow-md"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight size={15} />
                </Link>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 min-h-[48px] sm:min-h-[50px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white font-sans font-medium text-[13px] sm:text-[14px] hover:bg-white hover:text-[#171714] transition-all duration-300 active:scale-[0.98] whitespace-nowrap"
                  >
                    <Phone size={14} className="text-[#e3c381] group-hover:text-[#171714]" />
                    <span>Call {formattedPhone}</span>
                  </a>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Hello%20SMS%20Construction%2C%20I%20would%20like%20to%20discuss%20design%20and%20planning%20for%20my%20project%20in%20Nagercoil.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial group inline-flex items-center justify-center gap-2 min-h-[48px] sm:min-h-[50px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-[#25D366] bg-[#25D366]/10 backdrop-blur-sm text-[#25D366] hover:bg-[#25D366] hover:text-white font-sans font-medium text-[13px] sm:text-[14px] transition-all duration-300 active:scale-[0.98] whitespace-nowrap"
                  >
                    <MessageSquare size={15} className="text-[#25D366] group-hover:text-white transition-colors" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Design & Planning Spec Footnote */}
            <div className="w-full pt-3.5 sm:pt-4 pb-1 border-t border-white/15 grid grid-cols-2 gap-x-4 gap-y-2 sm:flex sm:flex-wrap sm:items-center sm:justify-start sm:gap-x-5 lg:gap-x-6 sm:gap-y-2 text-[11.5px] sm:text-[12px] lg:text-[12.5px] mt-auto">
              <span className="flex items-center gap-1.5 font-medium text-white">
                <CheckCircle2 size={13.5} className="text-[#e3c381] shrink-0" />
                <span>3D Elevation &amp; Walkthrough</span>
              </span>
              <span className="hidden sm:inline text-white/25">•</span>
              <span className="flex items-center gap-1.5 font-medium text-white">
                <CheckCircle2 size={13.5} className="text-[#e3c381] shrink-0" />
                <span>Vastu &amp; Approval Drawings</span>
              </span>
              <span className="hidden sm:inline text-white/25">•</span>
              <span className="flex items-center gap-1.5 font-medium text-white">
                <CheckCircle2 size={13.5} className="text-[#e3c381] shrink-0" />
                <span>Electrical &amp; Plumbing Plans</span>
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
            SECTION 2: EDITORIAL INTRO (BEFORE THE BUILD)
            Exact 12-col asymmetric split from src/app/construction
        =================================================================== */}
        <section className="py-20 sm:py-28 border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              {/* Left Column: Heading */}
              <div className="lg:col-span-5">
                <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                  BEFORE THE BUILD
                </span>
                <h2 className="text-[30px] sm:text-[42px] lg:text-[48px] font-bold text-[#171714] leading-[1.18] tracking-tight">
                  Visualize the idea. Prepare the details.
                </h2>
              </div>

              {/* Right Column: 2 Concise Paragraphs */}
              <div className="lg:col-span-7 flex flex-col gap-6 text-[17px] sm:text-[18px] text-[#68645D] leading-relaxed font-sans">
                <p>
                  Every project begins with understanding your unique lifestyle, site dimensions,
                  and functional requirements. Developing a clear design direction early allows you
                  to visualize how spaces connect, breathe, and capture natural coastal light long
                  before on-site excavation or material purchases begin in Nagercoil.
                </p>
                <p>
                  Preparing coordinated drawings, spatial plans, and service schematics bridges
                  the gap between imagination and construction. By resolving room proportions,
                  circulation paths, and MEP conduit locations beforehand, we help reduce uncertainty
                  and establish practical clarity across every phase of your project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3: CORE DESIGN DISCIPLINES (4 Services)
            Theme: Asymmetric Split — Left Sticky Anchor + Right Clean Minimal Cards (No Images)
        =================================================================== */}
        <section
          aria-labelledby="design-heading"
          className="py-16 sm:py-24 lg:py-28 bg-[#FAF8F5] border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Core Design Disciplines Editorial Anchor */}
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                  CORE DESIGN DISCIPLINES
                </span>
                <h2
                  id="design-heading"
                  className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-4"
                >
                  Bring the idea into view<span className="text-[#B08A52]">.</span>
                </h2>
                <p className="text-[16px] sm:text-[17px] text-[#68645D] leading-relaxed font-sans mb-8">
                  Design services help you visualize and shape the project before execution. Dedicated design and planning disciplines translate functional needs into coherent architectural reality.
                </p>
              </div>

              {/* Right Column: 6 Clean Minimal Cards (No Images, No Pills, Minimal Editorial) */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
                {/* 01: 3D Elevation */}
                <article
                  id="3d-elevation"
                  className="group p-6 sm:p-7 rounded-[22px] bg-white border border-[#E7E0D4] shadow-xs hover:shadow-md hover:border-[#B08A52]/50 hover:-translate-y-1 transition-all duration-300 scroll-mt-28 flex flex-col justify-start"
                >
                  <span className="text-[11px] sm:text-[11.5px] font-mono uppercase tracking-wider text-[#B08A52] font-semibold mb-2">
                    Architectural Form
                  </span>
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-[#171714] leading-snug mb-2.5 group-hover:text-[#B08A52] transition-colors duration-200">
                    3D Elevation
                  </h3>
                  <p className="text-[13.5px] sm:text-[14.5px] text-[#68645D] leading-relaxed font-sans">
                    Visualize exterior massing, surface finishes, window openings, and facade lighting with photorealistic clarity before construction begins.
                  </p>
                </article>

                {/* 02: Interior Design */}
                <article
                  id="interior-design"
                  className="group p-6 sm:p-7 rounded-[22px] bg-white border border-[#E7E0D4] shadow-xs hover:shadow-md hover:border-[#B08A52]/50 hover:-translate-y-1 transition-all duration-300 scroll-mt-28 flex flex-col justify-start"
                >
                  <span className="text-[11px] sm:text-[11.5px] font-mono uppercase tracking-wider text-[#B08A52] font-semibold mb-2">
                    Primary Discipline
                  </span>
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-[#171714] leading-snug mb-2.5 group-hover:text-[#B08A52] transition-colors duration-200">
                    Interior Design
                  </h3>
                  <p className="text-[13.5px] sm:text-[14.5px] text-[#68645D] leading-relaxed font-sans">
                    Shape interior living spaces around function, comfort, lighting, modular joinery, and ceiling schematics before structural finishes begin.
                  </p>
                </article>

                {/* 03: Walkthrough Videos */}
                <article
                  id="walkthrough-videos"
                  className="group p-6 sm:p-7 rounded-[22px] bg-white border border-[#E7E0D4] shadow-xs hover:shadow-md hover:border-[#B08A52]/50 hover:-translate-y-1 transition-all duration-300 scroll-mt-28 flex flex-col justify-start"
                >
                  <span className="text-[11px] sm:text-[11.5px] font-mono uppercase tracking-wider text-[#B08A52] font-semibold mb-2">
                    Spatial Motion
                  </span>
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-[#171714] leading-snug mb-2.5 group-hover:text-[#B08A52] transition-colors duration-200">
                    Walkthrough Videos
                  </h3>
                  <p className="text-[13.5px] sm:text-[14.5px] text-[#68645D] leading-relaxed font-sans">
                    Experience proposed spaces through virtual walkthroughs to understand spatial flow, room transitions, and heights before ground is broken.
                  </p>
                </article>

                {/* 04: Structural Designing */}
                <article
                  id="structural-designing"
                  className="group p-6 sm:p-7 rounded-[22px] bg-white border border-[#E7E0D4] shadow-xs hover:shadow-md hover:border-[#B08A52]/50 hover:-translate-y-1 transition-all duration-300 scroll-mt-28 flex flex-col justify-start"
                >
                  <span className="text-[11px] sm:text-[11.5px] font-mono uppercase tracking-wider text-[#B08A52] font-semibold mb-2">
                    Engineering Alignment
                  </span>
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-[#171714] leading-snug mb-2.5 group-hover:text-[#B08A52] transition-colors duration-200">
                    Structural Designing
                  </h3>
                  <p className="text-[13.5px] sm:text-[14.5px] text-[#68645D] leading-relaxed font-sans">
                    Coordinate column placements, beam depths, and slab spans directly with architectural drawings to ensure structural safety and utility.
                  </p>
                </article>

                {/* 05: Approval Drawings */}
                <article
                  id="approval-drawings"
                  className="group p-6 sm:p-7 rounded-[22px] bg-white border border-[#E7E0D4] shadow-xs hover:shadow-md hover:border-[#B08A52]/50 hover:-translate-y-1 transition-all duration-300 scroll-mt-28 flex flex-col justify-start"
                >
                  <span className="text-[11px] sm:text-[11.5px] font-mono uppercase tracking-wider text-[#B08A52] font-semibold mb-2">
                    Statutory Clearance
                  </span>
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-[#171714] leading-snug mb-2.5 group-hover:text-[#B08A52] transition-colors duration-200">
                    Approval Drawings
                  </h3>
                  <p className="text-[13.5px] sm:text-[14.5px] text-[#68645D] leading-relaxed font-sans">
                    Drawings prepared systematically to support municipal, Panchayat, and DTCP documentation requirements before site excavation begins.
                  </p>
                </article>

                {/* 06: Vastu Plan */}
                <article
                  id="vastu-plan"
                  className="group p-6 sm:p-7 rounded-[22px] bg-white border border-[#E7E0D4] shadow-xs hover:shadow-md hover:border-[#B08A52]/50 hover:-translate-y-1 transition-all duration-300 scroll-mt-28 flex flex-col justify-start"
                >
                  <span className="text-[11px] sm:text-[11.5px] font-mono uppercase tracking-wider text-[#B08A52] font-semibold mb-2">
                    Directional Harmonization
                  </span>
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-[#171714] leading-snug mb-2.5 group-hover:text-[#B08A52] transition-colors duration-200">
                    Vastu Plan
                  </h3>
                  <p className="text-[13.5px] sm:text-[14.5px] text-[#68645D] leading-relaxed font-sans">
                    Aligning room zoning, entrances, kitchens, and water bodies with directional Vastu principles without compromising modern living utility.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 4: OUR APPROACH ("From Idea to Build" Continuous Workflow)
            Theme: Minimal Architectural Studio Workflow in Brand Theme (#FAF8F3 / White / Gold)
        =================================================================== */}
        <section
          aria-labelledby="approach-heading"
          className="py-10 sm:py-14 lg:py-16 bg-white border-b border-[#E7E0D4] relative"
        >
          <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Header */}
            <div className="max-w-[760px] mx-auto text-center mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-2 sm:mb-2.5">
                <span>CONNECTED WORKFLOW</span>
              </div>
              <h2
                id="approach-heading"
                className="text-[28px] sm:text-[38px] lg:text-[42px] font-bold text-[#171714] leading-[1.16] tracking-tight mb-3"
              >
                From Concept to Ground Reality<span className="text-[#B08A52]">.</span>
              </h2>
              <p className="text-[15px] sm:text-[16px] text-[#68645D] leading-relaxed max-w-2xl mx-auto font-sans">
                Design defines the spatial concept. Planning engineers the technical coordinates. Construction brings the vision into physical reality with zero disconnect.
              </p>
            </div>

            {/* Steps Row (Matching User Reference Image: Floating Outline Icon with Offset Shadow + Number Badge + Description) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 xl:gap-8 mb-8 sm:mb-10">
              {connectionSteps.map((step) => (
                <div key={step.num} className="group flex flex-col items-start text-left">
                  {/* Floating Outline Icon with Soft Warm Offset Shadow */}
                  <div className="relative inline-flex mb-5">
                    {/* Offset Shadow Shape in Brand Champagne Tone */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-2xl bg-[#E8DCC8] border border-[#D9CCA8]/40 transition-transform duration-300 ease-out group-hover:translate-x-2 group-hover:translate-y-2"
                    />
                    {/* Main Outline Icon Container */}
                    <div className="relative h-15 w-15 sm:h-16 sm:w-16 rounded-2xl bg-white border-2 border-[#171714] flex items-center justify-center text-[#171714] shadow-xs transition-transform duration-300 ease-out group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
                      <step.icon size={26} strokeWidth={1.8} className="text-[#171714]" />
                    </div>
                  </div>

                  {/* Numbered Circle & Text Layout */}
                  <div className="flex items-start gap-3 w-full">
                    <span className="h-6 w-6 sm:h-7 sm:w-7 rounded-full border border-[#171714] flex items-center justify-center font-mono text-[11px] sm:text-[12px] font-bold text-[#171714] shrink-0 mt-0.5 bg-white">
                      {step.num}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[16px] sm:text-[17px] font-bold text-[#171714] leading-snug mb-1 group-hover:text-[#B08A52] transition-colors duration-200">
                        {step.title}
                      </h3>
                      <p className="text-[13px] sm:text-[13.5px] text-[#68645D] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Internal Discipline Transition Links */}
            <div className="mt-8 pt-6 border-t border-[#E7E0D4] flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[13.5px] font-sans">
              <span className="text-[#68645D]">Explore direct execution disciplines:</span>
              <Link
                href="/construction"
                className="inline-flex items-center gap-1.5 font-semibold text-[#171714] hover:text-[#B08A52] transition-colors"
              >
                <span>Civil Construction</span>
                <ArrowRight size={13} className="text-[#B08A52]" />
              </Link>
              <span className="text-[#D6CEBF] hidden sm:inline">•</span>
              <Link
                href="/interior-design"
                className="inline-flex items-center gap-1.5 font-semibold text-[#171714] hover:text-[#B08A52] transition-colors"
              >
                <span>Interior Design</span>
                <ArrowRight size={13} className="text-[#B08A52]" />
              </Link>
              <span className="text-[#D6CEBF] hidden sm:inline">•</span>
              <Link
                href="/survey-approvals"
                className="inline-flex items-center gap-1.5 font-semibold text-[#171714] hover:text-[#B08A52] transition-colors"
              >
                <span>Survey &amp; Approvals</span>
                <ArrowRight size={13} className="text-[#B08A52]" />
              </Link>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 7: REAL PROJECT CONTEXT (Nagarajan Residence Showcase)
        =================================================================== */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
              <div className="max-w-[700px]">
                <div className="inline-flex items-center gap-2 text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-2 sm:mb-2.5">
                  <span>BUILT WORK</span>
                </div>
                <h2 className="text-[28px] sm:text-[38px] lg:text-[42px] font-bold text-[#171714] leading-[1.16] tracking-tight mb-2.5">
                  See How Ideas Become Finished Spaces<span className="text-[#B08A52]">.</span>
                </h2>
                <p className="text-[15px] sm:text-[16px] text-[#68645D] leading-relaxed font-sans">
                  Real projects demonstrate how early architectural planning, spatial zoning, and joinery coordination materialize into calm, cohesive living environments.
                </p>
              </div>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 font-sans font-semibold text-[13.5px] text-[#171714] hover:text-[#B08A52] transition-colors pb-1 border-b-2 border-[#171714] hover:border-[#B08A52] shrink-0 self-start sm:self-auto"
              >
                <span>View All Projects</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Showcase Card in Brand Theme */}
            <div className="bg-[#FAF8F3] rounded-[24px] overflow-hidden border border-[#E7E0D4] shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[420px] bg-[#171714]">
                  <Image
                    src="/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-living-room-wide.webp"
                    alt="Planned living room architecture and false ceiling layout at Nagarajan Residence in Nagercoil"
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#171714]/90 backdrop-blur-md text-white text-[11px] font-mono tracking-wider">
                    Planned &amp; Executed Outcome
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 text-[11.5px] text-[#B08A52] font-mono font-semibold tracking-wider uppercase mb-2">
                      <span>Nagercoil (Theroor)</span>
                      <span>3,500 Sq. Ft.</span>
                    </div>

                    <h3 className="text-[24px] sm:text-[28px] lg:text-[30px] font-bold text-[#171714] mb-3 leading-tight">
                      Nagarajan Residence
                    </h3>

                    <p className="text-[14px] sm:text-[14.5px] text-[#68645D] leading-relaxed mb-6 font-sans">
                      The planning phase for this residence focused on resolving continuous sightlines from the entrance to the main living area, integrating fluted partition screens, and aligning perimeter ceiling drops with the civil structural slab.
                    </p>

                    <div className="space-y-2.5 mb-8">
                      <p className="text-[11.5px] font-mono font-bold uppercase tracking-wider text-[#171714]">
                        Key Design &amp; Planning Coordination:
                      </p>
                      <ul className="space-y-2.5 text-[13.5px] text-[#68645D] font-sans">
                        <li className="flex items-center gap-2.5">
                          <span className="h-5 w-5 rounded-full border border-[#171714] bg-white flex items-center justify-center shrink-0">
                            <CheckCircle2 size={12} className="text-[#B08A52]" />
                          </span>
                          <span>Foyer-to-Lounge Sightline &amp; Partition Mapping</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <span className="h-5 w-5 rounded-full border border-[#171714] bg-white flex items-center justify-center shrink-0">
                            <CheckCircle2 size={12} className="text-[#B08A52]" />
                          </span>
                          <span>TV Media Wall Joinery &amp; Cable Route Schematics</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <span className="h-5 w-5 rounded-full border border-[#171714] bg-white flex items-center justify-center shrink-0">
                            <CheckCircle2 size={12} className="text-[#B08A52]" />
                          </span>
                          <span>Drywall False Ceiling Lighting &amp; Level Drops</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <span className="h-5 w-5 rounded-full border border-[#171714] bg-white flex items-center justify-center shrink-0">
                            <CheckCircle2 size={12} className="text-[#B08A52]" />
                          </span>
                          <span>Ergonomic Kitchen Workflow &amp; Plumbing Alignment</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <Link
                    href="/projects/nagarajan-residence-nagercoil-theroor"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full bg-[#171714] hover:bg-[#B08A52] text-white font-sans font-semibold text-[13.5px] transition-colors duration-200 shadow-xs"
                  >
                    <span>View Project Case Study</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      

        {/* ===================================================================
            SECTION 8: LOCAL SERVICE AREA (GEO / LOCAL SEO)
        =================================================================== */}
        <LocalServiceArea
          badge="BASED IN NAGERCOIL"
          title={
            <>
              Design &amp; Planning Services in Nagercoil<span className="text-[#B08A52]">.</span>
            </>
          }
          titleClassName="text-[28px] sm:text-[38px] lg:text-[42px] font-bold text-[#171714] leading-[1.16] tracking-tight mb-4"
          description={[
            "SMS Construction is based in Nagercoil, Tamil Nadu, providing design and planning support for construction and interior projects within its actual service area.",
            "Our local presence allows us to visit your plot directly, assess boundaries, sun angles, and regional coastal climate considerations in every drawing and spatial layout.",
          ]}
          deskTitle="Studio Desk"
          companyName="SMS Construction"
          phoneNumber={phoneNumber}
          formattedPhone={formattedPhone}
          email="smsconstructionngl@gmail.com"
          emailLabel="Studio Email:"
          hours="Monday – Saturday"
          className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#E7E0D4]"
          cardBgClassName="bg-[#FAF8F3]"
          pillBgClassName="bg-[#FAF8F3]"
        />

        {/* ===================================================================
            SECTION 9: FAQ (AEO & DIRECT ANSWER KNOWLEDGE BASE)
            Matching src/app/construction Section 8
        =================================================================== */}
        <ModernFaq
          sectionId="faq-heading"
          title="Frequently Asked Questions"
          titleAccent="."
          subtitle="Everything you need to know"
          items={designPlanningFaqs}
          className="py-16 md:py-24 bg-[#FAFAFA] border-b border-[#E7E0D4] relative"
        />

        {/* ===================================================================
            SECTION 10: INTERNAL ARCHITECTURE HUB BAR (OTHER DISCIPLINES)
            Matching src/app/construction lines 629-675
        =================================================================== */}
        <section className="py-12 bg-[#FAF8F3] border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[#B08A52]">
                  Explore Full Service Architecture
                </p>
                <p className="text-[18px] font-semibold text-[#171714]">
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
                  href="/construction"
                  className="px-4 py-2 rounded-full bg-white hover:bg-[#B08A52] hover:text-white border border-[#E7E0D4] text-[#171714] font-medium transition-colors"
                >
                  Construction
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
            Matching src/app/construction Section 9 with ConversionCTA
        =================================================================== */}
        <ConversionCTA
          theme="light"
          badge="START WITH A CLEAR PLAN"
          title="Have an idea? Let's shape it before you build."
          description="Tell us what you are planning to build, design or transform, and discuss the design and planning requirements with SMS Construction."
          primaryBtnText="Get a Free Quote"
          primaryBtnHref="/contact"
          phoneNumber={phoneNumber}
          formattedPhone={formattedPhone}
          whatsappNumber={whatsappNumber}
          whatsappMessage="Hello, I would like to consult regarding design and planning in Nagercoil."
          subtext="SMS Construction • Architectural Design & Planning Studio • Nagercoil, Tamil Nadu"
        />
      </main>
    </>
  );
}
