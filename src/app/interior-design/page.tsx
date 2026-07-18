"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── Key Spaces grid ─────────────────────────────────── */
const spaces = [
  {
    colSpan: "md:col-span-8",
    height: "h-[600px]",
    marginTop: "",
    label: "Living Environments",
    title: "The Social Hearth",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDu8e95pXVMGM03kuX9XjUvW8KK_nMprODSBCGQapLM3eowKJ5lY2mop_2u_lh7hB6xRxdFzGa17VGWGYt_8NdEzW6AVOCQz_ddDGQ7bzuEu3fyE-Zozx5h_uIWbka-Zr3dvH6VLFftByacCFoPZE48tdpB2d3s1oycSg0XxBJrjRJuHLHKDpLAs4QtqSQLubImvoPfiNzsgd2F0arXNw8-nwgq1OgzUTN_cYsab179GE1cDd3XoqvR",
    alt: "Luxurious living room interior with cream modular sofa and teak coffee table",
  },
  {
    colSpan: "md:col-span-4",
    height: "h-[600px]",
    marginTop: "md:mt-12",
    label: "Modular Systems",
    title: "Culinary Precision",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLYkHmnxZIDSEf8WY0IDSLimxJ5ApY7Q_uu7oRG2pkqAOZNiVJmxNp2dHWXKR9fHqFMvRDESg9KDIergPC8y-_B2RQfPPP_yVToeEkg4BXw7r36eFMo-TCxKfl5_wbykDyy2dOslt1moWUohkniIkgYWW3kChJBpF-bObOKT1lzsDK5WrInlLhOCRdWLzzSC--X4aE_XaWrSTUH12xnp3mFdkCR9BV3dFvjxFntllUx46IzWWbFuwk",
    alt: "Sophisticated modular kitchen with charcoal cabinetry and marble countertops",
  },
  {
    colSpan: "md:col-span-4",
    height: "h-[500px]",
    marginTop: "md:-mt-12",
    label: "Intimate Retreats",
    title: "Master Sanctuaries",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZrQIhhU6G3J5RKRmGwOSfhnD3BnlSO2Q6J6C6UgI3afmsbpe-EAEGGMUIIe1x1otWs07-hwdsV9ZRuD7Y3lOxhLPj_g4DHiLYV7fCDcx2p5B8rgHCN7fAaAMngts_xenKtn6oFDIP3oSJhCPy1jEONlCExeENKaIxYrmzRLvxdhbERdTRbEzyaBDMn1kogAA1IDU0DBmnkyZRjFLRxWnhJNJiK8BsF9ntut6ivV4vceoWAdRVYIX",
    alt: "Serene luxury bedroom with custom upholstered headboard in beige linen",
  },
  {
    colSpan: "md:col-span-8",
    height: "h-[500px]",
    marginTop: "",
    label: "Storage Architecture",
    title: "Bespoke Closets",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAu-EsIC0lQ3ICdSoyJJsSM5jYzjC30Bbb0wIRJJ9TVyNMrtbYSh67LSDluKK5xiD0xbOwyKQALdDyuTPvS23Hkk0QizGYAcVghkQyAilMe3PF7WUI8xB5YUtpVbU51VUN2E3g-IGzBeEn22lxXmnfmIPUe2MbYzb9kLMd8heavMZI13YvYLI2IRYqbEMPnnH65aFaJ4DnpSxqlcrp0sdX79mNYcHk_almjT5mYn476GC11oQlvhr5c",
    alt: "Walk-in wardrobe boutique with glass-fronted cabinets and LED lighting",
  },
];

/* ─── Materials ───────────────────────────────────────── */
const materials = [
  {
    icon: "nature",
    title: "Sustainable Teak & Oak",
    desc: "Ethically sourced hardwoods that bring warmth and structural longevity to every corner.",
  },
  {
    icon: "texture",
    title: "Hand-Inlaid Stone",
    desc: "Natural stones selected for their unique veining and finished to highlight their tactile depth.",
  },
  {
    icon: "precision_manufacturing",
    title: "Architectural Bronze",
    desc: "Custom metal details that provide a technical, modern edge to traditional craftsmanship.",
  },
];

/* ─── Process Steps ───────────────────────────────────── */
const processSteps = [
  {
    num: "01",
    title: "Discovery & Mood",
    desc: "We sit with you to understand your lifestyle, aesthetic preferences, and the emotional intent for each space.",
  },
  {
    num: "02",
    title: "Conceptual Design",
    desc: "3D visualizations and material samples bring the vision to life before a single brick is laid.",
  },
  {
    num: "03",
    title: "Curation & Build",
    desc: "Our in-house artisans and trusted partners execute the design with obsessive attention to detail.",
  },
  {
    num: "04",
    title: "Final Handover",
    desc: "A fully styled, move-in-ready home delivered on schedule with comprehensive quality checks.",
  },
];

/* ─── Cost Accordion ──────────────────────────────────── */
const costFactors = [
  {
    q: "Material Quality Grades",
    a: "Costs vary significantly based on the choice of materials. Premium hardwood vs. ply with laminate, or natural marble vs. quartz. We provide three tiered material options for every project to match your budgetary comfort.",
  },
  {
    q: "Customization Depth",
    a: "Fully bespoke furniture and unique architectural interventions (like mezzanine floors or custom wall moldings) increase complexity and cost compared to standard modular layouts.",
  },
  {
    q: "Technology Integration",
    a: "Smart lighting systems, hidden audio-visual setups, and automated climate control are modern luxuries that impact the final project valuation.",
  },
];

export default function InteriorDesign() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  return (
    <>
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end pt-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh5UvjPnhu5HYF32VOaERZC_ulkPEvgeYWkNCgwKUQT9uTuhXLRu78Ml__1X1-WlF3M1tQ6mhespZH8ZhI-Stw4-Bv7ZvZvHSQCbpnbnFBkkHtYrdR3hxcj-5LLTHRRTFPI2U-kWQt-w1Ny5LUI_3n3iGZXieUPFLpDS8xMoFhtJx42KFq-rw_mRUGkD06KdPZAANalfxyP-3k_d1GifFLqRRdfUR6HSMPneXwPExMTn8uKVtsnHaS"
            alt="Luxury interior design — cinematic dining space in Nagercoil"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/10" />
          {/* fade-to-page-bg at bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F8F4EE]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-20 pb-24">
          <div className="max-w-3xl">
            <span className="text-label-caps text-[#795825] mb-4 block">Curated Living Spaces</span>
            <h1 className="font-serif font-bold text-[48px] md:text-[84px] leading-[1.05] tracking-[-0.02em] text-[#1F1F1F] mb-8">
              Interior Designers<br />in Nagercoil
            </h1>
            <p className="font-sans text-[18px] leading-[1.7] text-[#68645D] max-w-xl mb-12">
              We transform architectural shells into soulful sanctuaries. Our Nagercoil-based studio
              specializes in bespoke interiors that balance traditional warmth with contemporary precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#1F1F1F] text-white font-sans font-semibold text-[16px] px-8 py-4 rounded-full hover:scale-105 transition-all shadow-lg">
                Start Your Project
              </button>
              <button className="border border-[#795825] text-[#795825] font-sans font-semibold text-[16px] px-8 py-4 rounded-full hover:bg-[#795825]/5 transition-all">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Spaces ───────────────────────────────────── */}
      <section className="py-24 md:py-40 bg-[#F8F4EE]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          {/* Section header */}
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-8">
            <h2 className="font-serif font-bold text-[32px] md:text-[48px] leading-[1.15] text-[#1F1F1F] max-w-xl">
              Signature Spaces Crafted with Intent
            </h2>
            <p className="font-sans text-[16px] leading-[1.7] text-[#68645D] max-w-md">
              Every room tells a story. From the social heart of the living room to the intimate retreat
              of the bedroom, we design for the rhythm of your life.
            </p>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {spaces.map((space) => (
              <div
                key={space.title}
                className={`${space.colSpan} ${space.marginTop} group cursor-pointer overflow-hidden rounded-[28px] relative ${space.height}`}
              >
                <Image
                  src={space.img}
                  alt={space.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 66vw"
                  unoptimized
                />
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Label */}
                <div className="absolute bottom-8 left-8 text-white">
                  <span className="text-label-caps text-[11px] tracking-[0.18em] font-semibold uppercase block mb-2 opacity-80">
                    {space.label}
                  </span>
                  <h3 className="font-serif font-bold text-[28px] md:text-[32px] leading-tight">
                    {space.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Materials Section ─────────────────────────────── */}
      <section className="py-24 md:py-40 bg-[#F2EDE3]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            {/* Layered image composition */}
            <div className="relative h-[600px]">
              <div className="absolute top-0 right-0 w-4/5 h-[450px] rounded-[28px] overflow-hidden shadow-2xl z-10">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwprjTqi_8K9UWSVMH2LJ2e6RBTXv9L6aDJFJBMNYB1P9qi4ZTq6D9y8XvbdtseSczyoZVaeI80kvC_JroKbftCeCgY-AokTGsZ4D0LFzYcIELfjde_no2uvN_wEe1qI4RXIqaDysh6c_yo5fODKcYnk13tT8SVY6dT7w_KA204n64Z119SAZRoZ5yXRVUvXn4J6d_OfvUrvtrycYw2SG6mOVCwKh0kf8XoKaorPNwo_OCaycDGMS5"
                  alt="Premium material palette — oak, marble, bronze and fabric samples"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute bottom-0 left-0 w-3/4 h-[400px] rounded-[28px] overflow-hidden border-8 border-[#F2EDE3] z-20 shadow-xl">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPJJQMe1s3IAn4zdrWvAzu3ZsYjXF8BuLwWrfjsoSFXMwRHO1iTa61gWZCig2i0MWLk92F0Ybpoa0_zB_VZipeTuf7f_om4oyVFgn-Z3qt1z9voHoJSk4hnlm2b5e9apKT6EDaHAV551M7aBaI2ttSXR9T66KxgF2kKQKUuECDWaY_UVOgkcxlRK6a4qTzG-MslpzZHF0ErP6qF3FdIhTtqIJgQiGHgYoLsgW43cu8vIyNQyrrtugM"
                  alt="Craftsman hands assembling bespoke wooden furniture in modern workshop"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

            {/* Text content */}
            <div>
              <span className="text-label-caps text-[#795825] mb-4 block">The Materiality of Home</span>
              <h2 className="font-serif font-bold text-[32px] md:text-[48px] leading-[1.15] text-[#1F1F1F] mb-8">
                Honest Materials, Expertly Sourced
              </h2>
              <p className="font-sans text-[16px] leading-[1.7] text-[#68645D] mb-12">
                We believe luxury is found in the integrity of materials. From sustainably harvested teaks
                to hand-finished marbles, we curate a palette that matures beautifully over time.
              </p>
              <div className="space-y-8">
                {materials.map((m, i) => (
                  <div
                    key={m.title}
                    className={`flex gap-6 items-start pb-8 ${i < materials.length - 1 ? "border-b border-[#E7E0D4]" : ""}`}
                  >
                    <span className="material-symbols-outlined text-[#795825] text-[32px] mt-0.5 shrink-0">
                      {m.icon}
                    </span>
                    <div>
                      <h4 className="font-sans font-semibold text-[18px] text-[#1F1F1F] mb-2">{m.title}</h4>
                      <p className="font-sans text-[16px] leading-[1.7] text-[#68645D]">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────── */}
      <section className="py-24 md:py-40 bg-[#F8F4EE]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-24">
            <span className="text-label-caps text-[#795825] mb-4 block uppercase">Our Methodology</span>
            <h2 className="font-serif font-bold text-[32px] md:text-[48px] leading-[1.15] text-[#1F1F1F] mb-6">
              A Journey of Transformation
            </h2>
            <p className="font-sans text-[16px] leading-[1.7] text-[#68645D]">
              Experience a seamless transition from your initial vision to the final key handover with
              our structured, transparent process.
            </p>
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {processSteps.map((step) => (
              <div key={step.num} className="relative">
                <div className="font-serif text-[72px] leading-none text-[#E7E0D4] mb-6 select-none italic font-bold">
                  {step.num}
                </div>
                <h3 className="font-sans font-semibold text-[18px] text-[#1F1F1F] mb-4">{step.title}</h3>
                <p className="font-sans text-[15px] leading-[1.7] text-[#68645D]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Investment Accordion ──────────────────────────── */}
      <section className="py-24 md:py-40 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-20">
          <h2 className="font-serif font-bold text-[32px] md:text-[48px] leading-[1.15] text-[#1F1F1F] mb-12 text-center">
            Understanding the Investment
          </h2>
          <div className="space-y-0">
            {costFactors.map((item, i) => (
              <div key={i} className="border-b border-[#E7E0D4] overflow-hidden">
                <button
                  className="w-full flex justify-between items-center py-8 text-left group"
                  onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                >
                  <span className="font-sans font-medium text-[20px] text-[#1F1F1F] group-hover:text-[#795825] transition-colors pr-8">
                    {item.q}
                  </span>
                  <span
                    className="material-symbols-outlined text-[#795825] transition-transform duration-300 shrink-0 text-[24px]"
                    style={{ transform: openAccordion === i ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    add
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{ maxHeight: openAccordion === i ? "400px" : "0px", opacity: openAccordion === i ? 1 : 0 }}
                >
                  <div className="pb-8 font-sans text-[16px] leading-[1.7] text-[#68645D]">
                    {item.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────── */}
      <section className="py-24 md:py-40 bg-[#F8F4EE] text-center px-6 md:px-20">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-serif font-bold text-[32px] md:text-[48px] leading-[1.15] text-[#1F1F1F] mb-8">
            Ready to define your space?
          </h2>
          <p className="font-sans text-[18px] leading-[1.7] text-[#68645D] max-w-2xl mx-auto mb-12">
            Let&apos;s discuss your vision for your home in Nagercoil. Our design consultants are ready
            to guide you through the possibilities.
          </p>
          <button className="bg-[#1F1F1F] text-white font-sans font-semibold text-[16px] px-12 py-5 rounded-full hover:scale-105 transition-all shadow-xl">
            Book a Consultation
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
