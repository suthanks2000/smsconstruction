import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  MessageSquare,
  CheckCircle2,
  Building,
  Home,
  Compass,
  FileCheck2,
  ShieldCheck,
  Search,
} from "lucide-react";
import {
  realEstateServices,
  realEstateProcessSteps,
  realEstateFaqs,
} from "@/data/realEstate";
import { geoLocalities } from "@/data/geo";
import ModernFaq from "@/components/ModernFaq";
import LocalServiceArea from "@/components/LocalServiceArea";
import ConversionCTA from "@/components/ConversionCTA";

export const metadata: Metadata = {
  title: "Real Estate Services in Nagercoil & Tamil Nadu | SMS Construction",
  description:
    "Professional real estate services across Nagercoil, Kanyakumari District, and all over Tamil Nadu. Property buying guidance, selling assistance, site evaluation, and technical due diligence by SMS Construction.",
  alternates: {
    canonical: "/real-estate",
  },
  openGraph: {
    title: "Real Estate Services in Nagercoil & Tamil Nadu | SMS Construction",
    description:
      "Professional real estate services across Nagercoil, Kanyakumari District, and all over Tamil Nadu. Property buying guidance, selling assistance, site evaluation, and technical due diligence by SMS Construction.",
    url: "https://smsconstruction.in/real-estate",
    siteName: "SMS Construction",
    images: [
      {
        url: "/images/services/real-estate-hero.webp",
        width: 1200,
        height: 630,
        alt: "Real estate services and property guidance across Tamil Nadu by SMS Construction",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Services in Nagercoil & Tamil Nadu | SMS Construction",
    description:
      "Professional real estate services across Nagercoil, Kanyakumari District, and all over Tamil Nadu. Property buying guidance, selling assistance, site evaluation, and technical due diligence by SMS Construction.",
    images: ["/images/services/real-estate-hero.webp"],
  },
};

export default function RealEstatePage() {
  const phoneNumber = "+919488021183";
  const formattedPhone = "+91 94880 21183";
  const whatsappNumber = "919488021183";

  // Structured Data Schemas (JSON-LD)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://smsconstruction.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://smsconstruction.in/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Real Estate",
        item: "https://smsconstruction.in/real-estate",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Real Estate Services in Nagercoil & Tamil Nadu",
    serviceType: "Real Estate Advisory and Property Consultation",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "SMS Construction",
      telephone: phoneNumber,
      address: {
        "@type": "PostalAddress",
        streetAddress: "25/1 Muthamizh Street, Near Court Road",
        addressLocality: "Nagercoil",
        addressRegion: "Tamil Nadu",
        postalCode: "629001",
        addressCountry: "IN",
      },
    },
    areaServed: geoLocalities.map((loc) => ({
      "@type": "City",
      name: loc,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Real Estate Services",
      itemListElement: realEstateServices.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
        position: index + 1,
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: realEstateFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* 3 Structured Data Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-[#FAF8F3] text-[#171714] selection:bg-[#B08A52] selection:text-white">
        {/* ===================================================================
            SECTION 1: HERO
        =================================================================== */}
        <section
          data-header-theme="dark"
          aria-label="Real Estate Services Hero"
          className="relative w-full h-[100dvh] max-h-[100dvh] flex flex-col justify-between pt-16 sm:pt-18 lg:pt-20 pb-2.5 sm:pb-3.5 bg-[#171714] text-white overflow-hidden border-b border-[#2A2925]"
        >
          {/* Background Image Container with Mobile Portrait and Desktop Landscape */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Mobile portrait background image */}
            <Image
              src="/images/services/services-real-estate-portrait.webp"
              alt="Real estate services and property acquisition in Nagercoil by SMS Construction"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1px"
              className="object-cover object-center md:hidden"
            />
            {/* Desktop / tablet landscape background image */}
            <Image
              src="/images/services/real-estate-hero.webp"
              alt="Real estate services and property acquisition in Nagercoil by SMS Construction"
              fill
              priority
              sizes="(min-width: 769px) 100vw, 1px"
              className="hidden md:block object-cover object-center"
            />
            {/* Contrast Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#171714]/80 via-[#171714]/65 to-[#171714]/90 md:bg-gradient-to-r md:from-[#171714]/90 md:via-[#171714]/70 md:to-[#171714]/40" />
          </div>

          {/* Main Content Container */}
          <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 w-full flex-1 flex flex-col justify-between min-h-0">
            {/* Middle Area: Editorial Copy & CTAs */}
            <div className="flex-1 flex flex-col justify-center max-w-3xl my-auto py-2 sm:py-3 lg:py-4 min-h-0">

              {/* H1 Heading */}
              <h1
                className="font-bold text-white leading-[1.1] sm:leading-[1.08] tracking-[-0.025em] mb-2.5 sm:mb-3.5 lg:mb-4"
                style={{ fontSize: "clamp(1.85rem, 3.6vw, 3.3rem)" }}
              >
                Real Estate Services in Nagercoil &amp; Across Tamil Nadu<span className="text-[#e3c381]">.</span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-[13.5px] sm:text-[14.5px] lg:text-[15.5px] leading-[1.55] sm:leading-[1.65] text-white/90 max-w-2xl mb-4 sm:mb-5 lg:mb-6 font-sans">
                Navigating property transactions requires objective technical guidance, physical boundary verification, and clear municipal alignment. SMS Construction assists property buyers and sellers across Nagercoil, Kanyakumari District, and all over Tamil Nadu with verified site insights and professional advisory.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 sm:gap-3.5 lg:gap-4 shrink-0">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto group relative overflow-hidden inline-flex items-center justify-center gap-2 min-h-[44px] sm:min-h-[48px] px-6 sm:px-7 py-2.5 rounded-full bg-gradient-to-r from-[#e3c381] to-[#C89A47] text-[#171714] font-sans font-semibold text-[13px] sm:text-[14px] hover:shadow-lg hover:shadow-[#C89A47]/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-out text-center shadow-md shrink-0"
                >
                  <span>Enquire About Property</span>
                  <ArrowRight size={14} />
                </Link>

                <div className="flex items-center gap-2 sm:gap-2.5 w-full sm:w-auto">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 min-h-[44px] sm:min-h-[48px] px-4 sm:px-5 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white font-sans font-medium text-[12.5px] sm:text-[13.5px] hover:bg-white hover:text-[#171714] transition-all duration-300 active:scale-[0.98] whitespace-nowrap"
                  >
                    <Phone size={13} className="text-[#e3c381] group-hover:text-[#171714]" />
                    <span>Call {formattedPhone}</span>
                  </a>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Hello%20SMS%20Construction%2C%20I%20would%20like%20to%20enquire%20about%20Real%20Estate%20services%20in%20Tamil%20Nadu.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 min-h-[44px] sm:min-h-[48px] px-3.5 sm:px-4 py-2 rounded-full border border-[#25D366] bg-[#25D366]/10 backdrop-blur-sm text-[#25D366] hover:bg-[#25D366] hover:text-white font-sans font-medium text-[12px] sm:text-[13px] transition-all duration-300"
                  >
                    <MessageSquare size={13} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Highlights Footnote */}
            <div className="w-full shrink-0 pt-2.5 sm:pt-3 pb-1 border-t border-white/15 grid grid-cols-2 gap-x-3 gap-y-1.5 sm:flex sm:flex-wrap sm:items-center sm:justify-start sm:gap-x-5 lg:gap-x-6 text-[11px] sm:text-[11.5px] lg:text-[12px] mt-auto">
              <span className="flex items-center gap-1.5 font-medium text-white">
                <Home size={13} className="text-[#e3c381] shrink-0" />
                <span>Property Buying Guidance</span>
              </span>
              <span className="flex items-center gap-1.5 font-medium text-white">
                <Building size={13} className="text-[#e3c381] shrink-0" />
                <span>Selling & Representation</span>
              </span>
              <span className="flex items-center gap-1.5 font-medium text-white">
                <Compass size={13} className="text-[#e3c381] shrink-0" />
                <span>Boundary & Survey Verification</span>
              </span>
              <span className="flex items-center gap-1.5 font-medium text-white">
                <FileCheck2 size={13} className="text-[#e3c381] shrink-0" />
                <span>Technical Due Diligence</span>
              </span>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 2: INTRODUCTION & OVERVIEW
        =================================================================== */}
        <section className="py-14 sm:py-20 lg:py-24 bg-white border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                INTEGRATED PROPERTY ASSISTANCE
              </span>
              <h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-bold text-[#171714] leading-[1.2] tracking-tight mb-5">
                Real Estate backed by engineering &amp; construction expertise<span className="text-[#B08A52]">.</span>
              </h2>
              <div className="space-y-4 text-[15px] sm:text-[16px] text-[#55514A] leading-[1.7] font-sans max-w-2xl mx-auto">
                <p>
                  Unlike traditional broker networks, SMS Construction approaches real estate with an engineer’s eye. When considering a plot or property across Nagercoil, Kanyakumari District, or anywhere in Tamil Nadu, assessing its physical buildability, road width, drainage slopes, and local town planning rules is just as critical as the transaction itself.
                </p>
                <p>
                  Whether you are an individual looking for a residential plot to build your family home, an NRI seeking trustworthy local representation, or a property owner wishing to connect with qualified buyers across Tamil Nadu, our team provides transparent, verified assistance at every step.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#E7E0D4] max-w-xl mx-auto text-left">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck size={18} className="text-[#B08A52] mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-[14px] font-semibold text-[#171714]">No Unverified Claims</span>
                    <span className="text-[12.5px] text-[#77736C]">All site details cross-verified against actual physical measurements.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Search size={18} className="text-[#B08A52] mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-[14px] font-semibold text-[#171714]">Local & Regional Market Clarity</span>
                    <span className="text-[12.5px] text-[#77736C]">In-depth understanding of Nagercoil, Kanyakumari District, and Tamil Nadu micro-markets.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3: CONFIRMED REAL ESTATE SERVICES (EDITORIAL CARDS)
        =================================================================== */}
        <section className="py-14 sm:py-20 lg:py-24 bg-[#FAF8F3] border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-2xl mb-10 sm:mb-14">
              <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                SERVICES WE OFFER
              </span>
              <h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-bold text-[#171714] leading-[1.2] tracking-tight mb-4">
                Structured property solutions across Nagercoil &amp; Tamil Nadu<span className="text-[#B08A52]">.</span>
              </h2>
              <p className="text-[15px] sm:text-[16px] text-[#68645D] leading-relaxed font-sans">
                Our real estate services focus on confirmed advisory capabilities — helping you purchase with confidence, market your property effectively, and perform rigorous on-ground due diligence across Nagercoil, Kanyakumari District, and all over Tamil Nadu.
              </p>
            </div>

            <div className="flex flex-col gap-6 sm:gap-8">
              {realEstateServices.map((service) => (
                <div
                  key={service.id}
                  className="w-full rounded-[24px] sm:rounded-[28px] bg-white border border-[#E7E0D4] p-6 sm:p-8 lg:p-10 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>

                    <h3 className="text-[22px] sm:text-[26px] lg:text-[30px] font-bold text-[#171714] leading-[1.2] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[14.5px] sm:text-[15.5px] text-[#55514A] leading-[1.7] font-sans mb-6 max-w-4xl">
                      {service.description}
                    </p>

                    <div className="pt-5 border-t border-[#E7E0D4]/80 mb-6">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#77736C] font-semibold block mb-3">
                        Key Evaluation Scope
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {service.considerations.map((item, cIdx) => (
                          <div
                            key={cIdx}
                            className="flex items-start gap-2 text-[13px] sm:text-[13.5px] text-[#2C2A26] font-sans bg-[#FAF8F3] p-3.5 rounded-xl border border-[#E7E0D4]/60"
                          >
                            <CheckCircle2
                              size={15}
                              className="text-[#B08A52] shrink-0 mt-0.5"
                            />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-[#E7E0D4]/80 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-[12.5px] text-[#77736C]">
                      Applicable for: <strong className="text-[#171714]">{service.applicationScope}</strong>
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#171714] text-white hover:bg-[#B08A52] text-[13px] font-semibold font-sans transition-colors"
                    >
                      <span>Enquire About This</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 4: OUR CONSULTATION PROCESS
        =================================================================== */}
        <section className="py-14 sm:py-20 lg:py-24 bg-white border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-2xl mb-12 sm:mb-16">
              <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                HOW WE ASSIST
              </span>
              <h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-bold text-[#171714] leading-[1.2] tracking-tight mb-4">
                A structured 3-phase advisory process<span className="text-[#B08A52]">.</span>
              </h2>
              <p className="text-[15px] sm:text-[16px] text-[#68645D] leading-relaxed font-sans">
                Every property enquiry follows a disciplined workflow ensuring thorough validation, transparency, and peace of mind.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {realEstateProcessSteps.map((step) => (
                <div
                  key={step.number}
                  className="p-7 sm:p-8 rounded-[22px] bg-[#FAF8F3] border border-[#E7E0D4] flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[24px] font-mono font-bold text-[#D6C5B0]">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-[18px] sm:text-[20px] font-bold text-[#171714] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[13.5px] sm:text-[14.5px] text-[#68645D] leading-relaxed font-sans">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 5: LOCAL SERVICE AREA
        =================================================================== */}
        <LocalServiceArea
          title="Real Estate & Property Advisory Across Nagercoil & Tamil Nadu"
          description="We assist clients with property buying, selling, and due diligence across Nagercoil, Kanyakumari District, and all major regions of Tamil Nadu."
        />

        {/* ===================================================================
            SECTION 6: FREQUENTLY ASKED QUESTIONS
        =================================================================== */}
        <ModernFaq
          sectionId="real-estate-faq"
          title="Frequently Asked Questions"
          titleAccent="."
          subtitle="Clear answers regarding our property buying, selling assistance, and site verification services across Nagercoil and Tamil Nadu."
          items={realEstateFaqs}
          className="py-16 md:py-24 bg-[#FAFAFA] border-b border-[#E7E0D4] relative"
        />

        {/* ===================================================================
            SECTION 7: CONVERSION CTA
        =================================================================== */}
        <ConversionCTA
          theme="light"
          badge="PROPERTY ADVISORY ACROSS TAMIL NADU"
          title="Looking to Buy, Sell, or Verify Property in Tamil Nadu?"
          description="Speak with our property advisory team today for verified site assessment, objective guidance, and end-to-end assistance across Nagercoil, Kanyakumari District, and all over Tamil Nadu."
          primaryBtnText="Contact Us Today"
          primaryBtnHref="/contact"
          phoneNumber={phoneNumber}
          formattedPhone={formattedPhone}
          whatsappNumber={whatsappNumber}
          whatsappMessage="Hello SMS Construction, I would like to enquire about Real Estate services in Tamil Nadu."
          subtext="SMS Construction • Property Advisory & Technical Due Diligence • Nagercoil & All Over Tamil Nadu"
        />
      </main>
    </>
  );
}
