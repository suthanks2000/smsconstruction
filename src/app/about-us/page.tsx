import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Layers,
  Building2,
  Crosshair,
  Sparkles,
} from "lucide-react";
import LocalServiceArea from "@/components/LocalServiceArea";
import ModernFaq from "@/components/ModernFaq";
import ConversionCTA from "@/components/ConversionCTA";
import AboutStats from "@/components/AboutStats";

/* ─── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "About SMS Construction | Construction & Interior Design in Nagercoil",
  description:
    "Learn about SMS Construction, a Nagercoil-based construction and interior design company offering construction, planning, surveying and fabrication services.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About SMS Construction | Construction & Interior Design in Nagercoil",
    description:
      "Learn about SMS Construction, a Nagercoil-based construction and interior design company offering construction, planning, surveying and fabrication services.",
    url: "https://smsconstruction.in/about-us",
    siteName: "SMS Construction",
    images: [
      {
        url: "/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-living-room-wide.webp",
        width: 1200,
        height: 630,
        alt: "SMS Construction Studio Profile - Construction and Interior Design in Nagercoil",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About SMS Construction | Construction & Interior Design in Nagercoil",
    description:
      "Learn about SMS Construction, a Nagercoil-based construction and interior design company offering construction, planning, surveying and fabrication services.",
    images: [
      "/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-living-room-wide.webp",
    ],
  },
};

/* ─── Structured Data (JSON-LD) ───────────────────────────────────────────── */
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://smsconstruction.in/about-us#webpage",
  url: "https://smsconstruction.in/about-us",
  name: "About SMS Construction | Construction & Interior Design in Nagercoil",
  description:
    "Learn about SMS Construction, a Nagercoil-based construction and interior design company offering construction, planning, surveying and fabrication services.",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://smsconstruction.in/#website",
    name: "SMS Construction",
    url: "https://smsconstruction.in",
  },
  about: {
    "@id": "https://smsconstruction.in",
  },
  mainEntity: {
    "@id": "https://smsconstruction.in",
  },
  breadcrumb: {
    "@id": "https://smsconstruction.in/about-us#breadcrumb",
  },
};

const ceoPersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://smsconstruction.in/about-us#ceo",
  name: "S. Harish",
  jobTitle: "Chief Executive Officer",
  worksFor: {
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://smsconstruction.in",
    name: "SMS Construction",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://smsconstruction.in/about-us#breadcrumb",
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
      name: "About Us",
      item: "https://smsconstruction.in/about-us",
    },
  ],
};

const faqs = [
  {
    question: "What does SMS Construction do?",
    answer:
      "SMS Construction provides construction, interior design, design and planning, survey-related services and fabrication works from its base in Nagercoil, Tamil Nadu.",
  },
  {
    question: "Where is SMS Construction located?",
    answer:
      "SMS Construction is located at 25/1 Muthamizh Street, Near Court Road, Nagercoil, Tamil Nadu 629001, India.",
  },
  {
    question: "Who is the CEO of SMS Construction?",
    answer:
      "S. Harish is the Chief Executive Officer of SMS Construction.",
  },
  {
    question: "What services does SMS Construction provide?",
    answer:
      "Its main services include Interior Design, Construction, Design & Planning, Survey & Approvals, and Fabrication Works.",
  },
  {
    question: "Does SMS Construction provide interior design services?",
    answer:
      "Yes. Its interior design offering includes residential spaces such as bedrooms, kitchens, false ceilings, TV units, wall decor and terrace garden concepts.",
  },
  {
    question: "How can I contact SMS Construction?",
    answer:
      "You can contact SMS Construction by phone at +91 94880 21183 or by email at smsconstructionngl@gmail.com.",
  },
  {
    question: "Where does SMS Construction operate?",
    answer:
      "SMS Construction is based in Nagercoil, Tamil Nadu, and works on projects according to client requirements and project scope.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

/* ─── Static Data ─────────────────────────────────────────────────────────── */
const services = [
  {
    num: "01",
    title: "Interior Design",
    description:
      "Residential interior design including bedrooms, kitchens, false ceilings, TV units, wall decor and terrace garden concepts.",
    items: [
      "Bedroom Interiors",
      "Kitchens",
      "False Ceilings",
      "TV Units",
      "Wall Decor",
      "Terrace Garden Concepts",
    ],
    href: "/interior-design",
    linkText: "Explore our interior design services",
    icon: Sparkles,
  },
  {
    num: "02",
    title: "Construction",
    description:
      "Construction services for residential and related building requirements.",
    items: [
      "Residential Construction",
      "RCC Structural Work",
      "Turnkey Building",
      "Site Supervision",
    ],
    href: "/construction",
    linkText: "View our construction services",
    icon: Building2,
  },
  {
    num: "03",
    title: "Design & Planning",
    description:
      "Comprehensive architectural drafting, engineering drawings and conceptual visualization.",
    items: [
      "3D Elevation",
      "Interior Design",
      "Walkthrough Videos",
      "Structural Designing",
      "Approval Drawings",
      "Vastu Plan",
      "3D Plan",
      "Electrical Plan",
      "Plumbing Plan",
      "Landscape Plan",
    ],
    href: "/design-planning",
    linkText: "Explore design and planning",
    icon: Compass,
  },
  {
    num: "04",
    title: "Survey & Approvals",
    description:
      "Precise ground measurements, boundary verification and official drawing preparation.",
    items: [
      "Tape Survey",
      "Digital Survey",
      "Total Station Survey",
      "Building Marking Survey",
      "Topographical Survey",
      "Contour Survey",
      "Layout Preparation",
      "FMB (Field Measurement Book)",
    ],
    href: "/survey-approvals",
    linkText: "View survey services",
    icon: Crosshair,
  },
  {
    num: "05",
    title: "Fabrication Works",
    description:
      "Custom metalwork, exterior cladding and architectural metal elements.",
    items: [
      "ACP Works",
      "Steel Fabrication",
      "Aluminium Fabrication",
    ],
    href: "/fabrication-works",
    linkText: "Explore fabrication works",
    icon: Layers,
  },
];

const approachSteps = [
  {
    num: "01",
    name: "Understand",
    description:
      "Understand the client's requirements, project scope and site conditions.",
  },
  {
    num: "02",
    name: "Plan",
    description:
      "Develop the relevant design, drawings, measurements and planning information.",
  },
  {
    num: "03",
    name: "Execute",
    description:
      "Coordinate the required construction, interior or fabrication work.",
  },
  {
    num: "04",
    name: "Refine",
    description:
      "Focus on finish, details and practical usability.",
  },
];

const focusPrinciples = [
  {
    title: "Practical Design",
    description: "Solutions should work for the space and its intended use.",
  },
  {
    title: "Attention to Detail",
    description: "Details influence the overall look, finish and usability.",
  },
  {
    title: "Clear Planning",
    description: "Good projects begin with proper understanding and planning.",
  },
  {
    title: "Coordinated Execution",
    description: "Design, construction and related work should be properly coordinated.",
  },
  {
    title: "Quality Standards",
    description: "Consistent standards maintained from structural work to final finishing.",
  },
  {
    title: "Client Requirements",
    description: "Project decisions should reflect the client's requirements and scope.",
  },
];

export default function AboutUsPage() {
  const phoneNumber = "+919488021183";
  const formattedPhone = "+91 94880 21183";
  const email = "smsconstructionngl@gmail.com";

  return (
    <>
      {/* ─── Structured Data Scripts ────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ceoPersonSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-[#FAF8F3] text-[#171714] selection:bg-[#B08A52] selection:text-white">
        {/* ===================================================================
            SECTION 1 — HERO
            Clean editorial presentation
        =================================================================== */}
        <section
          data-header-theme="light"
          aria-label="About SMS Construction Hero"
          className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 lg:pb-28 border-b border-[#E7E0D4] bg-[#FAF8F3]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl flex flex-col justify-center">
              <span className="inline-block text-[11.5px] sm:text-[12.5px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-4">
                ABOUT SMS CONSTRUCTION
              </span>

              <h1 className=" text-[34px] sm:text-[48px] lg:text-[56px] font-bold text-[#171714] leading-[1.12] tracking-tight mb-6">
                Building spaces with clarity, craft and purpose<span className="text-[#B08A52]">.</span>
              </h1>

              <p className="font-sans text-[16px] sm:text-[17.5px] leading-[1.7] text-[#68645D] max-w-2xl mb-8">
                SMS Construction is a construction and interior design company based in Nagercoil, Tamil Nadu, offering construction, interior design, design and planning, survey-related services and fabrication works.
              </p>

              {/* Hero CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-full bg-[#171714] hover:bg-[#B08A52] text-white font-sans font-semibold text-[14px] transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98]"
                >
                  <span>Get a Quote</span>
                  <ArrowRight size={15} />
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-full border border-[#E7E0D4] hover:border-[#171714] bg-white text-[#171714] font-sans font-semibold text-[14px] transition-all duration-300 hover:bg-[#FAF8F5] active:scale-[0.98]"
                >
                  <span>View Our Projects</span>
                  <ArrowRight size={14} className="text-[#77736C]" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 2 — WHO WE ARE
            Concise, factual establishment of the company
        =================================================================== */}
        <section
          aria-labelledby="who-we-are-heading"
          className="py-16 sm:py-24 bg-white border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-5">
                <span className="inline-block text-[11.5px] sm:text-[12.5px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                  WHO WE ARE
                </span>
                <h2
                  id="who-we-are-heading"
                  className=" text-[28px] sm:text-[38px] lg:text-[44px] font-semibold text-[#171714] leading-[1.18] tracking-tight"
                >
                  A construction and design company based in Nagercoil<span className="text-[#B08A52]">.</span>
                </h2>
              </div>

              <div className="lg:col-span-7">
                <p className="font-sans text-[16px] sm:text-[18px] leading-relaxed text-[#68645D] mb-6">
                  SMS Construction is based in Nagercoil, Tamil Nadu, bringing construction, interior design, planning, surveying and fabrication services together to support residential and related project requirements.
                </p>

                <AboutStats />
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3 — ABOUT SMS CONSTRUCTION
            Detailed company introduction: Text on one side, architectural detail on other
        =================================================================== */}
        <section
          aria-labelledby="about-sms-heading"
          className="py-16 sm:py-24 lg:py-28 bg-[#FAF8F3] border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Editorial narrative */}
              <div className="lg:col-span-7">
                <span className="inline-block text-[11.5px] sm:text-[12.5px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                  THE STUDIO
                </span>
                <h2
                  id="about-sms-heading"
                  className=" text-[30px] sm:text-[40px] lg:text-[46px] font-semibold text-[#171714] leading-[1.18] tracking-tight mb-6"
                >
                  About SMS Construction<span className="text-[#B08A52]">.</span>
                </h2>

                <div className="space-y-4 font-sans text-[15.5px] sm:text-[16.5px] leading-relaxed text-[#68645D]">
                  <p>
                    SMS Construction is permanently based in Nagercoil, Tamil Nadu, operating as an integrated practice that bridges building construction and interior design under one coordinated roof.
                  </p>
                  <p>
                    Construction and interior design form the primary focus of our day-to-day operations. Alongside building and interior fit-outs, comprehensive architectural planning, land surveying, and custom fabrication services are part of our core offering.
                  </p>
                  <p>
                    Every project is approached around its specific site conditions, spatial requirements, and practical scope. We emphasize disciplined planning, coordinated trade execution, and meticulous attention to materials and finish quality.
                  </p>
                </div>
              </div>

              {/* Right Column: Architectural detail visual */}
              <div className="lg:col-span-5">
                <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden border border-[#E7E0D4] bg-[#EAE4D9] shadow-sm aspect-[4/3] sm:aspect-[4/3] lg:aspect-[5/4]">
                  <Image
                    src="/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-decorative-partition.webp"
                    alt="Wood partition and joinery detail executed by SMS Construction in Nagercoil"
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute bottom-4 left-4 right-4 px-3.5 py-2 rounded-full bg-[#171714]/85 backdrop-blur-sm text-white/90 text-[11.5px] font-sans font-medium flex items-center justify-between">
                    <span>Interior Partition Detail</span>
                    <span className="text-[#e3c381]">Nagercoil Studio</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 4 — CEO / LEADERSHIP
            Tasteful, premium architecture-studio profile for S. Harish
        =================================================================== */}
        <section
          aria-labelledby="leadership-heading"
          className="py-10 sm:py-14 bg-white border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8">
              <span className="inline-block text-[11.5px] sm:text-[12.5px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                LEADERSHIP
              </span>
              <h2
                id="leadership-heading"
                className=" text-[30px] sm:text-[40px] lg:text-[46px] font-semibold text-[#171714] leading-[1.18] tracking-tight"
              >
                Meet the team behind SMS Construction<span className="text-[#B08A52]">.</span>
              </h2>
            </div>

            {/* Leadership Profile Card */}
            <div className="max-w-4xl mx-auto p-6 sm:p-8 lg:p-10 rounded-[24px] sm:rounded-[30px] bg-[#FAF8F3] border border-[#E7E0D4]">
              <div className="space-y-4">
                <div>
                  <h3 className="font-serif text-[28px] sm:text-[34px] font-bold text-[#171714] leading-tight mb-1">
                    S. Harish
                  </h3>
                  <p className="font-sans text-[14px] font-semibold text-[#B08A52] uppercase tracking-wider">
                    Chief Executive Officer, SMS Construction
                  </p>
                </div>

                <div className="w-16 h-[2px] bg-[#B08A52]/40 my-4" />

                <p className="font-sans text-[16px] sm:text-[17.5px] leading-relaxed text-[#68645D]">
                  S. Harish leads SMS Construction with a focus on construction, design and project execution, helping bring together the company&apos;s range of services for client requirements.
                </p>

                <p className="font-sans text-[14.5px] leading-relaxed text-[#77736C] pt-2">
                  Operating directly from our Nagercoil office, leadership actively oversees preliminary site evaluations, design documentation, and coordinated site delivery across Kanyakumari District.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 5 — WHAT WE DO
            Clean, minimal service directory (01 - 05)
        =================================================================== */}
        <section
          aria-labelledby="services-heading"
          className="py-12 sm:py-16 lg:py-20 bg-[#FAF8F3] border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 lg:mb-12">
              <div>
                <span className="inline-block text-[11.5px] sm:text-[12.5px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-2.5">
                  OUR SERVICES
                </span>
                <h2
                  id="services-heading"
                  className="text-[28px] sm:text-[36px] lg:text-[42px] font-semibold text-[#171714] leading-[1.18] tracking-tight"
                >
                  What we do<span className="text-[#B08A52]">.</span>
                </h2>
              </div>
              <p className="font-sans text-[14.5px] sm:text-[15.5px] text-[#68645D] max-w-md">
                Five integrated disciplines supporting your project from initial survey to finished space.
              </p>
            </div>

            {/* Minimal Editorial Service List */}
            <div className="divide-y divide-[#E7E0D4] border-t border-b border-[#E7E0D4]">
              {services.map((service) => (
                <Link
                  key={service.num}
                  href={service.href}
                  className="group py-6 sm:py-7 lg:py-8 grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-8 items-start lg:items-center transition-colors hover:bg-white/60 px-3 sm:px-5 -mx-3 sm:-mx-5 rounded-2xl block"
                >
                  {/* Number & Title */}
                  <div className="lg:col-span-4 flex items-baseline gap-4 sm:gap-5">
                    <span className="font-mono text-[12.5px] sm:text-[13px] font-bold text-[#B08A52] tracking-wider shrink-0">
                      {service.num}
                    </span>
                    <h3 className="text-[19px] sm:text-[22px] font-semibold text-[#171714] group-hover:text-[#B08A52] transition-colors tracking-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description & Inline Items */}
                  <div className="lg:col-span-6 space-y-1 pl-7 sm:pl-8 lg:pl-0">
                    <p className="font-sans text-[14px] sm:text-[14.5px] leading-relaxed text-[#68645D]">
                      {service.description}
                    </p>
                    <p className="font-sans text-[12px] sm:text-[12.5px] text-[#77736C] tracking-wide">
                      {service.items.join(" · ")}
                    </p>
                  </div>

                  {/* Link action */}
                  <div className="lg:col-span-2 flex items-center lg:justify-end pl-7 sm:pl-8 lg:pl-0">
                    <span className="inline-flex items-center gap-1.5 font-sans font-medium text-[13px] text-[#77736C] group-hover:text-[#B08A52] transition-colors">
                      <span>Explore</span>
                      <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Overview Link */}
            <div className="mt-8 flex justify-end">
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 font-sans font-medium text-[13.5px] text-[#B08A52] hover:text-[#171714] transition-colors"
              >
                <span>View Full Services Overview</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 6 — OUR APPROACH
            Concise 4-step workflow
        =================================================================== */}
        <section
          aria-labelledby="approach-heading"
          className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-10 lg:mb-14">
              <span className="inline-block text-[11.5px] sm:text-[12.5px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                OUR APPROACH
              </span>
              <h2
                id="approach-heading"
                className="text-[28px] sm:text-[36px] lg:text-[42px] font-semibold text-[#171714] leading-[1.18] tracking-tight mb-3"
              >
                From understanding the requirement to completing the work<span className="text-[#B08A52]">.</span>
              </h2>
              <p className="font-sans text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#68645D]">
                A practical sequence applied across residential construction, interior projects, and fabrication requirements.
              </p>
            </div>

            {/* Continuous Architectural Line Step Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-10 gap-y-10 sm:gap-y-12">
              {approachSteps.map((item, idx, arr) => (
                <div key={item.num} className="group flex flex-col">
                  {/* Step Number + Connecting Line */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <span className="font-bold text-[30px] sm:text-[36px] lg:text-[40px] text-[#171714] leading-none shrink-0 group-hover:text-[#B08A52] transition-colors duration-300">
                      {item.num}
                    </span>
                    {idx !== arr.length - 1 ? (
                      <div className="flex-1 h-[1.5px] bg-[#E7E0D4] group-hover:bg-[#B08A52]/60 transition-colors duration-300" />
                    ) : (
                      <div className="hidden lg:block flex-1 h-[1.5px] bg-transparent" />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-sans font-bold text-[16px] sm:text-[17px] text-[#171714] mb-2 tracking-tight group-hover:text-[#B08A52] transition-colors duration-200">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-[13.5px] sm:text-[14px] text-[#68645D] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 7 — OUR VALUES / FOCUS
            Factual principles
        =================================================================== */}
        <section
          aria-labelledby="values-heading"
          className="py-12 sm:py-16 lg:py-20 bg-[#FAF8F3] border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-10 lg:mb-14">
              <span className="inline-block text-[11.5px] sm:text-[12.5px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                OUR FOCUS
              </span>
              <h2
                id="values-heading"
                className="text-[28px] sm:text-[36px] lg:text-[42px] font-semibold text-[#171714] leading-[1.18] tracking-tight mb-3"
              >
                What we focus on<span className="text-[#B08A52]">.</span>
              </h2>
              <p className="font-sans text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#68645D]">
                Core operational principles guiding our design planning, material choices, and site execution.
              </p>
            </div>

            {/* Focus Cards Grid - 6 Items (3x2 on desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {focusPrinciples.map((principle, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-[22px] bg-white border border-[#E7E0D4] shadow-xs hover:border-[#B08A52]/40 transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-[#FAF8F3] border border-[#E7E0D4] flex items-center justify-center text-[#B08A52] mb-4">
                    <CheckCircle2 size={16} />
                  </div>
                  <h3 className="text-[18px] sm:text-[19px] font-semibold text-[#171714] mb-2 tracking-tight">
                    {principle.title}
                  </h3>
                  <p className="font-sans text-[14px] leading-relaxed text-[#68645D]">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 8 — REAL PROJECT FEATURES
            Zahir Hussain Residence & Selvaprasad Residence (Nagercoil)
        =================================================================== */}
        <section
          aria-labelledby="project-feature-heading"
          className="py-16 sm:py-24 lg:py-28 bg-white border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-2xl mb-12 sm:mb-16">
              <span className="inline-block text-[11.5px] sm:text-[12.5px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                FROM OUR WORK
              </span>
              <h2
                id="project-feature-heading"
                className="text-[30px] sm:text-[40px] lg:text-[46px] font-semibold text-[#171714] leading-[1.18] tracking-tight mb-3"
              >
                A closer look at our residential craftsmanship<span className="text-[#B08A52]">.</span>
              </h2>
              <p className="font-sans text-[16px] text-[#68645D]">
                Direct proof of turnkey architectural execution, interior joinery, and detailing from two completed residences in Nagercoil.
              </p>
            </div>

            <div className="space-y-16 sm:space-y-20">
              {/* Project 1: Zahir Hussain Residence */}
              <div>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-4 border-b border-[#E7E0D4]/70">
                  <div>
                    <span className="inline-block text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#B08A52] mb-1.5">
                      RESIDENTIAL EXECUTION • NAGERCOIL
                    </span>
                    <h3 className="font-serif text-[26px] sm:text-[32px] font-bold text-[#171714]">
                      Zahir Hussain Residence
                    </h3>
                    <p className="font-sans text-[14.5px] text-[#68645D] mt-1">
                      Turnkey residence featuring custom woodcraft, acoustic panelling, and integrated modular kitchen.
                    </p>
                  </div>

                  <Link
                    href="/projects/zahir-hussain-residence-nagercoil"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAF8F3] hover:bg-[#171714] text-[#171714] hover:text-white border border-[#E7E0D4] font-sans font-semibold text-[13.5px] transition-all duration-300 shrink-0 self-start md:self-auto"
                  >
                    <span>View Zahir Hussain Project</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                  <div className="flex flex-col">
                    <div className="relative rounded-[22px] overflow-hidden border border-[#E7E0D4] bg-[#FAF8F3] aspect-[4/3] mb-3">
                      <Image
                        src="/images/projects/zahir-hussain-residence-nagercoil/zahir-hussain-residence-living-room.webp"
                        alt="Living room interior design and recessed illumination at Zahir Hussain Residence in Nagercoil"
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-center"
                      />
                    </div>
                    <span className="font-sans text-[13px] font-medium text-[#171714]">Living Room Space Planning</span>
                    <span className="font-sans text-[12px] text-[#77736C]">Custom joinery and recessed lighting</span>
                  </div>

                  <div className="flex flex-col">
                    <div className="relative rounded-[22px] overflow-hidden border border-[#E7E0D4] bg-[#FAF8F3] aspect-[4/3] mb-3">
                      <Image
                        src="/images/projects/zahir-hussain-residence-nagercoil/zahir-hussain-residence-living-room-alt.webp"
                        alt="Fluted wood panel wall and console styling at Zahir Hussain Residence in Nagercoil"
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-center"
                      />
                    </div>
                    <span className="font-sans text-[13px] font-medium text-[#171714]">Fluted Wood Wall &amp; Console</span>
                    <span className="font-sans text-[12px] text-[#77736C]">Bespoke acoustic wall panelling</span>
                  </div>

                  <div className="flex flex-col">
                    <div className="relative rounded-[22px] overflow-hidden border border-[#E7E0D4] bg-[#FAF8F3] aspect-[4/3] mb-3">
                      <Image
                        src="/images/projects/zahir-hussain-residence-nagercoil/zahir-hussain-residence-modular-kitchen.webp"
                        alt="Modular kitchen cabinetry fit-out at Zahir Hussain Residence in Nagercoil"
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-center"
                      />
                    </div>
                    <span className="font-sans text-[13px] font-medium text-[#171714]">Modular Kitchen Fit-out</span>
                    <span className="font-sans text-[12px] text-[#77736C]">High-durability storage cabinetry</span>
                  </div>
                </div>
              </div>

              {/* Project 2: Selvaprasad Residence */}
              <div>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-4 border-b border-[#E7E0D4]/70">
                  <div>
                    <span className="inline-block text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#B08A52] mb-1.5">
                      RESIDENTIAL EXECUTION • PARUTHIVILAI, NAGERCOIL
                    </span>
                    <h3 className="font-serif text-[26px] sm:text-[32px] font-bold text-[#171714]">
                      Selvaprasad Residence
                    </h3>
                    <p className="font-sans text-[14.5px] text-[#68645D] mt-1">
                      Contemporary residence featuring grand double-height foyer, granite staircase, and tailored wood veneer consoles.
                    </p>
                  </div>

                  <Link
                    href="/projects/selvaprasad-residence-paruthivilai"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAF8F3] hover:bg-[#171714] text-[#171714] hover:text-white border border-[#E7E0D4] font-sans font-semibold text-[13.5px] transition-all duration-300 shrink-0 self-start md:self-auto"
                  >
                    <span>View Selvaprasad Project</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                  <div className="flex flex-col">
                    <div className="relative rounded-[22px] overflow-hidden border border-[#E7E0D4] bg-[#FAF8F3] aspect-[4/3] mb-3">
                      <Image
                        src="/images/projects/selvaprasad-residence-paruthivilai/living-room-tv-unit-hero.webp"
                        alt="Living room architectural TV console and cove lighting at Selvaprasad Residence in Paruthivilai"
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-center"
                      />
                    </div>
                    <span className="font-sans text-[13px] font-medium text-[#171714]">Architectural TV Wall Unit</span>
                    <span className="font-sans text-[12px] text-[#77736C]">Fluted timber backing &amp; cove illumination</span>
                  </div>

                  <div className="flex flex-col">
                    <div className="relative rounded-[22px] overflow-hidden border border-[#E7E0D4] bg-[#FAF8F3] aspect-[4/3] mb-3">
                      <Image
                        src="/images/projects/selvaprasad-residence-paruthivilai/granite-staircase-glass-railing.webp"
                        alt="Granite staircase with toughened glass railing at Selvaprasad Residence in Paruthivilai"
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-center"
                      />
                    </div>
                    <span className="font-sans text-[13px] font-medium text-[#171714]">Granite Staircase &amp; Glass</span>
                    <span className="font-sans text-[12px] text-[#77736C]">Toughened glass balustrade with teak handrail</span>
                  </div>

                  <div className="flex flex-col">
                    <div className="relative rounded-[22px] overflow-hidden border border-[#E7E0D4] bg-[#FAF8F3] aspect-[4/3] mb-3">
                      <Image
                        src="/images/projects/selvaprasad-residence-paruthivilai/double-height-chandelier-foyer.webp"
                        alt="Double height foyer chandelier illumination at Selvaprasad Residence in Paruthivilai"
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-center"
                      />
                    </div>
                    <span className="font-sans text-[13px] font-medium text-[#171714]">Double-Height Foyer</span>
                    <span className="font-sans text-[12px] text-[#77736C]">Grand chandelier &amp; architectural volume</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 9 — LOCAL PRESENCE / CONTACT
            Grounded entity representation with exact NAP
        =================================================================== */}
        <LocalServiceArea
          sectionId="local-presence-heading"
          badge="BASED IN NAGERCOIL"
          title={
            <>
              Serving projects from Nagercoil, Tamil Nadu<span className="text-[#B08A52]">.</span>
            </>
          }
          description={[
            "SMS Construction is based in Nagercoil, Tamil Nadu, with services covering construction, interior design, planning, survey-related work and fabrication based on project requirements.",
            "Being permanently established in Nagercoil allows our engineering and design team to conduct responsive site visits, understand local soil conditions and town planning guidelines, and maintain close supervision throughout every stage of execution across Kanyakumari District.",
          ]}
          localities={["Nagercoil", "Suchindram", "Theroor", "Kanyakumari", "Marthandam", "Colachel"]}
          deskTitle="Studio & Office Coordinates"
          companyName="SMS Construction"
          addressLines={[
            "25/1 Muthamizh Street, Near Court Road",
            "Nagercoil, Tamil Nadu 629001, India",
          ]}
          phoneNumber={phoneNumber}
          formattedPhone={formattedPhone}
          email={email}
        />

        {/* ===================================================================
            SECTION 10 — FAQ — AEO
            7 Authoritative, direct questions with accessible semantic details
        =================================================================== */}
        <ModernFaq
          sectionId="faq-heading"
          title="Frequently Asked Questions"
          titleAccent="."
          subtitle="Direct answers regarding our services, operating base, and coordination model in Nagercoil"
          items={faqs}
          className="py-16 md:py-24 bg-white border-b border-[#E7E0D4] relative"
        />

        {/* ===================================================================
            SECTION 11 — FINAL CTA
            Reusing standard ConversionCTA component
        =================================================================== */}
        <ConversionCTA
          theme="light"
          badge="START YOUR PROJECT"
          title="Let’s build your next space."
          description="Discuss your construction, interior design, or renovation project with SMS Construction in Nagercoil."
          primaryBtnText="Get a Quote"
          primaryBtnHref="/contact"
          phoneNumber={phoneNumber}
          formattedPhone={formattedPhone}
          whatsappNumber="919488021183"
          whatsappMessage="Hello SMS Construction, I would like to discuss a project."
          subtext="SMS Construction • 25/1 Muthamizh Street, Near Court Road, Nagercoil, Tamil Nadu 629001"
        />
      </main>
    </>
  );
}
