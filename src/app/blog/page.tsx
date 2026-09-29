import type { Metadata } from "next";
import { getAllBlogPosts } from "@/data/blog";
import BlogContentSection from "./components/BlogContentSection";
import BlogCTA from "./components/BlogCTA";

/* ─── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Construction & Interior Design Blog | SMS Construction Nagercoil",
  description:
    "Explore construction, interior design, home planning, architecture and fabrication insights from SMS Construction in Nagercoil, Tamil Nadu.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Construction & Interior Design Blog | SMS Construction Nagercoil",
    description:
      "Explore construction, interior design, home planning, architecture and fabrication insights from SMS Construction in Nagercoil, Tamil Nadu.",
    url: "https://smsconstruction.in/blog",
    siteName: "SMS Construction",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Construction & Interior Design Blog | SMS Construction Nagercoil",
    description:
      "Explore construction, interior design, home planning, architecture and fabrication insights from SMS Construction in Nagercoil, Tamil Nadu.",
  },
};

/* ─── Structured Data (JSON-LD) ───────────────────────────────────────────── */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://smsconstruction.in/blog#breadcrumb",
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
      name: "Blog",
      item: "https://smsconstruction.in/blog",
    },
  ],
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      {/* ─── Breadcrumb Structured Data ─────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="bg-[#FAF8F3] text-[#171614] selection:bg-[#B08A52] selection:text-white">
        {/* ===================================================================
            SECTION 1 — COMPACT EDITORIAL HERO
            Immediate content access, clean typography, zero bloated banners
        =================================================================== */}
        <section
          data-header-theme="light"
          aria-labelledby="blog-hero-heading"
          className="pt-28 sm:pt-36 lg:pt-40 pb-10 sm:pb-14 bg-[#FAF8F3] border-b border-[#E7E0D4]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <span className="inline-block text-[11.5px] sm:text-[12.5px] font-sans font-semibold tracking-[0.24em] uppercase text-[#B08A52] mb-3">
                SMS CONSTRUCTION BLOG
              </span>

              <h1
                id="blog-hero-heading"
                className="text-[36px] sm:text-[48px] lg:text-[56px] font-semibold text-[#171614] leading-[1.12] tracking-tight mb-4"
              >
                Ideas, guides &amp; insights for better spaces<span className="text-[#B08A52]">.</span>
              </h1>

              <p className="font-sans text-[16px] sm:text-[17.5px] leading-[1.7] text-[#68645D]">
                Practical insights on construction, interior design, planning, home improvement and related services from SMS Construction, Nagercoil.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 2 — CATEGORY FILTER & EDITORIAL ARTICLES
        =================================================================== */}
        <section
          aria-label="Editorial articles and guides"
          className="py-12 sm:py-16 lg:py-20"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <BlogContentSection initialPosts={posts} />
          </div>
        </section>

        {/* ===================================================================
            SECTION 3 — PROJECT PLANNING CTA
        =================================================================== */}
        <BlogCTA />
      </main>
    </>
  );
}
