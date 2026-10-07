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
    src: "/images/projects/zahir-hussain-residence-nagercoil/zahir-hussain-residence-living-room.webp",
    alt: "Living room feature wall and custom TV paneling at Zahir Hussain Residence",
    label: "Living Lounge",
    width: 1320,
    height: 1273,
    spanClass: "md:col-span-7",
    heightClass: "h-[50vh] md:h-[75vh]",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 840px",
    priority: true,
  },
  {
    src: "/images/projects/zahir-hussain-residence-nagercoil/zahir-hussain-residence-modular-kitchen.webp",
    alt: "Modular kitchen with breakfast island and under-cabinet lighting",
    label: "Modular Kitchen",
    width: 1320,
    height: 1124,
    spanClass: "md:col-span-5",
    heightClass: "h-[50vh] md:h-[75vh]",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 560px",
  },
  // Row 2: 3 / 3 / 6 Split
  {
    src: "/images/projects/zahir-hussain-residence-nagercoil/zahir-hussain-residence-illuminated-staircase.webp",
    alt: "Illuminated staircase with stainless steel glass railing",
    label: "Illuminated Staircase",
    width: 958,
    height: 1600,
    spanClass: "md:col-span-3",
    heightClass: "h-[40vh] md:h-[55vh]",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 360px",
  },
  {
    src: "/images/projects/zahir-hussain-residence-nagercoil/zahir-hussain-residence-vanity-washbasin.webp",
    alt: "Designer washbasin vanity with fluted panel and backlit mirror",
    label: "Designer Vanity",
    width: 1320,
    height: 1156,
    spanClass: "md:col-span-3",
    heightClass: "h-[40vh] md:h-[55vh]",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 360px",
  },
  {
    src: "/images/projects/zahir-hussain-residence-nagercoil/zahir-hussain-residence-master-wardrobe-gold-inlay.webp",
    alt: "Master bedroom wardrobe with gold inlays and vanity dresser",
    label: "Master Wardrobe",
    width: 4160,
    height: 3120,
    spanClass: "md:col-span-6",
    heightClass: "h-[40vh] md:h-[55vh]",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 720px",
  },
  // Row 3: 5 / 3 / 4 Split
  {
    src: "/images/projects/zahir-hussain-residence-nagercoil/zahir-hussain-residence-entrance-door.webp",
    alt: "Solid carved teak entrance door with side panels",
    label: "Teak Entrance",
    width: 1320,
    height: 1175,
    spanClass: "md:col-span-5",
    heightClass: "h-[40vh] md:h-[60vh]",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 560px",
  },
  {
    src: "/images/projects/zahir-hussain-residence-nagercoil/zahir-hussain-residence-living-room-alt.webp",
    alt: "Living room false ceiling and cove lighting details",
    label: "Cove Illumination",
    width: 1320,
    height: 1142,
    spanClass: "md:col-span-3",
    heightClass: "h-[40vh] md:h-[60vh]",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 360px",
  },
  {
    src: "/images/projects/zahir-hussain-residence-nagercoil/zahir-hussain-residence-master-wardrobe-angle.webp",
    alt: "Wardrobe angle showing built-in mirror and shelves",
    label: "Bespoke Joinery",
    width: 4160,
    height: 3120,
    spanClass: "md:col-span-4",
    heightClass: "h-[40vh] md:h-[60vh]",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 480px",
  },
  // Row 4: 6 / 6 Split
  {
    src: "/images/projects/zahir-hussain-residence-nagercoil/zahir-hussain-residence-bedroom-wardrobe-geometric.webp",
    alt: "Bedroom wardrobe with geometric grooving and integrated dresser",
    label: "Geometric Wardrobe",
    width: 3024,
    height: 4032,
    spanClass: "md:col-span-6",
    heightClass: "h-[50vh] md:h-[70vh]",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 720px",
  },
  {
    src: "/images/projects/zahir-hussain-residence-nagercoil/zahir-hussain-residence-living-room.webp",
    alt: "Living room overall luxury interior view",
    label: "Living Lounge Suite",
    width: 1320,
    height: 1273,
    spanClass: "md:col-span-6",
    heightClass: "h-[50vh] md:h-[70vh]",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 720px",
  },
];

const lightboxItems: LightboxImageItem[] = galleryPhotos.map((photo) => ({
  src: photo.src,
  alt: photo.alt,
  label: photo.label,
}));

const zahirFaqs: FaqItemType[] = [
  {
    q: "What type of project is Zahir Hussain Residence?",
    a: "Zahir Hussain Residence is a premium turnkey residential interior design project in Nagercoil by SMS Construction.",
  },
  {
    q: "Where is this project located?",
    a: "The residence is located in Nagercoil, Tamil Nadu.",
  },
  {
    q: "What key interior features were executed?",
    a: "Key scopes included Statuario marble TV wall paneling, high-gloss wardrobes with gold inlays, illuminated staircase with glass railing, bespoke teak entry joinery, and an island modular kitchen.",
  },
  {
    q: "Can SMS Construction handle similar luxury turnkey residences?",
    a: "Yes. SMS Construction specializes in complete turnkey architectural construction, civil engineering, and luxury interior executions across Kanyakumari district.",
  },
  {
    q: "How can I contact SMS Construction for a consultation?",
    a: "You can reach SMS Construction at +91 94880 21183 or smsconstructionngl@gmail.com, or request a quote through our Contact page.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const project = projects.find(
    (p) => p.slug === "zahir-hussain-residence-nagercoil"
  );

  if (!project) {
    return {
      title: "Project Not Found | SMS Construction",
      robots: { index: false, follow: false },
    };
  }

  const title = "Zahir Hussain Residence, Nagercoil | Turnkey Interiors | SMS Construction";
  const description =
    "Explore Zahir Hussain Residence in Nagercoil: turnkey residential interiors with marble TV panels, gold-inlay wardrobes, illuminated staircase, and modular island kitchen by SMS Construction.";
  const canonicalUrl = "/projects/zahir-hussain-residence-nagercoil";
  const ogImageUrl = "/images/projects/zahir-hussain-residence-nagercoil/zahir-hussain-residence-living-room.webp";

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
          width: 1320,
          height: 1273,
          alt: "Living room at Zahir Hussain Residence in Nagercoil",
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

export default function ZahirHussainResidencePage() {
  const project = projects.find(
    (p) => p.slug === "zahir-hussain-residence-nagercoil"
  );

  if (!project) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsconstruction.in/projects/zahir-hussain-residence-nagercoil#breadcrumb",
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
            "name": "Zahir Hussain Residence",
            "item": "https://smsconstruction.in/projects/zahir-hussain-residence-nagercoil",
          },
        ],
      },
      {
        "@type": "CreativeWork",
        "@id": "https://smsconstruction.in/projects/zahir-hussain-residence-nagercoil#project",
        "name": "Zahir Hussain Residence",
        "headline": "Zahir Hussain Residence, Nagercoil",
        "description": project.description,
        "url": "https://smsconstruction.in/projects/zahir-hussain-residence-nagercoil",
        "image": "https://smsconstruction.in/images/projects/zahir-hussain-residence-nagercoil/zahir-hussain-residence-living-room.webp",
        "locationCreated": {
          "@type": "Place",
          "name": "Nagercoil",
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
              Zahir Hussain Residence
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
              Zahir Hussain
              <br />
              Residence
            </h1>
            <p className="hero-reveal font-sans text-[13px] md:text-[14px] tracking-[0.12em] text-[#77736C] uppercase mb-4">
              Nagercoil, Tamil Nadu
            </p>

            {/* Scope / Services Summary */}
            <div className="border-t border-[#E7E0D4] pt-5 w-full">
              <h3 className="text-[16px] uppercase font-bold text-[#B08A52] mb-3">
                Key Interior Scope
              </h3>
              <ul className="font-sans text-[13px] md:text-[14px] text-[#77736C] flex flex-wrap items-center gap-x-4 md:gap-x-6 gap-y-2">
                <li>Statuario Marble Paneling</li>
                <li className="hidden md:inline-block w-1 h-1 rounded-full bg-[#B08A52]/50" />
                <li>High-Gloss Gold Inlay Wardrobes</li>
                <li className="hidden md:inline-block w-1 h-1 rounded-full bg-[#B08A52]/50" />
                <li>Illuminated Modern Staircase</li>
                <li className="hidden md:inline-block w-1 h-1 rounded-full bg-[#B08A52]/50" />
                <li>Modular Island Kitchen</li>
                <li className="hidden md:inline-block w-1 h-1 rounded-full bg-[#B08A52]/50" />
                <li>Bespoke Teak Door Joinery</li>
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
                    Zahir Hussain Residence
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] font-sans tracking-[0.18em] uppercase text-[#77736C] mb-1">
                    Location
                  </dt>
                  <dd className="text-[15px] md:text-[16px] text-[#171614] font-medium">
                    Nagercoil, Tamil Nadu
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
                  <dt className="text-[10px] font-sans tracking-[0.18em] uppercase text-[#77736C] mb-1">
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
        items={zahirFaqs}
        title="Frequently Asked Questions"
        titleAccent="."
        subtitle="Project Insights"
        className="py-16 md:py-24 bg-[#F4EFE7]/50 border-t border-[#E7E0D4] relative"
      />

      {/* 4. RELATED SERVICES — COMPACT ARCHITECTURE HUB */}
      <ProjectServiceHub />

      {/* 5. PROJECT NAVIGATION — DYNAMIC COMPONENT */}
      <ProjectNavigation currentSlug="zahir-hussain-residence-nagercoil" />

      {/* 6. FINAL CTA — CONVERSION FOCUSED */}
      <ConversionCTA
        badge="HAVE A PROJECT IN MIND?"
        title="Ready to transform your space?"
        description="Tell us about your home, the spaces you want to improve, and what you have in mind. Our team will prepare a tailored consultation and quotation."
        primaryBtnText="Get a Free Quote"
        primaryBtnHref="/contact"
        whatsappMessage="Hello SMS Construction, I saw the Zahir Hussain Residence project and am interested in discussing a project for my space."
        subtext="SMS Construction • Architecture, Civil & Interior Design Studio • Nagercoil, Tamil Nadu"
      />

      {/* 7. ACCESSIBLE FULLSCREEN LIGHTBOX (CLIENT COMPONENT) */}
      <ProjectLightbox images={lightboxItems} containerId="project-gallery-grid" />
    </main>
  );
}
