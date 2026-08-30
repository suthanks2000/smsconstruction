"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

/* ─── Marquee ticker items ──────────────────────────────────────────────── */
const tickerItems = [
  "Residential Construction",
  "Interior Design",
  "Turnkey Interiors",
  "Commercial Construction",
  "Renovation",
];

/* ─── Helpers ───────────────────────────────────────────────────────────── */
function pad(n: string) {
  return n.padStart(2, "0");
}

/* ─── InfiniteMarquee ───────────────────────────────────────────────────── */
function InfiniteMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const repeated = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let direction = 1;

    const ctx = gsap.context(() => {
      const marqueeTween = gsap.to(track, {
        xPercent: -50,
        repeat: -1,
        duration: 28,
        ease: "none",
      });

      ScrollTrigger.create({
        onUpdate: (self) => {
          if (self.direction !== direction) {
            direction = self.direction;
            gsap.to(marqueeTween, {
              timeScale: direction,
              duration: 0.8,
              overwrite: true,
            });
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-[#171614] border-t border-b border-[#2A2928] overflow-hidden py-4 select-none">
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

      <div
        ref={trackRef}
        aria-hidden="true"
        className="flex items-center whitespace-nowrap w-max"
        style={{ willChange: "transform" }}
      >
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
function ProjectCollage({ images }: { images: string[] }) {
  if (images.length === 3) {
    // 3 Images: 1 large on left, 2 smaller on right
    return (
      <div className="w-full aspect-[4/5] sm:aspect-square md:aspect-[4/5] lg:aspect-square grid grid-cols-2 grid-rows-2 gap-3 md:gap-5 p-2">
        {/* Large left image spanning 2 rows */}
        <div className="relative w-full h-full overflow-hidden row-span-2 rounded-xl" style={{ borderTopRightRadius: '80px', borderBottomRightRadius: '80px' }}>
          <Image src={images[0]} fill className="object-cover" alt="Project image" unoptimized />
        </div>
        
        {/* Top Right */}
        <div className="relative w-full h-full overflow-hidden rounded-xl" style={{ borderBottomLeftRadius: '60px' }}>
          <Image src={images[1]} fill className="object-cover" alt="Project image" unoptimized />
        </div>
        
        {/* Bottom Right */}
        <div className="relative w-full h-full overflow-hidden rounded-xl" style={{ borderTopLeftRadius: '60px' }}>
          <Image src={images[2]} fill className="object-cover" alt="Project image" unoptimized />
        </div>
      </div>
    );
  }

  // 4+ Images: 2x2 Grid (Cutout Star shape in middle)
  return (
    <div className="w-full aspect-[4/5] sm:aspect-square md:aspect-[4/5] lg:aspect-square grid grid-cols-2 grid-rows-2 gap-3 md:gap-5 p-2">
      <div className="relative w-full h-full overflow-hidden rounded-xl" style={{ borderBottomRightRadius: '60px' }}>
        <Image src={images[0]} fill className="object-cover" alt="Project image" unoptimized />
      </div>
      <div className="relative w-full h-full overflow-hidden rounded-xl" style={{ borderBottomLeftRadius: '60px' }}>
        <Image src={images[1]} fill className="object-cover" alt="Project image" unoptimized />
      </div>
      <div className="relative w-full h-full overflow-hidden rounded-xl" style={{ borderTopRightRadius: '60px' }}>
        <Image src={images[2]} fill className="object-cover" alt="Project image" unoptimized />
      </div>
      <div className="relative w-full h-full overflow-hidden rounded-xl" style={{ borderTopLeftRadius: '60px' }}>
        <Image src={images[3]} fill className="object-cover" alt="Project image" unoptimized />
      </div>
    </div>
  );
}

/* ─── Main Page Component ───────────────────────────────────────────────── */
export default function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lookbookProjects = projects.slice(0, 3); // Display top 3 projects

  /* ── GSAP Scroll Sequence ── */
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      // Intro animations
      gsap.fromTo(
        ".intro-elem",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }
      );

      const mm = gsap.matchMedia();
      
      // Desktop Showcase Standard Scroll Reveal
      mm.add("(min-width: 768px)", () => {
        gsap.utils.toArray<HTMLElement>(".showcase-panel").forEach((panel) => {
          gsap.fromTo(
            panel,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: panel,
                start: "top 80%",
              },
            }
          );
        });
      });

      // Mobile Reveal
      mm.add("(max-width: 767px)", () => {
        gsap.utils.toArray<HTMLElement>(".mobile-panel").forEach((el) => {
          gsap.fromTo(el, 
            { opacity: 0, y: 30 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.8, 
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%"
              }
            }
          );
        });
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-[#F7F3ED]">
      {/* ══════════════════════════════════════════════════════
          1. COMPACT EDITORIAL HERO (100vh)
      ══════════════════════════════════════════════════════ */}
      <div className="min-h-screen flex flex-col pt-24 md:pt-32">
        <section className="flex-grow flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto w-full pb-12">
          <p className="intro-elem font-sans text-[11px] tracking-[0.28em] uppercase font-semibold text-[#B08A52] mb-4 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-[#B08A52]" aria-hidden="true" />
            Selected Work
          </p>
          <h1
            className="intro-elem text-[#171614] leading-[1.05] tracking-[-0.02em] mb-5"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Our Projects.
          </h1>
          <p className="intro-elem font-sans text-[16px] md:text-[18px] leading-[1.7] text-[#171614] max-w-xl">
            A collection of spaces shaped through thoughtful design, careful execution and attention to detail.
          </p>
        </section>

        {/* ══════════════════════════════════════════════════════
            2. INFINITE MARQUEE TICKER
        ══════════════════════════════════════════════════════ */}
        <div className="mt-auto">
          <InfiniteMarquee />
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          3. EDITORIAL PROJECT SHOWCASE (DESKTOP)
      ══════════════════════════════════════════════════════ */}
      <section className="hidden md:block w-full bg-[#F7F3ED]">
        <div className="max-w-[1440px] mx-auto px-12 lg:px-20 flex flex-col">
          
          {lookbookProjects.map((project, i) => {
            const isEven = i % 2 === 0;
            return (
              <div 
                key={project.slug} 
                className={`showcase-panel min-h-[100dvh] flex justify-between gap-12 lg:gap-20 items-center py-20 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* TEXT (45%) */}
                <div className="w-[45%] flex flex-col justify-center">
                  <div className="font-sans text-[11px] tracking-[0.2em] font-semibold text-[#77736C] mb-8">
                    {pad((i + 1).toString())} / {pad(lookbookProjects.length.toString())}
                  </div>
                  
                  <Link href={`/projects/${project.slug}`} className="group block focus-visible:outline-[#B08A52] rounded-md">
                    <h2 className="font-serif font-bold text-[#171614] text-[36px] lg:text-[44px] leading-[1.1] uppercase mb-4 transition-colors duration-300 group-hover:text-[#B08A52]">
                      {project.title.split(' ').map((word, j) => (
                        <span key={j} className="block">{word}</span>
                      ))}
                    </h2>
                  </Link>

                  <div className="font-sans text-[12px] tracking-[0.15em] text-[#B08A52] uppercase font-semibold mb-2">
                    {project.category}
                  </div>
                  <div className="font-sans text-[13px] text-[#77736C] mb-8">
                    {project.location}
                  </div>
                  <p className="font-sans text-[15px] leading-[1.7] text-[#171614] max-w-sm mb-12">
                    {project.description}
                  </p>
                  
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.2em] uppercase font-semibold text-[#171614] hover:text-[#B08A52] transition-colors relative self-start"
                  >
                    VIEW PROJECT
                    <span className="text-[#B08A52] transition-transform duration-300 group-hover:translate-x-1">→</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#B08A52] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </div>

                {/* IMAGE COLLAGE (55%) */}
                <div className="w-[55%] flex justify-center items-center">
                  <Link 
                    href={`/projects/${project.slug}`} 
                    className="group block w-full max-w-[min(650px,75dvh)] collage-container overflow-hidden rounded-xl transition-transform duration-500 hover:scale-[1.02]"
                  >
                    <ProjectCollage images={project.gallery.completed.slice(0, 4)} />
                    
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
      <section className="md:hidden bg-[#F7F3ED] px-6 py-12 flex flex-col gap-24">
        {lookbookProjects.map((project, i) => (
          <article key={project.slug} className="mobile-panel flex flex-col relative">
            <div className="font-sans text-[11px] tracking-[0.2em] font-semibold text-[#77736C] mb-4">
              {pad((i + 1).toString())} / {pad(lookbookProjects.length.toString())}
            </div>
            <h2 className="font-serif font-bold text-[#171614] text-[32px] leading-[1.1] mb-2 uppercase">
              {project.title}
            </h2>
            <div className="font-sans text-[12px] tracking-[0.1em] uppercase font-semibold text-[#B08A52] mb-1">
              {project.category}
            </div>
            <div className="font-sans text-[13px] text-[#77736C] mb-8">
              {project.location}
            </div>
            
            <Link href={`/projects/${project.slug}`} className="block relative w-full mb-8 rounded-lg overflow-hidden">
              <ProjectCollage images={project.gallery.completed.slice(0, 4)} />
            </Link>
            
            <p className="font-sans text-[15px] leading-[1.6] text-[#171614] mb-8">
              {project.description}
            </p>
            <Link 
              href={`/projects/${project.slug}`} 
              className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.2em] uppercase font-semibold text-[#171614]"
            >
              VIEW PROJECT <span className="text-[#B08A52]">→</span>
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
              className="font-serif font-bold text-[#171614] leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              OUR PROJECTS
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-sans text-[16px] md:text-[18px] leading-[1.7] text-[#171614]">
              Explore completed residential construction, bespoke interior design, turnkey spaces, and renovations by SMS Construction.
            </p>
            <p className="font-sans text-[15px] md:text-[16px] leading-[1.7] text-[#77736C]">
              Based in Nagercoil, our portfolio extends across the Kanyakumari district. From structural groundwork to meticulous material finishes, we maintain rigorous standards of excellence on every site we operate on.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          6. FINAL CTA
      ══════════════════════════════════════════════════════ */}
      <section
        className="bg-[#171614] text-white px-6 md:px-12 lg:px-20 py-24 md:py-32"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <p className="font-sans text-[11px] tracking-[0.25em] uppercase font-semibold text-[#B08A52] mb-4">
              Have a project in mind?
            </p>
            <h2
              id="cta-heading"
              className="font-serif font-bold text-white leading-[1.05] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Let&apos;s talk about
              <br />
              your next space.
            </h2>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 self-start md:self-auto font-sans text-[12px] tracking-[0.15em] uppercase font-semibold text-[#171614] bg-[#B08A52] px-8 py-4 rounded-full hover:bg-white transition-all duration-300"
          >
            Start a conversation
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
