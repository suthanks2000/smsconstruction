"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
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
    <header ref={container} className="relative w-full pt-32 pb-32 md:pt-40 md:pb-40">
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#171714]/70 via-[#171714]/30 to-[#171714]/10" />

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
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1280px] items-center px-6 sm:px-10 lg:px-16">
        <div className="w-full lg:w-7/12 text-left -mt-8 md:-mt-9 ml-2 sm:ml-6 md:ml-10 lg:ml-16">

          <div>
            <p className="gsap-subtitle opacity-0 mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#e3c381] sm:text-[12px]">
              Nagercoil&apos;s Design &amp; Build Studio
            </p>

            <h1 className="gsap-heading opacity-0 mb-6 font-serif text-[clamp(2.5rem,5vw,5.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.03em] text-white sm:mb-8">
              DESIGN.<br />
              BUILD.<br />
              <span className="text-[#C89A47]">COMPLETE.</span>
            </h1>
          </div>

          <div className="gsap-desc opacity-0 mb-8 space-y-2.5 border-l-[2px] border-[#e3c381] pl-5 sm:mb-10 sm:space-y-3 sm:pl-6">
            <p className="font-sans text-[15px] font-medium leading-tight text-white/90 sm:text-[18px]">
              Bespoke Interior Design &amp; Construction
            </p>
            <p className="font-sans text-[15px] font-medium leading-tight text-white/90 sm:text-[18px]">
              Architecturally Refined Living Spaces
            </p>
            <p className="font-sans text-[15px] font-medium leading-tight text-white/90 sm:text-[18px]">
              End-to-End Modern Solutions
            </p>
          </div>

          <div className="gsap-button opacity-0 flex flex-col gap-4 sm:flex-row sm:gap-5">

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
    { icon: "star", value: "150+", label: "Projects Completed", desc: "Successfully delivered luxury residential and turnkey commercial spaces" },
    { icon: "history", value: "15+", label: "Years Experience", desc: "Crafting architectural landmarks with premium workmanship" },
    { icon: "sentiment_very_satisfied", value: "100%", label: "Happy Clients", desc: "Exceptional ratings from homeowners and studio partners" },
    { icon: "verified_user", value: "Premium", label: "Quality Commitment", desc: "Uncompromised materials and rigorous inspection checks" },
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

      // 2. Interactive Hover Animations
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="gsap-stat-card opacity-0 rounded-[20px] border border-[#E7E0D4] bg-white p-7 shadow-[0_12px_35px_rgba(23,23,20,0.045)] flex flex-col items-start hover:shadow-[0_20px_45px_rgba(23,23,20,0.08)] transition-shadow duration-300"
          >
            {/* Gold Outline Icon */}
            <div className="gsap-stat-icon w-12 h-12 rounded-full border border-[#C89A47]/40 flex items-center justify-center text-[#C89A47] mb-6">
              <span className="material-symbols-outlined text-[24px] font-light">{stat.icon}</span>
            </div>
            {/* Dark Numbers */}
            <div className="gsap-stat-num font-serif text-[42px] font-bold text-[#1F1F1F] leading-none mb-2">
              {stat.value}
            </div>
            {/* Title */}
            <div className="font-sans font-semibold text-[16px] text-[#1F1F1F] mb-2">
              {stat.label}
            </div>
            {/* Gray Description */}
            <div className="font-sans text-[14px] text-[#8A8A8A] leading-relaxed">
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
  const titleRef = useRef<HTMLHeadingElement>(null);
  const activeIndexRef = useRef<number>(0);

  const scrollToService = (index: number) => {
    const st = ScrollTrigger.getAll().find(t => t.trigger === containerRef.current);
    if (st) {
      const scrollPos = st.start + (index * (st.end - st.start) / (servicesData.length - 1));
      window.scrollTo({ top: scrollPos, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop 3D Coverflow animation
      mm.add("(min-width: 768px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".coverflow-card");
        
        // Initial setup text
        if(titleRef.current) titleRef.current.innerText = servicesData[0].category;
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => `+=${window.innerHeight * 4}`, // 4 scroll steps
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const progress = self.progress * (cards.length - 1); // 0 to 4
              const currentIndex = Math.round(progress);
              
              // Update Title if active index changed
              if (currentIndex !== activeIndexRef.current) {
                 activeIndexRef.current = currentIndex;
                 
                 gsap.to(titleRef.current, { 
                   y: -10, opacity: 0, duration: 0.2, 
                   onComplete: () => {
                     if(titleRef.current) titleRef.current.innerText = servicesData[currentIndex].category;
                     gsap.fromTo(titleRef.current, 
                       { y: 10, opacity: 0 }, 
                       { y: 0, opacity: 1, duration: 0.3 }
                     );
                   }
                 });
              }
              
              // Update each card's 3D projection
              cards.forEach((card, i) => {
                const pos = i - progress;
                const absPos = Math.abs(pos);
                const clampedPos = Math.max(-2.5, Math.min(2.5, pos));
                
                const baseXPercent = -50;
                const xOffsetPercent = clampedPos * 75; 
                
                gsap.set(card, {
                  xPercent: baseXPercent + xOffsetPercent,
                  z: -absPos * 300,
                  rotationY: -clampedPos * 45,
                  scale: 1 - (absPos * 0.15),
                  opacity: 1 - (absPos * 0.2),
                  zIndex: 100 - Math.round(absPos * 10),
                  transformOrigin: "center center",
                });
              });
            }
          }
        });
        
        // Force an initial update to render correctly before scrolling
        tl.progress(0);
      });

      // Mobile animation
      mm.add("(max-width: 767px)", () => {
        const panels = gsap.utils.toArray(".mobile-service-panel");
        panels.forEach((panel: any) => {
          gsap.fromTo(panel, 
            { opacity: 0, y: 50 },
            { 
              opacity: 1, y: 0, 
              duration: 0.8, ease: "power3.out",
              scrollTrigger: {
                trigger: panel,
                start: "top 85%",
              }
            }
          );
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#111111] relative z-20 md:h-screen overflow-hidden flex flex-col justify-center pt-20 md:pt-0">
      
      {/* Header */}
      <div className="text-center relative z-30 mb-8 md:mb-12">
        <h2 className="font-serif text-[clamp(2.5rem,4vw,4rem)] font-bold uppercase tracking-[-0.02em] text-white">
          Services<span className="text-[#C89A47]">.</span>
        </h2>
      </div>

      {/* Desktop 3D Coverflow */}
      <div className="hidden md:block relative w-full h-[55vh] lg:h-[60vh] max-w-[1440px] mx-auto" style={{ perspective: "1500px" }}>
        {servicesData.map((svc, idx) => (
          <div 
            key={svc.category} 
            onClick={() => scrollToService(idx)}
            className="coverflow-card absolute top-0 left-1/2 w-[350px] lg:w-[450px] h-full rounded-[24px] overflow-hidden shadow-[0_30px_50px_rgba(0,0,0,0.8)] cursor-pointer group border border-white/5"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image 
              src={svc.img} 
              alt={svc.category} 
              fill 
              className="object-cover" 
              unoptimized
              priority={idx === 0}
            />
            
            {/* Button Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center z-10">
              <a href={svc.href} className="bg-white/95 backdrop-blur-sm px-8 py-3 rounded-full text-[#1F1F1F] font-semibold text-[13px] uppercase tracking-widest hover:bg-[#C89A47] hover:text-white transition-colors flex items-center gap-3 shadow-2xl scale-95 group-hover:scale-100 duration-500">
                Explore Service
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic Title (Desktop Only) */}
      <div className="hidden md:flex relative z-30 mt-10 px-6 flex-col items-center text-center">
        <h3 ref={titleRef} className="font-serif text-[36px] lg:text-[42px] text-white min-h-[50px]">
          {/* Populated by GSAP */}
        </h3>
      </div>

      {/* Mobile Normal Scroll Section */}
      <div className="md:hidden flex flex-col px-6 pb-20 gap-16">
        {servicesData.map((svc, idx) => (
          <div key={svc.category} className="mobile-service-panel flex flex-col gap-6">
            <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden shadow-lg border border-white/10 group">
              <Image src={svc.img} alt={svc.category} fill className="object-cover" unoptimized />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href={svc.href} className="bg-white/95 px-6 py-3 rounded-full text-[#1F1F1F] font-semibold text-[12px] uppercase tracking-widest flex items-center gap-2 shadow-xl">
                  Explore
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-2">
                <span className="font-serif text-[18px] italic text-[#C89A47]">0{idx + 1}</span>
                <div className="h-[1px] flex-1 bg-white/20" />
              </div>
              <h3 className="font-serif text-[28px] text-white">{svc.category}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Featured Projects ───────────────────────────────────── */
function FeaturedProjects() {
  const projects = [
    {
      title: "The Glass Pavilion",
      category: "Residential",
      location: "Nagercoil",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBR_fo2_CyHNYySkdd6srb36FQoCsJr2FtIL3mTiMTy3rGXsHJ5Iih5ciDI9TbJSjH9OdkxWJd1d8gy-E2uQpYXQefrmuYDkTw1QtPfy1Z__ura1QnGA7OngCnNn6GNSK3IHvUjiEgYpKJBdzLBiMlWXHOI1jtS3ohN4kvS2Cb2HnB-_tO5RM3qGewtQ-H0j8b6YMv5rzmjnuVuuaTewMxO3W11Q1Pkscqxll_xD1lXYqeldaMXFSfHg",
      large: true,
    },
    {
      title: "Oak & Marble Estate",
      category: "Turnkey",
      location: "Kanyakumari",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6OjLQPm1eIBjpK4ChN3-L7UJ3Bz8GUvB0nd_IaPxe0mrZzj-64E_Gs1sSrqVilOGrAotp1Zrwh4a8oBh-JHQXw8M-ys-OUXRtSfOLq1ZzFLyLVqVJTVvEF2YLUOGrjVF3Qa7mlPEofIlzqbiOi_39r70-8o5ybiLIUqJbQUT5VtFgw0n1IpGsYW3hlvTV7oeFNi-edSPiVyeHTyNa09MgcuQB4k2CAcxBa0PSDpfxhW58BGPQjJUinQ",
      large: false,
    },
    {
      title: "Urban Retreat",
      category: "Interior",
      location: "Trivandrum",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQn1piHpoqb26Itm5N3HjqtSz8N-_O13S8AJ-i7XNSXpzzENymz14054sQR-iVGGlrLt6IYyN2XlGRG5_Kpyqx1_tTArLwsLARyevotALnJpSefTDqztUNo6cAt-K_pajSuqumbV1-dZoEYo8r3LFpnuPE7aXI9iKi_RjlrNBGvXaJn9fl-u6qg6q902w09kkD9vnb-t5jh-rq2m6yS2dWnflAl0YP5AnyF5DJ17bfrX3YIA3Cq4mGcw",
      large: false,
    },
  ];

  const [large, ...small] = projects;

  return (
    <section className="py-20 md:py-40 px-6 md:px-16 max-w-[1440px] mx-auto bg-white rounded-[40px] my-16 shadow-[0_10px_50px_rgba(0,0,0,0.02)]">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <span className="text-label-caps text-[#C89A47] tracking-widest">Featured Work</span>
          <h2 className="text-headline-xl text-[#1F1F1F] mt-4 max-w-2xl">
            A Curated Selection of Our Finest Projects.
          </h2>
        </div>
        <button className="border-b border-[#C89A47] text-[#C89A47] text-label-caps pb-1 hover:text-[#1F1F1F] hover:border-[#1F1F1F] transition-colors whitespace-nowrap">
          View All Projects
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Large Feature */}
        <div className="md:col-span-8 group cursor-pointer">
          <div className="rounded-[28px] overflow-hidden img-zoom aspect-[4/3] md:aspect-[16/9]">
            <Image
              src={large.img}
              alt={large.title}
              width={1200}
              height={675}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
          <div className="mt-6 flex justify-between items-start">
            <div>
              <h3 className="text-headline-md text-[#1F1F1F] mb-1">{large.title}</h3>
              <span className="text-label-caps text-[#8A8A8A]">
                {large.category} · {large.location}
              </span>
            </div>
            <div
              className="w-12 h-12 rounded-full border border-[#E7E0D4] flex items-center justify-center
                            group-hover:bg-[#C89A47] group-hover:text-white group-hover:border-[#C89A47] transition-all duration-300"
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                arrow_outward
              </span>
            </div>
          </div>
        </div>

        {/* Small Projects */}
        <div className="md:col-span-4 flex flex-col gap-10 md:mt-28">
          {small.map((p) => (
            <div key={p.title} className="group cursor-pointer">
              <div className="rounded-[24px] overflow-hidden img-zoom aspect-[4/5]">
                <Image
                  src={p.img}
                  alt={p.title}
                  width={600}
                  height={750}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <div className="mt-4">
                <h3 className="text-headline-md text-[#1F1F1F] mb-1">{p.title}</h3>
                <span className="text-label-caps text-[#8A8A8A]">
                  {p.category} · {p.location}
                </span>
              </div>
            </div>
          ))}
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
    <section className="py-20 md:py-40 px-6 md:px-16 max-w-[1440px] mx-auto bg-[#F8F4EE]">
      <div className="mb-16 flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <span className="text-label-caps text-[#C89A47] tracking-widest">Why Choose Us</span>
          <h2 className="text-headline-xl text-[#1F1F1F] mt-4 max-w-xl">
            Built on Trust, Delivered with Excellence.
          </h2>
        </div>
        <p className="text-body-lg text-[#8A8A8A] max-w-md md:mt-12">
          Six pillars that define our promise to every client who chooses SMS Construction.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {whyItems.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-[24px] p-8 border border-[#E7E0D4]/30
                       hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] hover:-translate-y-1
                       transition-all duration-400 group"
          >
            <span
              className="material-symbols-outlined text-[#C89A47] mb-6 block"
              style={{ fontSize: 32 }}
            >
              {item.icon}
            </span>
            <h3 className="font-sans font-semibold text-[18px] text-[#1F1F1F] mb-3">{item.title}</h3>
            <p className="text-[#8A8A8A] text-[14px] leading-relaxed">{item.desc}</p>
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
        <FeaturedProjects />
        <GalleryStrip />
        <WhySMS />
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
