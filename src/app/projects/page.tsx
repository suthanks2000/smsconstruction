"use client";

import Link from "next/link";
import ConversionCTA from "@/components/ConversionCTA";
import ModernFaq, { FaqItemType } from "@/components/ModernFaq";
import Image from "next/image";
import { projects } from "@/data/projects";

/* ─── Projects FAQ Items ─────────────────────────────────────────────────── */
const projectsFaqs: FaqItemType[] = [
  {
    q: "What type of projects does SMS Construction showcase?",
    a: "SMS Construction showcases residential construction, interior works and related project work completed or documented by the company.",
  },
  {
    q: "Where are the projects by SMS Construction located?",
    a: "SMS Construction is based in Nagercoil, Tamil Nadu. Project locations can vary depending on the work and client requirements.",
  },
  {
    q: "Can I view completed projects by SMS Construction?",
    a: "Yes. The Projects page features selected project work with images and project details where available.",
  },
  {
    q: "What information is available on a project detail page?",
    a: "Depending on the project, the page may include the project name, location, project type, design details, images and related work information.",
  },
  {
    q: "Does SMS Construction handle both construction and interior projects?",
    a: "Yes. The company provides construction and interior works services along with design and planning, survey-related services and fabrication works.",
  },
  {
    q: "Can I discuss a project similar to the work shown here?",
    a: "Yes. You can contact SMS Construction to discuss your project requirements, location and scope.",
  },
  {
    q: "How can I enquire about a project shown on the website?",
    a: "You can contact SMS Construction at +91 94880 21183 or smsconstructionngl@gmail.com, or submit an enquiry through the Contact page.",
  },
  {
    q: "Are all images on the Projects page actual SMS Construction projects?",
    a: "Only verified project images should be presented as completed or documented SMS Construction projects. Any inspiration or catalog imagery should be clearly separated from real project documentation.",
  },
];

/* ─── Marquee ticker items ──────────────────────────────────────────────── */
const tickerItems = [
  "Residential Construction",
  "Interior Works",
  "Turnkey Interiors",
  "Commercial Construction",
  "Renovation",
];

/* ─── Helpers ───────────────────────────────────────────────────────────── */
function pad(n: string) {
  return n.padStart(2, "0");
}

function InfiniteMarquee() {
  const repeated = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className="relative bg-[#171614] border-t border-b border-[#2A2928] overflow-hidden py-4 select-none pointer-events-none">
      <style>{`
        @keyframes projectsTicker {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .projects-ticker-track {
          display: flex;
          align-items: center;
          white-space: nowrap;
          width: max-content;
          animation: projectsTicker 32s linear infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .projects-ticker-track {
            animation: none;
          }
        }
      `}</style>
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #171614, transparent)" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #171614, transparent)" }}
      />

      <div aria-hidden="true" className="projects-ticker-track">
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-5 px-2">
            <span className="font-sans text-[12px] tracking-[0.22em] uppercase font-semibold text-[#B08A52]">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#B08A52] shrink-0" />
          </span>
        ))}
      </div>

      <ul className="sr-only">
        {tickerItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Collage Component ─────────────────────────────────────────────────── */
function ProjectCollage({ images, title, priority = false }: { images: string[], title: string, priority?: boolean }) {
  if (!images || images.length === 0) return null;

  // 1 Image: Full bleed hero container
  if (images.length === 1) {
    return (
      <div className="relative w-full aspect-[4/5] md:aspect-auto md:w-full md:h-full overflow-hidden rounded-2xl bg-[#EAE4D9]">
        <Image
          src={images[0]}
          fill
          className="object-cover"
          alt={`${title} - Main View`}
          sizes="(max-width: 1024px) 100vw, 65vw"
          quality={75}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
        />
      </div>
    );
  }

  // 2 Images: Vertical split
  if (images.length === 2) {
    return (
      <div className="w-full aspect-[4/5] md:aspect-auto md:w-full md:h-full grid grid-cols-2 gap-2 md:gap-3 p-1 md:p-2">
        <div className="relative w-full h-full overflow-hidden rounded-2xl bg-[#EAE4D9]">
          <Image src={images[0]} fill className="object-cover" alt={`${title} - View 1`} sizes="(max-width: 1024px) 50vw, 35vw" quality={75} priority={priority} loading={priority ? "eager" : "lazy"} />
        </div>
        <div className="relative w-full h-full overflow-hidden rounded-2xl bg-[#EAE4D9]">
          <Image src={images[1]} fill className="object-cover" alt={`${title} - View 2`} sizes="(max-width: 1024px) 50vw, 35vw" quality={75} priority={priority} loading={priority ? "eager" : "lazy"} />
        </div>
      </div>
    );
  }

  if (images.length === 3) {
    // 3 Images: 1 large on left, 2 smaller on right
    return (
      <div className="w-full aspect-[4/5] md:aspect-auto md:w-full md:h-full grid grid-cols-2 grid-rows-2 gap-2 md:gap-3 p-1 md:p-2">
        {/* Large left image spanning 2 rows */}
        <div className="relative w-full h-full overflow-hidden row-span-2 rounded-2xl bg-[#EAE4D9]">
          <Image src={images[0]} fill className="object-cover" alt={`${title} - Main View`} sizes="(max-width: 1024px) 100vw, 50vw" quality={75} priority={priority} loading={priority ? "eager" : "lazy"} />
        </div>

        {/* Top Right */}
        <div className="relative w-full h-full overflow-hidden rounded-2xl bg-[#EAE4D9]">
          <Image src={images[1]} fill className="object-cover" alt={`${title} - Detail View 1`} sizes="(max-width: 1024px) 50vw, 25vw" quality={75} priority={priority} loading={priority ? "eager" : "lazy"} />
        </div>

        {/* Bottom Right */}
        <div className="relative w-full h-full overflow-hidden rounded-2xl bg-[#EAE4D9]">
          <Image src={images[2]} fill className="object-cover" alt={`${title} - Detail View 2`} sizes="(max-width: 1024px) 50vw, 25vw" quality={75} priority={priority} loading={priority ? "eager" : "lazy"} />
        </div>
      </div>
    );
  }

  // 4+ Images: Premium Asymmetric Bento Grid (7/5 & 5/7)
  return (
    <div className="w-full aspect-[4/5] md:aspect-auto md:w-full md:h-full grid grid-cols-12 grid-rows-2 gap-2 md:gap-3 p-1 md:p-2">
      <div className="relative col-span-7 h-full w-full overflow-hidden rounded-2xl bg-[#EAE4D9]">
        <Image src={images[0]} fill className="object-cover" alt={`${title} - View 1`} sizes="(max-width: 1024px) 100vw, 45vw" quality={75} priority={priority} loading={priority ? "eager" : "lazy"} />
      </div>
      <div className="relative col-span-5 h-full w-full overflow-hidden rounded-2xl bg-[#EAE4D9]">
        <Image src={images[1]} fill className="object-cover" alt={`${title} - View 2`} sizes="(max-width: 1024px) 50vw, 30vw" quality={75} priority={priority} loading={priority ? "eager" : "lazy"} />
      </div>
      <div className="relative col-span-5 h-full w-full overflow-hidden rounded-2xl bg-[#EAE4D9]">
        <Image src={images[2]} fill className="object-cover" alt={`${title} - View 3`} sizes="(max-width: 1024px) 50vw, 30vw" quality={75} priority={priority} loading={priority ? "eager" : "lazy"} />
      </div>
      <div className="relative col-span-7 h-full w-full overflow-hidden rounded-2xl bg-[#EAE4D9]">
        <Image src={images[3]} fill className="object-cover" alt={`${title} - View 4`} sizes="(max-width: 1024px) 100vw, 45vw" quality={75} priority={priority} loading={priority ? "eager" : "lazy"} />
      </div>
    </div>
  );
}

/* ─── Main Page Component ───────────────────────────────────────────────── */
export default function ProjectsPage() {
  const lookbookProjects = projects; // Display all verified real projects

  // Structured Data: FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: projectsFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <main className="bg-[#F7F3ED]">
      <style>{`
        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translate3d(0, 14px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        .intro-elem {
          animation: heroFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .intro-elem-1 { animation-delay: 0.04s; }
        .intro-elem-2 { animation-delay: 0.10s; }
        .intro-elem-3 { animation-delay: 0.16s; }
        .intro-elem-4 { animation-delay: 0.22s; }
        @media (prefers-reduced-motion: reduce) {
          .intro-elem {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* FAQ Schema for Search & Answer Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ══════════════════════════════════════════════════════
          1. COMPACT EDITORIAL HERO (STABLE VIEWPORT HEIGHT)
      ══════════════════════════════════════════════════════ */}
      <div className="relative w-full min-h-screen min-h-[100svh] flex flex-col justify-between pt-20 sm:pt-24 md:pt-28 overflow-hidden">
        <section className="flex-grow flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto w-full pb-8 sm:pb-12">
          <p className="intro-elem intro-elem-1 font-sans text-[11px] tracking-[0.28em] uppercase font-semibold text-[#B08A52] mb-4 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-[#B08A52]" aria-hidden="true" />
            Selected Work
          </p>
          <h1
            className="font-semibold intro-elem intro-elem-2 text-[#171614] leading-[1.05] tracking-[-0.02em] mb-5"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Our Projects.
          </h1>
          <p className="intro-elem intro-elem-3 font-sans text-[16px] md:text-[18px] leading-[1.7] text-[#171614] max-w-xl">
            A collection of spaces shaped through thoughtful design, careful execution and attention to detail.
          </p>

          <button
            onClick={() => {
              const el = document.getElementById('projects-start');
              if (el) {
                const navOffset = window.innerWidth >= 768 ? 96 : 80;
                const top = el.getBoundingClientRect().top + window.scrollY - navOffset;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            }}
            className="intro-elem intro-elem-4 mt-8 sm:mt-12 md:mt-16 flex items-center gap-5 hover:opacity-80 transition-opacity cursor-pointer text-left focus:outline-none"
            aria-label="Scroll down to projects"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#B08A52] text-white shadow-xl shadow-[#B08A52]/20">
              <svg className="w-5 h-5 animate-bounce mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase font-bold text-[#171614]">
              Scroll to explore
            </span>
          </button>
        </section>

        {/* ══════════════════════════════════════════════════════
            2. INFINITE MARQUEE TICKER
        ══════════════════════════════════════════════════════ */}
        <div className="mt-auto">
          <InfiniteMarquee />
        </div>
      </div>

      {/* Anchor point for scrolling with clearance for fixed navbar */}
      <div id="projects-start" className="scroll-mt-28 md:scroll-mt-32" />

      {/* ══════════════════════════════════════════════════════
          3. EDITORIAL PROJECT SHOWCASE (DESKTOP)
      ══════════════════════════════════════════════════════ */}
      <section className="hidden md:block w-full bg-[#F7F3ED] pt-24 lg:pt-28 pb-24">
        <div className="max-w-[1440px] mx-auto px-12 lg:px-20 flex flex-col gap-28 lg:gap-36">

          {lookbookProjects.map((project, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={project.slug}
                className={`showcase-panel min-h-[65vh] lg:min-h-[70vh] flex justify-between gap-12 lg:gap-20 items-center py-4 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* TEXT (25%) */}
                <div className="w-[30%] lg:w-[25%] min-w-[280px] flex flex-col justify-center">
                  <div className="font-sans text-[11px] tracking-[0.2em] font-semibold text-[#77736C] mb-8">
                    {pad((i + 1).toString())} / {pad(lookbookProjects.length.toString())}
                  </div>

                  <Link href={`/projects/${project.slug}`} className="group block focus-visible:outline-[#B08A52] rounded-md">
                    <h2 className="font-semibold text-[#171614] text-[32px] lg:text-[40px] xl:text-[44px] leading-[1.1] uppercase mb-4 transition-colors duration-300 group-hover:text-[#B08A52]">
                      {project.title.split(' ').map((word, j) => (
                        <span key={j} className="block">{word}</span>
                      ))}
                    </h2>
                  </Link>

                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-sans text-[11px] tracking-[0.16em] text-[#B08A52] uppercase font-bold px-3 py-1 rounded-full bg-[#B08A52]/10 border border-[#B08A52]/25">
                      {project.category}
                    </span>
                    <span className="font-sans text-[11.5px] font-semibold text-[#77736C] px-2.5 py-1 rounded-full bg-white/70 border border-[#E7E0D4]">
                      {project.area}
                    </span>
                  </div>
                  <div className="font-sans text-[13px] text-[#77736C] font-medium mb-6">
                    {project.location}
                  </div>
                  <p className="font-sans text-[14px] leading-[1.7] text-[#171614] max-w-sm mb-10">
                    {project.description}
                  </p>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="group inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.15em] uppercase font-bold text-white bg-[#171614] px-8 py-4 rounded-full hover:bg-[#B08A52] transition-all duration-300 shadow-md hover:shadow-xl self-start"
                  >
                    VIEW PROJECT
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>

                {/* IMAGE COLLAGE (75%) */}
                <div className="w-[70%] lg:w-[75%] h-[70vh] lg:h-[74vh] max-h-[760px] flex justify-center items-center">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group block w-full h-full collage-container overflow-hidden rounded-xl transition-transform duration-700 hover:scale-[1.015]"
                  >
                    <ProjectCollage images={project.gallery.completed.slice(0, 4)} title={project.title} priority={i === 0} />

                    {/* Subtle Dark Overlay on Hover */}
                    <div className="absolute inset-0 bg-[#171614]/0 group-hover:bg-[#171614]/5 transition-colors duration-500 rounded-xl pointer-events-none" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          4. MOBILE VERTICAL STACK (HIDDEN ON DESKTOP)
      ══════════════════════════════════════════════════════ */}
      <section className="md:hidden bg-[#F7F3ED] px-6 pt-16 sm:pt-20 pb-20 flex flex-col gap-20">
        {lookbookProjects.map((project, i) => (
          <article key={project.slug} className="mobile-panel flex flex-col relative scroll-mt-24">
            <div className="font-sans text-[11px] tracking-[0.2em] font-semibold text-[#77736C] mb-4">
              {pad((i + 1).toString())} / {pad(lookbookProjects.length.toString())}
            </div>
            <h2 className="font-serif font-bold text-[#171614] text-[32px] leading-[1.1] mb-2 uppercase">
              {project.title}
            </h2>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="font-sans text-[11px] tracking-[0.12em] uppercase font-bold text-[#B08A52] px-2.5 py-0.5 rounded-full bg-[#B08A52]/10 border border-[#B08A52]/25">
                {project.category}
              </span>
              <span className="font-sans text-[11px] font-semibold text-[#77736C] px-2 py-0.5 rounded-full bg-white/70 border border-[#E7E0D4]">
                {project.area}
              </span>
            </div>
            <div className="font-sans text-[12.5px] text-[#77736C] font-medium mb-6">
              {project.location}
            </div>

            <Link href={`/projects/${project.slug}`} className="block relative w-full mb-8 rounded-lg overflow-hidden">
              <ProjectCollage images={project.gallery.completed.slice(0, 4)} title={project.title} priority={i === 0} />
            </Link>

            <p className="font-sans text-[15px] leading-[1.6] text-[#171614] mb-8">
              {project.description}
            </p>
            <Link
              href={`/projects/${project.slug}`}
              className="group inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.15em] uppercase font-bold text-white bg-[#171614] px-8 py-4 rounded-full active:bg-[#B08A52] transition-all duration-300 shadow-md self-start"
            >
              VIEW PROJECT
              <span className="transition-transform duration-300 group-active:translate-x-1">→</span>
            </Link>
          </article>
        ))}
      </section>

      {/* ══════════════════════════════════════════════════════
          5. SEO CONTEXT BLOCK
      ══════════════════════════════════════════════════════ */}
      <section
        className="bg-white px-6 md:px-12 lg:px-20 py-24 md:py-32 border-t border-[#E7E0D4]"
        aria-labelledby="seo-heading"
      >
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2
              id="seo-heading"
              className="font-semibold text-[#171614] leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              OUR PROJECTS
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-sans text-[16px] md:text-[18px] leading-[1.7] text-[#171614]">
              Explore completed residential construction, bespoke interior works, turnkey spaces, and renovations by SMS Construction.
            </p>
            <p className="font-sans text-[15px] md:text-[16px] leading-[1.7] text-[#77736C]">
              Based in Nagercoil, our portfolio extends across the Kanyakumari district. From structural groundwork to meticulous material finishes, we maintain rigorous standards of excellence on every site we operate on.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          6. FREQUENTLY ASKED QUESTIONS
      ══════════════════════════════════════════════════════ */}
      <ModernFaq
        sectionId="projects-faq"
        badgeText="QUESTIONS & ANSWERS"
        title="Frequently Asked Questions"
        titleAccent="."
        subtitle="Everything you need to know about our project work and portfolio"
        items={projectsFaqs}
        className="py-16 md:py-24 bg-[#FAFAFA] border-t border-[#E7E0D4] relative"
      />

      {/* ══════════════════════════════════════════════════════
          7. FINAL CTA
      ══════════════════════════════════════════════════════ */}
      <ConversionCTA
        badge="HAVE A PROJECT IN MIND?"
        title="Let’s talk about your next space."
        description="Whether you're planning a bespoke residential home, turnkey commercial build, or luxury interior in Nagercoil and Kanyakumari, our team is ready to assist you."
        primaryBtnText="Start a Conversation"
        primaryBtnHref="/contact"
        phoneNumber="+919488021183"
        formattedPhone="+91 94880 21183"
        whatsappNumber="919488021183"
        whatsappMessage="Hello SMS Construction, I am interested in discussing a project for my space."
        subtext="SMS Construction • Architecture, Civil & Interior Works Studio • Nagercoil, Tamil Nadu"
      />
    </main>
  );
}
