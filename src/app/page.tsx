"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
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
          src="/hero.jpeg"
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
            <div className="font-sans text-[11px] md:text-[14px] text-[#8A8A8A] leading-relaxed line-clamp-3 md:line-clamp-none">
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
    category: "Interior Works",
    desc: "Bespoke design solutions that transform your residential spaces into tranquil, luxurious havens tailored to your lifestyle.",
    href: "/interior-design",
    img: "/images/services/interior.jpg",
  },
  {
    category: "Construction",
    desc: "Architecturally significant ground-up construction, focusing on precision, premium materials, and structural integrity.",
    href: "/construction",
    img: "/images/services/construction.jpg",
  },
  {
    category: "Design & Planning",
    desc: "Comprehensive architectural blueprints and spatial planning to visualize your dream project before it begins.",
    href: "/interior-design",
    img: "/images/services/planning.jpg",
  },
  {
    category: "Survey & Approvals",
    desc: "Navigating complex regulations with expert land surveying and seamless government approval processes.",
    href: "/construction",
    img: "/images/services/survey.jpg",
  },
  {
    category: "Fabrication Works",
    desc: "Custom structural steel fabrication and premium metalwork crafted for durability and sophisticated aesthetics.",
    href: "/construction",
    img: "/images/services/fabrication.jpg",
  },
];

function Services() {
  const containerRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const router = useRouter();

  const scrollToService = (index: number) => {
    const st = ScrollTrigger.getAll().find((t) => t.trigger === containerRef.current && t.vars.pin === true);
    if (st) {
      const total = servicesData.length;
      let scrollPos = st.start + (index * (st.end - st.start)) / (total - 1);

      // Prevent triggering the 'onLeave' animation when clicking the last item
      if (index === total - 1) {
        scrollPos -= 10;
      }

      window.scrollTo({ top: scrollPos, behavior: "auto" });
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("all", () => {
        const container = containerRef.current;

        if (!container) return;

        const total = servicesData.length;

        // Initial fan position
        const setCardPositions = (active: number, animate = false) => {
          cardRefs.current.forEach((card, index) => {
            if (!card) return;

            let relative = index - active;

            // Make the carousel circular
            if (relative > total / 2) relative -= total;
            if (relative < -total / 2) relative += total;

            const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
            const spreadX = isMobile ? 0.45 : 1;
            const spreadY = isMobile ? 0.55 : 1;

            let x = 0;
            let y = 0;
            let rotate = 0;
            let scale = 1;
            let opacity = 1;
            let zIndex = 10 - Math.abs(relative);

            // CENTER CARD
            if (relative === 0) {
              x = 0;
              y = 0;
              rotate = 0;
              scale = 1;
              opacity = 1;
              zIndex = 50;
            }

            // LEFT 1
            else if (relative === -1) {
              x = -270 * spreadX;
              y = 55 * spreadY;
              rotate = -11;
              scale = 0.88;
              opacity = 1;
              zIndex = 40;
            }

            // LEFT 2
            else if (relative === -2) {
              x = -465 * spreadX;
              y = 115 * spreadY;
              rotate = -19;
              scale = 0.78;
              opacity = 1;
              zIndex = 30;
            }

            // RIGHT 1
            else if (relative === 1) {
              x = 270 * spreadX;
              y = 55 * spreadY;
              rotate = 11;
              scale = 0.88;
              opacity = 1;
              zIndex = 40;
            }

            // RIGHT 2
            else if (relative === 2) {
              x = 465 * spreadX;
              y = 115 * spreadY;
              rotate = 19;
              scale = 0.78;
              opacity = 1;
              zIndex = 30;
            }

            // Hide everything outside visible fan
            else {
              x = (relative > 0 ? 580 : -580) * spreadX;
              y = 150 * spreadY;
              rotate = relative > 0 ? 25 : -25;
              scale = 0.65;
              opacity = 0;
              zIndex = 1;
            }

            const vars: gsap.TweenVars = {
              x,
              y,
              rotate,
              scale,
              opacity,
              zIndex,
              duration: animate ? 0.8 : 0,
              ease: "power3.out",
              overwrite: "auto"
            };

            if (animate) {
              gsap.to(card, vars);
            } else {
              gsap.set(card, vars);
            }

            const innerCard = card.querySelector('.inner-card');
            if (innerCard) {
              if (relative === 0) {
                innerCard.classList.add('is-center');
                innerCard.classList.remove('not-center');
              } else {
                innerCard.classList.add('not-center');
                innerCard.classList.remove('is-center');
              }
            }
          });
        };

        let currentActiveIndex = 0;

        // Initialize positions
        setCardPositions(currentActiveIndex, false);

        // Hide initially for entrance animation
        cardRefs.current.forEach((card) => {
          if (!card) return;
          const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
          gsap.set(card, {
            y: isMobile ? 0 : 250,
            scale: 0.7,
            opacity: 0,
            zIndex: 1,
          });
        });

        // Trigger for entering from the top
        const introTrigger = ScrollTrigger.create({
          trigger: container,
          start: "top 75%",
          onEnter: () => {
            setCardPositions(currentActiveIndex, true);
          }
        });

        const trigger = ScrollTrigger.create({
          trigger: container,
          start: "top top",
          end: `+=${window.innerHeight * (total - 1)}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,

          onUpdate: (self) => {
            const nextIndex = Math.round(self.progress * (total - 1));

            if (nextIndex !== currentActiveIndex) {
              currentActiveIndex = nextIndex;
              setCardPositions(nextIndex, true);
            }
          }
        });

        return () => {
          introTrigger.kill();
          trigger.kill();
        };
      });

      // --- Mobile / Tablet Autoplay logic overlay ---
      // This leaves the native scrollbar scrubbing completely intact and smoothly animates the scroll position
      mm.add("all", () => {
        let autoplayTimer: NodeJS.Timeout;
        let interactionTimeout: NodeJS.Timeout;

        const pauseAutoplay = () => {
          clearInterval(autoplayTimer);
          clearTimeout(interactionTimeout);
          interactionTimeout = setTimeout(() => {
            startAutoplay();
          }, 500);
        };

        const startAutoplay = () => {
          clearInterval(autoplayTimer);
          autoplayTimer = setInterval(() => {
            const container = containerRef.current;
            if (!container) return;
            const st = ScrollTrigger.getAll().find((t) => t.trigger === container && t.vars.pin === true);

            if (st && st.isActive) {
              const total = servicesData.length;
              let currentIndex = Math.round(st.progress * (total - 1));
              const nextIdx = (currentIndex + 1) % total;

              const targetScroll = st.start + (nextIdx * (st.end - st.start)) / (total - 1);
              window.scrollTo({ top: targetScroll, behavior: 'smooth' });
            }
          }, 3000);
        };

        startAutoplay();

        // Listen for user interaction to temporarily pause the autoplay so they can scroll naturally
        window.addEventListener('wheel', pauseAutoplay, { passive: true });
        window.addEventListener('touchstart', pauseAutoplay, { passive: true });
        window.addEventListener('touchmove', pauseAutoplay, { passive: true });

        return () => {
          clearInterval(autoplayTimer);
          clearTimeout(interactionTimeout);
          window.removeEventListener('wheel', pauseAutoplay);
          window.removeEventListener('touchstart', pauseAutoplay);
          window.removeEventListener('touchmove', pauseAutoplay);
        };
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative z-20 bg-[#F7F3ED] overflow-hidden"
    >
      {/* =========================
          ALL SCREENS
      ========================== */}
      <div className="block h-[100dvh] relative w-full">
        {/* Section heading */}
        <div className="absolute top-10 w-full left-0 flex flex-col items-center text-center md:items-start md:text-left md:w-auto md:left-8 lg:left-16 md:top-14 z-[70]">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-2 md:mb-4">
            <span className="hidden md:block w-8 md:w-10 h-[1px] bg-[#B08A52]" />
            <span className="text-[9px] md:text-[11px] uppercase tracking-[0.25em] text-[#6B6862]">
              What we do
            </span>
          </div>

          <h2 className="text-[clamp(2.5rem,8vw,5.5rem)] md:text-[clamp(3rem,5vw,5.5rem)] leading-[0.9] tracking-[-0.04em] text-[#171614] mb-3">
            Services<span className="text-[#B08A52]">.</span>
          </h2>

          {/* Scroll Indicator (Mobile & Tablet) */}
          <div className="flex lg:hidden items-start justify-center md:justify-start gap-3 opacity-100 transition-opacity duration-500 mt-2 md:mt-4 md:ml-1 animate-zoom-scroll">
            <div className="flex flex-col items-center -space-y-3">
              <svg className="w-5 h-5 text-[#B08A52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
              <svg className="w-5 h-5 text-[#B08A52] opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
              <svg className="w-5 h-5 text-[#B08A52] opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <span className="text-[10px] md:text-[12px] uppercase tracking-[0.2em] text-[#B08A52] font-bold shadow-sm pt-2">Scroll to explore</span>
          </div>
        </div>

        {/* Top right count */}
        <div className="hidden md:block absolute top-16 right-8 lg:right-16 z-[70] text-right">
          <div className="text-[11px] uppercase tracking-[0.25em] text-[#6B6862]">
            Core Services
          </div>
        </div>

        <style>{`
          @keyframes zoomInOutCenter {
            0%, 100% { transform: translateX(-50%) scale(1); }
            50% { transform: translateX(-50%) scale(1.15); }
          }
          @keyframes zoomInOut {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.15); }
          }
          .animate-zoom-scroll-center {
            animation: zoomInOutCenter 2s ease-in-out infinite;
          }
          .animate-zoom-scroll {
            animation: zoomInOut 2s ease-in-out infinite;
          }
        `}</style>
        {/* Scroll Indicator (Laptop/Desktop) */}
        <div className="absolute bottom-6 md:bottom-10 left-1/2 z-[70] hidden lg:flex flex-col items-center opacity-100 transition-opacity duration-500 animate-zoom-scroll-center">
          <span className="text-[10px] md:text-[12px] uppercase tracking-[0.2em] text-[#B08A52] mb-1 font-bold shadow-sm">Scroll to explore</span>
          <div className="flex flex-col items-center -space-y-4">
            <svg className="w-6 h-6 text-[#B08A52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
            <svg className="w-6 h-6 text-[#B08A52] opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
            <svg className="w-6 h-6 text-[#B08A52] opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {/* Fan stage */}
        <div className="absolute inset-0 flex items-center justify-center pt-24 pb-4 md:pt-20 md:pb-40">
          <div className="relative w-full max-w-[1500px] h-[450px] md:h-[650px] flex items-center justify-center mt-10 lg:mt-16">
            {servicesData.map((svc, index) => (
              <div
                key={svc.category}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="absolute w-[min(320px,75vw)] md:w-[min(360px,28vw)] h-[min(450px,60vh)] md:h-[min(500px,68vh)]"
              >
                <div
                  className="relative w-full h-full rounded-[28px] overflow-hidden shadow-[0_30px_80px_rgba(23,22,20,0.18)] bg-[#171614] p-6 lg:p-8 flex flex-col justify-between border border-[#B08A52]/10 group transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] [&.not-center:hover]:-translate-y-8 [&.not-center:hover]:-translate-x-2 [&.not-center:hover]:rotate-[-2deg] [&.not-center:hover]:scale-105 [&.is-center:hover]:-translate-y-2 [&.is-center:hover]:scale-[1.02] hover:shadow-[0_40px_100px_rgba(0,0,0,0.6)] hover:border-[#B08A52]/40 cursor-pointer inner-card"
                  onClick={() => scrollToService(index)}
                >

                  {/* Image part */}
                  <div className="relative w-full flex-1 rounded-[20px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.6)] mb-8">
                    <Image
                      src={svc.img}
                      alt={svc.category}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1200px) 30vw, 360px"
                    />
                  </div>

                  {/* bottom part */}
                  <div className="relative z-10 w-full pr-12">
                    <h3 className="font-serif text-[28px] lg:text-[32px] leading-[1.05] text-white mb-3">
                      {svc.category}
                    </h3>
                    <p className="text-white/60 text-[13px] lg:text-[14px] leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>

                  {/* Reveal Button */}
                  <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 opacity-0 translate-y-8 transition-all duration-500 [.is-center:hover_&]:opacity-100 [.is-center:hover_&]:translate-y-0 z-20">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(svc.href);
                      }}
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-[#B08A52] text-white hover:bg-[#8F6F41] transition-all shadow-[0_4px_15px_rgba(176,138,82,0.4)] group/btn"
                    >
                      <svg className="transition-transform duration-300 group-hover/btn:translate-x-1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
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
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-why-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
          },
        }
      );
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="pt-12 pb-20 md:pt-16 md:pb-32 px-6 md:px-16 max-w-[1440px] mx-auto bg-[#F8F4EE]">
      <div className="mb-12 md:mb-16 flex flex-col items-center text-center">
        <h2 className="text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.03em] text-[#171614] mb-3">
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
            className="gsap-why-card h-full opacity-0 relative overflow-hidden bg-white rounded-[20px] p-4 sm:p-6 md:p-8 border border-[#E7E0D4] hover:shadow-[0_24px_48px_rgba(23,23,20,0.06)] hover:-translate-y-2 transition-all duration-500 group flex flex-col items-start text-left z-0"
          >
            {/* Expanding Background Circle */}
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-[#C89A47] -z-10 transform scale-100 origin-center transition-transform duration-[600ms] ease-out group-hover:scale-[45]" />

            {/* Top Right Corner Arrow */}
            <div className="absolute top-0 right-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#C89A47] text-white rounded-bl-[20px] sm:rounded-bl-[24px] overflow-hidden pointer-events-none">
              <span className="material-symbols-outlined text-[14px] sm:text-[16px] -mt-1 -mr-1 font-bold">arrow_forward</span>
            </div>

            <div className="relative z-10 flex items-center gap-2 sm:gap-4 mb-3 sm:mb-4 pr-4">
              <div className="shrink-0 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#F8F4EE] flex items-center justify-center group-hover:bg-white/20 transition-colors duration-500">
                <span className="material-symbols-outlined text-[#C89A47] group-hover:text-white transition-colors duration-500 text-[16px] sm:text-[24px]">
                  {item.icon}
                </span>
              </div>
              <h3 className="font-sans font-semibold text-[14px] sm:text-[18px] md:text-[20px] text-[#171614] group-hover:text-white transition-colors duration-300 leading-tight">
                {item.title}
              </h3>
            </div>
            <p className="relative z-10 font-sans text-[11px] sm:text-[14px] text-[#8A8A8A] leading-relaxed group-hover:text-white/90 transition-colors duration-300">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
gsap.registerPlugin(ScrollTrigger);

/* ─── Featured Projects ───────────────────────────────────── */

function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      number: "01",
      title: "The Glass Pavilion",
      category: "Residential",
      location: "Nagercoil",
      year: "2026",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBR_fo2_CyHNYySkdd6srb36FQoCsJr2FtIL3mTiMTy3rGXsHJ5Iih5ciDI9TbJSjH9OdkxWJd1d8gy-E2uQpYXQefrmuYDkTw1QtPfy1Z__ura1QnGA7OngCnNn6GNSK3IHvUjiEgYpKJBdzLBiMlWXHOI1jtS3ohN4kvS2Cb2HnB-_tO5RM3qGewtQ-H0j8b6YMv5rzmjnuVuuaTewMxO3W11Q1Pkscqxll_xD1lXYqeldaMXFSfHg",
      href: "/projects/the-glass-pavilion",
    },
    {
      number: "02",
      title: "Oak & Marble Estate",
      category: "Turnkey",
      location: "Kanyakumari",
      year: "2026",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6OjLQPm1eIBjpK4ChN3-L7UJ3Bz8GUvB0nd_IaPxe0mrZzj-64E_Gs1sSrqVilOGrAotp1Zrwh4a8oBh-JHQXw8M-ys-OUXRtSfOLq1ZzFLyLVqVJTVvEF2YLUOGrjVF3Qa7mlPEofIlzqbiOi_39r70-8o5ybiLIUqJbQUT5VtFgw0n1IpGsYW3hlvTV7oeFNi-edSPiVyeHTyNa09MgcuQB4k2CAcxBa0PSDpfxhW58BGPQjJUinQ",
      href: "/projects/oak-marble-estate",
    },
    {
      number: "03",
      title: "Urban Retreat",
      category: "Interior",
      location: "Trivandrum",
      year: "2026",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQn1piHpoqb26Itm5N3HjqtSz8N-_O13S8AJ-i7XNSXpzzENymz14054sQR-iVGGlrLt6IYyN2XlGRG5_Kpyqx1_tTArLwsLARyevotALnJpSefTDqztUNo6cAt-K_pajSuqumbV1-dZoEYo8r3LFpnuPE7aXI9iKi_RjlrNBGvXaJn9fl-u6qg6q902w09kkD9vnb-t5jh-rq2m6yS2dWnflAl0YP5AnyF5DJ17bfrX3YIA3Cq4mGcw",
      href: "/projects/urban-retreat",
    },
    {
      number: "04",
      title: "The Courtyard House",
      category: "Construction",
      location: "Marthandam",
      year: "2026",
      img: "/images/projects/courtyard-house.jpg",
      href: "/projects/courtyard-house",
    },
    {
      number: "05",
      title: "Modern Edge Residence",
      category: "Residential",
      location: "Kanyakumari",
      year: "2026",
      img: "/images/projects/modern-edge-residence.jpg",
      href: "/projects/modern-edge-residence",
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
      className="relative bg-white min-h-screen overflow-hidden flex items-center"
    >
      <div className="w-full max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-12 py-12 md:py-14">

        {/* ═══════════════════════════════════════
            HEADER
        ═══════════════════════════════════════ */}

        <div className="flex items-end justify-between gap-6 mb-7 md:mb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-9 h-px bg-[#B08A52]" />

              <span className="text-[9px] uppercase tracking-[0.28em] text-[#77736C]">
                Selected Work
              </span>
            </div>

            <h2 className="
              text-[#171614]
              text-[clamp(2.8rem,5vw,5.2rem)]
              leading-[0.88]
              tracking-[-0.05em]
            ">
              Our Projects<span className="text-[#B08A52]">.</span>
            </h2>
          </div>

          <a
            href="/projects"
            className="
              hidden
              sm:inline-flex
              animated-next-btn
            "
          >
            <span>VIEW ALL PROJECTS</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 43">
              <polygon points="39.58,4.46 44.11,0 66,21.5 44.11,43 39.58,38.54 56.94,21.5" />
              <polygon points="19.79,4.46 24.32,0 46.21,21.5 24.32,43 19.79,38.54 37.15,21.5" />
              <polygon points="0,4.46 4.53,0 26.42,21.5 4.53,43 0,38.54 17.36,21.5" />
            </svg>
          </a>
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

          {/* ───────────────── PROJECT 01 ───────────────── */}

          <a
            href={projects[0].href}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="
              project-card-anim
              group
              relative
              col-span-6
              row-span-1
              overflow-hidden
              rounded-[22px]
              bg-[#EDE7DE]
              will-change-transform
            "
          >
            <img
              src={projects[0].img}
              alt={projects[0].title}
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

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            <div
              className="
                project-hover-overlay
                absolute
                inset-0
                bg-black/25
                opacity-0
              "
            />

            {/* Number */}
            <div className="absolute top-4 left-4 lg:top-5 lg:left-5">
              <span className="font-serif italic text-[17px] text-[#B08A52]">
                {projects[0].number}
              </span>
            </div>

            {/* Content */}
            <div
              className="
                project-content
                absolute
                left-5
                right-5
                bottom-5
                lg:left-6
                lg:right-6
                lg:bottom-6
              "
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[8px] uppercase tracking-[0.2em] text-white/70">
                  {projects[0].category}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#B08A52]" />
                <span className="text-[8px] uppercase tracking-[0.2em] text-white/70">
                  {projects[0].location}
                </span>
              </div>

              <h3 className="
                font-serif
                text-white
                text-[clamp(1.8rem,3.2vw,3.2rem)]
                leading-[0.9]
                tracking-[-0.03em]
              ">
                {projects[0].title}
              </h3>

            </div>
          </a>

          {/* ───────────────── PROJECT 02 ───────────────── */}

          <a
            href={projects[1].href}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="
              project-card-anim
              group
              relative
              col-span-3
              row-span-1
              overflow-hidden
              rounded-[22px]
              bg-[#EDE7DE]
              will-change-transform
            "
          >
            <img
              src={projects[1].img}
              alt={projects[1].title}
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

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            <div
              className="
                project-hover-overlay
                absolute
                inset-0
                bg-black/30
                opacity-0
              "
            />

            <div className="absolute top-4 left-4">
              <span className="font-serif italic text-[17px] text-[#B08A52]">
                {projects[1].number}
              </span>
            </div>

            <div className="project-content absolute left-4 right-4 bottom-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[7px] uppercase tracking-[0.18em] text-white/70">
                  {projects[1].category}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#B08A52]" />
                <span className="text-[7px] uppercase tracking-[0.18em] text-white/70">
                  {projects[1].location}
                </span>
              </div>

              <h3 className="
                font-serif
                text-white
                text-[clamp(1.35rem,2vw,2rem)]
                leading-[0.92]
                tracking-[-0.025em]
              ">
                {projects[1].title}
              </h3>

              
            </div>
          </a>

          {/* ───────────────── PROJECT 05 — TALL ───────────────── */}

          <a
            href={projects[4].href}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="
              project-card-anim
              group
              relative
              col-span-3
              row-span-2
              overflow-hidden
              rounded-[22px]
              bg-[#EDE7DE]
              will-change-transform
            "
          >
            <img
              src={projects[4].img}
              alt={projects[4].title}
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

            <div className="absolute top-4 left-4 lg:top-5 lg:left-5">
              <span className="font-serif italic text-[17px] text-[#B08A52]">
                {projects[4].number}
              </span>
            </div>

            <div className="project-content absolute left-4 right-4 bottom-4 lg:left-5 lg:right-5 lg:bottom-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[7px] uppercase tracking-[0.18em] text-white/70">
                  {projects[4].category}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#B08A52]" />
                <span className="text-[7px] uppercase tracking-[0.18em] text-white/70">
                  {projects[4].location}
                </span>
              </div>

              <h3 className="
                font-serif
                text-white
                text-[clamp(1.45rem,2.2vw,2.3rem)]
                leading-[0.9]
                tracking-[-0.03em]
              ">
                {projects[4].title}
              </h3>

              
            </div>
          </a>

          {/* ───────────────── PROJECT 03 ───────────────── */}

          <a
            href={projects[2].href}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="
              project-card-anim
              group
              relative
              col-span-3
              row-span-1
              overflow-hidden
              rounded-[22px]
              bg-[#EDE7DE]
              will-change-transform
            "
          >
            <img
              src={projects[2].img}
              alt={projects[2].title}
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

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            <div
              className="
                project-hover-overlay
                absolute
                inset-0
                bg-black/25
                opacity-0
              "
            />

            <div className="absolute top-4 left-4">
              <span className="font-serif italic text-[17px] text-[#B08A52]">
                {projects[2].number}
              </span>
            </div>

            <div className="project-content absolute left-4 right-4 bottom-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[7px] uppercase tracking-[0.18em] text-white/70">
                  {projects[2].category}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#B08A52]" />
                <span className="text-[7px] uppercase tracking-[0.18em] text-white/70">
                  {projects[2].location}
                </span>
              </div>

              <h3 className="
                font-serif
                text-white
                text-[clamp(1.35rem,2vw,2rem)]
                leading-[0.92]
                tracking-[-0.025em]
              ">
                {projects[2].title}
              </h3>

              
            </div>
          </a>

          {/* ───────────────── PROJECT 04 ───────────────── */}

          <a
            href={projects[3].href}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="
              project-card-anim
              group
              relative
              col-span-6
              row-span-1
              overflow-hidden
              rounded-[22px]
              bg-[#EDE7DE]
              will-change-transform
            "
          >
            <img
              src={projects[3].img}
              alt={projects[3].title}
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

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            <div
              className="
                project-hover-overlay
                absolute
                inset-0
                bg-black/25
                opacity-0
              "
            />

            <div className="absolute top-4 left-4">
              <span className="font-serif italic text-[17px] text-[#B08A52]">
                {projects[3].number}
              </span>
            </div>

            <div className="project-content absolute left-4 right-4 bottom-4 lg:left-5 lg:right-5 lg:bottom-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[7px] uppercase tracking-[0.18em] text-white/70">
                  {projects[3].category}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#B08A52]" />
                <span className="text-[7px] uppercase tracking-[0.18em] text-white/70">
                  {projects[3].location}
                </span>
              </div>

              <h3 className="
                font-serif
                text-white
                text-[clamp(1.5rem,2.3vw,2.4rem)]
                leading-[0.9]
                tracking-[-0.03em]
              ">
                {projects[3].title}
              </h3>

              
            </div>
          </a>
        </div>

        {/* ═══════════════════════════════════════
            MOBILE
        ═══════════════════════════════════════ */}

        <div className="md:hidden grid grid-cols-2 gap-3">

          {projects.map((project, index) => (
            <a
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
                min-h-[320px]
                bg-[#EDE7DE]
                ${index === 0 ? "col-span-2 min-h-[460px]" : ""}
                ${index === 3 ? "col-span-2 min-h-[400px]" : ""}
                ${index === 4 ? "col-span-2 min-h-[440px]" : ""}
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

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="project-hover-overlay absolute inset-0 bg-black/20 opacity-0" />

              <div className="absolute top-4 left-4">
                <span className="font-serif italic text-[16px] text-[#B08A52]">
                  {project.number}
                </span>
              </div>

              

              <div className="project-content absolute left-4 right-4 bottom-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[7px] uppercase tracking-[0.18em] text-white/70">
                    {project.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#B08A52]" />
                  <span className="text-[7px] uppercase tracking-[0.18em] text-white/70">
                    {project.location}
                  </span>
                </div>

                <h3 className="font-serif text-white text-[1.5rem] leading-[0.92] tracking-[-0.025em]">
                  {project.title}
                </h3>

                
              </div>
            </a>
          ))}
        </div>

        {/* ───────────────── Mobile CTA ───────────────── */}

        <div className="md:hidden mt-6 flex justify-end">
          <a
            href="/projects"
            className="group inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] font-semibold text-[#171614]"
          >
            <span className="border-b border-[#B08A52] pb-1">
              View All Projects
            </span>

            <span className="text-[#B08A52] group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}

/* ─── Gallery Strip ───────────────────────────────────────── */
function GalleryStrip() {
  const images = [
    {
      src: "/images/screen1_office.jpg",
      alt: "Architecture office - SMS Construction",
    },
    {
      src: "/images/screen2_exterior.jpg",
      alt: "Luxury residential exterior at sunset",
    },
    {
      src: "/images/screen3_interior.jpg",
      alt: "Cinematic luxury interior living space",
    },
    {
      src: "/images/screen5_detail.jpg",
      alt: "Minimalist interior design detail",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-16 max-w-[1440px] mx-auto bg-[#F8F4EE]">
      <div className="mb-12 text-center">
        <span className="text-label-caps text-[#C89A47] tracking-widest">Our Studio</span>
        <h2 className="text-headline-xl text-[#1F1F1F] mt-4">Spaces We&apos;ve Crafted.</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img) => (
          <div
            key={img.src}
            className="img-zoom rounded-[20px] overflow-hidden aspect-[3/4] cursor-pointer"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={533}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Process Timeline ────────────────────────────────────── */
const steps = [
  { num: "01", title: "Consultation", desc: "We begin with a deep conversation about your vision, requirements, and budget." },
  { num: "02", title: "Planning", desc: "Detailed scope of work, timeline, and budget planning with complete transparency." },
  { num: "03", title: "Design", desc: "Our designers craft bespoke concepts — moodboards, floor plans, 3D renders." },
  { num: "04", title: "Execution", desc: "Expert craftspeople bring the design to life with premium materials and precision." },
  { num: "05", title: "Quality Check", desc: "Rigorous inspection at every stage to ensure flawless finishes and durability." },
  { num: "06", title: "Handover", desc: "A walk-through with you, final touches, and a complete handover of your dream space." },
];

function Process() {
  return (
    <section className="py-20 md:py-40 px-6 md:px-16 max-w-[1440px] mx-auto bg-white rounded-[40px] my-16 shadow-[0_10px_50px_rgba(0,0,0,0.02)]">
      <div className="mb-16 text-center">
        <span className="text-label-caps text-[#C89A47] tracking-widest">Our Process</span>
        <h2 className="text-headline-xl text-[#1F1F1F] mt-4">
          How We Build Your Dream Space.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div
            key={step.num}
            className="relative p-8 bg-[#F8F4EE]/50 rounded-[24px] border border-[#E7E0D4]/30
                       hover:shadow-[0_12px_40px_rgba(0,0,0,0.04)] transition-all duration-400"
          >
            <div className="font-serif text-[56px] leading-none text-[#E7E0D4] mb-4">
              {step.num}
            </div>
            <h3 className="font-sans font-semibold text-[18px] text-[#1F1F1F] mb-2">{step.title}</h3>
            <p className="text-[#8A8A8A] text-[14px] leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Testimonials ────────────────────────────────────────── */
const testimonials = [
  {
    quote: "SMS Construction transformed our home beyond what we imagined. The attention to detail, quality of materials, and the team's professionalism were exceptional throughout.",
    name: "Ramesh & Priya Kumar",
    role: "Residential Client · Nagercoil",
    initial: "R",
  },
  {
    quote: "Working with SMS was a completely different experience. They handled everything from design to handover — truly a one-stop luxury construction partner.",
    name: "Dr. Anand Sivakumar",
    role: "Turnkey Client · Kanyakumari",
    initial: "A",
  },
  {
    quote: "The renovation work they did on our commercial space was outstanding. On time, on budget, and the quality speaks for itself. Highly recommend.",
    name: "Lakshmi Enterprises",
    role: "Commercial Client · Nagercoil",
    initial: "L",
  },
];

function Testimonials() {
  return (
    <section className="py-20 md:py-40 px-6 md:px-16 max-w-[1440px] mx-auto bg-[#F8F4EE]">
      <div className="mb-16 text-center">
        <span className="text-label-caps text-[#C89A47] tracking-widest">Testimonials</span>
        <h2 className="text-headline-xl text-[#1F1F1F] mt-4">
          Words from Our Clients.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-white rounded-[24px] p-8 border border-[#E7E0D4]/30
                       hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] transition-all duration-400"
          >
            <div className="text-[#C89A47] mb-6">
              <span className="material-symbols-outlined" style={{ fontSize: 36, fontVariationSettings: "'FILL' 1" }}>
                format_quote
              </span>
            </div>
            <p className="text-[#1F1F1F] text-[17px] leading-relaxed mb-8 italic font-serif">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#C89A47] text-white flex items-center justify-center font-sans font-semibold text-[15px]">
                {t.initial}
              </div>
              <div>
                <div className="font-sans font-semibold text-[14px] text-[#1F1F1F]">{t.name}</div>
                <div className="text-label-caps text-[#8A8A8A] mt-0.5">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── FAQ ─────────────────────────────────────────────────── */
const faqs = [
  {
    q: "What types of projects does SMS Construction handle?",
    a: "We handle home interiors, turnkey interior projects, residential construction, commercial construction, and renovations — all under one roof in Nagercoil and across Kanyakumari District.",
  },
  {
    q: "How long does a typical interior project take?",
    a: "Most residential interior projects range from 45 to 120 days depending on scope. We provide a precise timeline during the planning phase and commit to it.",
  },
  {
    q: "Do you offer a free consultation?",
    a: "Yes — we offer a complimentary first consultation where we understand your vision, assess the space, and provide a broad project estimate at no cost.",
  },
  {
    q: "What makes SMS Construction different from other firms?",
    a: "We combine luxury design sensibility with construction expertise, meaning you get a single team managing your entire project — no coordination headaches, no quality compromises.",
  },
  {
    q: "Do you work outside of Nagercoil?",
    a: "Our primary service area is Nagercoil and Kanyakumari District. For large-scale projects, we can discuss arrangements for work in nearby regions.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-40 px-6 md:px-16 max-w-[1440px] mx-auto bg-[#F8F4EE]">
      <div className="mb-16">
        <span className="text-label-caps text-[#C89A47] tracking-widest">FAQ</span>
        <h2 className="text-headline-xl text-[#1F1F1F] mt-4 max-w-xl">
          Frequently Asked Questions.
        </h2>
      </div>

      <div className="max-w-3xl space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white rounded-[20px] border border-[#E7E0D4]/30 overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.01)]"
          >
            <button
              className="w-full text-left px-8 py-6 flex justify-between items-center
                         hover:bg-[#FAF8F5] transition-colors duration-200"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span className="font-sans font-medium text-[15px] text-[#1F1F1F] pr-8">
                {faq.q}
              </span>
              <span
                className="material-symbols-outlined text-[#C89A47] transition-transform duration-300 shrink-0"
                style={{
                  fontSize: 20,
                  transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                add
              </span>
            </button>
            <div
              className={`accordion-content ${open === i ? "open" : ""}`}
              aria-hidden={open !== i}
            >
              <div className="px-8 pb-6 text-[#8A8A8A] text-[15px] leading-relaxed">
                {faq.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Final CTA ───────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="mx-6 md:mx-16 my-16 rounded-[40px] bg-[#1F1F1F] overflow-hidden relative">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/hero.jpeg"
          alt="Background texture"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative z-10 px-8 md:px-24 py-24 md:py-32 flex flex-col md:flex-row items-center justify-between gap-12">
        <div>
          <span className="text-label-caps text-[#e3c381] tracking-widest">Start Your Project</span>
          <h2 className="text-headline-xl text-white mt-4 max-w-xl">
            Let&apos;s Build Something <span className="italic text-[#e3c381]">Extraordinary.</span>
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <button
            className="bg-[#C89A47] text-white text-label-caps px-10 py-5 rounded-full
                       hover:bg-[#e3c381] hover:text-[#1F1F1F] transition-all duration-300
                       shadow-[0_8px_30px_rgba(200,154,71,0.4)]"
          >
            Start Your Project
          </button>
          <button
            className="border border-white/30 text-white text-label-caps px-10 py-5 rounded-full
                       hover:bg-white/10 transition-all duration-300"
          >
            Contact Us
          </button>
        </div>
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
        <GalleryStrip />
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
      `}</style>
      <Footer />
    </>
  );
}
