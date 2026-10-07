import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ModernFaq, { FaqItemType } from "@/components/ModernFaq";
import ProjectLightbox, { LightboxImageItem } from "@/app/projects/ProjectLightbox";
import ProjectAnimations from "@/app/projects/ProjectAnimations";
import ProjectServiceHub from "@/app/projects/ProjectServiceHub";
import ProjectNavigation from "@/app/projects/ProjectNavigation";
import ConversionCTA from "@/components/ConversionCTA";

interface GalleryPhoto {
  src: string;
  alt: string;
  label: string;
  width: number;
  height: number;
  spanClass: string;
  heightClass: string;
  sizes: string;
  priority?: boolean;
}

const galleryPhotos: GalleryPhoto[] = [
  // Row 1: 7 / 5 Split
  {
    src: "/images/projects/godwin-dhas-residence/master-suite-floating-bed-hero.webp",
    alt: "Presidential master bedroom suite with floating illuminated platform bed at Godwin Dhas Residence",
    label: "Presidential Suite",
    width: 1024,
    height: 576,
    spanClass: "md:col-span-7",
    heightClass: "h-[50vh] md:h-[75vh]",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 840px",
    priority: true,
  },
  {
    src: "/images/projects/godwin-dhas-residence/high-gloss-acrylic-modular-kitchen.webp",
    alt: "High-gloss white acrylic modular kitchen with rose gold handles and breakfast bar",
    label: "Acrylic Kitchen Suite",
    width: 1024,
    height: 576,
    spanClass: "md:col-span-5",
    heightClass: "h-[50vh] md:h-[75vh]",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 560px",
  },
  // Row 2: 6 / 6 Split
  {
    src: "/images/projects/godwin-dhas-residence/architectural-jali-wood-partition.webp",
    alt: "Bespoke red cedar vertical wood slats with white CNC geometric jali cutwork",
    label: "Red Cedar & CNC Jali",
    width: 1280,
    height: 576,
    spanClass: "md:col-span-6",
    heightClass: "h-[45vh] md:h-[60vh]",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 720px",
  },
  {
    src: "/images/projects/godwin-dhas-residence/breakfast-counter-pendant-lights.webp",
    alt: "Dining pass-through breakfast bar with globe pendant lighting and fluted framing",
    label: "Dining Bar & Pendants",
    width: 576,
    height: 1024,
    spanClass: "md:col-span-6",
    heightClass: "h-[45vh] md:h-[60vh]",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 720px",
  },
  // Row 3: 4 / 4 / 4 Split
  {
    src: "/images/projects/godwin-dhas-residence/dining-vanity-backlit-mirror.webp",
    alt: "Floating teak vanity with matte black ceramic basin and touch-sensor backlit mirror",
    label: "Floating Vanity Basin",
    width: 576,
    height: 1024,
    spanClass: "md:col-span-4",
    heightClass: "h-[40vh] md:h-[55vh]",
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
  {
    src: "/images/projects/godwin-dhas-residence/living-tv-unit-fluted-marble.webp",
    alt: "Living room media console with Statuario marble TV panel and dark fluted slats",
    label: "Statuario Marble TV Wall",
    width: 576,
    height: 1024,
    spanClass: "md:col-span-4",
    heightClass: "h-[40vh] md:h-[55vh]",
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
  {
    src: "/images/projects/godwin-dhas-residence/bedroom-curved-platform-bed.webp",
    alt: "Curved contemporary platform bed with floating side drawers and tufted headboard",
    label: "Curved Platform Bed",
    width: 1280,
    height: 576,
    spanClass: "md:col-span-4",
    heightClass: "h-[40vh] md:h-[55vh]",
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
  // Row 4: 6 / 6 Split
  {
    src: "/images/projects/godwin-dhas-residence/master-suite-canopy-lighting.webp",
    alt: "Close-up of canopy overhead neon lighting channels and metallic wall texture",
    label: "Canopy Illumination",
    width: 1024,
    height: 576,
    spanClass: "md:col-span-6",
    heightClass: "h-[45vh] md:h-[60vh]",
    sizes: "(max-width: 768px) 100vw, 50vw",
  },
  {
    src: "/images/projects/godwin-dhas-residence/master-suite-wide-perspective.webp",
    alt: "Expansive wide angle view of the master suite with floating console and dressing portal",
    label: "Master Suite Dressing Volume",
    width: 576,
    height: 1024,
    spanClass: "md:col-span-6",
    heightClass: "h-[45vh] md:h-[60vh]",
    sizes: "(max-width: 768px) 100vw, 50vw",
  },
  // Row 5: 4 / 4 / 4 Split
  {
    src: "/images/projects/godwin-dhas-residence/staircase-under-step-storage.webp",
    alt: "Custom under-stair stepped storage cabinetry and washbasin counter",
    label: "Under-Stair Storage",
    width: 1280,
    height: 576,
    spanClass: "md:col-span-4",
    heightClass: "h-[40vh] md:h-[55vh]",
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
  {
    src: "/images/projects/godwin-dhas-residence/lounge-curved-cove-ceiling.webp",
    alt: "Living lounge with curved cove false ceiling, recessed light slats and gold wall sconces",
    label: "Curved Ceiling Cove",
    width: 1280,
    height: 960,
    spanClass: "md:col-span-4",
    heightClass: "h-[40vh] md:h-[55vh]",
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
  {
    src: "/images/projects/godwin-dhas-residence/teak-kitchen-wicker-baskets.webp",
    alt: "Teak modular kitchen with wicker vegetable pull-out baskets and overhead cabinets",
    label: "Teak Kitchen Joinery",
    width: 960,
    height: 1280,
    spanClass: "md:col-span-4",
    heightClass: "h-[40vh] md:h-[55vh]",
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
];

const lightboxItems: LightboxImageItem[] = galleryPhotos.map((photo) => ({
  src: photo.src,
  alt: photo.alt,
  label: photo.label,
}));

const godwinFaqs: FaqItemType[] = [
  {
    q: "What type of project is Godwin Dhas Residence?",
    a: "Godwin Dhas Residence is a luxury turnkey residential interior architecture project in Chunkankadai, Nagercoil by SMS Construction.",
  },
  {
    q: "Where is this residence situated?",
    a: "The residence is located in Chunkankadai, Nagercoil, Tamil Nadu.",
  },
  {
    q: "What standout architectural features are present in this home?",
    a: "Highlights include a floating velvet platform bed with overhead monolithic canopy lighting, CNC geometric jali partitions with red cedar, high-gloss acrylic modular kitchen, and curved ceiling cove illumination.",
  },
  {
    q: "Does SMS Construction handle turnkey construction from ground-up?",
    a: "Yes. SMS Construction provides comprehensive civil construction, architecture planning, structural engineering, and luxury interior executions across Kanyakumari district.",
  },
  {
    q: "How can I get an estimate for a similar villa project?",
    a: "Reach our project team directly at +91 94880 21183 or smsconstructionngl@gmail.com, or submit details via our Contact page.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const project = projects.find(
    (p) => p.slug === "godwin-dhas-residence"
  );

  if (!project) {
    return {
      title: "Project Not Found | SMS Construction",
      robots: { index: false, follow: false },
    };
  }

  const title = "Godwin Dhas Residence, Chunkankadai | Turnkey Interiors | SMS Construction";
  const description =
    "Explore Godwin Dhas Residence in Chunkankadai, Nagercoil: luxury presidential suite with floating bed, acrylic kitchen, and red cedar CNC partitions by SMS Construction.";
  const canonicalUrl = "/projects/godwin-dhas-residence";
  const ogImageUrl = "/images/projects/godwin-dhas-residence/master-suite-floating-bed-hero.webp";

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "SMS Construction",
      locale: "en_IN",
      type: "article",
      images: [
        {
          url: ogImageUrl,
          width: 1024,
          height: 576,
          alt: "Master suite floating bed at Godwin Dhas Residence",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

export default function GodwinDhasResidencePage() {
  const project = projects.find(
    (p) => p.slug === "godwin-dhas-residence"
  );

  if (!project) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsconstruction.in/projects/godwin-dhas-residence#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://smsconstruction.in",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Projects",
            "item": "https://smsconstruction.in/projects",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Godwin Dhas Residence",
            "item": "https://smsconstruction.in/projects/godwin-dhas-residence",
          },
        ],
      },
      {
        "@type": "CreativeWork",
        "@id": "https://smsconstruction.in/projects/godwin-dhas-residence#project",
        "name": "Godwin Dhas Residence",
        "headline": "Godwin Dhas Residence, Chunkankadai",
        "description": project.description,
        "url": "https://smsconstruction.in/projects/godwin-dhas-residence",
        "image": "https://smsconstruction.in/images/projects/godwin-dhas-residence/master-suite-floating-bed-hero.webp",
        "locationCreated": {
          "@type": "Place",
          "name": "Chunkankadai, Nagercoil",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Nagercoil",
            "addressRegion": "Tamil Nadu",
            "addressCountry": "IN",
          },
        },
        "creator": {
          "@id": "https://smsconstruction.in",
        },
      },
    ],
  };

  return (
    <main className="bg-[#F7F3ED] text-[#171614] selection:bg-[#B08A52] selection:text-white">
      {/* Structured Data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Client Animation Controller */}
      <ProjectAnimations />

      {/* FIXED BACK BUTTON */}
      <Link
        href="/projects"
        className="fixed bottom-6 left-6 md:bottom-12 md:left-12 z-50 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#171614] text-white shadow-2xl hover:bg-[#B08A52] hover:scale-110 transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A52] focus-visible:ring-offset-2"
        aria-label="Back to Projects"
      >
        <svg
          className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </Link>

      {/* 1. HERO & INTRODUCTION SECTION */}
      <section className="pt-24 md:pt-28 pb-6 md:pb-12 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto w-full">
        {/* Semantic Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="hero-reveal mb-8 pb-4 border-b border-[#E7E0D4] text-[11px] font-sans tracking-[0.2em] uppercase text-[#77736C]"
        >
          <ol className="flex items-center gap-2 flex-wrap">
            <li>
              <Link
                href="/"
                className="hover:text-[#B08A52] transition-colors focus:outline-none focus-visible:underline"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-[#E7E0D4]">
              /
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-[#B08A52] transition-colors focus:outline-none focus-visible:underline"
              >
                Projects
              </Link>
            </li>
            <li aria-hidden="true" className="text-[#E7E0D4]">
              /
            </li>
            <li aria-current="page" className="text-[#171614] font-medium">
              Godwin Dhas Residence
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left Column: Heading & Subtitle */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="hero-reveal text-[20px] uppercase font-semibold text-[#B08A52] mb-4 md:mb-6">
              TURNKEY RESIDENTIAL INTERIORS
            </span>
            <h1
              className="hero-reveal font-bold text-[#171614] leading-[1.05] tracking-[-0.02em] mb-4 md:mb-6"
              style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
            >
              Godwin Dhas
              <br />
              Residence
            </h1>
            <p className="hero-reveal font-sans text-[13px] md:text-[14px] tracking-[0.12em] text-[#77736C] uppercase mb-4">
              Chunkankadai, Nagercoil
            </p>

            {/* Scope / Services Summary */}
            <div className="border-t border-[#E7E0D4] pt-5 w-full">
              <h3 className="text-[16px] uppercase font-bold text-[#B08A52] mb-3">
                Key Interior Scope
              </h3>
              <ul className="font-sans text-[13px] md:text-[14px] text-[#77736C] flex flex-wrap items-center gap-x-4 md:gap-x-6 gap-y-2">
                <li>Floating Velvet Bed Platform</li>
                <li className="hidden md:inline-block w-1 h-1 rounded-full bg-[#B08A52]/50" />
                <li>Monolithic Canopy Illumination</li>
                <li className="hidden md:inline-block w-1 h-1 rounded-full bg-[#B08A52]/50" />
                <li>High-Gloss Acrylic Kitchen</li>
                <li className="hidden md:inline-block w-1 h-1 rounded-full bg-[#B08A52]/50" />
                <li>Red Cedar CNC Jali Partition</li>
                <li className="hidden md:inline-block w-1 h-1 rounded-full bg-[#B08A52]/50" />
                <li>Curved Ceiling Cove Channels</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Introduction Narrative & Facts */}
          <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8 lg:pl-10 scroll-reveal lg:mt-2">
            <p className="text-[16px] md:text-[18px] lg:text-[19px] leading-[1.75] text-[#171614]/90">
              {project.overview} {project.requirements}
            </p>

            {/* Project Facts Block — AEO */}
            <div className="border border-[#E7E0D4] bg-white/70 backdrop-blur-xs rounded-2xl p-5 md:p-6 shadow-xs">
              <h2 className="text-[18px] uppercase font-bold text-[#B08A52] mb-4">
                Project Overview
              </h2>
              <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                <div>
                  <dt className="text-[10px] uppercase text-[#77736C] mb-1">
                    Project
                  </dt>
                  <dd className="text-[15px] md:text-[16px] text-[#171614] font-medium">
                    Godwin Dhas Residence
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] font-sans tracking-[0.18em] uppercase text-[#77736C] mb-1">
                    Location
                  </dt>
                  <dd className="text-[15px] md:text-[16px] text-[#171614] font-medium">
                    Chunkankadai, Nagercoil
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] font-sans tracking-[0.18em] uppercase text-[#77736C] mb-1">
                    Project Type
                  </dt>
                  <dd className="text-[15px] md:text-[16px] text-[#171614] font-medium">
                    Residential
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] font-sans tracking-[0.18em] uppercase text-[#B08A52] mb-1 font-semibold">
                    Focus
                  </dt>
                  <dd className="text-[15px] md:text-[16px] text-[#171614] font-medium">
                    Turnkey Interiors
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROJECT GALLERY - CURATED SPACES MASONRY */}
      <section className="scroll-reveal px-6 md:px-12 lg:px-20 pt-4 md:pt-8 pb-16 md:pb-24 max-w-[1440px] mx-auto w-full">
        <div
          id="project-gallery-grid"
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6"
        >
          {galleryPhotos.map((photo, index) => (
            <button
              key={`${photo.src}-${index}`}
              type="button"
              data-gallery-index={index}
              aria-label={`Open photo ${index + 1}: ${photo.label}`}
              className={`${photo.spanClass} ${photo.heightClass} relative w-full overflow-hidden rounded-2xl group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A52] text-left`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                priority={photo.priority}
                loading={photo.priority ? undefined : "lazy"}
                sizes={photo.sizes}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-2xl" />
              <div className="absolute bottom-6 left-6 pointer-events-none z-10 flex items-center gap-2">
                <span className="text-white text-[20px] font-semibold">
                  {photo.label}
                </span>
              </div>
              <div
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 pointer-events-none"
                aria-hidden="true"
              >
                <span className="text-xs">↗</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 3. FREQUENTLY ASKED QUESTIONS — AEO */}
      <ModernFaq
        items={godwinFaqs}
        title="Frequently Asked Questions"
        titleAccent="."
        subtitle="Project Insights"
        className="py-16 md:py-24 bg-[#F4EFE7]/50 border-t border-[#E7E0D4] relative"
      />

      {/* 4. RELATED SERVICES — COMPACT ARCHITECTURE HUB */}
      <ProjectServiceHub />

      {/* 5. PROJECT NAVIGATION — DYNAMIC COMPONENT */}
      <ProjectNavigation currentSlug="godwin-dhas-residence" />

      {/* 6. FINAL CTA — CONVERSION FOCUSED */}
      <ConversionCTA
        badge="HAVE A PROJECT IN MIND?"
        title="Ready to transform your space?"
        description="Tell us about your home, the spaces you want to improve, and what you have in mind. Our team will prepare a tailored consultation and quotation."
        primaryBtnText="Get a Free Quote"
        primaryBtnHref="/contact"
        whatsappMessage="Hello SMS Construction, I saw the Godwin Dhas Residence project and am interested in discussing a project for my space."
        subtext="SMS Construction • Architecture, Civil & Interior Design Studio • Nagercoil, Tamil Nadu"
      />

      {/* 7. ACCESSIBLE FULLSCREEN LIGHTBOX (CLIENT COMPONENT) */}
      <ProjectLightbox images={lightboxItems} containerId="project-gallery-grid" />
    </main>
  );
}
