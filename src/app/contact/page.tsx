"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── Mock Data ───────────────────────────────────────── */
const contactCards = [
  {
    icon: "call",
    title: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: "chat",
    title: "WhatsApp",
    value: "+91 98765 43210",
    href: "https://wa.me/919876543210",
  },
  {
    icon: "mail",
    title: "Email",
    value: "hello@smsconstruction.com",
    href: "mailto:hello@smsconstruction.com",
  },
  {
    icon: "location_on",
    title: "Office Address",
    value: "Tower Road, Nagercoil, TN 629001",
    href: "#map",
  },
];

const nextSteps = [
  { num: "01", title: "Enquiry Received", desc: "We receive your online form details and analyze your architectural goals." },
  { num: "02", title: "Consultation Call", desc: "Our chief designer calls you to discuss materials, site locations, and style preferences." },
  { num: "03", title: "Site Visit", desc: "We carry out a detailed topographic inspection and soil review of your plot." },
  { num: "04", title: "Proposal & Cost", desc: "We present a comprehensive quote and material specs sheet tailored to your budget." },
  { num: "05", title: "Project Begins", desc: "Our experienced masonry and styling crews break ground to build your legacy." },
];

const faqs = [
  {
    q: "What happens during the free consultation?",
    a: "We discuss your vision, assess site feasibility if applicable, outline potential timelines, and provide a rough estimate of what your project might entail. It's a casual conversation to ensure we are the right fit for your needs.",
  },
  {
    q: "Do you conduct site visits before quoting?",
    a: "Absolutely. A detailed site visit is crucial for an accurate quotation. We assess topography, existing structures, and logistical access to provide a comprehensive proposal.",
  },
  {
    q: "Are there areas outside Kanyakumari district you serve?",
    a: "While our primary focus is Kanyakumari district to ensure the highest quality control, we do take on select premium projects in neighboring districts. Please contact us to discuss your specific location.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    service: "Interior Design",
    propertyType: "Residential Villa",
    budget: "₹30L - ₹50L",
    date: "",
    message: "",
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <>
      <Navbar />

      {/* ── Header / Hero ─────────────────────────────────── */}
      <header className="relative pt-32 md:pt-48 pb-20 md:pb-32 px-6 md:px-20 w-full max-w-[1440px] mx-auto">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8fNqMIUKSdchFfc2iHBRZtbL8NxSOeXZ68X53BSoZ9tE7nrL51x9YClzT7nl1INtzQesAdM2lvghQQPBNMp98yXmtVdfIw4udFR5tZLNA1eekCOgOo3zLCnh3ge-AK9x410TW5FuRkmVft-ewZiGrr7BOMnbSK_2WuQZxdMV3QWGmwW5xU8UfEWe9nesS7T_a2MFMKISjd9UoC1nafQg4didEUzdmg7G0sZ3GK77uVyRzaMFW-_l1"
            alt="SMS Construction consultation lounge"
            fill
            className="object-cover object-center opacity-30"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F3]/50 via-[#FAF8F3]/80 to-[#FAF8F3]" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <span className="font-sans font-semibold text-[12px] tracking-[0.15em] uppercase text-[#795825] mb-4 block">
            Get In Touch
          </span>
          <h1 className="font-serif font-bold text-[48px] md:text-[84px] leading-[1.05] tracking-[-0.02em] text-[#1F1F1F] mb-6">
            Let&apos;s Discuss Your<br />Dream Project
          </h1>
          <p className="font-sans text-[18px] md:text-[20px] leading-[1.7] text-[#68645D] mb-10 max-w-2xl">
            Whether you&apos;re planning a home interior, renovation, or complete construction project,
            our team in Nagercoil is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#consultation"
              className="inline-flex items-center justify-center bg-[#1D1C19] text-white font-sans font-semibold text-[13px] tracking-[0.15em] uppercase px-8 py-4 rounded-full hover:scale-105 transition-all shadow-lg"
            >
              Book Free Consultation
            </a>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center border border-[#795825] text-[#795825] font-sans font-semibold text-[13px] tracking-[0.15em] uppercase px-8 py-4 rounded-full hover:bg-[#795825]/5 transition-all"
            >
              Call Now
            </a>
          </div>
        </div>
      </header>

      <main className="px-6 md:px-20 w-full max-w-[1440px] mx-auto pb-24">
        {/* Contact Info Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {contactCards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="bg-white rounded-2xl p-8 border border-[#E7E0D4] shadow-sm flex flex-col items-start hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#F2EDE3] flex items-center justify-center mb-6 text-[#795825] group-hover:bg-[#795825] group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined">{card.icon}</span>
              </div>
              <h3 className="font-sans font-semibold text-[12px] tracking-[0.15em] uppercase text-[#68645D] mb-2">
                {card.title}
              </h3>
              <p className="font-sans font-semibold text-[16px] text-[#1F1F1F] break-all">{card.value}</p>
            </a>
          ))}
        </section>

        {/* Lead Gen Consultation Form section */}
        <section id="consultation" className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-start">
          {/* Left Side: Editorial Image & Badges */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative h-[450px] w-full rounded-[28px] overflow-hidden shadow-md">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmn-7W2tlaqKwGM7zXre4dztO4PU8c6Oc2JG_ud13U1frmdUP6sxDq_YvOM2RlEo35fzVK0EtXOmzifAD3qBPA1sSaflfRfLmXI8diIkQ94txfhFjdHXYEwt2etfB6K5aDE1fqyG-lrxLpV3xuQ0sVkCBdEdX3pkqWH9gem0cCJgoMgz-3C5sUfn9cqFNOrKUQtvQm3vmSflWYs984C1GHSvdzAsQmZB9VZQ2zHLlbqRimw1NiDTsN"
                alt="Luxury design consultation meeting"
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            <div className="space-y-4">
              <h4 className="font-serif font-bold text-[24px] text-[#1F1F1F]">What We&apos;ll Discuss</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Project Discussion", icon: "forum" },
                  { title: "Site Visit Review", icon: "explore" },
                  { title: "Interior Consultation", icon: "palette" },
                  { title: "Construction Planning", icon: "engineering" },
                ].map((item) => (
                  <div key={item.title} className="flex items-center gap-3 bg-white p-4 rounded-[16px] border border-[#E7E0D4]">
                    <span className="material-symbols-outlined text-[#795825]">{item.icon}</span>
                    <span className="font-sans font-semibold text-[13px] text-[#1F1F1F]">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Consultation Booking Form */}
          <div className="lg:col-span-7 bg-white rounded-[28px] p-8 md:p-12 border border-[#E7E0D4] shadow-sm">
            <h2 className="font-serif font-bold text-[32px] text-[#1F1F1F] mb-2">Book Your Free Consultation</h2>
            <p className="font-sans text-[15px] text-[#68645D] mb-8">
              Tell us about your project and our team will contact you to discuss the best solution.
            </p>

            {success ? (
              <div className="bg-[#FAF8F3] border border-[#795825]/30 text-[#795825] p-6 rounded-[20px] font-sans text-center">
                <span className="material-symbols-outlined text-[48px] mb-2 block">task_alt</span>
                <h4 className="font-serif font-bold text-[20px] mb-1">Enquiry Submitted!</h4>
                <p className="text-[14px]">We have received your details and will call you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="font-sans font-semibold text-[11px] tracking-[0.15em] uppercase text-[#68645D]/70">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border-0 border-b border-[#E7E0D4] focus:ring-0 focus:border-[#795825] py-2 px-0 bg-transparent outline-none font-sans text-[15px]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-sans font-semibold text-[11px] tracking-[0.15em] uppercase text-[#68645D]/70">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border-0 border-b border-[#E7E0D4] focus:ring-0 focus:border-[#795825] py-2 px-0 bg-transparent outline-none font-sans text-[15px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="font-sans font-semibold text-[11px] tracking-[0.15em] uppercase text-[#68645D]/70">
                      Location
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vadasery, Nagercoil"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full border-0 border-b border-[#E7E0D4] focus:ring-0 focus:border-[#795825] py-2 px-0 bg-transparent outline-none font-sans text-[15px]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-sans font-semibold text-[11px] tracking-[0.15em] uppercase text-[#68645D]/70">
                      Service Needed
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full border-0 border-b border-[#E7E0D4] focus:ring-0 focus:border-[#795825] py-2 px-0 bg-transparent outline-none font-sans text-[15px] cursor-pointer"
                    >
                      <option>Interior Design</option>
                      <option>Residential Construction</option>
                      <option>Commercial Construction</option>
                      <option>Renovation</option>
                      <option>Turnkey Interiors</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-1">
                    <label className="font-sans font-semibold text-[11px] tracking-[0.15em] uppercase text-[#68645D]/70">
                      Property Type
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full border-0 border-b border-[#E7E0D4] focus:ring-0 focus:border-[#795825] py-2 px-0 bg-transparent outline-none font-sans text-[14px] cursor-pointer"
                    >
                      <option>Residential Villa</option>
                      <option>Apartment</option>
                      <option>Commercial Office</option>
                      <option>Retail / Shop</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="font-sans font-semibold text-[11px] tracking-[0.15em] uppercase text-[#68645D]/70">
                      Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full border-0 border-b border-[#E7E0D4] focus:ring-0 focus:border-[#795825] py-2 px-0 bg-transparent outline-none font-sans text-[14px] cursor-pointer"
                    >
                      <option>Under ₹30L</option>
                      <option>₹30L - ₹50L</option>
                      <option>₹50L - ₹1Cr</option>
                      <option>₹1Cr+</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="font-sans font-semibold text-[11px] tracking-[0.15em] uppercase text-[#68645D]/70">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full border-0 border-b border-[#E7E0D4] focus:ring-0 focus:border-[#795825] py-2 px-0 bg-transparent outline-none font-sans text-[14px]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-sans font-semibold text-[11px] tracking-[0.15em] uppercase text-[#68645D]/70">
                    Brief Project Vision
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us briefly about your expectations..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border-0 border-b border-[#E7E0D4] focus:ring-0 focus:border-[#795825] py-2 px-0 bg-transparent resize-none outline-none font-sans text-[15px]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-[#1D1C19] text-white font-sans font-semibold text-[13px] tracking-[0.15em] uppercase py-4 rounded-full hover:scale-105 transition-all shadow-md"
                  >
                    Book Consultation
                  </button>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 border border-[#795825] text-[#795825] font-sans font-semibold text-[13px] tracking-[0.15em] uppercase py-4 px-8 rounded-full hover:bg-[#795825]/5 transition-all"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    WhatsApp Us
                  </a>
                </div>
              </form>
            )}

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-[#E7E0D4] grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { title: "Experienced Team", icon: "badge" },
                { title: "Professional Plan", icon: "architecture" },
                { title: "Transparent Flow", icon: "visibility" },
                { title: "Premium Quality", icon: "verified" },
              ].map((ti) => (
                <div key={ti.title} className="space-y-1">
                  <span className="material-symbols-outlined text-[#795825] text-[20px]">{ti.icon}</span>
                  <div className="font-sans text-[11px] text-[#68645D] uppercase tracking-wider">{ti.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Next Steps Section (Timeline) ───────────────── */}
        <section className="py-16 md:py-24 border-t border-[#E7E0D4] mb-24">
          <div className="text-center mb-16">
            <span className="font-sans font-semibold text-[12px] tracking-[0.15em] uppercase text-[#795825] mb-4 block">
              Our Pipeline
            </span>
            <h2 className="font-serif font-bold text-[32px] md:text-[48px] text-[#1F1F1F]">
              What Happens Next
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {nextSteps.map((step, idx) => (
              <div key={step.num} className="relative group text-center md:text-left">
                {/* Horizontal connector */}
                {idx < nextSteps.length - 1 && (
                  <div className="absolute top-[20px] left-1/2 md:left-12 right-[-50%] h-0.5 bg-[#E7E0D4] hidden md:block" />
                )}
                <div className="flex flex-col items-center md:items-start gap-4">
                  <span className="w-10 h-10 rounded-full bg-[#F2EDE3] border border-[#E7E0D4] flex items-center justify-center font-serif font-bold text-[#795825] text-[16px] relative z-10">
                    {step.num}
                  </span>
                  <h4 className="font-sans font-semibold text-[17px] text-[#1F1F1F]">{step.title}</h4>
                  <p className="font-sans text-[14px] leading-[1.6] text-[#68645D]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Studio Map & Details ─────────────────────────── */}
        <section id="map" className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-center">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-serif font-bold text-[32px] md:text-[48px] text-[#1F1F1F]">
              Visit Our Studio
            </h2>
            <div className="space-y-4 font-sans text-[15px] text-[#68645D] leading-relaxed">
              <div>
                <strong className="text-[#1F1F1F] block">Office Hours</strong>
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 2:00 PM<br />
                Sunday: Closed
              </div>
              <div>
                <strong className="text-[#1F1F1F] block">Primary Service Areas</strong>
                Nagercoil Town, Suchindram, Kanyakumari District, and surrounding South Tamil Nadu hubs.
              </div>
              <div>
                <strong className="text-[#1F1F1F] block">Visitor Parking</strong>
                Complimentary parking is available in the rear lot of the design building.
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 h-[400px] rounded-[28px] overflow-hidden shadow-sm relative border border-[#E7E0D4]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhhwlMJsw8zBilMkHO4giQCSPykS_bQfDnu4C9Rc02gdqYIGyBpDSlvsupi9ha9AU9LDlZENdmQLDGXsKL8nzMNhv6EC9Hxyg3DaDC8a8ZExaaSxJd-MvkOR5NqgScjIW7u-F_IqYHRzEDoZWgFLfMuq85B8J4kLvNrUfYxqmGrnQCoXJ0L136aLe1HxQh0BMszjfBn7qfbBzupHDyoMc5vTFpfzIXpaTOlexr8-fDaRgcvP04kIhH"
              alt="Stylized map layout indicating SMS Construction headquarters in Nagercoil"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </section>

        {/* ── FAQ Section ─────────────────────────────────── */}
        <section className="max-w-3xl mx-auto mb-16">
          <h2 className="font-serif font-bold text-[32px] md:text-[48px] text-[#1F1F1F] text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="border-t border-[#E7E0D4]">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-[#E7E0D4] overflow-hidden">
                <button
                  className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-sans font-medium text-[18px] text-[#1F1F1F] group-hover:text-[#795825] transition-colors pr-8">
                    {faq.q}
                  </span>
                  <span
                    className="material-symbols-outlined text-[#795825] transition-transform duration-300 shrink-0"
                    style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    add
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{ maxHeight: openFaq === i ? "300px" : "0px", opacity: openFaq === i ? 1 : 0 }}
                >
                  <p className="pb-6 font-sans text-[15px] leading-[1.7] text-[#68645D]">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ── Final CTA Block ──────────────────────────────── */}
      <section className="bg-[#1D1C19] text-[#FAF8F3] py-24 text-center px-6 md:px-20 overflow-hidden relative">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)", backgroundSize: "32px 32px;" }} />
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="font-serif font-bold text-[36px] md:text-[56px] leading-[1.15] mb-6">
            Ready to Build Something Beautiful?
          </h2>
          <p className="font-sans text-[16px] md:text-[18px] text-[#FAF8F3]/70 mb-10 max-w-xl">
            Let us bring architectural excellence and warm, curated luxury to your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="#consultation"
              className="inline-flex items-center justify-center bg-white text-[#1D1C19] font-sans font-semibold text-[13px] tracking-[0.15em] uppercase px-8 py-4 rounded-full hover:scale-105 transition-all shadow-lg"
            >
              Book Consultation
            </a>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center border border-[#FAF8F3]/30 text-white font-sans font-semibold text-[13px] tracking-[0.15em] uppercase px-8 py-4 rounded-full hover:bg-white/5 transition-all"
            >
              Call SMS Construction
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
