import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Phone, MessageSquare, CheckCircle2, MapPin, Compass, Draft, Lightbulb, Ruler } from "lucide-react";
import {
  planningScopes,
  planningProcessSteps,
  planningAudienceItems,
  planningFaqs,
} from "@/data/designPlanning";
import ServiceFaqAccordion from "../services/components/ServiceFaqAccordion";

export const metadata: Metadata = {
  title: "Design & Planning Services in Nagercoil | SMS Construction",
  description:
    "Explore design and planning services from SMS Construction in Nagercoil, helping clients understand their site, requirements, space and project direction before execution.",
  alternates: {
    canonical: "/design-planning",
  },
  openGraph: {
    title: "Design & Planning Services in Nagercoil | SMS Construction",
    description:
      "Explore design and planning services from SMS Construction in Nagercoil, helping clients understand their site, requirements, space and project direction before execution.",
    url: "https://smsconstruction.in/design-planning",
    siteName: "SMS Construction",
    images: [
      {
        url: "/images/services/planning.jpg",
        width: 1200,
        height: 630,
        alt: "Design and Planning Services in Nagercoil by SMS Construction",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Design & Planning Services in Nagercoil | SMS Construction",
    description:
      "Explore design and planning services from SMS Construction in Nagercoil, helping clients understand their site, requirements, space and project direction before execution.",
    images: ["/images/services/planning.jpg"],
  },
};

export default function DesignPlanningPage() {
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
        name: "Design & Planning",
        item: "https://smsconstruction.in/design-planning",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Design & Planning Services",
    serviceType: "Architectural and Pre-Construction Planning",
    description:
      "Architectural space planning, site analysis, functional zoning, 3D visualization, and pre-construction schematics in Nagercoil.",
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
      name: "Design & Planning Offerings",
      itemListElement: planningScopes.map((scope, idx) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: scope.title,
          description: scope.description,
        },
        position: idx + 1,
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: planningFaqs.map((faq) => ({
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
                    Design &amp; Planning
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
              {/* Left Column: Conceptual Architectural Copy */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3.5">
                  DESIGN &amp; PLANNING
                </span>

                <h1 className="font-serif text-[34px] sm:text-[48px] lg:text-[60px] font-bold text-[#171714] leading-[1.12] tracking-tight mb-5 sm:mb-6">
                  Design &amp; Planning for Your Project
                </h1>

                <p className="text-[17px] sm:text-[19px] leading-relaxed text-[#68645D] max-w-[600px] mb-8 sm:mb-10 font-sans">
                  Good projects begin with clarity. We help shape the brief, understand the site,
                  plan the space and develop a practical direction before execution begins.
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
                    href="/services"
                    className="inline-flex items-center justify-center min-h-[52px] px-7 py-3.5 rounded-full border border-[#B08A52] text-[#B08A52] font-sans font-medium text-[15px] hover:bg-[#B08A52] hover:text-white transition-all duration-300 active:scale-[0.98]"
                  >
                    Explore Our Services
                  </Link>
                </div>

                {/* Studio Meta Strip */}
                <div className="mt-8 sm:mt-12 pt-6 border-t border-[#E7E0D4]/70 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-[#77736C]">
                  <span className="flex items-center gap-1.5 font-medium text-[#171714]">
                    <span className="h-2 w-2 rounded-full bg-[#B08A52]" />
                    Pre-Execution Clarity
                  </span>
                  <span>Spatial Zoning &amp; Schematics</span>
                  <span>Nagercoil Studio Consultations</span>
                </div>
              </div>

              {/* Right Column: Real Planning Photography Frame */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-[500px] lg:max-w-none">
                  <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden border border-[#E7E0D4] bg-[#F2EDE3] shadow-md">
                    <Image
                      src="/images/services/planning.jpg"
                      alt="Architectural design and spatial planning in Nagercoil by SMS Construction"
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
                            Phase 01 / Studio
                          </p>
                          <p className="font-serif text-[15px] font-semibold text-[#171714]">
                            Architectural &amp; Spatial Planning
                          </p>
                        </div>
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FAF8F3] text-[#B08A52]">
                          <Compass size={16} />
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
            SECTION 2: WHY PLANNING MATTERS (BEFORE THE BUILD)
        =================================================================== */}
        <section className="py-20 sm:py-28 border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              {/* Left Column: Heading */}
              <div className="lg:col-span-5">
                <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                  BEFORE THE BUILD
                </span>
                <h2 className="font-serif text-[30px] sm:text-[42px] lg:text-[48px] font-bold text-[#171714] leading-[1.18] tracking-tight">
                  Clarity before execution.
                </h2>
              </div>

              {/* Right Column: 2 Concise Paragraphs */}
              <div className="lg:col-span-7 flex flex-col gap-6 text-[17px] sm:text-[18px] text-[#68645D] leading-relaxed font-sans">
                <p>
                  Every project has unique requirements shaped by site boundaries, sun exposure, family
                  dynamics, and long-term aspirations. Rigorous planning helps bring together these
                  diverse parameters into a unified, practical design direction long before on-site
                  demolition or ground excavation begins in Nagercoil.
                </p>
                <p>
                  By testing spatial proportions, traffic flow corridors, and service conduit paths
                  early, we eliminate ambiguities that otherwise lead to mid-construction compromises.
                  Planning ensures you enter the build phase with complete confidence in how the home
                  will look, function, and feel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3: WHAT WE HELP PLAN
        =================================================================== */}
        <section className="py-20 sm:py-28 lg:py-32 bg-[#F6F3EB] border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Section Header */}
            <div className="max-w-[760px] mb-14 sm:mb-20">
              <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                AREAS OF FOCUS
              </span>
              <h2 className="font-serif text-[30px] sm:text-[42px] lg:text-[48px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-4">
                What We Help You Plan
              </h2>
              <p className="text-[16px] sm:text-[18px] text-[#68645D] leading-relaxed">
                A structured design-thinking methodology covering spatial layouts, environmental
                context, material palettes, and service distribution before work starts on ground.
              </p>
            </div>

            {/* Horizontal Editorial Rows */}
            <div className="divide-y divide-[#E7E0D4] border-y border-[#E7E0D4]">
              {planningScopes.map((scope) => (
                <article
                  key={scope.id}
                  className="group py-10 sm:py-12 lg:py-14 transition-colors duration-300 hover:bg-white/70"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start lg:items-center">
                    {/* Left: Number + Title */}
                    <div className="lg:col-span-5 flex items-baseline sm:items-center gap-5 sm:gap-6">
                      <span className="font-serif text-[28px] sm:text-[36px] font-semibold text-[#B08A52] tracking-tight shrink-0">
                        {scope.number}
                      </span>
                      <div>
                        <h3 className="font-serif text-[22px] sm:text-[26px] lg:text-[30px] font-bold text-[#171714] tracking-tight group-hover:text-[#B08A52] transition-colors duration-200">
                          {scope.title}
                        </h3>
                        <p className="text-[13px] font-sans text-[#77736C] mt-0.5">
                          Architectural &amp; Spatial Framework
                        </p>
                      </div>
                    </div>

                    {/* Center: Description */}
                    <div className="lg:col-span-4">
                      <p className="text-[16px] text-[#68645D] leading-relaxed">
                        {scope.description}
                      </p>
                    </div>

                    {/* Right: Technical Scope Pills */}
                    <div className="lg:col-span-3 flex flex-wrap gap-1.5 lg:justify-end">
                      {scope.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[12px] font-sans rounded-md bg-white text-[#68645D] border border-[#E7E0D4]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 4: FROM IDEA TO PLAN (OUR APPROACH)
        =================================================================== */}
        <section className="py-20 sm:py-28 lg:py-32 border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Header */}
            <div className="max-w-[760px] mb-14 sm:mb-20">
              <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                OUR APPROACH
              </span>
              <h2 className="font-serif text-[30px] sm:text-[42px] lg:text-[48px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-4">
                From an idea to a workable plan.
              </h2>
              <p className="text-[16px] sm:text-[18px] text-[#68645D] leading-relaxed">
                A progressive design journey from raw ideas to coordinated drawings ready for
                engineering and execution.
              </p>
            </div>

            {/* Sequential Ordered Milestones */}
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {planningProcessSteps.map((step, idx) => (
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
            SECTION 5: DESIGN CONNECTED TO CONSTRUCTION
        =================================================================== */}
        <section className="py-20 sm:py-28 bg-[#F6F3EB] border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Left Column: Content & Direction */}
              <div className="lg:col-span-7">
                <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                  SEAMLESS INTERFACE
                </span>
                <h2 className="font-serif text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-5">
                  Design decisions that understand the build.
                </h2>
                <p className="text-[17px] leading-relaxed text-[#68645D] mb-6 font-sans">
                  Drawings are only as good as their buildability. Because SMS Construction actively
                  constructs and finishes homes, our design team conceives spaces with practical
                  knowledge of masonry tolerances, RCC load paths, plumbing drops, and timber
                  joinery.
                </p>
                <p className="text-[16px] leading-relaxed text-[#68645D] mb-8 font-sans">
                  This build-informed design approach reduces ambiguity and ensures you avoid the
                  disconnect that often occurs when architects and site contractors work in isolation.
                </p>

                {/* Cross-Discipline Action Links */}
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/construction"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#171714] text-white hover:bg-[#B08A52] font-sans font-medium text-[14px] transition-colors"
                  >
                    <span>Explore Construction</span>
                    <ArrowRight size={15} />
                  </Link>

                  <Link
                    href="/interior-design"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#B08A52] text-[#B08A52] hover:bg-[#B08A52] hover:text-white font-sans font-medium text-[14px] transition-colors"
                  >
                    <span>Explore Interior Design</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* Right Column: Measured Planning Card */}
              <div className="lg:col-span-5">
                <div className="p-8 sm:p-10 rounded-[24px] bg-white border border-[#E7E0D4] shadow-sm space-y-6">
                  <div className="flex items-center gap-3 text-[#B08A52]">
                    <Ruler size={22} />
                    <span className="text-[12px] font-sans font-semibold uppercase tracking-wider text-[#171714]">
                      Pre-Build Alignment
                    </span>
                  </div>

                  <h3 className="font-serif text-[22px] font-bold text-[#171714]">
                    Measured Spatial Coordination
                  </h3>

                  <ul className="space-y-3 text-[14px] text-[#68645D]">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#B08A52] shrink-0 mt-0.5" />
                      <span>Window apertures aligned for natural coastal cross-breezes</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#B08A52] shrink-0 mt-0.5" />
                      <span>Electrical conduit drops positioned for future TV and console joinery</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#B08A52] shrink-0 mt-0.5" />
                      <span>Door swing arcs calibrated to preserve usable furniture footprint</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#B08A52] shrink-0 mt-0.5" />
                      <span>Plumbing risers grouped to simplify maintenance and acoustics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 6: REAL PROJECT CONTEXT (FROM IDEA TO SPACE)
        =================================================================== */}
        <section className="py-20 sm:py-28 lg:py-32 border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
              <div className="max-w-[700px]">
                <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                  FROM IDEA TO SPACE
                </span>
                <h2 className="font-serif text-[30px] sm:text-[42px] lg:text-[48px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-3">
                  See the Planning in Context
                </h2>
                <p className="text-[16px] sm:text-[18px] text-[#68645D] leading-relaxed">
                  Real projects demonstrate how early brief shaping, space planning, and joinery
                  detailing materialize into calm, cohesive living spaces.
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
                    src="/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-living-room-wide.webp"
                    alt="Planned living room architecture and false ceiling layout at Nagarajan Residence in Nagercoil"
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-[#171714]/85 backdrop-blur-sm text-white text-[12px] font-medium tracking-wide">
                    Planned &amp; Executed Outcome
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
                      The planning phase for this residence focused on resolving continuous sightlines
                      from the entry foyer to the main living area, integrating fluted room partitions
                      and perimeter false ceiling drops into a cohesive floor plan.
                    </p>

                    <div className="space-y-2.5 mb-8">
                      <p className="text-[12px] font-sans font-semibold uppercase tracking-wider text-[#171714]">
                        Planning Milestones Resolved:
                      </p>
                      <ul className="space-y-1.5 text-[14px] text-[#68645D]">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-[#B08A52] shrink-0" />
                          <span>Foyer-to-Lounge Sightline &amp; Partition Mapping</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-[#B08A52] shrink-0" />
                          <span>TV Media Wall Joinery &amp; Cable Route Schematics</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-[#B08A52] shrink-0" />
                          <span>Drywall False Ceiling Lighting &amp; Level Drops</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-[#B08A52] shrink-0" />
                          <span>Ergonomic Modular Kitchen Workflow Layout</span>
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
            SECTION 7: WHO THIS SERVICE IS FOR
        =================================================================== */}
        <section className="py-20 sm:py-28 lg:py-32 bg-[#F6F3EB] border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Header */}
            <div className="max-w-[760px] mb-14 sm:mb-18">
              <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                PROJECT SCENARIOS
              </span>
              <h2 className="font-serif text-[30px] sm:text-[42px] lg:text-[48px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-4">
                When Design &amp; Planning Can Help
              </h2>
              <p className="text-[16px] sm:text-[18px] text-[#68645D] leading-relaxed">
                Practical scenarios where pre-construction spatial thinking and structured brief
                definition yield the greatest value.
              </p>
            </div>

            {/* 5 Scenario Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {planningAudienceItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`p-7 sm:p-8 rounded-[20px] bg-white border border-[#E7E0D4] shadow-sm flex flex-col justify-between ${
                    index === 3 ? "lg:col-span-1" : index === 4 ? "md:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  <div>
                    <div className="h-11 w-11 rounded-xl bg-[#FAF8F3] border border-[#E7E0D4] flex items-center justify-center text-[#B08A52] mb-5">
                      <span className="material-symbols-outlined text-[24px]">
                        {item.icon}
                      </span>
                    </div>

                    <h3 className="font-serif text-[20px] sm:text-[22px] font-bold text-[#171714] mb-2.5">
                      {item.title}
                    </h3>

                    <p className="text-[15px] text-[#68645D] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 8: LOCAL CONTEXT (GEO / LOCAL SEO)
        =================================================================== */}
        <section className="py-20 sm:py-28 border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Left Column: Local Editorial Context */}
              <div className="lg:col-span-7">
                <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                  BASED IN NAGERCOIL
                </span>
                <h2 className="font-serif text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-5">
                  Design &amp; Planning Services in Nagercoil
                </h2>
                <p className="text-[17px] leading-relaxed text-[#68645D] mb-6">
                  SMS Construction is based in Nagercoil, Tamil Nadu, helping clients shape residential
                  and commercial projects with clear architectural planning before execution.
                  Our local presence allows us to visit your plot directly, assess boundary conditions,
                  and consider regional coastal climate factors in every schematic.
                </p>
                <p className="text-[16px] leading-relaxed text-[#68645D] mb-8">
                  We actively provide design and planning support across Nagercoil, Suchindram,
                  Theroor, Kanyakumari, Marthandam, and surrounding areas.
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
                <div className="p-8 sm:p-10 rounded-[24px] bg-[#F6F3EB] border border-[#E7E0D4] shadow-sm">
                  <span className="text-[12px] font-sans font-semibold uppercase tracking-wider text-[#B08A52] block mb-2">
                    Studio Desk
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
                      <span className="text-[#77736C]">Consultations:</span>
                      <span className="font-medium text-[#171714]">Monday – Saturday</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 9: FAQ
        =================================================================== */}
        <section className="py-20 sm:py-28 lg:py-32 bg-[#F6F3EB] border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              {/* Left Column: Context & Prompt */}
              <div className="lg:col-span-5">
                <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                  COMMON QUESTIONS
                </span>
                <h2 className="font-serif text-[30px] sm:text-[42px] lg:text-[46px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-[16px] sm:text-[17px] text-[#68645D] leading-relaxed mb-8">
                  Direct answers regarding our architectural planning process, site assessments,
                  preparation requirements, and Nagercoil consultations.
                </p>

                <div className="p-6 rounded-[20px] bg-white border border-[#E7E0D4] shadow-sm">
                  <h3 className="font-serif text-[18px] font-bold text-[#171714] mb-2">
                    Have a plot or floor plan you want to discuss?
                  </h3>
                  <p className="text-[14px] text-[#68645D] mb-4">
                    Our team is available for in-person exploratory discussions at our Nagercoil studio.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-sans font-semibold text-[14px] text-[#B08A52] hover:text-[#80633D] transition-colors"
                  >
                    <span>Schedule a Planning Consultation</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* Right Column: Accessible Accordion */}
              <div className="lg:col-span-7 bg-white rounded-[24px] p-6 sm:p-8 lg:p-10 border border-[#E7E0D4] shadow-sm">
                <ServiceFaqAccordion items={planningFaqs} />
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            INTERNAL ARCHITECTURE HUB BAR (OTHER DISCIPLINES)
        =================================================================== */}
        <section className="py-12 bg-white border-b border-[#E7E0D4]">
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
                  className="px-4 py-2 rounded-full bg-[#FAF8F3] hover:bg-[#B08A52] hover:text-white border border-[#E7E0D4] text-[#171714] font-medium transition-colors"
                >
                  Services Hub
                </Link>
                <Link
                  href="/interior-design"
                  className="px-4 py-2 rounded-full bg-[#FAF8F3] hover:bg-[#B08A52] hover:text-white border border-[#E7E0D4] text-[#171714] font-medium transition-colors"
                >
                  Interior Design
                </Link>
                <Link
                  href="/construction"
                  className="px-4 py-2 rounded-full bg-[#FAF8F3] hover:bg-[#B08A52] hover:text-white border border-[#E7E0D4] text-[#171714] font-medium transition-colors"
                >
                  Construction
                </Link>
                <Link
                  href="/survey-approvals"
                  className="px-4 py-2 rounded-full bg-[#FAF8F3] hover:bg-[#B08A52] hover:text-white border border-[#E7E0D4] text-[#171714] font-medium transition-colors"
                >
                  Survey &amp; Approvals
                </Link>
                <Link
                  href="/fabrication-works"
                  className="px-4 py-2 rounded-full bg-[#FAF8F3] hover:bg-[#B08A52] hover:text-white border border-[#E7E0D4] text-[#171714] font-medium transition-colors"
                >
                  Fabrication Works
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 10: FINAL LEAD CTA
        =================================================================== */}
        <section className="relative overflow-hidden py-24 sm:py-32 bg-[#171614] text-white">
          {/* Subtle Ambient Radial Accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#B08A52]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-[980px] mx-auto px-5 sm:px-8 text-center">
            <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.25em] uppercase text-[#FBE18D] mb-4">
              START WITH A PLAN
            </span>

            <h2 className="font-serif text-[34px] sm:text-[48px] lg:text-[56px] font-bold text-[#FAF8F3] leading-[1.14] tracking-tight mb-6">
              Have an idea? Let&apos;s shape it.
            </h2>

            <p className="text-[17px] sm:text-[19px] leading-relaxed text-[#FAF8F3]/80 max-w-[680px] mx-auto mb-10 font-sans">
              Tell us what you are planning to build, renovate or transform, and start the
              conversation with SMS Construction.
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
              SMS Construction • Architectural Design &amp; Planning Studio • Nagercoil, Tamil Nadu
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
