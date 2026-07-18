"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── Data ────────────────────────────────────────────── */
const services = [
  {
    type: "large",
    colSpan: "md:col-span-2",
    bg: "bg-white",
    icon: "home_work",
    iconFill: true,
    iconColor: "text-[#795825]",
    title: "Residential Masterpieces",
    desc: "From minimalist urban dwellings to sprawling heritage estates, we build homes that are sanctuaries of peace and reflections of personal success.",
    bullets: ["Luxury Villas", "Sustainable Eco-Homes", "Multi-Storey Apartments"],
    cta: "Discover Residential",
    ctaType: "link",
    bgImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBkn7cOI926xjyrHCdrqWpLGSNXtG8OE7q3eCx1Ma8r_ZKUC7G9EGSMFTVFik1InRf76qZsMbVV07EFxEHE7cHjPltIbKWZ6MzXbeLjXgHX0TyXMzsQ6wP6jy1oSKxgVy8wfZIE4oXbbjRLLsvzJ8_PoJz5UQjN7dHacCF_u8gyUjrB5dYSW9Y2BbZbntIWP0YtXlhVWtrPL49UIFiCfx6Tq-wNJJARNtd9SNMy5-WLYiv4v_q3wDoK",
  },
  {
    type: "dark",
    colSpan: "",
    bg: "bg-[#1D1C19]",
    icon: "business",
    iconFill: false,
    iconColor: "text-[#e5c093]",
    title: "Commercial Spaces",
    desc: "Functional, high-efficiency corporate offices and retail landmarks designed for growth.",
    cta: "Explore Works",
    ctaType: "button",
  },
  {
    type: "light",
    colSpan: "",
    bg: "bg-white",
    icon: "edit_document",
    iconFill: false,
    iconColor: "text-[#795825]",
    title: "Planning & Permits",
    desc: "We handle the complexities of local Nagercoil regulations, zoning, and detailed site planning.",
    cta: "Process Details",
    ctaType: "arrow",
  },
];

const processSteps = [
  { num: "01", title: "Discovery", desc: "Understanding your lifestyle, needs, and the unique potential of your site in Nagercoil." },
  { num: "02", title: "Conceptualization", desc: "Drafting architectural layouts that balance aesthetic beauty with functional efficiency." },
  { num: "03", title: "Permitting", desc: "Navigating the local regulatory landscape to ensure a smooth, legal building process." },
  { num: "04", title: "Foundation", desc: "The critical structural phase, using premium-grade materials and precision soil testing." },
  { num: "05", title: "Finishing", desc: "The meticulous application of interior and exterior elements that define luxury." },
  { num: "06", title: "Handover", desc: "Final inspection and a seamless transition to your new architectural sanctuary." },
];

const materials = [
  { title: "Grade-A Steel", desc: "Earthquake-resistant structural foundations." },
  { title: "Artisan Teak", desc: "Ethically sourced premium wood finishings." },
  { title: "Imported Stones", desc: "Curated marble and granite from global quarries." },
  { title: "Eco-Concrete", desc: "High-performance sustainable building mixes." },
];

export default function ConstructionPage() {
  const [formData, setFormData] = useState({
    name: "",
    projectType: "Residential Villa",
    details: "",
  });

  return (
    <>
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
        {/* BG Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBphZfontTV7j6I-52a6w3NrqyqBMMc8J6SwESuWhuDVdkPR9fyj9oVnXWoXyMK4EfUQ2ugNkLBhUpxoRc4JnyCsWAjMfBB8pNGAcPDZkJXLou04QinJqN6Nz_xpinB6HQkehfT3XJbkAO8R-Jc3evKGVSS4I5b4G1bcbouslSLN33TGVu8_EYTsgIKLfmyR3p9oXKuE7jfAE6nPNLq8AaEnHI8cuACoydVpMpTe-iAwL6P_ETitYj-"
            alt="Modern luxury villa in Nagercoil at sunset — SMS Construction"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-[#1D1C19]/40 z-10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 md:px-20 max-w-5xl w-full">
          <span className="font-sans font-semibold text-[12px] tracking-[0.15em] uppercase text-white/90 mb-6 block">
            Building the Future of Kanyakumari
          </span>
          <h1 className="font-serif font-bold text-[48px] md:text-[84px] leading-[1.05] tracking-[-0.02em] text-white mb-8">
            Construction Company<br />in Nagercoil
          </h1>
          <p className="font-sans text-[18px] leading-[1.7] text-white/90 max-w-2xl mx-auto mb-10">
            We transform architectural visions into enduring landmarks. Excellence in precision
            engineering and luxury residential crafting.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="bg-[#F8F4EE] text-[#1D1C19] font-sans font-semibold text-[13px] tracking-[0.15em] uppercase px-10 py-4 rounded-full hover:bg-white transition-colors w-full md:w-auto">
              Start Your Project
            </button>
            <button className="border border-white/40 text-white font-sans font-semibold text-[13px] tracking-[0.15em] uppercase px-10 py-4 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm w-full md:w-auto">
              View Portfolio
            </button>
          </div>
        </div>

        {/* Bounce arrow */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <span className="material-symbols-outlined text-white text-[30px]">keyboard_double_arrow_down</span>
        </div>
      </section>

      {/* ── Philosophy / Intro ────────────────────────────── */}
      <section className="py-24 md:py-40 px-6 md:px-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left text */}
          <div className="md:col-span-5 mb-12 md:mb-0">
            <span className="font-sans font-semibold text-[12px] tracking-[0.15em] uppercase text-[#795825] mb-4 block">
              Architectural Integrity
            </span>
            <h2 className="font-serif font-bold text-[32px] md:text-[48px] leading-[1.15] text-[#1F1F1F] mb-8">
              Where Precision Meets Artistry.
            </h2>
            <p className="font-sans text-[18px] leading-[1.7] text-[#68645D] mb-6">
              At SMS Construction, we believe that a building is more than just a structure; it is a
              legacy. Based in Nagercoil, we combine traditional craftsmanship with modern engineering
              to deliver unparalleled results.
            </p>
            <div className="h-px w-24 bg-[#795825] mb-6" />
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#795825]">verified_user</span>
                <span className="font-sans font-medium text-[16px] text-[#1F1F1F]">Certified Structural Integrity</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#795825]">architecture</span>
                <span className="font-sans font-medium text-[16px] text-[#1F1F1F]">Bespoke Architectural Design</span>
              </div>
            </div>
          </div>

          {/* Right image block */}
          <div className="md:col-span-7 relative">
            <div className="rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyzSqguT_CG4dDNc40ENJqUenHE48xgelLoh0RUdKoe7gU1L3QMKhbuQNaZG0G5fHLa_qqged4HvrHHsK1MopflLauMXt4NmnifxZ5ik6cY6Sk7eRx0YopCgdjNuK3JqLw-vpaiNb9g-w6Snzfr-ROcw8-HA-mAX96HRb2QL-jraFBoR_ifF2mjimdKWH5AD2_cINWjW4XdrE60ZCLUl8aAkpqUHzDnDcQN3deK_LjzbpvDKOrYhtH"
                alt="Architectural blueprints with premium material samples on dark oak table"
                width={800}
                height={600}
                className="w-full h-[600px] object-cover"
                unoptimized
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-8 -left-8 bg-[#F2EDE3] p-10 rounded-[32px] hidden md:block shadow-xl max-w-xs border border-[#E7E0D4]">
              <h3 className="font-serif font-bold text-[32px] leading-[1.2] text-[#1D1C19] mb-2">
                15+ Years
              </h3>
              <p className="font-sans text-[15px] leading-[1.7] text-[#68645D]">
                Defining the skyline of Nagercoil with structural excellence and timeless design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Bento Grid ───────────────────────────── */}
      <section className="bg-[#F2EDE3] py-24 md:py-40">
        <div className="px-6 md:px-20 max-w-[1440px] mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <span className="font-sans font-semibold text-[12px] tracking-[0.15em] uppercase text-[#795825] mb-4 block">
              Our Specializations
            </span>
            <h2 className="font-serif font-bold text-[32px] md:text-[48px] leading-[1.15] text-[#1F1F1F]">
              Construction Expertise
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Large Card — Residential */}
            <div className="md:col-span-2 bg-white rounded-[40px] p-12 relative overflow-hidden group border border-[#E7E0D4] shadow-[0_20px_40px_rgba(23,23,20,0.04)]">
              <div className="relative z-10 flex flex-col h-full">
                <div>
                  <span
                    className="material-symbols-outlined text-[40px] text-[#795825] mb-6 block"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    home_work
                  </span>
                  <h3 className="font-serif font-bold text-[32px] leading-[1.2] text-[#1F1F1F] mb-4">
                    Residential Masterpieces
                  </h3>
                  <p className="font-sans text-[16px] leading-[1.7] text-[#68645D] max-w-md mb-8">
                    From minimalist urban dwellings to sprawling heritage estates, we build homes that
                    are sanctuaries of peace and reflections of personal success.
                  </p>
                  <ul className="space-y-3 mb-10">
                    {["Luxury Villas", "Sustainable Eco-Homes", "Multi-Storey Apartments"].map((item) => (
                      <li key={item} className="flex items-center gap-2 font-sans font-semibold text-[12px] tracking-[0.15em] uppercase text-[#68645D]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#795825] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#"
                  className="font-sans font-semibold text-[12px] tracking-[0.15em] uppercase text-[#795825] border-b border-[#795825] inline-block w-fit pb-1 transition-all"
                >
                  Discover Residential
                </a>
              </div>
              {/* BG image overlay */}
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkn7cOI926xjyrHCdrqWpLGSNXtG8OE7q3eCx1Ma8r_ZKUC7G9EGSMFTVFik1InRf76qZsMbVV07EFxEHE7cHjPltIbKWZ6MzXbeLjXgHX0TyXMzsQ6wP6jy1oSKxgVy8wfZIE4oXbbjRLLsvzJ8_PoJz5UQjN7dHacCF_u8gyUjrB5dYSW9Y2BbZbntIWP0YtXlhVWtrPL49UIFiCfx6Tq-wNJJARNtd9SNMy5-WLYiv4v_q3wDoK"
                  alt="Luxury residential staircase render"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

            {/* Dark Card — Commercial */}
            <div className="bg-[#1D1C19] text-[#F8F4EE] rounded-[40px] p-12 border border-[#1D1C19] shadow-[0_20px_40px_rgba(23,23,20,0.04)] flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-[40px] text-[#e5c093] mb-6 block">business</span>
                <h3 className="font-serif font-bold text-[32px] leading-[1.2] mb-4">Commercial Spaces</h3>
                <p className="font-sans text-[16px] leading-[1.7] text-[#F8F4EE]/70">
                  Functional, high-efficiency corporate offices and retail landmarks designed for growth.
                </p>
              </div>
              <button className="bg-[#F8F4EE] text-[#1D1C19] font-sans font-semibold text-[12px] tracking-[0.15em] uppercase px-6 py-3 rounded-full mt-8 self-start hover:bg-white transition-colors">
                Explore Works
              </button>
            </div>

            {/* Light Card — Planning */}
            <div className="bg-white rounded-[40px] p-12 border border-[#E7E0D4] shadow-[0_20px_40px_rgba(23,23,20,0.04)] flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-[40px] text-[#795825] mb-6 block">edit_document</span>
                <h3 className="font-serif font-bold text-[32px] leading-[1.2] text-[#1F1F1F] mb-4">
                  Planning &amp; Permits
                </h3>
                <p className="font-sans text-[16px] leading-[1.7] text-[#68645D]">
                  We handle the complexities of local Nagercoil regulations, zoning, and detailed site planning.
                </p>
              </div>
              <a
                href="#"
                className="font-sans font-semibold text-[12px] tracking-[0.15em] uppercase text-[#795825] flex items-center gap-2 group mt-8"
              >
                Process Details
                <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </a>
            </div>

            {/* Wide Card — Industrial Quality */}
            <div className="md:col-span-2 bg-white rounded-[40px] p-12 border border-[#E7E0D4] shadow-[0_20px_40px_rgba(23,23,20,0.04)] grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="material-symbols-outlined text-[40px] text-[#795825] mb-6 block">construction</span>
                <h3 className="font-serif font-bold text-[32px] leading-[1.2] text-[#1F1F1F] mb-4">
                  Industrial Grade Quality
                </h3>
                <p className="font-sans text-[16px] leading-[1.7] text-[#68645D]">
                  Integrating industrial-strength materials with fine architectural finishings to ensure
                  longevity in the humid coastal climate of Kanyakumari.
                </p>
              </div>
              <div className="rounded-[24px] overflow-hidden h-64 relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUecCBc6LTh8fKtOha47Fe_2GFXl2qv3YinrkfapKZ5VUAYrWFETYbGRb2R78QKNxXPvV7-UGZLZaXfGG0BmHIc6ilAxCrku03kE553zXtl-lDukuLkqboqb_LFZWOgLVLhiduMx4UBVeJVzFhO64mn-UidQs7GGGkMu1i0TeTqh59l867NjSSxfZeepZzatisCegk8K3E0TgPn-_UkWMTJrkBk3aAEh0ZFsbncyko-mBbss7J3n4d"
                  alt="Steel reinforcement cage for premium foundation construction"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Process: 6 Steps ──────────────────────────── */}
      <section className="py-24 md:py-40 px-6 md:px-20 max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-2xl">
            <span className="font-sans font-semibold text-[12px] tracking-[0.15em] uppercase text-[#795825] mb-4 block">
              The SMS Method
            </span>
            <h2 className="font-serif font-bold text-[32px] md:text-[48px] leading-[1.15] text-[#1F1F1F]">
              How We Build Your Legacy
            </h2>
          </div>
          <div className="hidden md:block text-right">
            <p className="font-sans text-[16px] leading-[1.7] text-[#68645D] max-w-xs">
              A transparent, structured approach from the first sketch to the final handover.
            </p>
          </div>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12">
          {processSteps.map((step) => (
            <div key={step.num} className="relative group">
              {/* Large ghost number */}
              <div className="font-serif text-[120px] leading-none text-[#eae8e3] absolute -top-16 -left-4 z-0 opacity-50 group-hover:text-[#ffd395] transition-colors select-none font-bold">
                {step.num}
              </div>
              <div className="relative z-10 pt-10">
                <h4 className="font-serif font-bold text-[28px] leading-[1.2] text-[#1D1C19] mb-4">{step.title}</h4>
                <p className="font-sans text-[15px] leading-[1.7] text-[#68645D]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Quality & Materials ───────────────────────────── */}
      <section className="py-24 md:py-40 overflow-hidden">
        <div className="px-6 md:px-20 max-w-[1440px] mx-auto">
          <div className="bg-[#1D1C19] rounded-[60px] overflow-hidden flex flex-col lg:flex-row">
            {/* Text side */}
            <div className="lg:w-1/2 p-12 md:p-24 flex flex-col justify-center">
              <span className="font-sans font-semibold text-[12px] tracking-[0.15em] uppercase text-[#e5c093] mb-6 block">
                Uncompromising Quality
              </span>
              <h2 className="font-serif font-bold text-[32px] md:text-[48px] leading-[1.15] text-[#F8F4EE] mb-10">
                The Materials of Permanence.
              </h2>
              <div className="grid grid-cols-2 gap-8 mb-12">
                {materials.map((m) => (
                  <div key={m.title}>
                    <h5 className="font-serif font-bold text-[#e5c093] text-[24px] leading-[1.2] mb-2">{m.title}</h5>
                    <p className="font-sans text-[14px] leading-[1.6] text-[#F8F4EE]/60">{m.desc}</p>
                  </div>
                ))}
              </div>
              <button className="border border-[#e5c093] text-[#e5c093] font-sans font-semibold text-[12px] tracking-[0.15em] uppercase px-8 py-4 rounded-full hover:bg-[#e5c093] hover:text-[#1D1C19] transition-colors w-fit">
                Download Quality Standards
              </button>
            </div>
            {/* Image side */}
            <div className="lg:w-1/2 h-[400px] lg:h-auto relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIxoIeSOWk8JBHRW1LZHq3sGlJiENgcWNQrm2zDee91kxfKcu7vASzmfy1pooj94G3OUHUwl_XJme2TYcPbGqgWqXWjToEE5sy27piYqxer_vWTXzc0ldz7Hcwnw0z7hMx3vp63v8Cje96BobOTw9uhy3UCE8ueTifxCQIr9neKCWEmGwPEb4qT5V6SMTm2OYYWIoKbuWXsTxUzYCRAYJpW_EQu3eAFC8-6_u_N4H0Q6JrXMkvkFxQ"
                alt="Luxury building materials — marble, brushed brass and textured concrete"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Enquiry Form CTA ──────────────────────────────── */}
      <section className="py-24 md:py-40 bg-[#F8F4EE] px-6 md:px-20 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="font-sans font-semibold text-[12px] tracking-[0.15em] uppercase text-[#795825] mb-4 block">
            Ready to Build?
          </span>
          <h2 className="font-serif font-bold text-[32px] md:text-[48px] leading-[1.15] text-[#1F1F1F] mb-8">
            Start Your Journey with SMS Construction.
          </h2>
          <p className="font-sans text-[18px] leading-[1.7] text-[#68645D] mb-12">
            Whether it&apos;s a bespoke villa or a commercial landmark, let&apos;s discuss your vision
            and make it a reality in Nagercoil.
          </p>

          {/* Enquiry Form */}
          <form
            className="bg-white p-8 md:p-12 rounded-[40px] shadow-[0_20px_40px_rgba(23,23,20,0.04)] text-left border border-[#E7E0D4]"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-2">
                <label className="font-sans font-semibold text-[12px] tracking-[0.15em] uppercase text-[#68645D]/70">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border-0 border-b border-[#E7E0D4] focus:ring-0 focus:border-[#795825] py-3 px-0 transition-colors bg-transparent outline-none font-sans text-[16px] text-[#1F1F1F] placeholder:text-[#8A8A8A]"
                />
              </div>
              <div className="space-y-2">
                <label className="font-sans font-semibold text-[12px] tracking-[0.15em] uppercase text-[#68645D]/70">
                  Project Type
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full border-0 border-b border-[#E7E0D4] focus:ring-0 focus:border-[#795825] py-3 px-0 transition-colors bg-transparent outline-none font-sans text-[16px] text-[#1F1F1F] cursor-pointer"
                >
                  <option>Residential Villa</option>
                  <option>Commercial Complex</option>
                  <option>Renovation</option>
                  <option>Consultation</option>
                </select>
              </div>
            </div>
            <div className="space-y-2 mb-12">
              <label className="font-sans font-semibold text-[12px] tracking-[0.15em] uppercase text-[#68645D]/70">
                Brief Project Details
              </label>
              <textarea
                rows={3}
                placeholder="Tell us about your dream project..."
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full border-0 border-b border-[#E7E0D4] focus:ring-0 focus:border-[#795825] py-3 px-0 transition-colors bg-transparent resize-none outline-none font-sans text-[16px] text-[#1F1F1F] placeholder:text-[#8A8A8A]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#1D1C19] text-white font-sans font-semibold text-[14px] tracking-[0.15em] uppercase py-5 rounded-full hover:scale-[1.02] transition-transform shadow-lg"
            >
              Submit Project Inquiry
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
