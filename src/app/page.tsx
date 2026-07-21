"use client";

import { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";

/* ─── Hero ────────────────────────────────────────────────── */
function Hero() {
  return (
    <header className="relative flex min-h-[720px] w-full items-center justify-center overflow-hidden px-6 pb-24 pt-32 md:px-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpeg"
          alt="Luxury Construction & Interior Design Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Soft white gradient overlay (15–20%) from left to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#171714]/68 via-[#171714]/28 to-[#171714]/10" />
      </div>

      {/* Split-feel container */}
      <div className="relative z-10 mx-auto grid min-h-[66vh] w-full max-w-[1280px] grid-cols-1 items-center gap-8 lg:grid-cols-12">
        {/* 45% Left Content (6/12 cols) */}
        <div className="col-span-1 flex max-w-2xl flex-col justify-center rounded-[2rem] p-7 text-left animate-fade-up sm:p-10 lg:col-span-7 lg:p-12">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e3c381]">Nagercoil&apos;s design &amp; build studio</p>
          <h1 className="font-serif text-[clamp(3.2rem,7vw,7.25rem)] font-bold uppercase leading-[0.86] tracking-[-0.055em] text-white mb-8">
            DESIGN.<br />
            BUILD.<br />
            <span className="text-[#C89A47]">COMPLETE.</span>
          </h1>

          <div className="mb-10 space-y-3 border-l-2 border-[#e3c381] pl-5">
            <p className="font-sans text-[17px] font-medium text-white/90 leading-tight sm:text-[20px]">
              Interior Design &amp; Construction
            </p>
            <p className="font-sans text-[17px] font-medium text-white/90 leading-tight sm:text-[20px]">
              Luxury Living Spaces
            </p>
            <p className="font-sans text-[17px] font-medium text-white/90 leading-tight sm:text-[20px]">
              Modern Architecture Solutions
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="bg-[#C89A47] text-white font-sans font-semibold text-[16px] px-8 py-5 rounded-full
                         hover:bg-[#b08436] transition-all duration-300 flex items-center justify-center gap-2
                         shadow-[0_8px_30px_rgba(200,154,71,0.35)] hover:-translate-y-0.5"
            >
              <span>Explore Projects</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
            <button
              className="bg-white text-[#1F1F1F] border border-[#C89A47] font-sans font-semibold text-[16px] px-8 py-5 rounded-full
                         hover:bg-[#F8F4EE] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Book Consultation</span>
            </button>
          </div>
        </div>

        {/* 55% Right Space - remains empty to showcase the beautiful background image */}
        <div className="hidden lg:block lg:col-span-6 h-full" />
      </div>

      {/* Bottom Hero Divider: Smooth white wave shape */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20">
        <svg
          className="relative block w-full h-[40px] md:h-[80px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86C228.32,67.22,154.38,38.64,83.36,22.81,55.05,16.48,26.9,8.75,0,0V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="#FAF8F3"
          />
        </svg>
      </div>
    </header>
  );
}

/* ─── Statistics Section ──────────────────────────────────── */
function TrustStats() {
  const stats = [
    { icon: "star", value: "150+", label: "Projects Completed", desc: "Successfully delivered luxury residential and turnkey commercial spaces" },
    { icon: "history", value: "15+", label: "Years Experience", desc: "Crafting architectural landmarks with premium workmanship" },
    { icon: "sentiment_very_satisfied", value: "100%", label: "Happy Clients", desc: "Exceptional ratings from homeowners and studio partners" },
    { icon: "verified_user", value: "Premium", label: "Quality Commitment", desc: "Uncompromised materials and rigorous inspection checks" },
  ];

  return (
    <section className="relative z-30 mx-auto -mt-2 max-w-[1280px] px-6 py-12 md:px-10 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[20px] border border-[#E7E0D4] bg-white p-7 shadow-[0_12px_35px_rgba(23,23,20,0.045)] flex flex-col items-start hover:shadow-[0_20px_45px_rgba(23,23,20,0.08)] hover:-translate-y-1 transition-all duration-300 animate-fade-up"
          >
            {/* Gold Outline Icon */}
            <div className="w-12 h-12 rounded-full border border-[#C89A47]/40 flex items-center justify-center text-[#C89A47] mb-6">
              <span className="material-symbols-outlined text-[24px] font-light">{stat.icon}</span>
            </div>
            {/* Dark Numbers */}
            <div className="font-serif text-[42px] font-bold text-[#1F1F1F] leading-none mb-2">
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
const services = [
  {
    icon: "chair",
    title: "Home Interiors",
    desc: "Bespoke design solutions that transform your residential spaces into tranquil, luxurious havens tailored to your lifestyle.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_QiVkaGPYs9L0csaJdzofHNJU8nM7LFQYA4ofvisF4GuyJx4GG1eomH2eIpZ110hF2G867AdUlnseriXdOeFJKJYlshuC5_gNIduVDuBldQGmiywCBOZh1ei89OzALGl-3Un5ULM-ePMI6oeayk8JLjXmLMPpzjWO5hpH-mkFRzYfIQq_QvvZqwDQa5E-TstS3vXLzW1IAnlbYT-NehTBB2KjGgRujBMNbqw_yegnFzyoCFEocSWRlA",
  },
  {
    icon: "key",
    title: "Turnkey Interiors",
    desc: "End-to-end execution from conceptualization to final styling, delivering a fully realized space without the hassle.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFNul2QCbN09c3eUXEUcInQcEEmiiAli4XO7dYZl-1inoGCjJX3vMuDfWx0uNXUqcqKI7Kr4XdDwQDrlZuMtLijfwo3VZIggJ8WLOiGS6cDx3ig_QP6m77ALGFNiNIVM7F28exTdkY3dmNyyI3HImaRcdRyWlesqZNGC0e_yEZfBcnjXO_Z5HYBqAchg32PM_A9Mz1aYCkyK4QWtYSOfHnjA8PKFs_PfWgM0llqSnFD-bDCHPxc--Dsg",
  },
  {
    icon: "architecture",
    title: "Residential Construction",
    desc: "Architecturally significant ground-up construction, focusing on precision, premium materials, and structural integrity.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4u1AD4rLUJ7mcmLXWBUJovupPnHFh9xCYqHc5SJM2HUmDb0kJ3EFg3geiC9i-DrDSrN6wxiroNj6AKPTUnQNGbXOKjpdgtXwl8q5H_y7S5p51hF4NkZTYepK7NmwxPeQO9toax-Pufkc5y6S8U6NSovIE9Xap9U7wx3wFs3WbsTx1bWddXbp7uocXaDWopHRnuc7CpqdH1m4rbqAvHRzPw5IN7TkE8QMCFtkRqUZW8eI6OyUVVT9Byg",
  },
  {
    icon: "home_repair_service",
    title: "Renovation",
    desc: "Respectful modernization of existing structures, breathing new life into spaces while honoring their original character.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSkCmntaraUof6hbip-9X-xubDCUnRDtP9xpeT-d80gsQzsYC3dDvWft8Q6fA40J2hOvPmjNjM29q-EZzEMnigFsQ5t2NIMw3Gkf1oM-n01XY8PNKcFRcQDxu5UAHk118rtKjDJZtz51FxYmpJIquGePz8gwO_tE4D78ZS0ZS6tNYhkXaG6hg7xBxYxJbi5LbH22EJbY-6y5nkekF6fbdNuNBNRy7Neel4DB9b3qsG6hbUIqtwYcvPxQ",
  },
];

function Services() {
  return (
    <section className="py-20 md:py-40 px-6 md:px-16 max-w-[1440px] mx-auto bg-[#F8F4EE]">
      <div className="mb-16">
        <span className="text-label-caps text-[#C89A47] tracking-widest">Our Services</span>
        <h2 className="text-headline-xl text-[#1F1F1F] mt-4 max-w-3xl">
          Everything You Need Under One Roof.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {services.map((svc) => (
          <div
            key={svc.title}
            className="group bg-white rounded-[28px] overflow-hidden
                       shadow-[0_4px_24px_rgba(0,0,0,0.03)]
                       flex flex-col border border-transparent
                       hover:border-[#E7E0D4] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)]
                       transition-all duration-500"
          >
            <div className="h-72 w-full img-zoom">
              <Image
                src={svc.img}
                alt={svc.title}
                width={800}
                height={450}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col flex-grow justify-between">
              <div>
                <span
                  className="material-symbols-outlined text-[#C89A47] mb-5 block"
                  style={{ fontSize: 28 }}
                >
                  {svc.icon}
                </span>
                <h3 className="text-headline-md text-[#1F1F1F] mb-3">{svc.title}</h3>
                <p className="text-[#8A8A8A] leading-relaxed text-[15px]">{svc.desc}</p>
              </div>
              <button
                className="mt-8 text-label-caps text-[#C89A47] flex items-center gap-2
                           group-hover:gap-4 transition-all duration-300"
              >
                Explore{" "}
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                  arrow_forward
                </span>
              </button>
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
