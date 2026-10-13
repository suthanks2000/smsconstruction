import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  FileText,
  BadgeInfo,
  Building,
  Home,
  Briefcase
} from "lucide-react";
import {
  provisionalLoanCategories,
  loanProcessSteps,
  loanFaqs,
} from "@/data/loanServices";
import { geoLocalities } from "@/data/geo";
import ModernFaq from "@/components/ModernFaq";
import LocalServiceArea from "@/components/LocalServiceArea";
import ConversionCTA from "@/components/ConversionCTA";

export const metadata: Metadata = {
  title: "Loan Services in Nagercoil & Tamil Nadu | SMS Construction",
  description:
    "Enquire about loan options and project financing coordination across Nagercoil, Kanyakumari District, and all over Tamil Nadu. Information on provisional home loans, property loans, business, and personal loans.",
  alternates: {
    canonical: "/loan-services",
  },
  openGraph: {
    title: "Loan Services in Nagercoil & Tamil Nadu | SMS Construction",
    description:
      "Enquire about loan options and project financing coordination across Nagercoil, Kanyakumari District, and all over Tamil Nadu. Information on provisional home loans, property loans, business, and personal loans.",
    url: "https://smsconstruction.in/loan-services",
    siteName: "SMS Construction",
    images: [
      {
        url: "/images/services/loan-services-hero.webp",
        width: 1200,
        height: 630,
        alt: "Loan enquiry and project financing consultation across Tamil Nadu by SMS Construction",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loan Services in Nagercoil & Tamil Nadu | SMS Construction",
    description:
      "Enquire about loan options and project financing coordination across Nagercoil, Kanyakumari District, and all over Tamil Nadu. Information on provisional home loans, property loans, business, and personal loans.",
    images: [
      "/images/services/loan-services-hero.webp",
    ],
  },
};

export default function LoanServicesPage() {
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
        name: "Loan Services",
        item: "https://smsconstruction.in/loan-services",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Loan Services in Nagercoil & Tamil Nadu",
    serviceType: "Construction Loan Guidance and Financial Enquiry Coordination",
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
      name: "Provisional Loan Categories",
      itemListElement: provisionalLoanCategories.map((service, index) => ({
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
    mainEntity: loanFaqs.map((faq) => ({
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
          aria-label="Loan Services Hero"
          className="relative w-full h-[100dvh] max-h-[100dvh] flex flex-col justify-between pt-16 sm:pt-18 lg:pt-20 pb-2.5 sm:pb-3.5 bg-[#171714] text-white overflow-hidden border-b border-[#2A2925]"
        >
          {/* Background Image Container with Mobile Portrait and Desktop Landscape */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Mobile portrait background image */}
            <Image
              src="/images/services/services-loan-services-portrait.webp"
              alt="Loan services consultation and financing enquiry in Nagercoil by SMS Construction"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1px"
              className="object-cover object-center md:hidden"
            />
            {/* Desktop / tablet landscape background image */}
            <Image
              src="/images/services/loan-services-hero.webp"
              alt="Loan services consultation and financing enquiry in Nagercoil by SMS Construction"
              fill
              priority
              sizes="(min-width: 769px) 100vw, 1px"
              className="hidden md:block object-cover object-center"
            />
            {/* Contrast Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#171714]/80 via-[#171714]/70 to-[#171714]/92 md:bg-gradient-to-r md:from-[#171714]/92 md:via-[#171714]/75 md:to-[#171714]/45" />
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
                Loan Services in Nagercoil &amp; Across Tamil Nadu<span className="text-[#e3c381]">.</span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-[13.5px] sm:text-[14.5px] lg:text-[15.5px] leading-[1.55] sm:leading-[1.65] text-white/90 max-w-2xl mb-3 sm:mb-3.5 lg:mb-4 font-sans">
                Planning a residential build or commercial development involves strategic financial alignment. SMS Construction allows clients across Nagercoil, Kanyakumari District, and all over Tamil Nadu to enquire about available loan options, helping coordinate structural estimates, bills of quantities, and architectural drawings required for financial assessment.
              </p>

              {/* Regulatory Disclosure Banner (Hero) */}
              <div className="mb-4 sm:mb-5 p-2.5 sm:p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-[11.5px] sm:text-[12px] text-white/85 leading-relaxed font-sans max-w-2xl flex items-start gap-2.5 shrink-0">
                <AlertCircle size={15} className="text-[#e3c381] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5 text-[11.5px] sm:text-[12px]">Advisory & Facilitation Notice</strong>
                  <span>
                    SMS Construction is an engineering and construction consultancy, not a bank, NBFC, or licensed lender. We do not provide direct lending, guarantee approvals, or fix interest rates. All loan sanctions are governed solely by respective lending institutions.
                  </span>
                </div>
              </div>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 sm:gap-3.5 lg:gap-4 shrink-0">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto group relative overflow-hidden inline-flex items-center justify-center gap-2 min-h-[44px] sm:min-h-[48px] px-6 sm:px-7 py-2.5 rounded-full bg-gradient-to-r from-[#e3c381] to-[#C89A47] text-[#171714] font-sans font-semibold text-[13px] sm:text-[14px] hover:shadow-lg hover:shadow-[#C89A47]/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-out text-center shadow-md shrink-0"
                >
                  <span>Enquire About Loans</span>
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
                    href={`https://wa.me/${whatsappNumber}?text=Hello%20SMS%20Construction%2C%20I%20would%20like%20to%20enquire%20about%20Loan%20Services%20across%20Tamil%20Nadu.`}
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
                <span>Home Loans (Provisional)</span>
              </span>
              <span className="flex items-center gap-1.5 font-medium text-white">
                <Building size={13} className="text-[#e3c381] shrink-0" />
                <span>Property Loans (Provisional)</span>
              </span>
              <span className="flex items-center gap-1.5 font-medium text-white">
                <Briefcase size={13} className="text-[#e3c381] shrink-0" />
                <span>Business Loans (Provisional)</span>
              </span>
              <span className="flex items-center gap-1.5 font-medium text-white">
                <FileText size={13} className="text-[#e3c381] shrink-0" />
                <span>Estimate Documentation</span>
              </span>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 2: PROVISIONAL CATEGORIES BANNER & EXPLANATION
        =================================================================== */}
        <section className="py-14 sm:py-20 lg:py-24 bg-white border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-[12px] font-sans font-medium mb-4">
                <BadgeInfo size={14} className="text-amber-700" />
                <span>Provisional Loan Categories — Enquiry Stage</span>
              </div>
              <h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-bold text-[#171714] leading-[1.2] tracking-tight mb-5">
                Explore provisional financing categories for your project across Tamil Nadu<span className="text-[#B08A52]">.</span>
              </h2>
              <div className="space-y-4 text-[15px] sm:text-[16px] text-[#55514A] leading-[1.7] font-sans max-w-2xl mx-auto">
                <p>
                  To assist our clients who require financial assistance alongside civil engineering, we have structured the following provisional loan categories based on client requests. Customers are encouraged to enquire about their specific financing requirements so our team can provide technical estimation files and guide them through documentation.
                </p>
                <p className="text-[14px] text-[#77736C] italic">
                  Note: The categories below are provisional and subject to client confirmation before final terms, policies, or lending affiliations are formalized.
                </p>
              </div>
            </div>

            {/* 4 Provisional Loan Cards Grid (Clean Editorial without Stock Images) */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {provisionalLoanCategories.map((loan) => (
                <div
                  key={loan.id}
                  className="rounded-[24px] sm:rounded-[28px] bg-[#FAF8F3] border border-[#E7E0D4] p-6 sm:p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-[22px] sm:text-[24px] font-bold text-[#171714] leading-tight mb-3">
                      {loan.title}
                    </h3>

                    <p className="text-[14px] sm:text-[14.5px] text-[#55514A] leading-[1.65] font-sans mb-5">
                      {loan.description}
                    </p>

                    <div className="mb-5 p-3.5 rounded-xl bg-white border border-[#E7E0D4] text-[12.5px] sm:text-[13px] text-[#68645D]">
                      <strong className="text-[#171714] block mb-0.5">Scope:</strong>
                      <span>{loan.scope}</span>
                    </div>

                    <div className="pt-4 border-t border-[#E7E0D4] mb-5">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#77736C] font-semibold block mb-2.5">
                        Common Enquiry Purposes
                      </span>
                      <div className="space-y-2">
                        {loan.commonPurposes.map((purpose, pIdx) => (
                          <div
                            key={pIdx}
                            className="flex items-start gap-2 text-[12.5px] sm:text-[13px] text-[#2C2A26] font-sans"
                          >
                            <CheckCircle2
                              size={14}
                              className="text-[#B08A52] shrink-0 mt-0.5"
                            />
                            <span>{purpose}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E7E0D4] flex items-center justify-between gap-3 mt-auto">
                    <span className="text-[11.5px] text-amber-800 italic">
                      {loan.provisionalNote}
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#171714] text-white hover:bg-[#B08A52] text-[12.5px] font-semibold font-sans transition-colors shrink-0"
                    >
                      <span>Enquire</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3: HOW OUR LOAN ENQUIRY PROCESS WORKS
        =================================================================== */}
        <section className="py-14 sm:py-20 lg:py-24 bg-[#FAF8F3] border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-2xl mb-12 sm:mb-16">
              <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
                ENQUIRY WORKFLOW
              </span>
              <h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-bold text-[#171714] leading-[1.2] tracking-tight mb-4">
                How our loan enquiry coordination works<span className="text-[#B08A52]">.</span>
              </h2>
              <p className="text-[15px] sm:text-[16px] text-[#68645D] leading-relaxed font-sans">
                We assist you with the essential technical and estimation prerequisites needed before submitting loan applications to banking partners.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {loanProcessSteps.map((step) => (
                <div
                  key={step.number}
                  className="p-7 sm:p-8 rounded-[22px] bg-white border border-[#E7E0D4] flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
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
            SECTION 4: LOCAL SERVICE AREA
        =================================================================== */}
        <LocalServiceArea
          title="Loan Enquiry &amp; Construction Financing Consultation Across Nagercoil &amp; Tamil Nadu"
          description="Assisting clients across Nagercoil, Kanyakumari District, and all over Tamil Nadu with project estimates and documentation for loan options."
        />

        {/* ===================================================================
            SECTION 5: FREQUENTLY ASKED QUESTIONS
        =================================================================== */}
        <ModernFaq
          sectionId="loan-faq"
          title="Frequently Asked Questions"
          titleAccent="."
          subtitle="Transparent answers regarding loan enquiries, banking coordination, and technical estimates across Nagercoil and Tamil Nadu."
          items={loanFaqs}
          className="py-16 md:py-24 bg-[#FAFAFA] border-b border-[#E7E0D4] relative"
        />

        {/* ===================================================================
            SECTION 6: CONVERSION CTA
        =================================================================== */}
        <ConversionCTA
          theme="light"
          badge="LOAN &amp; FINANCING ENQUIRY ACROSS TAMIL NADU"
          title="Have Questions About Project Financing or Construction Loans in Tamil Nadu?"
          description="Get in touch with our team to discuss your construction plans and get formal engineering estimates prepared across Nagercoil, Kanyakumari District, and all over Tamil Nadu."
          primaryBtnText="Contact Us for Enquiry"
          primaryBtnHref="/contact"
          phoneNumber={phoneNumber}
          formattedPhone={formattedPhone}
          whatsappNumber={whatsappNumber}
          whatsappMessage="Hello SMS Construction, I would like to enquire about Loan Services across Tamil Nadu."
          subtext="SMS Construction • Engineering Estimates &amp; Project Consultation • Nagercoil &amp; All Over Tamil Nadu"
        />
      </main>
    </>
  );
}
