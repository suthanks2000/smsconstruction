import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  MessageSquare
} from "lucide-react";
import ContactForm from "./components/ContactForm";
import ModernFaq from "@/components/ModernFaq";

/* ─── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Contact SMS Construction | Nagercoil Construction & Interior Design",
  description:
    "Contact SMS Construction in Nagercoil, Tamil Nadu for construction, interior design, planning, survey and fabrication enquiries.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact SMS Construction | Nagercoil Construction & Interior Design",
    description:
      "Contact SMS Construction in Nagercoil, Tamil Nadu for construction, interior design, planning, survey and fabrication enquiries.",
    url: "https://smsconstruction.in/contact",
     },
};

/* ─── Structured Data (JSON-LD) ───────────────────────────────────────────── */
const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://smsconstruction.in/contact#webpage",
  url: "https://smsconstruction.in/contact",
  name: "Contact SMS Construction | Nagercoil Construction & Interior Design",
  description:
    "Contact SMS Construction in Nagercoil, Tamil Nadu for construction, interior design, planning, survey and fabrication enquiries.",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://smsconstruction.in/#website",
    name: "SMS Construction",
    url: "https://smsconstruction.in",
  },
  mainEntity: {
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://smsconstruction.in",
    name: "SMS Construction",
    telephone: "+91-9488021183",
    email: "smsconstructionngl@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "25/1 Muthamizh Street, Near Court Road",
      addressLocality: "Nagercoil",
      addressRegion: "Tamil Nadu",
      postalCode: "629001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 8.1806677,
      longitude: 77.4308799,
    },
    hasMap:
      "https://www.google.com/maps/dir//SMS+CONSTRUCTION,+25%2F1,+Muthamizh+St,+near+Court+Road,+Nagercoil,+Tamil+Nadu+629001/@8.1807325,77.4307402,66m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3b04f108ea52fa71:0x479afff108b86846!2m2!1d77.4308799!2d8.1806677",
    areaServed: [
      {
        "@type": "City",
        name: "Nagercoil",
      },
      {
        "@type": "AdministrativeArea",
        name: "Kanyakumari District",
      },
      {
        "@type": "AdministrativeArea",
        name: "Tamil Nadu",
      },
    ],
  },
  breadcrumb: {
    "@id": "https://smsconstruction.in/contact#breadcrumb",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://smsconstruction.in/contact#breadcrumb",
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
      name: "Contact",
      item: "https://smsconstruction.in/contact",
    },
  ],
};

const faqs = [
  {
    question: "How can I contact SMS Construction?",
    answer:
      "You can contact SMS Construction by phone at +91 94880 21183 or by email at smsconstructionngl@gmail.com. You can also submit the project enquiry form on this page.",
  },
  {
    question: "Where is SMS Construction located?",
    answer:
      "SMS Construction is located at 25/1 Muthamizh Street, Near Court Road, Nagercoil, Tamil Nadu 629001, India.",
  },
  {
    question: "What type of project can I enquire about?",
    answer:
      "You can enquire about construction, interior design, design and planning, survey-related services, fabrication works and related project requirements.",
  },
  {
    question: "What information should I include in my enquiry?",
    answer:
      "Include your name, contact details, project type, project location and a short description of your requirements.",
  },
  {
    question: "Can I contact SMS Construction for an interior design project?",
    answer:
      "Yes. You can submit an enquiry for residential interior design and related interior work.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const verifiedMapUrl =
  "https://www.google.com/maps/dir//SMS+CONSTRUCTION,+25%2F1,+Muthamizh+St,+near+Court+Road,+Nagercoil,+Tamil+Nadu+629001/@8.1807325,77.4307402,66m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3b04f108ea52fa71:0x479afff108b86846!2m2!1d77.4308799!2d8.1806677";

export default function ContactPage() {
  const phoneNumber = "+919488021183";
  const formattedPhone = "+91 94880 21183";
  const email = "smsconstructionngl@gmail.com";

  return (
    <>
      {/* ─── Structured Data Scripts ────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-[#FAF8F3] text-[#171714] selection:bg-[#B08A52] selection:text-white">
        {/* ===================================================================
            SECTION 1 — PROJECT ENQUIRY FORM & DIRECT CONTACT (PRIMARY HERO)
            Clean, high-converting editorial layout matching reference aesthetic
        =================================================================== */}
        <section
          id="project-enquiry"
          data-header-theme="light"
          aria-labelledby="enquiry-heading"
          className="pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 lg:pb-28 bg-[#FAF8F3] border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Primary H1 Headline with em-dash & Direct Contact Channels */}
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <span className="inline-block text-[11.5px] sm:text-[12.5px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                  SMS CONSTRUCTION • NAGERCOIL STUDIO
                </span>

                <h1
                  id="enquiry-heading"
                  className="text-[40px] sm:text-[52px] lg:text-[60px] font-semibold text-[#171714] leading-[1.08] tracking-tight mb-5"
                >
                  Let’s talk about your project<span className="text-[#e3c381]">.</span>
                </h1>

                <p className="font-sans text-[16px] sm:text-[17px] leading-[1.7] text-[#68645D] mb-8 max-w-lg">
                  We’re here to help! Whether you have a question about our construction services, need assistance with architectural planning, or want to discuss an interior project in Nagercoil, our team is ready to assist you.
                </p>

                {/* Email & Phone Blocks matching reference */}
                <div className="space-y-6 mb-8 font-sans">
                  <div>
                    <span className="text-[12.5px] font-semibold uppercase tracking-wider text-[#77736C] block mb-1">
                      Email:
                    </span>
                    <a
                      href={`mailto:${email}`}
                      className="font-semibold text-[20px] sm:text-[23px] text-[#171714] hover:text-[#B08A52] transition-colors break-all"
                    >
                      {email}
                    </a>
                  </div>

                  <div>
                    <span className="text-[12.5px] font-semibold uppercase tracking-wider text-[#77736C] block mb-1">
                      Phone:
                    </span>
                    <a
                      href={`tel:${phoneNumber}`}
                      className="font-semibold text-[22px] sm:text-[26px] text-[#171714] hover:text-[#B08A52] transition-colors block"
                    >
                      {formattedPhone}
                    </a>
                    <span className="text-[13px] text-[#77736C] block mt-1">
                      Available Monday to Saturday • Nagercoil Studio
                    </span>
                  </div>
                </div>

                {/* Pill Action Button matching reference */}
                <div className="grid grid-cols-2 gap-2.5 sm:flex sm:items-center sm:gap-3.5 mb-8">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="inline-flex items-center justify-center gap-2 sm:gap-3 px-3.5 sm:px-6 py-3.5 rounded-full bg-[#171714] hover:bg-[#B08A52] text-white font-sans font-semibold text-[13px] sm:text-[14px] transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98] group whitespace-nowrap"
                  >
                    <span>Direct Call</span>
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white text-[#171714] flex items-center justify-center shrink-0 group-hover:translate-x-0.5 transition-transform">
                      <ArrowRight size={12} strokeWidth={2.5} />
                    </span>
                  </a>
                  <a
                    href="https://wa.me/919488021183?text=Hello%20SMS%20Construction%2C%20I%20would%20like%20to%20discuss%20a%20project%20enquiry."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-sans font-semibold text-[13px] sm:text-[15px] transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98] whitespace-nowrap"
                  >
                    <MessageSquare size={16} className="shrink-0" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Factual Trust Indicators */}
                <div className="pt-6 border-t border-[#E7E0D4] space-y-2 text-[13.5px] font-sans text-[#171714]">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[#B08A52] shrink-0" />
                    <span>Direct site visits across Nagercoil &amp; Kanyakumari</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[#B08A52] shrink-0" />
                    <span>Coordinated civil, interior, and metal fabrication scope</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[#B08A52] shrink-0" />
                    <span>Transparent engineering consultations</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Refined White Card Form */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 4 — STUDIO LOCATION & GOOGLE MAP
        =================================================================== */}
        <section
          aria-labelledby="location-heading"
          className="py-14 sm:py-20 bg-white border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Header: Title, Address & Direct Direction Link */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
              <div>
                <span className="inline-block text-[11.5px] sm:text-[12.5px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-2.5">
                  LOCATION &amp; DIRECTIONS
                </span>
                <h2
                  id="location-heading"
                  className="text-[32px] sm:text-[40px] lg:text-[44px] font-bold text-[#171714] leading-[1.15] tracking-tight"
                >
                  Visit our studio in Nagercoil<span className="text-[#B08A52]">.</span>
                </h2>
                <div className="flex items-center gap-2 text-[14.5px] sm:text-[15.5px] text-[#68645D] mt-2 font-sans">
                  <MapPin size={16} className="text-[#B08A52] shrink-0" />
                  <span>25/1 Muthamizh Street, Near Court Road, Nagercoil, Tamil Nadu 629001</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:flex sm:items-center sm:gap-3 shrink-0 w-full sm:w-auto">
                <a
                  href={verifiedMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-3 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#171714] hover:bg-[#B08A52] text-white font-sans font-semibold text-[13px] sm:text-[14px] transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98] whitespace-nowrap text-center"
                >
                  <span className="sm:hidden">Google Maps</span>
                  <span className="hidden sm:inline">Open in Google Maps</span>
                  <ExternalLink size={13} className="shrink-0" />
                </a>

                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-3 sm:py-3.5 rounded-full border border-[#E7E0D4] hover:border-[#171714] bg-[#FAF8F3] text-[#171714] font-sans font-semibold text-[13px] sm:text-[14px] transition-all duration-300 active:scale-[0.98] whitespace-nowrap text-center"
                >
                  <Phone size={13} className="text-[#B08A52] shrink-0" />
                  <span className="sm:hidden">Direct Call</span>
                  <span className="hidden sm:inline">Call {formattedPhone}</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="w-full h-[400px] sm:h-[480px] lg:h-[520px] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-[#E7E0D4] shadow-[0_12px_40px_rgba(0,0,0,0.04)] relative bg-[#FAF8F3]">
              <iframe
                title="SMS Construction Office Location in Nagercoil, Tamil Nadu"
                src="https://maps.google.com/maps?q=8.1806677,77.4308799+(SMS+CONSTRUCTION)&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </section>


        {/* ===================================================================
            SECTION 5 — FAQ — AEO (MODERN FAQ ACCORDION)
        =================================================================== */}
        <ModernFaq
          sectionId="contact-faqs"
          badgeText="QUESTIONS & ANSWERS"
          title="Frequently Asked Questions"
          titleAccent="."
          subtitle="Everything you need to know about contacting SMS Construction"
          items={faqs}
          className="py-16 md:py-24 bg-[#FAFAFA] border-b border-[#E7E0D4] relative"
        />
      </main>
    </>
  );
}
