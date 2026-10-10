"use client";

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Handshake, Map, DraftingCompass, HardHat, ClipboardCheck, Key, Plus, Play, ArrowRight, ArrowUpRight, Wrench } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ─── Hero ────────────────────────────────────────────────── */
function Hero() {
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.fromTo(
        ".gsap-heading",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          ".gsap-subtitle",
          { opacity: 0 },
          { opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(
          ".gsap-desc",
          { opacity: 0 },
          { opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.6"
        )
        .fromTo(
          ".gsap-button",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.4"
        );

      gsap.fromTo(
        ".gsap-hero-bg",
        { scale: 1.05 },
        {
          scale: 1,
          duration: 2.5,
          ease: "power2.out",
        }
      );
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <header ref={container} className="relative w-full min-h-[100dvh] flex items-center pt-24 pb-32 md:pt-40 md:pb-40">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/hero.webp"
          alt="Luxury Construction & Interior Design Background"
          fill
          priority
          className="object-cover object-center gsap-hero-bg"
          sizes="100vw"
        />

        {/* Overlay - Restored to the elegant soft style */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#171714]/80 via-[#171714]/40 to-[#171714]/10" />

        {/* Lively Animated Waves Effect */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
          <svg className="block w-full h-[40px] md:h-[60px] lg:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <style>{`
              .wave-anim { animation: wave 10s linear infinite; }
              .wave-anim-fast { animation: wave 7s linear infinite; }
              .wave-anim-slow { animation: wave 13s linear infinite; }
              @keyframes wave {
                0% { transform: translateX(0); }
                100% { transform: translateX(-600px); }
              }
            `}</style>
            <path className="wave-anim-slow fill-[#FAF8F3]" opacity="0.4" d="M 0 60 Q 150 120 300 60 T 600 60 Q 750 120 900 60 T 1200 60 Q 1350 120 1500 60 T 1800 60 L 1800 120 L 0 120 Z" />
            <path className="wave-anim-fast fill-[#FAF8F3]" opacity="0.7" d="M 0 60 Q 150 0 300 60 T 600 60 Q 750 0 900 60 T 1200 60 Q 1350 0 1500 60 T 1800 60 L 1800 120 L 0 120 Z" />
            <path className="wave-anim fill-[#FAF8F3]" d="M 0 80 Q 150 140 300 80 T 600 80 Q 750 140 900 80 T 1200 80 Q 1350 140 1500 80 T 1800 80 L 1800 120 L 0 120 Z" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] items-center px-6 sm:px-10 lg:px-16">
        <div className="w-full lg:w-7/12 text-left -mt-8 md:-mt-12 ml-0 sm:ml-6 md:ml-10 lg:ml-16">

          <div>
            <p className="gsap-subtitle opacity-0 mb-3 md:mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#e3c381] sm:text-[12px]">
              Nagercoil&apos;s Design &amp; Build Studio
            </p>

            <h1 className="gsap-heading opacity-0 mb-5 md:mb-8 font-serif text-[42px] sm:text-[clamp(3.5rem,6vw,5.5rem)] font-bold uppercase leading-[0.95] md:leading-[0.9] tracking-[-0.03em] text-white">
              DESIGN.<br />
              BUILD.<br />
              <span className="text-[#C89A47]">COMPLETE.</span>
            </h1>
          </div>

          <div className="gsap-desc opacity-0 mb-8 space-y-3 border-l-[2px] border-[#e3c381] pl-5 sm:mb-10 sm:space-y-4 sm:pl-6">
            <p className="font-sans text-[15px] sm:text-[17px] font-medium leading-tight text-white/95">
              Bespoke Interior Design &amp; Construction
            </p>
            <p className="font-sans text-[15px] sm:text-[17px] font-medium leading-tight text-white/95">
              Architecturally Refined Living Spaces
            </p>
            <p className="font-sans text-[15px] sm:text-[17px] font-medium leading-tight text-white/95">
              End-to-End Modern Solutions
            </p>
          </div>

          <div className="gsap-button opacity-0 flex flex-col sm:flex-row gap-4 sm:gap-5 w-[210px] sm:w-auto">

            {/* Explore Projects Button - Expanding Icon Animation */}
            <button
              className="
                group relative overflow-hidden
                flex items-center p-1.5
                w-[210px] h-[56px]
                rounded-full bg-[#171714] border border-[#C89A47]/40
                shadow-[0_8px_20px_rgba(0,0,0,0.3)]
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(200,154,71,0.25)] hover:border-[#C89A47]
                active:scale-95
              "
            >
              <div className="
                flex items-center justify-center
                w-[44px] h-[44px]
                rounded-full bg-gradient-to-b from-[#e3c381] to-[#C89A47]
                z-10 transition-all duration-300 ease-out
                group-hover:w-[198px]
              ">
                <span className="material-symbols-outlined text-[20px] text-white">
                  arrow_forward
                </span>
              </div>
              <span className="
                flex items-center justify-center
                h-full w-[140px]
                text-white text-[15px] font-semibold tracking-wide whitespace-nowrap
                z-0 transition-all duration-300 ease-out
                group-hover:translate-x-4 group-hover:w-0 group-hover:text-[0px] group-hover:opacity-0
              ">
                Explore Projects
              </span>
            </button>

            {/* Book Consultation Button */}
            <button
              className="
                group relative overflow-hidden
                flex items-center justify-center gap-2
                rounded-full border border-white/30 bg-white/10 backdrop-blur-md
                w-[210px] h-[56px]
                text-[15px] font-semibold text-white tracking-wide
                transition-all duration-500 ease-out
                hover:-translate-y-1 hover:bg-white/20 hover:border-white/50 hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)]
                active:scale-95
              "
            >
              <div className="absolute inset-0 z-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
              <span className="relative z-10">Book Consultation</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ─── Statistics Section ──────────────────────────────────── */
function TrustStats() {
  const container = useRef<HTMLElement>(null);
  const stats = [
    { icon: "star", num: 150, suffix: "+", label: "Projects Completed", desc: "Successfully delivered luxury residential and turnkey commercial spaces" },
    { icon: "history", num: 15, suffix: "+", label: "Years Experience", desc: "Crafting architectural landmarks with premium workmanship" },
    { icon: "sentiment_very_satisfied", num: 100, suffix: "%", label: "Happy Clients", desc: "Exceptional ratings from homeowners and studio partners" },
    { icon: "verified_user", text: "Premium", label: "Quality Commitment", desc: "Uncompromised materials and rigorous inspection checks" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Scroll Entrance Animation
      gsap.fromTo(
        ".gsap-stat-card",
        { y: 70, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
          },
        }
      );

      // 2. Number Counter Animation
      const numberElements = gsap.utils.toArray<HTMLElement>(".gsap-stat-num-val");
      numberElements.forEach((el) => {
        const target = parseInt(el.getAttribute("data-target") || "0", 10);
        if (target > 0) {
          const counter = { val: 0 };
          gsap.to(counter, {
            val: target,
            duration: 2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: container.current,
              start: "top 80%",
            },
            onUpdate: () => {
              el.innerText = Math.round(counter.val).toString();
            }
          });
        }
      });

      // 3. Interactive Hover Animations
      const cards = gsap.utils.toArray<HTMLElement>(".gsap-stat-card");
      cards.forEach((card) => {
        const icon = card.querySelector(".gsap-stat-icon");
        const number = card.querySelector(".gsap-stat-num");

        card.addEventListener("mouseenter", () => {
          gsap.to(card, { y: -8, scale: 1.02, duration: 0.4, ease: "power2.out", overwrite: "auto" });
          gsap.to(icon, { scale: 1.12, rotation: 6, duration: 0.4, ease: "power2.out", overwrite: "auto" });
          gsap.to(number, { x: 4, duration: 0.4, ease: "power2.out", overwrite: "auto" });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, { y: 0, scale: 1, duration: 0.4, ease: "power2.out", overwrite: "auto" });
          gsap.to(icon, { scale: 1, rotation: 0, duration: 0.4, ease: "power2.out", overwrite: "auto" });
          gsap.to(number, { x: 0, duration: 0.4, ease: "power2.out", overwrite: "auto" });
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative z-30 mx-auto -mt-4 md:-mt-6 max-w-[1280px] px-6 pb-12 md:px-10 md:pb-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="gsap-stat-card opacity-0 rounded-[20px] border border-[#E7E0D4] bg-white p-5 md:p-7 shadow-[0_12px_35px_rgba(23,23,20,0.045)] flex flex-col items-start hover:shadow-[0_20px_45px_rgba(23,23,20,0.08)] transition-shadow duration-300"
          >
            {/* Gold Outline Icon */}
            <div className="gsap-stat-icon w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#C89A47]/40 flex items-center justify-center text-[#C89A47] mb-4 md:mb-6 shrink-0">
              <span className="material-symbols-outlined text-[20px] md:text-[24px] font-light">{stat.icon}</span>
            </div>
            {/* Dark Numbers */}
            <div className="gsap-stat-num font-serif text-[32px] md:text-[42px] font-bold text-[#1F1F1F] leading-none mb-2 flex items-baseline">
              {stat.num !== undefined ? (
                <>
                  <span className="gsap-stat-num-val" data-target={stat.num}>0</span>
                  <span>{stat.suffix}</span>
                </>
              ) : (
                <span>{stat.text}</span>
              )}
            </div>
            {/* Title */}
            <div className="font-sans font-semibold text-[13px] md:text-[16px] text-[#1F1F1F] mb-1 md:mb-2">
              {stat.label}
            </div>
            {/* Gray Description */}
            <div className="text-[11px] md:text-[14px] text-[#8A8A8A] leading-relaxed line-clamp-3 md:line-clamp-none">
              {stat.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Services ────────────────────────────────────────────── */
const servicesData = [
  {
    title: "Interior design",
    href: "/interior-design",
    img: "/images/services/services-interior-design-portrait.webp",
    alt: "Bespoke luxury interior design and spaces by SMS Construction in Nagercoil",
  },
  {
    title: "Civil construction",
    href: "/construction",
    img: "/images/services/services-civil-construction-portrait.webp",
    alt: "Civil and residential construction projects by SMS Construction in Nagercoil",
  },

  {
    title: "Design & planning",
    href: "/design-planning",
    img: "/images/services/services-design-planning-portrait.webp",
    alt: "Architectural blueprints, 3D elevation, and spatial planning",
  },
  {
    title: "Survey & approvals",
    href: "/survey-approvals",
    img: "/images/services/services-survey-approvals-portrait.webp",
    alt: "Land survey, digital mapping, and government building approvals",
  },
  {
    title: "Fabrication works",
    href: "/fabrication-works",
    img: "/images/services/services-fabrication-works-portrait.webp",
    alt: "Architectural metalwork, aluminum joinery, and structural steel fabrication",
  },
];

function Services() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (!reducedMotion) {
        gsap.fromTo(
          ".services-card",
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 78%",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative z-20 bg-[#FAF8F3] pt-8 sm:pt-12 lg:pt-14 pb-12 sm:pb-20 lg:pb-28 overflow-hidden border-t border-[#E7E0D4]/70"
    >
      {/* Soft Architectural Sunlight / Leaf Shadow Ambient Effect */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40 mix-blend-multiply overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 65% 50% at 15% 20%, rgba(200, 185, 165, 0.28), transparent 70%), radial-gradient(ellipse 55% 45% at 85% 75%, rgba(176, 138, 82, 0.12), transparent 75%)",
        }}
      />

      <div className="relative max-w-[1520px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-8 sm:mb-14">
          {/* Left: Badge & Heading */}
          <div className="max-w-xl">
            <h3 className="font-sans text-[12px] sm:text-[13px] md:text-[15px] font-semibold tracking-widest uppercase text-[#B08A52] mb-2 sm:mb-3">
              Our Solutions
            </h3>

            <h2 className="font-semibold text-[clamp(2.4rem,5.5vw,4.8rem)] leading-[0.98] tracking-[-0.03em] text-[#171614] mb-3">
              What we can do for you<span className="text-[#B08A52]">.</span>
            </h2>
          </div>

          {/* Right: Description & CTA Button */}
          <div className="lg:max-w-[420px] flex flex-col items-start">
            <p className="font-sans text-[14px] sm:text-[16px] text-[#68645D] leading-relaxed mb-4 sm:mb-6 lg:mb-7">
              From architectural planning to turnkey execution, we provide quality construction and interior solutions tailored to your needs.
            </p>

            <Link
              href="/services"
              className="group inline-flex items-center gap-3 pl-5 sm:pl-6 pr-2 py-2 rounded-full bg-[#D6C5B0] hover:bg-[#C9B6A0] text-[#171614] font-sans font-medium text-[13.5px] sm:text-[15px] transition-all shadow-2xs active:scale-[0.98]"
            >
              <span>See our services</span>
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#171614] text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0">
                <ArrowUpRight size={15} />
              </span>
            </Link>
          </div>
        </div>

        {/* 5 Service Cards — Interior Design Featured Wide Card on Mobile, 5 Columns on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-4">
          {servicesData.map((svc, idx) => {
            const isFeatured = idx === 0; // Interior design is wide, matha ellam normal size
            return (
              <Link
                key={svc.title}
                href={svc.href}
                className={`services-card ${
                  isFeatured
                    ? "col-span-2 lg:col-span-1 aspect-[16/8] sm:aspect-[2.2/1] lg:aspect-[3/4.4]"
                    : "col-span-1 aspect-[3/4] sm:aspect-[3/4.2] lg:aspect-[3/4.4]"
                } rounded-[18px] sm:rounded-[22px] overflow-hidden relative group block bg-[#171614] shadow-xs hover:shadow-xl transition-all duration-500`}
              >
                {/* Image */}
                <Image
                  src={svc.img}
                  alt={svc.alt}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />

                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                {/* Arrow */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#171614] group-hover:scale-110">
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                {/* Title */}
                <div className="absolute left-3.5 right-10 bottom-3.5 sm:left-5 sm:right-12 sm:bottom-5 z-10 pointer-events-none">
                  <span className="block font-sans font-semibold text-[14px] sm:text-[16px] lg:text-[17px] tracking-tight text-white drop-shadow-md leading-snug">
                    {svc.title}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}


/* ─── Why SMS ─────────────────────────────────────────────── */
const whyItems = [
  { icon: "groups", title: "One Team", desc: "A single dedicated team handles design through construction — no miscommunication, no handoffs." },
  { icon: "workspace_premium", title: "Luxury Quality", desc: "Premium materials, craftsmanship, and finishes at every step of the project lifecycle." },
  { icon: "analytics", title: "Professional Planning", desc: "Every project begins with meticulous planning, budgeting, and timeline mapping." },
  { icon: "visibility", title: "Transparent Process", desc: "Full visibility into every milestone with regular updates and open communication." },
  { icon: "schedule", title: "On-Time Delivery", desc: "We respect your time. Projects are delivered on schedule without compromising quality." },
  { icon: "task_alt", title: "Complete Execution", desc: "From concept to handover, we manage every detail so you don't have to." },
];

function WhySMS() {
  return (
    <section className="pt-12 pb-10 sm:pb-14 md:pt-16 md:pb-32 px-6 md:px-16 max-w-[1440px] mx-auto bg-[#F8F4EE]">
      <div className="mb-12 md:mb-16 flex flex-col items-center text-center">
        <h2 className="font-semibold text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.03em] text-[#171614] mb-3">
          Why Choose Us<span className="text-[#B08A52]">.</span>
        </h2>
        <h3 className="font-sans text-[13px] md:text-[15px] font-semibold tracking-widest uppercase text-[#B08A52] max-w-3xl mb-3">
          Built on Trust, Delivered with Excellence
        </h3>
        <p className="font-sans text-[12px] md:text-[14px] text-[#8A8A8A] max-w-lg leading-relaxed">
          Six pillars that define our promise to every client who chooses SMS Construction.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 md:gap-8 auto-rows-fr">
        {whyItems.map((item) => (
          <div
            key={item.title}
            className="h-full relative overflow-hidden bg-white rounded-[22px] p-4 sm:p-6 md:p-8 border border-[#E7E0D4] hover:border-[#B08A52]/60 hover:shadow-[0_24px_48px_rgba(176,138,82,0.22)] hover:-translate-y-2 transition-all duration-500 group flex flex-col items-start text-left z-0"
          >
            {/* Expanding Background Circle */}
            <div
              className="pointer-events-none absolute -top-8 -right-8 w-20 h-20 rounded-full bg-gradient-to-br from-[#D4A853] via-[#B08A52] to-[#8C652D] opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-[18] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] -z-10"
              aria-hidden="true"
            />

            <div className="relative z-10 flex items-center gap-2 sm:gap-4 mb-3 sm:mb-4 pr-4">
              <div className="shrink-0 w-9 h-9 sm:w-12 sm:h-12 rounded-2xl bg-[#F8F4EE] flex items-center justify-center group-hover:bg-white/20 group-hover:shadow-xs transition-all duration-500">
                <span className="material-symbols-outlined text-[#B08A52] group-hover:text-white group-hover:scale-110 transition-all duration-500 text-[18px] sm:text-[24px]">
                  {item.icon}
                </span>
              </div>
              <h3 className="font-sans font-semibold text-[14px] sm:text-[18px] md:text-[20px] text-[#171614] group-hover:text-white transition-colors duration-300 leading-tight">
                {item.title}
              </h3>
            </div>
            <p className="relative z-10 font-sans text-[11px] sm:text-[14px] text-[#77736C] leading-relaxed group-hover:text-white/95 transition-colors duration-300">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Featured Projects ───────────────────────────────────── */

function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      number: "01",
      title: "Nagarajan Residence",
      location: "Nagercoil (Theroor)",
      scope: "3,500 Sq. Ft. • Bespoke Teak & Modern Interiors",
      img: "/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-living-room.webp",
      href: "/projects/nagarajan-residence-nagercoil-theroor",
    },
    {
      number: "02",
      title: "Zahir Hussain Residence",
      location: "Nagercoil",
      scope: "3,200 Sq. Ft. • Turnkey Luxe & Marble Paneling",
      img: "/images/projects/zahir-hussain-residence-nagercoil/zahir-hussain-residence-living-room.webp",
      href: "/projects/zahir-hussain-residence-nagercoil",
    },
    {
      number: "03",
      title: "Selvaprasad Residence",
      location: "Paruthivilai, Nagercoil",
      scope: "3,400 Sq. Ft. • Double-Height Chandelier Foyer",
      img: "/images/projects/selvaprasad-residence-paruthivilai/living-room-tv-unit-hero.webp",
      href: "/projects/selvaprasad-residence-paruthivilai",
    },
    {
      number: "04",
      title: "Dr. Arun Kumar Residence",
      location: "Nagercoil",
      scope: "4,200 Sq. Ft. • Triple-Height Atrium Courtyard Villa",
      img: "/images/projects/dr-arun-kumar-residence-nagercoil/central-atrium-courtyard-chandelier-hero.webp",
      href: "/projects/dr-arun-kumar-residence-nagercoil",
    },
    {
      number: "05",
      title: "Gold Finance Branch",
      location: "Parvathipuram, Nagercoil",
      scope: "1,800 Sq. Ft. • Commercial Banking Interior",
      img: "/images/projects/gold-finance-parvathipuram/gold-finance-banking-hall-hero.webp",
      href: "/projects/gold-finance-parvathipuram",
    },
    {
      number: "06",
      title: "Godwin Dhas Residence",
      location: "Chunkankadai, Nagercoil",
      scope: "3,600 Sq. Ft. • Presidential Suite & Floating Bed",
      img: "/images/projects/godwin-dhas-residence/master-suite-floating-bed-hero.webp",
      href: "/projects/godwin-dhas-residence",
    },
  ];

  /* ─────────────────────────────────────────────
     OPEN / CLOSE SCROLL ANIMATION
  ───────────────────────────────────────────── */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".project-card-anim");

      /* Initial closed state */
      gsap.set(cards, {
        opacity: 0,
        y: 45,
        scale: 0.97,
        clipPath: "inset(8% 5% 8% 5% round 24px)",
      });

      /* Opening animation */
      const openAnimation = gsap.timeline({
        paused: true,
      });

      openAnimation.to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        clipPath: "inset(0% 0% 0% 0% round 24px)",
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
      });

      /* Scroll trigger */
      ScrollTrigger.create({
        trigger: section,
        start: "top 78%",
        end: "bottom 22%",

        onEnter: () => {
          openAnimation.play();
        },

        onEnterBack: () => {
          openAnimation.play();
        },

        onLeaveBack: () => {
          openAnimation.reverse();
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  /* ─────────────────────────────────────────────
     HOVER OPEN
  ───────────────────────────────────────────── */

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = e.currentTarget;

    const image = card.querySelector(".project-image");
    const overlay = card.querySelector(".project-hover-overlay");
    const content = card.querySelector(".project-content");
    gsap.killTweensOf([
      card,
      image,
      overlay,
      content
    ]);

    gsap.to(card, {
      y: -5,
      duration: 0.4,
      ease: "power3.out",
    });

    gsap.to(image, {
      scale: 1.06,
      duration: 0.9,
      ease: "power3.out",
    });

    gsap.to(overlay, {
      opacity: 1,
      duration: 0.35,
      ease: "power2.out",
    });

    gsap.to(content, {
      y: -7,
      duration: 0.45,
      ease: "power3.out",
    });

  };

  /* ─────────────────────────────────────────────
     HOVER CLOSE
  ───────────────────────────────────────────── */

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = e.currentTarget;

    const image = card.querySelector(".project-image");
    const overlay = card.querySelector(".project-hover-overlay");
    const content = card.querySelector(".project-content");
    gsap.killTweensOf([
      card,
      image,
      overlay,
      content
    ]);

    gsap.to(card, {
      y: 0,
      duration: 0.45,
      ease: "power3.out",
    });

    gsap.to(image, {
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.to(overlay, {
      opacity: 0,
      duration: 0.35,
      ease: "power2.out",
    });

    gsap.to(content, {
      y: 0,
      duration: 0.45,
      ease: "power3.out",
    });

  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-white md:min-h-screen overflow-hidden md:flex md:items-center"
    >
      <div className="w-full max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-12 pt-6 pb-6 sm:pt-8 sm:pb-10 md:py-14">

        {/* ═══════════════════════════════════════
            HEADER
        ═══════════════════════════════════════ */}

        <div className="flex items-end justify-between gap-6 mb-5 md:mb-8">
          <div>

            <h2 className="font-semibold
              text-[#171614]
              text-[clamp(2.8rem,5vw,5.2rem)]
              leading-[0.88]
              tracking-[-0.05em]
            ">
              Our Projects<span className="text-[#B08A52]">.</span>
            </h2>
          </div>

           <Link
              href="/projects"
              className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#D6C5B0] hover:bg-[#C9B6A0] text-[#171614] font-sans font-medium text-[14px] sm:text-[15px] transition-all shadow-2xs active:scale-[0.98]"
            >
              <span>View All Projects</span>
              <span className="w-8 h-8 rounded-full bg-[#171614] text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0">
                <ArrowUpRight size={16} />
              </span>
            </Link>
        </div>

        {/* ═══════════════════════════════════════
            DESKTOP / TABLET MASONRY
        ═══════════════════════════════════════ */}

        <div
          className="
            hidden
            md:grid
            grid-cols-12
            grid-rows-2
            gap-3
            lg:gap-4
            h-[calc(100vh-100px)]
            min-h-[650px]
            max-h-[900px]
          "
        >
          {projects.map((project, index) => {
            const isWide = index === 0 || index === 5;
            return (
              <Link
                key={project.number}
                href={project.href}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`
                  project-card-anim
                  group
                  relative
                  ${isWide ? "col-span-6" : "col-span-3"}
                  row-span-1
                  overflow-hidden
                  rounded-[22px]
                  bg-[#EDE7DE]
                  will-change-transform
                `}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="
                    project-image
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    will-change-transform
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

                <div
                  className="
                    project-hover-overlay
                    absolute
                    inset-0
                    bg-black/25
                    opacity-0
                  "
                />

                {/* Content */}
                <div
                  className={`
                    project-content
                    absolute
                    ${isWide ? "left-5 right-5 bottom-5 lg:left-6 lg:right-6 lg:bottom-6" : "left-4 right-4 bottom-4"}
                  `}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] tracking-[0.18em] uppercase font-semibold text-[#E6C687]">
                      {project.location}
                    </span>
                  </div>

                  <h3 className="text-white text-[22px] sm:text-[24px] lg:text-[26px] leading-[1.05] tracking-[-0.025em] mb-1.5">
                    {project.title}
                  </h3>

                  <p className="font-sans text-[12.5px] sm:text-[13px] text-white/80 line-clamp-1">
                    {project.scope}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* ═══════════════════════════════════════
            MOBILE
        ═══════════════════════════════════════ */}

        <div className="md:hidden grid grid-cols-2 gap-3">
          {projects.map((project, index) => {
            const isFullWidth = index === 0 || index === 5;
            return (
              <Link
                key={project.number}
                href={project.href}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`
                  project-card-anim
                  group
                  relative
                  block
                  overflow-hidden
                  rounded-[18px]
                  bg-[#EDE7DE]
                  ${isFullWidth ? "col-span-2 min-h-[420px]" : "col-span-1 min-h-[300px]"}
                `}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="
                    project-image
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <div className="project-hover-overlay absolute inset-0 bg-black/20 opacity-0" />

                <div className="project-content absolute left-4 right-4 bottom-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9.5px] uppercase tracking-[0.16em] font-semibold text-[#E6C687]">
                      {project.location}
                    </span>
                  </div>

                  <h3 className="font-serif text-white text-[19px] leading-[1.05] tracking-[-0.025em] mb-1">
                    {project.title}
                  </h3>

                  <p className="font-sans text-[11.5px] text-white/80 line-clamp-1">
                    {project.scope}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}

/* ─── Gallery Strip ───────────────────────────────────────── */
function GalleryStrip() {
  const videos = [
    {
      id: 1,
      poster: "/images/screen1_office.webp",
      title: "Design Process",
      views: "12.4K",
      src: ""
    },
    {
      id: 2,
      poster: "/images/screen2_exterior.webp",
      title: "Luxury Exterior",
      views: "18.2K",
      src: ""
    },
    {
      id: 3,
      poster: "/images/screen3_interior.webp",
      title: "Living Spaces",
      views: "24.1K",
      src: ""
    },
    {
      id: 4,
      poster: "/images/screen5_detail.webp",
      title: "Minimal Details",
      views: "9.8K",
      src: ""
    },
  ];

  return (
    <section className="pt-8 pb-16 md:py-16 px-6 md:px-16 max-w-[1440px] mx-auto bg-[#F8F4EE]">
      <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
        <h2 className="font-semibold text-[clamp(2.5rem,8vw,5.5rem)] md:text-[clamp(3rem,5vw,5.5rem)] leading-[0.9] tracking-[-0.04em] text-[#171614] mb-4">
          Our Studio<span className="text-[#B08A52]">.</span>
        </h2>
        <span className="text-lg md:text-xl font-serif text-[#C89A47] block">
          Spaces We&apos;ve Crafted
        </span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {videos.map((vid) => (
          <div
            key={vid.id}
            className="group relative rounded-[24px] overflow-hidden aspect-[9/16] bg-[#E7E0D4] cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500 will-change-transform"
          >
            {/* The Video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              poster={vid.poster}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            >
              {vid.src && <source src={vid.src} type="video/mp4" />}
            </video>

            {/* Gradient Overlay for IG look */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

            {/* Instagram Style UI */}
            <div className="absolute inset-0 p-4 md:p-5 flex flex-col justify-between text-white z-10 pointer-events-none">

              {/* Top View Count */}
              <div className="self-end bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 text-[11px] font-medium border border-white/10 shadow-sm">
                <Play size={12} className="fill-white" />
                {vid.views}
              </div>

              {/* Bottom Info */}
              <div>
                <h3 className="font-semibold text-[15px] md:text-[17px] leading-tight mb-2 text-white">
                  {vid.title}
                </h3>
                <div className="flex items-center gap-2 text-white/90 text-[12px] md:text-[13px] font-medium">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#C89A47] flex items-center justify-center text-[9px] md:text-[10px] font-bold text-white shadow-sm border border-white/20">
                    S
                  </div>
                  sms_construction
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Process Timeline ────────────────────────────────────── */
const steps = [
  { num: "01", title: "Consultation", icon: Handshake, desc: "We begin with a deep conversation about your vision, requirements, and budget." },
  { num: "02", title: "Planning", icon: Map, desc: "Detailed scope of work, timeline, and budget planning with complete transparency." },
  { num: "03", title: "Design", icon: DraftingCompass, desc: "Our designers craft bespoke concepts — moodboards, floor plans, 3D renders." },
  { num: "04", title: "Execution", icon: HardHat, desc: "Expert craftspeople bring the design to life with premium materials and precision." },
  { num: "05", title: "Quality Check", icon: ClipboardCheck, desc: "Rigorous inspection at every stage to ensure flawless finishes and durability." },
  { num: "06", title: "Handover", icon: Key, desc: "A walk-through with you, final touches, and a complete handover of your dream space." },
];

function Process() {
  const containerRef = useRef<HTMLElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Progress bar growing as you scroll down the section
      if (progressBarRef.current) {
        gsap.to(progressBarRef.current, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          }
        });
      }

      // Stagger fade up and scroll-driven active state for each step
      const stepsArray = gsap.utils.toArray<HTMLElement>(".process-step");
      stepsArray.forEach((step) => {
        gsap.fromTo(step,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
            }
          }
        );

        // Scroll active trigger
        ScrollTrigger.create({
          trigger: step,
          start: "top 65%",
          end: "bottom 35%",
          onEnter: () => {
            step.classList.add("is-active", "is-passed");
          },
          onLeave: () => {
            step.classList.remove("is-active");
          },
          onEnterBack: () => {
            step.classList.add("is-active");
          },
          onLeaveBack: () => {
            step.classList.remove("is-active", "is-passed");
          },
        });
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-40 bg-[#FAFAFA] relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col lg:flex-row gap-16 lg:gap-24">

        {/* Left: Sticky Header */}
        <div className="lg:w-[40%] lg:sticky lg:top-40 h-fit mb-10 lg:mb-0">
          <h2 className="font-semibold text-[clamp(2.5rem,8vw,5.5rem)] md:text-[clamp(3rem,5vw,5.5rem)] leading-[0.9] tracking-[-0.04em] text-[#171614] mb-4">
            How we build <br className="hidden lg:block" />
            your dream space<span className="text-[#B08A52]">.</span>
          </h2>
          <span className="text-lg md:text-xl text-[#C89A47] block">
            Our Process
          </span>
          <p className="mt-6 md:mt-8 text-[15px] md:text-[17px] text-[#77736C] leading-[1.7] max-w-md">
            A clear, collaborative journey that takes your project from the first conversation to the final handover, ensuring quality and transparency at every step.
          </p>
        </div>

        {/* Right: Scrolling Steps */}
        <div className="lg:w-[60%] relative">
          {/* Vertical Line track */}
          <div className="absolute left-[23px] md:left-[31px] top-4 bottom-4 w-[2px] bg-[#E7E0D4] rounded-full overflow-hidden">
            <div ref={progressBarRef} className="absolute top-0 left-0 w-full h-full bg-[#C89A47] origin-top scale-y-0" />
          </div>

          <div className="flex flex-col gap-8 md:gap-20">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative flex gap-6 md:gap-12 group process-step pt-2">
                  {/* Node on line */}
                  <div className="process-step-node w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-2 border-[#E7E0D4] shadow-sm flex items-center justify-center text-[#C89A47] relative z-10 shrink-0 transition-all duration-500">
                    <span className="text-[16px] md:text-[22px] font-semibold">{step.num}</span>
                  </div>

                  {/* Content */}
                  <div className="pt-1 md:pt-4 pb-10 md:pb-12 border-b border-[#E7E0D4]/50 last:border-0 last:pb-0 w-full">
                    <h3 className="process-step-title font-sans font-bold text-[20px] md:text-[28px] text-[#1F1F1F] mb-3 md:mb-4 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="font-sans text-[14px] md:text-[16px] text-[#77736C] leading-[1.7] md:leading-[1.8] max-w-lg mb-6 md:mb-8">
                      {step.desc}
                    </p>

                    {/* Enhanced Visual Box */}
                    <div className="process-step-box rounded-[20px] md:rounded-[24px] overflow-hidden bg-white shadow-[0_5px_20px_rgba(0,0,0,0.02)] border border-[#E7E0D4]/60 p-4 md:p-6 flex flex-col sm:flex-row sm:items-center gap-4 md:gap-5 transition-all duration-500">
                      <div className="process-step-icon w-12 h-12 rounded-full bg-[#F8F4EE] shadow-inner flex items-center justify-center text-[#C89A47] shrink-0 transition-all duration-500">
                        <Icon size={24} strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="text-[10px] md:text-[11px] uppercase tracking-widest text-[#77736C] font-semibold mb-1">
                          Phase {step.num} Overview
                        </div>
                        <div className="text-[#1F1F1F] text-[13px] md:text-[14px] font-medium leading-relaxed">
                          Learn more about our meticulous {step.title.toLowerCase()} process.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ────────────────────────────────────────── */
const testimonials = [
  {
    name: "Ramesh & Priya Kumar",
    date: "2 months ago",
    quote: "SMS Construction transformed our home beyond what we imagined. The attention to detail, quality of materials, and the team's professionalism were exceptional throughout.",
    initial: "R",
    color: "bg-[#EA4335]"
  },
  {
    name: "Dr. Anand Sivakumar",
    date: "4 months ago",
    quote: "Working with SMS was a completely different experience. They handled everything from design to handover — truly a one-stop luxury construction partner.",
    initial: "A",
    color: "bg-[#4285F4]"
  },
  {
    name: "Lakshmi Enterprises",
    date: "a month ago",
    quote: "The renovation work they did on our commercial space was outstanding. On time, on budget, and the quality speaks for itself. Highly recommend.",
    initial: "L",
    color: "bg-[#34A853]"
  },
  {
    name: "Vikram Rajendran",
    date: "3 weeks ago",
    quote: "Very professional team. They helped us build our dream villa in Nagercoil. The 3D designs provided before construction were 100% matched in reality.",
    initial: "V",
    color: "bg-[#FBBC05]"
  },
  {
    name: "Sneha Varghese",
    date: "5 months ago",
    quote: "We hired SMS for our office interior work. The finishing is top-notch and they handed over the site exactly on the promised date.",
    initial: "S",
    color: "bg-[#8E24AA]"
  },
  {
    name: "Karthik Menon",
    date: "a year ago",
    quote: "One of the best construction companies in Kanyakumari district. From structural planning to final painting, everything was handled seamlessly.",
    initial: "K",
    color: "bg-[#009688]"
  }
];

function Testimonials() {
  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden border-t border-[#E7E0D4]/50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 mb-8 md:mb-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-semibold text-[clamp(2.5rem,8vw,5.5rem)] md:text-[clamp(3rem,5vw,5.5rem)] leading-[0.9] tracking-[-0.04em] text-[#171614] mb-3">
            Client Reviews<span className="text-[#B08A52]">.</span>
          </h2>
          <span className="text-lg md:text-xl text-[#C89A47] block">
            What Our Clients Say
          </span>
        </div>
      </div>

      <div className="w-full relative overflow-hidden group">
        <div className="flex gap-4 md:gap-6 pb-6 md:pb-8 pt-2 animate-scroll w-max group-hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials, ...testimonials].map((t, idx) => (
            <div
              key={idx}
              className="w-[320px] md:w-[400px] shrink-0 bg-white p-6 md:p-8 rounded-[20px] border border-[#E7E0D4]/60 flex flex-col gap-5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-400 ease-out relative overflow-hidden group/card cursor-pointer"
            >
              {/* Decorative background quote icon */}
              <span className="material-symbols-outlined absolute top-4 right-4 text-[80px] text-[#C89A47] opacity-[0.03] group-hover/card:opacity-[0.06] group-hover/card:scale-110 transition-all duration-500 origin-top-right select-none pointer-events-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                format_quote
              </span>

              <div className="flex justify-between items-start relative z-10">
                <div className="flex gap-4 items-center">
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full text-white flex items-center justify-center font-medium text-[18px] md:text-[20px] shadow-sm shrink-0 ${t.color}`}>
                    {t.initial}
                  </div>
                  <div className="flex flex-col justify-center gap-1.5">
                    <div className="text-[15px] md:text-[16px] font-bold text-[#1F1F1F] leading-tight tracking-tight">{t.name}</div>
                    <div className="flex gap-0.5 relative z-10">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] text-[#FABB05]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-[14px] md:text-[15px] text-[#202124] leading-relaxed relative z-10 mt-1">
                {t.quote}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─────────────────────────────────────────────────── */
const faqs = [
  {
    q: "What services does SMS Construction provide?",
    a: "We specialize in Interior Design, Construction, Design & Planning, Survey & Approvals, and Fabrication Works.",
  },
  {
    q: "Do you provide complete interior design for homes?",
    a: "Yes, we provide end-to-end interior design services for homes — right from 3D design conceptualization through to material selection and complete execution.",
  },
  {
    q: "Do you undertake residential construction projects in Nagercoil?",
    a: "Absolutely. We undertake full-scale residential construction and turnkey building projects throughout Nagercoil.",
  },
  {
    q: "Which areas do you serve?",
    a: "We primarily serve Nagercoil, Kanyakumari, and the surrounding regions across Kanyakumari District.",
  },
  {
    q: "Can you design interiors for an existing home?",
    a: "Yes, we frequently handle home renovations and interior upgrades for existing residential spaces.",
  },
  {
    q: "What interior spaces do you design?",
    a: "We design and execute all major interior spaces including Bedrooms, Kitchens, False Ceilings, TV Units, Wall Decor, and Terrace Gardens.",
  },
  {
    q: "How does the project process work?",
    a: "Our structured approach ensures quality at every step: Consultation → Planning → Design → Execution → Quality Check → Handover.",
  },
  {
    q: "How can I get a quotation or discuss my project?",
    a: "You can easily reach out to us via our Contact page, WhatsApp, or give us a call directly to schedule a free initial consultation.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".faq-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 md:py-24 bg-[#FAFAFA] border-t border-[#E7E0D4]/50 relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

          {/* Left: Heading */}
          <div className="lg:w-[35%] shrink-0">
            <div className="sticky top-32 faq-heading">
              <h2 className="text-[clamp(2.5rem,8vw,5.5rem)] md:text-[clamp(3rem,5vw,5.5rem)] leading-[0.9] tracking-[-0.04em] text-[#171614] mb-4">
                Frequently Asked Questions<span className="text-[#B08A52]">.</span>
              </h2>
              <span className="text-lg md:text-xl text-[#C89A47] block">
                Everything you need to know
              </span>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="lg:w-[65%] flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="faq-item bg-white rounded-[20px] border border-[#E7E0D4] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <button
                  className="w-full text-left px-6 md:px-8 py-6 md:py-7 flex justify-between items-center bg-white group-hover:bg-[#FAF8F5] transition-colors duration-200"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className={`font-sans font-semibold text-[16px] md:text-[17px] pr-8 leading-snug transition-colors duration-300 ${open === i ? "text-[#C89A47]" : "text-[#1F1F1F]"}`}>
                    {faq.q}
                  </span>
                  <span
                    className="text-[#C89A47] transition-transform duration-300 shrink-0 bg-[#F8F4EE] w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      transform: open === i ? "rotate(135deg)" : "rotate(0deg)",
                    }}
                  >
                    <Plus size={20} strokeWidth={2.5} />
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  aria-hidden={open !== i}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-8 pb-7 pt-2 text-[#555] text-[15px] md:text-[16px] leading-[1.8]">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─── Final CTA ───────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="py-12 md:py-20 bg-[#FAF8F3] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 text-center">

        <span className="font-sans text-[11px] md:text-[13px] uppercase tracking-[0.25em] font-semibold text-[#77736C] block mb-4 md:mb-6">
          Start Your Project
        </span>

        <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.15] md:leading-[1.1] tracking-[-0.03em] text-[#171614] mx-auto max-w-5xl font-medium">
          let&apos;s build your dream space—book a <br className="hidden md:block" />
          free
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 md:gap-3 bg-[#FBE18D] hover:bg-[#FCD372] transition-colors rounded-full pl-5 pr-1.5 md:pl-6 md:pr-2 py-1.5 md:py-2 mx-2 md:mx-3 align-middle text-[18px] md:text-[24px] lg:text-[28px] font-sans font-medium text-[#171614] tracking-normal -mt-1 md:-mt-3 relative group shadow-sm"
          >
            Get a quote
            <span className="bg-[#171614] text-[#FBE18D] rounded-full w-8 h-8 md:w-11 md:h-11 flex items-center justify-center shrink-0 transition-transform group-hover:translate-x-1">
              <ArrowRight size={18} strokeWidth={2.5} />
            </span>
          </Link>
          consultation.
        </h2>

        <p className="mt-8 md:mt-10 max-w-2xl mx-auto text-[15px] md:text-[17px] leading-7 text-[#77736C]">
          Planning a new home, upgrading your interiors, or renovating an
          existing space? Discuss your project with SMS Construction in Nagercoil.
        </p>

      </div>
    </section>
  );
}

/* ─── Page ────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <main className="home-page bg-[#FAF8F3]">
        <Hero />
        <TrustStats />
        <Services />
        <WhySMS />
        <FeaturedProjects />
        {/* <GalleryStrip /> */}
        <Process />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <style>{`
        .home-page .text-label-caps {
          font-size: 0.69rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          line-height: 1.2;
          text-transform: uppercase;
        }
        .home-page .text-headline-xl {
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(2.4rem, 4.3vw, 4.5rem);
          font-weight: 700;
          letter-spacing: -0.045em;
          line-height: 1.04;
        }
        .home-page .text-headline-md {
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(1.5rem, 2vw, 2.25rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.08;
        }
        .home-page .text-body-lg {
          font-size: 1.0625rem;
          line-height: 1.65;
        }
        @media (max-width: 767px) {
          .home-page > section:not(:first-child) {
            padding-top: 4.75rem;
            padding-bottom: 4.75rem;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .home-page *, .home-page *::before, .home-page *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333333%); }
        }
        .animate-scroll {
          animation: scroll 35s linear infinite;
        }
      `}</style>
    </>
  );
}
