import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  CheckCircle2,
  Compass,
  Layers,
  Building2,
  Crosshair,
  Sparkles,
  ChevronDown,
  ShieldCheck,
  Clock,
  Users,
  Lightbulb,
  Target,
  Eye,
  Award,
} from "lucide-react";
import ConversionCTA from "@/components/ConversionCTA";

/* ─── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "About SMS Construction | Construction & Interior Design in Nagercoil",
  description:
    "Learn about SMS Construction, a Nagercoil-based construction and interior design company offering construction, interior design, planning, surveying and fabrication services in Tamil Nadu.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About SMS Construction | Construction & Interior Design in Nagercoil",
    description:
      "Learn about SMS Construction, a Nagercoil-based construction and interior design company offering construction, interior design, planning, surveying and fabrication services in Tamil Nadu.",
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
      "Learn about SMS Construction, a Nagercoil-based construction and interior design company offering construction, interior design, planning, surveying and fabrication services in Tamil Nadu.",
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
    "Learn about SMS Construction, a Nagercoil-based construction and interior design company offering construction, interior design, planning, surveying and fabrication services in Tamil Nadu.",
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
      "SMS Construction is based at 25/1 Muthamizh Street, Near Court Road, Nagercoil, Tamil Nadu 629001, India.",
  },
  {
    question: "What services does SMS Construction provide?",
    answer:
      "Its services include interior design, construction, design and planning, survey and approvals-related services, and fabrication works.",
  },
  {
    question: "Does SMS Construction provide interior design services?",
    answer:
      "Yes. Interior design services include residential interior categories such as bedrooms, kitchens, false ceilings, TV units, wall decor and terrace garden concepts.",
  },
  {
    question: "How can I contact SMS Construction?",
    answer:
      "You can contact SMS Construction at +91 94880 21183 or smsconstructionngl@gmail.com, or use the Contact page.",
  },
  {
    question: "Where does SMS Construction work?",
    answer:
      "SMS Construction is based in Nagercoil, Tamil Nadu. The company works with clients in its service region depending on project requirements and scope.",
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
const stats = [
  { num: "01", value: "15+", label: "Years Experience" },
  { num: "02", value: "100+", label: "Projects Completed" },
  { num: "03", value: "500+", label: "Happy Clients" },
  { num: "04", value: "100%", label: "Commitment" },
];

const services = [
  {
    num: "01",
    title: "Interior Design",
    description:
      "Bedroom interiors, kitchens, false ceilings, TV units, wall decor, terrace garden concepts and related interior work.",
    href: "/interior-design",
    linkText: "Explore our interior design services",
    icon: Sparkles,
  },
  {
    num: "02",
    title: "Construction",
    description:
      "Residential construction and related building work.",
    href: "/construction",
    linkText: "View construction services",
    icon: Building2,
  },
  {
    num: "03",
    title: "Design & Planning",
    description:
      "3D elevation, interior design, walkthrough videos, structural designing, approval drawings, Vastu plans, 3D plans, electrical plans, plumbing plans and landscape plans.",
    href: "/design-planning",
    linkText: "Explore design and planning",
    icon: Compass,
  },
  {
    num: "04",
    title: "Survey & Approvals",
    description:
      "Tape survey, digital survey, total station survey, building marking survey, topographical survey, contour survey, layout preparation and FMB-related work.",
    href: "/survey-approvals",
    linkText: "See survey services",
    icon: Crosshair,
  },
  {
    num: "05",
    title: "Fabrication Works",
    description:
      "ACP works, steel fabrication and aluminium fabrication.",
    href: "/fabrication-works",
    linkText: "Explore fabrication works",
    icon: Layers,
  },
];

const howWeWorkSteps = [
  {
    num: "01",
    name: "Understand",
    description:
      "We listen carefully to your requirements, ideas and project goals.",
  },
  {
    num: "02",
    name: "Plan",
    description:
      "We develop practical plans and designs around your needs and budget.",
  },
  {
    num: "03",
    name: "Build",
    description:
      "Our skilled team executes every stage with precision and attention to detail.",
  },
  {
    num: "04",
    name: "Deliver",
    description:
      "We complete every project with quality finishing and lasting value.",
  },
];

const missionVision = [
  {
    eyebrow: "OUR MISSION",
    title: "Creating spaces that matter.",
    description:
      "To deliver reliable construction solutions through quality workmanship, responsible practices and customer-focused service.",
    icon: Target,
  },
  {
    eyebrow: "OUR VISION",
    title: "Building a better tomorrow.",
    description:
      "To become a trusted construction partner known for quality, innovation, transparency and lasting relationships.",
    icon: Eye,
  },
];

const coreValues = [
  {
    num: "01",
    title: "Quality",
    description: "High standards from foundation to finishing.",
    icon: Award,
  },
  {
    num: "02",
    title: "Safety",
    description: "Responsible practices at every stage.",
    icon: ShieldCheck,
  },
  {
    num: "03",
    title: "Trust",
    description: "Honest communication and transparent service.",
    icon: CheckCircle2,
  },
  {
    num: "04",
    title: "Innovation",
    description: "Modern ideas and practical construction solutions.",
    icon: Lightbulb,
  },
  {
    num: "05",
    title: "On Time",
    description: "We respect your schedule and commitments.",
    icon: Clock,
  },
  {
    num: "06",
    title: "People First",
    description: "Your needs remain at the centre of our work.",
    icon: Users,
  },
];

const trustPillars = [
  {
    title: "Clear Project Scope",
    description:
      "Itemized scope outlines, transparent bill of quantities, and clear technical specifications before starting any build or fit-out.",
  },
  {
    title: "Design-Led Planning",
    description:
      "Coordinating architectural elevations, structural drafting, and interior layouts early to prevent construction discrepancies.",
  },
  {
    title: "Site-Specific Understanding",
    description:
      "Taking actual ground measurements, boundary verification, and orientation into account for practical local suitability.",
  },
  {
    title: "Integrated Disciplines",
    description:
      "Bringing civil construction, interior carpentry, planning, surveying, and fabrication together under a single coordinated team.",
  },
  {
    title: "Local Presence",
    description:
      "Permanently based in Nagercoil, ensuring direct engineer supervision, active site visits, and reliable regional material sourcing.",
  },
  {
    title: "Real Project Documentation",
    description:
      "Transparent project photography and verified delivery records from actual residential and commercial sites across Kanyakumari.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-[#FAF8F3] text-[#171714] selection:bg-[#B08A52] selection:text-white">
        {/* ===================================================================
            SECTION 1 — EDITORIAL HERO
            "We Build More Than Structures"
        =================================================================== */}
        <section
          data-header-theme="light"
          aria-label="About SMS Construction Hero"
          className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 lg:pb-28 border-b border-[#E7E0D4] bg-[#FAF8F3]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Narrative & Metadata */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[11px] font-bold text-[#B08A52] tracking-[0.2em]">
                    01
                  </span>
                  <span className="w-8 h-[1px] bg-[#B08A52]/40" />
                  <span className="text-[11.5px] sm:text-[12.5px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52]">
                    ABOUT SMS CONSTRUCTION
                  </span>
                </div>

                <h1 className="font-serif text-[36px] sm:text-[50px] lg:text-[60px] font-bold text-[#171714] leading-[1.1] tracking-tight mb-4">
                  We Build More Than Structures<span className="text-[#B08A52]">.</span>
                </h1>

                <p className="font-serif italic text-[18px] sm:text-[22px] text-[#B08A52] font-normal leading-snug mb-5">
                  Thoughtful design. Precise execution. Lasting quality.
                </p>

                <p className="font-sans text-[15.5px] sm:text-[17px] leading-[1.7] text-[#68645D] max-w-2xl mb-5">
                  At SMS Construction, we believe great buildings begin with great thinking. From the first survey and plan to the final finishing touch, we bring together practical planning, skilled workmanship and modern construction methods.
                </p>

                {/* Factual Location Tag */}
                <p className="font-sans text-[13px] sm:text-[14px] font-medium text-[#77736C] tracking-wide mb-8 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B08A52]" aria-hidden="true" />
                  <span>Nagercoil, Tamil Nadu · Construction · Interior Design · Planning</span>
                </p>

                {/* Hero CTAs */}
                <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-full bg-[#171714] hover:bg-[#B08A52] text-white font-sans font-semibold text-[14px] transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98]"
                  >
                    <span>Start Your Project</span>
                    <ArrowRight size={15} />
                  </Link>

                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 rounded-full border border-[#E7E0D4] hover:border-[#171714] bg-white text-[#171714] font-sans font-semibold text-[14px] transition-all duration-300 hover:bg-[#FAF8F5] active:scale-[0.98]"
                  >
                    Explore Our Work
                  </Link>
                </div>

                {/* Scroll Indicator */}
                <div className="inline-flex items-center gap-2.5 text-[11px] font-mono tracking-[0.2em] uppercase text-[#77736C] pt-2">
                  <span className="text-[#B08A52] font-bold">01</span>
                  <span>·</span>
                  <span>SCROLL TO EXPLORE</span>
                </div>
              </div>

              {/* Right Column: Authentic Architectural Visual */}
              <div className="lg:col-span-5">
                <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden border border-[#E7E0D4] bg-[#EAE4D9] shadow-sm aspect-[4/3] sm:aspect-[4/3] lg:aspect-[5/4]">
                  <Image
                    src="/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-living-room-wide.webp"
                    alt="Contemporary residential interior executed by SMS Construction in Nagercoil"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute bottom-4 left-4 right-4 px-3.5 py-2 rounded-full bg-[#171714]/85 backdrop-blur-sm text-white/90 text-[11.5px] font-sans font-medium flex items-center justify-between">
                    <span>Nagarajan Residence, Nagercoil</span>
                    <span className="text-[#e3c381]">Real Project</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 2 — ENTITY INTRODUCTION (WHO WE ARE)
            "Built on experience. Driven by quality." + 4 Stat Cards
        =================================================================== */}
        <section
          aria-labelledby="who-we-are-heading"
          className="py-16 sm:py-24 bg-white border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-14">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[11px] font-bold text-[#B08A52] tracking-[0.2em]">
                    01
                  </span>
                  <span className="w-8 h-[1px] bg-[#B08A52]/40" />
                  <span className="text-[11.5px] sm:text-[12.5px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52]">
                    WHO WE ARE
                  </span>
                </div>

                <h2
                  id="who-we-are-heading"
                  className="font-serif text-[28px] sm:text-[38px] lg:text-[44px] font-bold text-[#171714] leading-[1.18] tracking-tight"
                >
                  Built on experience. Driven by quality<span className="text-[#B08A52]">.</span>
                </h2>
              </div>

              <div className="lg:col-span-7 space-y-5">
                <p className="font-sans text-[16px] sm:text-[18px] leading-relaxed text-[#171714] font-medium">
                  At SMS Construction, we believe great buildings begin with great thinking.
                </p>
                <p className="font-sans text-[15.5px] sm:text-[17px] leading-relaxed text-[#68645D]">
                  From the first survey and plan to the final finishing touch, we bring together practical planning, skilled workmanship and modern construction methods under one brand in Nagercoil, Tamil Nadu.
                </p>
                <p className="font-sans text-[15.5px] sm:text-[17px] leading-relaxed text-[#68645D]">
                  Our goal is simple — to create spaces that are strong, functional, beautiful and built to stand the test of time.
                </p>

                {/* Entity Pills */}
                <div className="pt-4 flex flex-wrap gap-3 text-[13px] font-sans">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F3] border border-[#E7E0D4] text-[#171714]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B08A52]" />
                    <span>Brand: <strong>SMS Construction</strong></span>
                  </span>
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F3] border border-[#E7E0D4] text-[#171714]">
                    <MapPin size={12} className="text-[#B08A52]" />
                    <span>Nagercoil, Kanyakumari, Tamil Nadu</span>
                  </span>
                </div>
              </div>
            </div>

            {/* 4 Stat Highlights Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4 border-t border-[#E7E0D4]">
              {stats.map((stat) => (
                <div
                  key={stat.num}
                  className="p-6 sm:p-8 rounded-[22px] bg-[#FAF8F3] border border-[#E7E0D4] flex flex-col justify-between group hover:border-[#B08A52] transition-colors"
                >
                  <span className="font-mono text-[12px] font-bold text-[#B08A52] block mb-3">
                    {stat.num}
                  </span>
                  <div>
                    <span className="font-serif text-[36px] sm:text-[46px] lg:text-[52px] font-bold text-[#171714] leading-none block mb-2 tracking-tight group-hover:text-[#B08A52] transition-colors">
                      {stat.value}
                    </span>
                    <span className="font-sans text-[13px] sm:text-[14.5px] font-semibold text-[#68645D] block">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3 — WHAT WE DO
            Editorial 5-discipline split list with contextual internal links
        =================================================================== */}
        <section
          aria-labelledby="what-we-do-heading"
          className="py-16 sm:py-24 lg:py-28 bg-[#FAF8F3] border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
              <div>
                <span className="inline-block text-[11.5px] sm:text-[12.5px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                  DISCIPLINES
                </span>
                <h2
                  id="what-we-do-heading"
                  className="font-serif text-[32px] sm:text-[42px] lg:text-[48px] font-bold text-[#171714] leading-[1.15] tracking-tight"
                >
                  What we do<span className="text-[#B08A52]">.</span>
                </h2>
              </div>
              <p className="font-sans text-[15px] sm:text-[16px] text-[#68645D] max-w-md">
                Five integrated service areas structured to handle projects from land survey to finished interiors.
              </p>
            </div>

            {/* Editorial Split List Layout */}
            <div className="divide-y divide-[#E7E0D4] border-t border-b border-[#E7E0D4]">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article
                    key={service.num}
                    className="py-8 sm:py-10 lg:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start group transition-colors hover:bg-white/50 px-2 sm:px-4"
                  >
                    <div className="md:col-span-2 flex items-center gap-3">
                      <span className="font-mono text-[14px] font-semibold text-[#B08A52]">
                        {service.num}
                      </span>
                      <Icon size={18} className="text-[#77736C] group-hover:text-[#B08A52] transition-colors" />
                    </div>

                    <div className="md:col-span-4">
                      <h3 className="font-serif text-[22px] sm:text-[26px] font-bold text-[#171714]">
                        {service.title}
                      </h3>
                    </div>

                    <div className="md:col-span-4">
                      <p className="font-sans text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#68645D]">
                        {service.description}
                      </p>
                    </div>

                    <div className="md:col-span-2 flex md:justify-end">
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-1.5 font-sans font-semibold text-[13.5px] text-[#171714] group-hover:text-[#B08A52] transition-colors"
                      >
                        <span>Details</span>
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Hub link */}
            <div className="mt-8 text-right">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-sans font-semibold text-[14px] text-[#B08A52] hover:text-[#171714] transition-colors"
              >
                <span>View Full Services Overview</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 4 — HOW WE WORK (OUR APPROACH)
            "From idea to reality."
        =================================================================== */}
        <section
          aria-labelledby="how-we-work-heading"
          className="py-16 sm:py-24 lg:py-28 bg-white border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12 lg:mb-16">
              <span className="inline-block text-[11.5px] sm:text-[12.5px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                HOW WE WORK
              </span>
              <h2
                id="how-we-work-heading"
                className="font-serif text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-4"
              >
                From idea to reality<span className="text-[#B08A52]">.</span>
              </h2>
              <p className="font-sans text-[16px] sm:text-[17px] leading-relaxed text-[#68645D]">
                A disciplined four-stage process guiding your construction, interior, or planning project from concept to finished space.
              </p>
            </div>

            {/* 4 Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {howWeWorkSteps.map((step) => (
                <div
                  key={step.num}
                  className="p-7 sm:p-8 rounded-[24px] bg-[#FAF8F3] border border-[#E7E0D4] flex flex-col justify-between group hover:border-[#B08A52] transition-colors"
                >
                  <div>
                    <span className="font-mono text-[13px] font-bold text-[#B08A52] block mb-3">
                      STEP {step.num}
                    </span>
                    <h3 className="font-serif text-[22px] sm:text-[24px] font-bold text-[#171714] mb-3 group-hover:text-[#B08A52] transition-colors">
                      {step.name}
                    </h3>
                  </div>
                  <p className="font-sans text-[14.5px] leading-relaxed text-[#68645D]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 5 — MISSION & VISION
            "Creating spaces that matter." & "Building a better tomorrow."
        =================================================================== */}
        <section
          aria-labelledby="mission-vision-heading"
          className="py-16 sm:py-24 bg-[#FAF8F3] border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {missionVision.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.eyebrow}
                    className="p-8 sm:p-10 lg:p-12 rounded-[28px] bg-white border border-[#E7E0D4] shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-[11.5px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52]">
                          {item.eyebrow}
                        </span>
                        <div className="w-10 h-10 rounded-full bg-[#FAF8F3] border border-[#E7E0D4] flex items-center justify-center text-[#B08A52]">
                          <Icon size={18} />
                        </div>
                      </div>
                      <h3 className="font-serif text-[26px] sm:text-[32px] font-bold text-[#171714] leading-[1.2] mb-4">
                        {item.title}
                      </h3>
                      <p className="font-sans text-[15.5px] sm:text-[16.5px] leading-relaxed text-[#68645D]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 6 — WHAT DEFINES US (OUR VALUES)
            "Our values in every detail."
        =================================================================== */}
        <section
          aria-labelledby="values-heading"
          className="py-16 sm:py-24 lg:py-28 bg-white border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12 lg:mb-16">
              <span className="inline-block text-[11.5px] sm:text-[12.5px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                WHAT DEFINES US
              </span>
              <h2
                id="values-heading"
                className="font-serif text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-4"
              >
                Our values in every detail<span className="text-[#B08A52]">.</span>
              </h2>
              <p className="font-sans text-[16px] sm:text-[17px] leading-relaxed text-[#68645D]">
                Six principles that shape every blueprint, material choice, and finish across our projects.
              </p>
            </div>

            {/* 6 Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {coreValues.map((val) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.num}
                    className="p-7 sm:p-8 rounded-[24px] bg-[#FAF8F3] border border-[#E7E0D4] flex flex-col justify-between group hover:border-[#B08A52] transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-[13px] font-bold text-[#B08A52]">
                          {val.num}
                        </span>
                        <div className="w-9 h-9 rounded-full bg-white border border-[#E7E0D4] flex items-center justify-center text-[#77736C] group-hover:text-[#B08A52] group-hover:border-[#B08A52] transition-colors">
                          <Icon size={16} />
                        </div>
                      </div>
                      <h3 className="font-serif text-[22px] font-bold text-[#171714] mb-2.5">
                        {val.title}
                      </h3>
                      <p className="font-sans text-[14.5px] leading-relaxed text-[#68645D]">
                        {val.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 7 — LOCAL IDENTITY / NAGERCOIL
            Grounded local entity representation with real NAP
        =================================================================== */}
        <section
          aria-labelledby="local-identity-heading"
          className="py-16 sm:py-24 bg-[#F6F3EB] border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Left Column: Local Narrative */}
              <div className="lg:col-span-7">
                <span className="inline-block text-[11.5px] sm:text-[12.5px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                  BASED IN NAGERCOIL
                </span>
                <h2
                  id="local-identity-heading"
                  className="font-serif text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-5"
                >
                  Rooted in Nagercoil, Tamil Nadu<span className="text-[#B08A52]">.</span>
                </h2>
                <p className="font-sans text-[16px] sm:text-[17.5px] leading-relaxed text-[#68645D] mb-6">
                  SMS Construction is based in Nagercoil and works with clients looking for construction, interior design, planning, surveying and fabrication services in and around the region.
                </p>
                <p className="font-sans text-[15px] sm:text-[16px] leading-relaxed text-[#68645D] mb-8">
                  Being permanently established in Nagercoil allows our engineering and design team to conduct responsive site visits, understand local soil conditions and town planning guidelines, and maintain close supervision throughout every stage of execution across Kanyakumari District.
                </p>

                <div className="flex flex-wrap gap-2 text-[13px] font-sans">
                  {["Nagercoil", "Suchindram", "Theroor", "Kanyakumari", "Marthandam", "Colachel"].map((loc) => (
                    <span
                      key={loc}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E7E0D4] text-[#171714]"
                    >
                      <MapPin size={12} className="text-[#B08A52]" />
                      <span>{loc}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Studio Coordinates Card */}
              <div className="lg:col-span-5">
                <div className="p-7 sm:p-9 lg:p-10 rounded-[28px] bg-white border border-[#E7E0D4] shadow-sm">
                  <span className="text-[11px] sm:text-[12px] font-sans font-semibold uppercase tracking-wider text-[#B08A52] block mb-2">
                    Studio &amp; Office Coordinates
                  </span>
                  <h3 className="font-serif text-[24px] sm:text-[26px] font-bold text-[#171714] mb-3">
                    SMS Construction
                  </h3>

                  <address className="not-italic font-sans text-[14.5px] sm:text-[15px] text-[#68645D] leading-relaxed mb-6 space-y-1">
                    <p>25/1 Muthamizh Street, Near Court Road</p>
                    <p>Nagercoil, Tamil Nadu 629001</p>
                    <p>India</p>
                  </address>

                  <div className="pt-6 border-t border-[#E7E0D4] space-y-3.5 text-[14px] font-sans">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[#77736C]">Direct Line:</span>
                      <a
                        href={`tel:${phoneNumber}`}
                        className="font-semibold text-[#171714] hover:text-[#B08A52] transition-colors"
                      >
                        {formattedPhone}
                      </a>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[#77736C]">Email Inquiries:</span>
                      <a
                        href={`mailto:${email}`}
                        className="font-semibold text-[#171714] hover:text-[#B08A52] transition-colors break-all"
                      >
                        {email}
                      </a>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[#77736C]">WhatsApp Direct:</span>
                      <a
                        href={`https://wa.me/919488021183?text=${encodeURIComponent(
                          "Hello SMS Construction, I would like to consult about your services."
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-[#25D366] hover:underline"
                      >
                        Chat with Team
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 8 — REAL PROJECT PROOF
            Nagarajan Residence, Nagercoil – Theroor Case Study
        =================================================================== */}
        <section
          aria-labelledby="project-proof-heading"
          className="py-16 sm:py-24 lg:py-28 bg-white border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="inline-block text-[11.5px] sm:text-[12.5px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                  FROM OUR WORK
                </span>
                <h2
                  id="project-proof-heading"
                  className="font-serif text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-2"
                >
                  A closer look at a completed residential project<span className="text-[#B08A52]">.</span>
                </h2>
                <p className="font-sans text-[16px] text-[#68645D]">
                  Nagarajan Residence, Nagercoil – Theroor
                </p>
              </div>

              <Link
                href="/projects/nagarajan-residence-nagercoil-theroor"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAF8F3] hover:bg-[#171714] text-[#171714] hover:text-white border border-[#E7E0D4] font-sans font-semibold text-[13.5px] transition-all duration-300"
              >
                <span>View Project</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* 3 Real Project Photographs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="flex flex-col">
                <div className="relative rounded-[22px] overflow-hidden border border-[#E7E0D4] bg-[#FAF8F3] aspect-[4/3] mb-3">
                  <Image
                    src="/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-living-room.webp"
                    alt="Living room interior woodwork and false ceiling at Nagarajan Residence in Nagercoil"
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
                    src="/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-tv-unit.webp"
                    alt="Fluted wood TV entertainment console detail at Nagarajan Residence in Nagercoil"
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                  />
                </div>
                <span className="font-sans text-[13px] font-medium text-[#171714]">Fluted TV Media Console</span>
                <span className="font-sans text-[12px] text-[#77736C]">Bespoke acoustic wall panelling</span>
              </div>

              <div className="flex flex-col">
                <div className="relative rounded-[22px] overflow-hidden border border-[#E7E0D4] bg-[#FAF8F3] aspect-[4/3] mb-3">
                  <Image
                    src="/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-kitchen.webp"
                    alt="Modular kitchen cabinetry installation at Nagarajan Residence in Nagercoil"
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
        </section>

        {/* ===================================================================
            SECTION 9 — TRUST / WORKING PRINCIPLES
            Factual operational principles without fake testimonials
        =================================================================== */}
        <section
          aria-labelledby="trust-heading"
          className="py-16 sm:py-24 lg:py-28 bg-[#FAF8F3] border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12 lg:mb-16">
              <span className="inline-block text-[11.5px] sm:text-[12.5px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                WORKING PRINCIPLES
              </span>
              <h2
                id="trust-heading"
                className="font-serif text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-4"
              >
                How we build trust with every client<span className="text-[#B08A52]">.</span>
              </h2>
              <p className="font-sans text-[16px] sm:text-[17px] leading-relaxed text-[#68645D]">
                Our reputation is established on verifiable execution, clear technical specifications, and continuous communication throughout the project lifecycle.
              </p>
            </div>

            {/* 6 Trust Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {trustPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-7 sm:p-8 rounded-[24px] bg-white border border-[#E7E0D4] shadow-xs"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F3] border border-[#E7E0D4] flex items-center justify-center text-[#B08A52] mb-5">
                    <CheckCircle2 size={18} />
                  </div>
                  <h3 className="font-serif text-[20px] font-bold text-[#171714] mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-[14.5px] leading-relaxed text-[#68645D]">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 10 — FAQ / AEO SECTION
            6 Authoritative, concise FAQs with accessible semantic details
        =================================================================== */}
        <section
          aria-labelledby="faq-heading"
          className="py-16 sm:py-24 lg:py-28 bg-white border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              {/* Left Column: Heading */}
              <div className="lg:col-span-5">
                <span className="inline-block text-[11.5px] sm:text-[12.5px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                  QUESTIONS &amp; ANSWERS
                </span>
                <h2
                  id="faq-heading"
                  className="font-serif text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-4"
                >
                  Frequently asked questions<span className="text-[#B08A52]">.</span>
                </h2>
                <p className="font-sans text-[15.5px] sm:text-[16.5px] leading-relaxed text-[#68645D] mb-6">
                  Direct answers regarding our services, operating base, and coordination model in Nagercoil.
                </p>
                <div className="p-6 rounded-[22px] bg-[#FAF8F3] border border-[#E7E0D4]">
                  <p className="font-serif font-bold text-[17px] text-[#171714] mb-2">
                    Have a specific project inquiry?
                  </p>
                  <p className="font-sans text-[13.5px] text-[#68645D] mb-4">
                    Our team is available for plot reviews and preliminary consultations at our Nagercoil studio.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 font-sans font-semibold text-[13.5px] text-[#B08A52] hover:text-[#171714] transition-colors"
                  >
                    <span>Contact Us</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Right Column: 6 Semantic Accordion Items */}
              <div className="lg:col-span-7 space-y-4">
                {faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-[#FAF8F3] rounded-[20px] border border-[#E7E0D4] p-5 sm:p-6 open:bg-white transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-4 font-sans font-semibold text-[16px] sm:text-[17px] text-[#171714] cursor-pointer list-none select-none">
                      <span>{faq.question}</span>
                      <span className="w-8 h-8 rounded-full bg-white border border-[#E7E0D4] group-open:bg-[#FAF8F3] flex items-center justify-center text-[#B08A52] shrink-0 transition-transform duration-200 group-open:rotate-180">
                        <ChevronDown size={16} />
                      </span>
                    </summary>
                    <div className="pt-4 font-sans text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#68645D] border-t border-[#E7E0D4] mt-4">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 11 — FINAL CONVERSION CTA
            "LET'S BUILD TOGETHER - Have a project in mind?"
        =================================================================== */}
        <ConversionCTA
          theme="light"
          badge="LET'S BUILD TOGETHER"
          title="Have a project in mind?"
          description="Let's turn your vision into something extraordinary. Discuss your construction, interior design, or renovation project with SMS Construction in Nagercoil."
          primaryBtnText="Start Your Project"
          primaryBtnHref="/contact"
          phoneNumber={phoneNumber}
          formattedPhone={formattedPhone}
          whatsappNumber="919488021183"
          whatsappMessage="Hello SMS Construction, I have a project in mind and would like to discuss it."
          subtext="SMS Construction • 25/1 Muthamizh Street, Near Court Road, Nagercoil, Tamil Nadu 629001"
        />
      </main>
    </>
  );
}
