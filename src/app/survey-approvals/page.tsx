import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  MessageSquare,
  CheckCircle2,
  MapPin,
  Compass,
  FileText,
  Building2,
  Ruler,
  Clock,
  Layers,
  FileSpreadsheet,
  CheckSquare,
  ShieldCheck,
  Calendar,
  AlertCircle,
} from "lucide-react";
import {
  surveyScopes,
  surveyProcessSteps,
  clientPreparationItems,
  surveyAudienceItems,
  surveyFaqs,
} from "@/data/surveyApprovals";
import ServiceFaqAccordion from "../services/components/ServiceFaqAccordion";

export const metadata: Metadata = {
  title: "Survey & Approvals Support in Nagercoil | SMS Construction",
  description:
    "Explore survey and approvals support from SMS Construction in Nagercoil, helping clients understand site, project and pre-construction requirements.",
  alternates: {
    canonical: "/survey-approvals",
  },
  openGraph: {
    title: "Survey & Approvals Support in Nagercoil | SMS Construction",
    description:
      "Explore survey and approvals support from SMS Construction in Nagercoil, helping clients understand site, project and pre-construction requirements.",
    url: "https://smsconstruction.in/survey-approvals",
    siteName: "SMS Construction",
    images: [
      {
        url: "/images/services/survey.jpg",
        width: 1200,
        height: 630,
        alt: "Site analysis and project documentation review in Nagercoil by SMS Construction",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Survey & Approvals Support in Nagercoil | SMS Construction",
    description:
      "Explore survey and approvals support from SMS Construction in Nagercoil, helping clients understand site, project and pre-construction requirements.",
    images: ["/images/services/survey.jpg"],
  },
};

export default function SurveyApprovalsPage() {
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
        name: "Survey & Approvals",
        item: "https://smsconstruction.in/survey-approvals",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Survey & Approvals Support",
    serviceType: "Pre-Construction & Site Planning Support",
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
      "Pre-construction site assessment, project requirement review, documentation coordination, and approval-related preparation support in Nagercoil.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Survey & Approvals Offerings",
      itemListElement: surveyScopes.map((scope, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: scope.title,
          description: scope.description,
        },
      })),
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
                  Survey &amp; Approvals
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
                  <Compass className="w-3.5 h-3.5 text-[#B08A52]" />
                  <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#77736C]">
                    SURVEY &amp; APPROVALS
                  </span>
                </div>

                {/* H1 */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#171614] tracking-tight leading-[1.1] mb-6">
                  Survey &amp; Approvals Support for Your Project
                </h1>

                {/* Supporting Copy */}
                <p className="text-lg sm:text-xl text-[#77736C] font-light leading-relaxed max-w-2xl mb-8">
                  Before construction begins, understanding the site, documentation and project
                  requirements can help create a clearer path forward.
                </p>

                {/* Primary & Secondary CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#171614] text-[#FAF8F3] text-sm uppercase tracking-widest font-medium rounded-sm hover:bg-[#B08A52] transition-colors duration-300 shadow-sm group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A52]"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-transparent text-[#171614] border border-[#E7E0D4] text-sm uppercase tracking-widest font-medium rounded-sm hover:border-[#171614] hover:bg-[#171614]/5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A52]"
                  >
                    <span>Explore Services</span>
                  </Link>
                </div>
              </div>

              {/* Technical Indicator Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-12 mt-12 border-t border-[#E7E0D4]">
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-widest text-[#77736C] mb-1">
                    Discipline
                  </span>
                  <p className="text-sm font-medium text-[#171614]">Pre-Construction Setup</p>
                </div>
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-widest text-[#77736C] mb-1">
                    Primary Hub
                  </span>
                  <p className="text-sm font-medium text-[#171614]">Nagercoil, Tamil Nadu</p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="block text-[11px] font-mono uppercase tracking-widest text-[#77736C] mb-1">
                    Coordination Focus
                  </span>
                  <p className="text-sm font-medium text-[#171614]">Site &amp; Documentation</p>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] rounded-sm overflow-hidden border border-[#E7E0D4] bg-[#E7E0D4]/30 shadow-md group">
                <Image
                  src="/images/services/survey.jpg"
                  alt="Site analysis and project documentation review in Nagercoil"
                  width={800}
                  height={1000}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171614]/70 via-transparent to-transparent opacity-90" />
                
                {/* Visual Label */}
                <div className="absolute bottom-6 left-6 right-6 text-[#FAF8F3]">
                  <p className="text-xs font-mono uppercase tracking-widest text-[#B08A52] mb-1">
                    Site &amp; Document Review
                  </p>
                  <p className="text-sm font-light text-[#FAF8F3]/90">
                    Evaluating boundaries, access widths, and drawing requirements in Nagercoil.
                  </p>
                </div>

                {/* Technical Grid Accent */}
                <div className="absolute top-4 right-4 bg-[#171614]/80 backdrop-blur-sm border border-[#FAF8F3]/10 px-3 py-1.5 rounded-sm">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#FAF8F3]/90">
                    Phase 00 / Verification
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY THIS STAGE MATTERS */}
      <section className="py-20 lg:py-28 border-b border-[#E7E0D4] bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#B08A52] block mb-4">
              BEFORE WORK BEGINS
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#171614] tracking-tight leading-tight mb-8">
              Start with a clear understanding of the project.
            </h2>
            <div className="space-y-6 text-base sm:text-lg text-[#77736C] font-light leading-relaxed">
              <p>
                Every plot brings physical conditions that directly shape what can be built—from
                road access widths and boundary setbacks to natural drainage lines and neighbor
                proximities. Taking time to assess these conditions alongside your project scope and
                existing documentation helps establish practical parameters before any earth is moved
                or structural plans are committed.
              </p>
              <p>
                Early coordination also ensures drawing requirements and pre-construction logistics
                are resolved methodically. By clarifying site realities, room expectations, and
                documentary readiness early, you avoid the misaligned assumptions and costly on-site
                adjustments that frequently occur when construction begins in haste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT WE HELP WITH (PROJECT PREPARATION SUPPORT) */}
      <section className="py-20 lg:py-28 border-b border-[#E7E0D4] bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#B08A52] block mb-3">
                PRACTICAL CAPABILITIES
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#171614] tracking-tight">
                Project Preparation Support
              </h2>
            </div>
            <p className="text-sm text-[#77736C] max-w-md font-light">
              A structured editorial framework covering site assessment, documentation organization,
              and pre-build logistics before civil mobilization.
            </p>
          </div>

          {/* Editorial Split Row Layout (Not generic cards) */}
          <div className="divide-y divide-[#E7E0D4] border-y border-[#E7E0D4]">
            {surveyScopes.map((scope) => (
              <div
                key={scope.id}
                className="py-10 lg:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group hover:bg-[#FFFFFF]/60 transition-colors duration-300 px-4 -mx-4 rounded-sm"
              >
                {/* Number & Category */}
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl font-mono text-[#B08A52] font-normal">
                      {scope.number}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#77736C]">
                      {scope.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-light text-[#171614] group-hover:text-[#B08A52] transition-colors">
                    {scope.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-5">
                  <p className="text-base text-[#77736C] font-light leading-relaxed mb-4">
                    {scope.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-[#171614] bg-[#E7E0D4]/40 px-3 py-1.5 rounded-sm">
                    <span className="text-[#B08A52]">Outcome:</span>
                    <span>{scope.deliverable}</span>
                  </div>
                </div>

                {/* Details Breakdown */}
                <div className="lg:col-span-4 bg-[#FFFFFF] p-5 rounded-sm border border-[#E7E0D4]/70">
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-[#77736C] mb-3">
                    Specific Review Elements
                  </span>
                  <ul className="space-y-2">
                    {scope.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#171614]/80 font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B08A52] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: SITE TO START (CONCEPTUAL VISUAL PROCESS) */}
      <section className="py-20 lg:py-28 border-b border-[#E7E0D4] bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#B08A52] block mb-3">
              A CLEARER START
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#171614] tracking-tight mb-4">
              Understand. Prepare. Coordinate.
            </h2>
            <p className="text-base text-[#77736C] font-light leading-relaxed">
              A progressive 5-stage workflow designed to clarify boundaries, documentation, and
              consultant coordination so your project transitions confidently into design and build.
            </p>
          </div>

          {/* Process Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {surveyProcessSteps.map((step, index) => (
              <div
                key={step.number}
                className="relative p-6 rounded-sm border border-[#E7E0D4] bg-[#FAF8F3] hover:border-[#B08A52] transition-all duration-300 flex flex-col justify-between group"
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

                  <h3 className="text-lg font-normal text-[#171614] mb-2 group-hover:text-[#B08A52] transition-colors">
                    {step.title}
                  </h3>

                  <div className="inline-block text-[11px] font-mono text-[#B08A52] uppercase tracking-wider mb-3">
                    {step.action}
                  </div>

                  <p className="text-xs text-[#77736C] font-light leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E7E0D4]/70 mt-auto">
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-[#77736C] mb-1">
                    Key Focus
                  </span>
                  <span className="text-xs font-medium text-[#171614]">{step.focus}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Practical Disclaimer Note */}
          <div className="mt-12 p-5 rounded-sm bg-[#FAF8F3] border border-[#E7E0D4] flex items-start gap-4">
            <AlertCircle className="w-5 h-5 text-[#B08A52] shrink-0 mt-0.5" />
            <p className="text-xs text-[#77736C] font-light leading-relaxed">
              <strong className="font-medium text-[#171614]">Coordination Note:</strong> Specific
              filing requirements, statutory reviews, and submission documentation vary depending on
              local municipal authority rules, zoning parameters, and property jurisdiction in
              Nagercoil. SMS Construction assists with drawing setup, documentation coordination, and
              consultant alignment suited to your specific project needs.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHAT CLIENTS SHOULD PREPARE (AEO-FOCUSED) */}
      <section className="py-20 lg:py-28 border-b border-[#E7E0D4] bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#B08A52] block mb-3">
              CONSULTATION CHECKLIST
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#171614] tracking-tight mb-4">
              What Should You Have Before Starting?
            </h2>
            <p className="text-base text-[#77736C] font-light leading-relaxed">
              Gathering basic site details before our initial discussion helps us provide more
              practical, actionable guidance. Exact requirements naturally depend on whether your
              project is a new villa, a renovation, or an exploratory plot review.
            </p>
          </div>

          {/* Checklist 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientPreparationItems.map((item) => (
              <div
                key={item.number}
                className="bg-[#FFFFFF] p-6 rounded-sm border border-[#E7E0D4] hover:shadow-sm transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#B08A52] uppercase tracking-widest">
                      Item {item.number}
                    </span>
                    <CheckSquare className="w-4 h-4 text-[#77736C]/40" />
                  </div>

                  <h3 className="text-lg font-medium text-[#171614] mb-2">{item.title}</h3>
                  <p className="text-xs text-[#77736C] font-light leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E7E0D4]/70 bg-[#FAF8F3] -mx-6 -mb-6 p-4 rounded-b-sm">
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-[#B08A52] mb-0.5">
                    Practical Tip
                  </span>
                  <p className="text-xs text-[#171614]/80 font-light">{item.tip}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Helpful callout banner */}
          <div className="mt-10 p-6 rounded-sm bg-[#FFFFFF] border border-[#E7E0D4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-medium text-[#171614] mb-1">
                Don&apos;t have all of these details right now?
              </h4>
              <p className="text-xs text-[#77736C] font-light">
                That is completely fine. We regularly help homeowners gather base plot measurements
                and clarify wishlists during our initial studio consultation.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-[#B08A52] hover:text-[#171614] transition-colors shrink-0"
            >
              <span>Schedule a Meeting</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: CONNECTED SERVICES (CROSS-SERVICE ARCHITECTURE) */}
      <section className="py-20 lg:py-28 border-b border-[#E7E0D4] bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#B08A52] block mb-3">
              END-TO-END CONTINUITY
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#171614] tracking-tight mb-4">
              A Better Start Connects the Whole Project.
            </h2>
            <p className="text-base text-[#77736C] font-light leading-relaxed">
              Survey and pre-construction preparation do not exist in isolation. Resolving site
              conditions and document readiness early establishes the technical foundation for
              architectural design, civil engineering, interior joinery, and custom fabrication.
            </p>
          </div>

          {/* Line-based visual process chain */}
          <div className="relative">
            {/* Connecting horizontal line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-[#E7E0D4] -translate-y-6 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
              {/* Step 1: Active Page */}
              <div className="bg-[#171614] text-[#FAF8F3] p-6 rounded-sm border border-[#171614] shadow-md flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#B08A52] block mb-2">
                    Step 01 / Active
                  </span>
                  <h3 className="text-lg font-light text-[#FAF8F3] mb-2">Survey &amp; Requirements</h3>
                  <p className="text-xs text-[#FAF8F3]/70 font-light leading-relaxed mb-4">
                    Site dimensions, road access, and project scope clarified.
                  </p>
                </div>
                <span className="text-[11px] font-mono text-[#B08A52] uppercase tracking-wider">
                  Current Stage
                </span>
              </div>

              {/* Step 2: Design & Planning */}
              <Link
                href="/design-planning"
                className="bg-[#FAF8F3] p-6 rounded-sm border border-[#E7E0D4] hover:border-[#B08A52] hover:bg-[#FFFFFF] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#77736C] block mb-2">
                    Step 02 &rarr;
                  </span>
                  <h3 className="text-lg font-light text-[#171614] group-hover:text-[#B08A52] transition-colors mb-2">
                    Design &amp; Planning
                  </h3>
                  <p className="text-xs text-[#77736C] font-light leading-relaxed mb-4">
                    Translating site data into 2D layouts and 3D architectural schematics.
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#B08A52] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>Explore Planning</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>

              {/* Step 3: Construction */}
              <Link
                href="/construction"
                className="bg-[#FAF8F3] p-6 rounded-sm border border-[#E7E0D4] hover:border-[#B08A52] hover:bg-[#FFFFFF] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#77736C] block mb-2">
                    Step 03 &rarr;
                  </span>
                  <h3 className="text-lg font-light text-[#171614] group-hover:text-[#B08A52] transition-colors mb-2">
                    Construction
                  </h3>
                  <p className="text-xs text-[#77736C] font-light leading-relaxed mb-4">
                    Civil execution, RCC structural frame, masonry, and site trade supervision.
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#B08A52] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>Explore Build</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>

              {/* Step 4: Interior Design */}
              <Link
                href="/interior-design"
                className="bg-[#FAF8F3] p-6 rounded-sm border border-[#E7E0D4] hover:border-[#B08A52] hover:bg-[#FFFFFF] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#77736C] block mb-2">
                    Step 04 &rarr;
                  </span>
                  <h3 className="text-lg font-light text-[#171614] group-hover:text-[#B08A52] transition-colors mb-2">
                    Interior Design
                  </h3>
                  <p className="text-xs text-[#77736C] font-light leading-relaxed mb-4">
                    Joinery, lighting, false ceiling planes, and bespoke room treatments.
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#B08A52] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>Explore Interiors</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>

              {/* Step 5: Fabrication Works */}
              <Link
                href="/fabrication-works"
                className="bg-[#FAF8F3] p-6 rounded-sm border border-[#E7E0D4] hover:border-[#B08A52] hover:bg-[#FFFFFF] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#77736C] block mb-2">
                    Step 05 &rarr;
                  </span>
                  <h3 className="text-lg font-light text-[#171614] group-hover:text-[#B08A52] transition-colors mb-2">
                    Fabrication Works
                  </h3>
                  <p className="text-xs text-[#77736C] font-light leading-relaxed mb-4">
                    Architectural metalwork, gates, railings, and custom structural elements.
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#B08A52] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>Explore Metalwork</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: REAL PROJECT CONTEXT */}
      <section className="py-20 lg:py-28 border-b border-[#E7E0D4] bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#E7E0D4] bg-[#FFFFFF] shadow-sm group">
                <Image
                  src="/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-entrance.webp"
                  alt="Site entrance and setback alignment at Nagarajan Residence in Theroor, Nagercoil"
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171614]/60 via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-5 left-5 right-5 text-[#FAF8F3]">
                  <p className="text-xs font-mono uppercase tracking-widest text-[#B08A52] mb-1">
                    Featured Project Case Study
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
                PROJECT CONTEXT
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#171614] tracking-tight leading-tight mb-6">
                Planning Starts With the Real Site
              </h2>
              <p className="text-base sm:text-lg text-[#77736C] font-light leading-relaxed mb-6">
                Before the foundation was excavated at the Nagarajan Residence in Theroor, our team
                conducted an on-ground site review to evaluate access road approach angles, property
                boundary lines, and daylight exposure patterns.
              </p>
              <p className="text-sm sm:text-base text-[#77736C] font-light leading-relaxed mb-8">
                Evaluating physical site parameters prior to drafting the architectural layout
                ensured the entrance foyer, perimeter setbacks, and vehicle parking were coordinated
                effortlessly with the site&apos;s real-world conditions.
              </p>

              {/* Verified Project Attributes */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#E7E0D4] mb-8">
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-widest text-[#77736C] mb-1">
                    Location
                  </span>
                  <p className="text-sm font-medium text-[#171614]">Theroor, Nagercoil</p>
                </div>
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-widest text-[#77736C] mb-1">
                    Project Typology
                  </span>
                  <p className="text-sm font-medium text-[#171614]">Residential Architecture &amp; Interior</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/projects/nagarajan-residence-nagercoil-theroor"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#171614] text-[#FAF8F3] text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-[#B08A52] transition-colors group"
                >
                  <span>View Project Case Study</span>
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

      {/* SECTION 8: WHO THIS SERVICE IS FOR */}
      <section className="py-20 lg:py-28 border-b border-[#E7E0D4] bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#B08A52] block mb-3">
              TARGET SCENARIOS
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#171614] tracking-tight mb-4">
              When This Support Can Help
            </h2>
            <p className="text-base text-[#77736C] font-light leading-relaxed">
              Practical scenarios where early site assessment and structured pre-construction
              preparation provide the greatest value for property owners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {surveyAudienceItems.map((item) => (
              <div
                key={item.number}
                className="p-6 rounded-sm border border-[#E7E0D4] bg-[#FAF8F3] hover:border-[#B08A52] transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-[#B08A52] uppercase tracking-widest block mb-2">
                    Scenario {item.number}
                  </span>
                  <h3 className="text-lg font-light text-[#171614] mb-3">{item.title}</h3>
                  <p className="text-xs text-[#77736C] font-light leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E7E0D4]/70">
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-[#77736C] mb-1">
                    Key Value
                  </span>
                  <p className="text-xs font-medium text-[#171614]">{item.benefit}</p>
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
                Survey &amp; Approvals Support in Nagercoil
              </h2>
              <div className="space-y-4 text-base text-[#77736C] font-light leading-relaxed max-w-2xl mb-8">
                <p>
                  SMS Construction is based in Nagercoil, Tamil Nadu, providing project planning and
                  construction-related support within its actual service area across Kanyakumari district.
                </p>
                <p>
                  Having our studio situated in central Nagercoil allows our engineers and planners to
                  conveniently inspect physical plot boundaries, evaluate approach roads, and discuss
                  site-specific requirements directly with clients before structural commitments are made.
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
                In-Person Consultation
              </span>
              <h3 className="text-xl font-light text-[#171614] mb-4">
                Discuss Your Plot With Our Team
              </h3>
              <p className="text-xs text-[#77736C] font-light leading-relaxed mb-6">
                Bring your plot sketch, title documents, or tentative space wishlist to our Nagercoil
                studio for an open, practical review of what is possible on your site.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-xs text-[#171614]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B08A52]" />
                  <span>On-ground physical plot assessments</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#171614]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B08A52]" />
                  <span>Clear boundary &amp; setback feasibility</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#171614]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B08A52]" />
                  <span>Preparation for architectural drawings</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#171614] text-[#FAF8F3] text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-[#B08A52] transition-colors"
              >
                <span>Request a Consultation</span>
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
              ANSWERS &amp; CLARITY
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#171614] tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-[#77736C] font-light max-w-xl mx-auto">
              Practical guidance regarding site assessments, drawing preparation, and project
              coordination in Nagercoil.
            </p>
          </div>

          <ServiceFaqAccordion items={surveyFaqs} />
        </div>
      </section>

      {/* SECTION 11: FINAL CONVERSION CTA */}
      <section className="py-20 lg:py-28 bg-[#171614] text-[#FAF8F3] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#B08A52] block mb-4">
              READY TO GET STARTED?
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-[#FAF8F3] tracking-tight leading-tight mb-6">
              Let&apos;s understand your project first.
            </h2>
            <p className="text-base sm:text-lg text-[#FAF8F3]/70 font-light leading-relaxed mb-10 max-w-2xl">
              Tell us about your site, project requirements and what you are planning to build or
              transform.
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
                href="/fabrication-works"
                className="text-[#77736C] hover:text-[#B08A52] transition-colors"
              >
                Fabrication Works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
