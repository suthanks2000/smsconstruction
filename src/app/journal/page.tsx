"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── Mock Data ───────────────────────────────────────── */
interface Article {
  id: string;
  category: "Architecture" | "Interior Design" | "Construction";
  title: string;
  desc: string;
  date: string;
  readTime: string;
  img: string;
  featured?: boolean;
}

const mockArticles: Article[] = [
  {
    id: "indoor-outdoor-living",
    category: "Architecture",
    title: "The Art of Seamless Indoor-Outdoor Living in Modern Coastal Homes",
    desc: "Discover how thoughtful architectural planning and strategic material choices blur the boundaries between interior sanctuaries and natural landscapes.",
    date: "Oct 12, 2024",
    readTime: "8 Min Read",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJVJS47ZjmODc1yUwwXnpB3pBH2fRyqU31mgZ--W4m8J39wCieoZX5NHzN_twVocObSBOL1GUQw4U8XOSWyxNLUEP2At8ltPMnk0a_wFGwnm0Fd6HbDTkJGB72asGrT41OpVwpb8YtZ8bp8ibuuaqAC82HMY4_NWKzRrVWi8P-wMdQzBJclFP35JFGPi58Mdr_YbBlM9zxlEOgOfmc5dliZAYQvRd-6zfbU5hKCqz7JMSrDmpN6AJA",
    featured: true,
  },
  {
    id: "spa-like-bathroom",
    category: "Interior Design",
    title: "Curating Tranquility: Materials for a Spa-Like Bathroom",
    desc: "A guide to selecting stones, woods, and fixtures that transform an ordinary washroom into a serene personal retreat.",
    date: "Oct 05, 2024",
    readTime: "5 Min Read",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBV8_TYcTOjegdGHCNLsVzElb22hFnE0-szQVHUmGMgeuMIVAcoOBPZzWEdKOimaaOYYWpqFqcfNdNbXrFzmV5AOaebk5VtOVvI3d83k2PKnNljRYtJuq5420lWc1hTC3T5qoxd6QFVqzvRzDJHW9RA7ptnGQP2I2JB7o9VQ_8YJbalEslEczYVY3Jq4HWtKpKFSOsZ1GTmed8Ahzz8HOUV-Clq2wA8Bw1j4159grcxAfM7OCQpXoEM",
  },
  {
    id: "structural-integrity-open-plan",
    category: "Construction",
    title: "Understanding Structural Integrity in Open-Plan Designs",
    desc: "Behind the scenes of the engineering required to achieve vast, column-free living spaces in luxury residential builds.",
    date: "Sep 28, 2024",
    readTime: "10 Min Read",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4bmMJwAhzrba5I3aKIftGkzJbBp6O1EKa01bfopVPL3TmcBUctHsksQ1y1Jy0Ps3526zwY4YVLuHJnfHoK-0-N-7o5-CNXzxej1iW_-bvidqWOXxJ7Jtzf4XKrBWmJ0-RDwSmehaLzs5WDCei4BTkkRQFNy4DWDGUmG5uDPQMeJ22ZUCUUztTXblKhTf0HhHUk3tJRiOhl6j3cJApbGRgq4SbQP1LGDlwbueSCMnn4D6YokT1xHo2",
  },
  {
    id: "hardwood-flooring-tones",
    category: "Interior Design",
    title: "Choosing the Perfect Hardwood Flooring Tone",
    desc: "How different wood finishes and sealant stains interact with natural lighting to set the spatial tone of your home.",
    date: "Sep 15, 2024",
    readTime: "6 Min Read",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwprjTqi_8K9UWSVMH2LJ2e6RBTXv9L6aDJFJBMNYB1P9qi4ZTq6D9y8XvbdtseSczyoZVaeI80kvC_JroKbftCeCgY-AokTGsZ4D0LFzYcIELfjde_no2uvN_wEe1qI4RXIqaDysh6c_yo5fODKcYnk13tT8SVY6dT7w_KA204n64Z119SAZRoZ5yXRVUvXn4J6d_OfvUrvtrycYw2SG6mOVCwKh0kf8XoKaorPNwo_OCaycDGMS5",
  },
  {
    id: "design-build-guide",
    category: "Architecture",
    title: "A Client's Guide to the Design-Build Process",
    desc: "Understanding the cost, coordination, and timeline benefits of single-source turnkey construction solutions.",
    date: "Aug 30, 2024",
    readTime: "7 Min Read",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyzSqguT_CG4dDNc40ENJqUenHE48xgelLoh0RUdKoe7gU1L3QMKhbuQNaZG0G5fHLa_qqged4HvrHHsK1MopflLauMXt4NmnifxZ5ik6cY6Sk7eRx0YopCgdjNuK3JqLw-vpaiNb9g-w6Snzfr-ROcw8-HA-mAX96HRb2QL-jraFBoR_ifF2mjimdKWH5AD2_cINWjW4XdrE60ZCLUl8aAkpqUHzDnDcQN3deK_LjzbpvDKOrYhtH",
  },
];

const categories = ["All Articles", "Interior Design", "Architecture", "Construction"];

const popularArticles = [
  { category: "Architecture", title: "The Revival of Mid-Century Modern Elements" },
  { category: "Interior Design", title: "Choosing the Perfect Hardwood Flooring Tone" },
  { category: "Guides", title: "A Client's Guide to the Design-Build Process" },
];

export default function Journal() {
  const [selectedCategory, setSelectedCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  // Filter articles based on Category + Search Input
  const filteredArticles = mockArticles.filter((article) => {
    const matchesCategory =
      selectedCategory === "All Articles" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = mockArticles.find((a) => a.featured);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribeSuccess(true);
      setNewsletterEmail("");
      setTimeout(() => setSubscribeSuccess(false), 5000);
    }
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  return (
    <>
      <Navbar />

      {/* ── Hero / Header ────────────────────────────────── */}
      <header className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <span className="font-sans font-semibold text-[12px] tracking-[0.15em] uppercase text-[#795825] mb-4 block">
              The SMS Journal
            </span>
            <h1 className="font-serif font-bold text-[40px] md:text-[72px] leading-[1.1] tracking-[-0.02em] text-[#1F1F1F] mb-6">
              Design Ideas, Construction Guides &amp; Home Inspiration
            </h1>
          </div>
          <div className="md:col-span-4 pb-4">
            <p className="font-sans text-[18px] leading-[1.7] text-[#68645D]">
              Explore expert articles, behind-the-scenes project insights, and the latest trends in
              architectural luxury.
            </p>
          </div>
        </div>

        {/* Feature Image Frame */}
        <div className="mt-16 w-full h-[400px] md:h-[650px] rounded-[28px] overflow-hidden relative shadow-md">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMHEXH6y7aZ2b5YMFP-AOCjMseNmIO2Ihzks79F6JaN2NQB4pnOknIK35dnY6yZyRbn7rv1o5pso-G3TTNZn3dFqliM43HaUAaB2KcA1oSAayS8xgI5ZoKb4KVrd_1X0zJSBUoASNS_D6kqm1sSIUgnW7sgkGXhxZmnn4bZO9Nmx3X-KwByycjYAUOJCZPfK1bOUS2_N4XMt92syognnv_MK0Ot2MFo7OuMhdOxn0YAmTNePulNGji"
            alt="Cinematic luxury residential landscape view"
            fill
            priority
            className="object-cover object-center scale-105"
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-[#1D1C19]/10" />
        </div>
      </header>

      {/* ── Content Layout ───────────────────────────────── */}
      <main className="px-6 md:px-20 max-w-[1440px] mx-auto pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Articles Area */}
          <div className="lg:col-span-8 space-y-20">
            {/* Category Filter Chips */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setVisibleCount(3);
                  }}
                  className={`px-5 py-2.5 rounded-full font-sans text-[14px] font-medium transition-all border ${selectedCategory === cat
                      ? "bg-[#1D1C19] border-[#1D1C19] text-white shadow-sm"
                      : "bg-[#F2EDE3] border-[#E7E0D4] text-[#68645D] hover:border-[#795825] hover:text-[#795825]"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Featured Article Card (only shown when 'All Articles' or 'Architecture' is selected) */}
            {featuredArticle &&
              (selectedCategory === "All Articles" ||
                selectedCategory === featuredArticle.category) && (
                <article className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-[28px] h-[350px] md:h-[512px] mb-8 shadow-sm">
                    <Image
                      src={featuredArticle.img}
                      alt={featuredArticle.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
                      <span className="font-sans font-semibold text-[11px] tracking-[0.15em] uppercase text-[#795825]">
                        {featuredArticle.category}
                      </span>
                    </div>
                  </div>
                  <div className="max-w-3xl">
                    <h2 className="font-serif font-bold text-[28px] md:text-[36px] leading-tight text-[#1F1F1F] mb-4 group-hover:text-[#795825] transition-colors">
                      {featuredArticle.title}
                    </h2>
                    <p className="font-sans text-[16px] leading-[1.7] text-[#68645D] mb-6 line-clamp-2">
                      {featuredArticle.desc}
                    </p>
                    <div className="flex items-center text-[12px] font-sans font-semibold tracking-wider text-[#68645D]/70 space-x-4 uppercase">
                      <span>{featuredArticle.date}</span>
                      <span>•</span>
                      <span>{featuredArticle.readTime}</span>
                    </div>
                  </div>
                </article>
              )}

            {/* Remaining Grid list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
              {filteredArticles
                .filter((a) => !a.featured)
                .slice(0, visibleCount)
                .map((art, idx) => (
                  <article
                    key={art.id}
                    className={`group cursor-pointer flex flex-col justify-between ${idx % 2 === 1 ? "md:translate-y-8" : ""
                      }`}
                  >
                    <div className="relative overflow-hidden rounded-[28px] aspect-[4/5] mb-6 shadow-sm">
                      <Image
                        src={art.img}
                        alt={art.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        unoptimized
                      />
                    </div>
                    <div>
                      <span className="font-sans font-semibold text-[11px] tracking-[0.15em] uppercase text-[#795825] block mb-3">
                        {art.category}
                      </span>
                      <h3 className="font-serif font-bold text-[22px] leading-tight text-[#1F1F1F] mb-3 group-hover:text-[#795825] transition-colors">
                        {art.title}
                      </h3>
                      <p className="font-sans text-[15px] leading-[1.7] text-[#68645D] mb-4 line-clamp-2">
                        {art.desc}
                      </p>
                      <div className="flex items-center text-[11px] font-sans font-semibold tracking-wider text-[#68645D]/70 space-x-4 uppercase">
                        <span>{art.date}</span>
                        <span>•</span>
                        <span>{art.readTime}</span>
                      </div>
                    </div>
                  </article>
                ))}
            </div>

            {/* Load More Button */}
            {filteredArticles.filter((a) => !a.featured).length > visibleCount && (
              <div className="text-center pt-16">
                <button
                  onClick={handleLoadMore}
                  className="inline-flex items-center space-x-2 border-b border-[#795825] pb-1 font-sans font-semibold text-[12px] tracking-[0.15em] uppercase text-[#1F1F1F] hover:text-[#795825] transition-colors"
                >
                  <span>Load More Articles</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Sidebar */}
          <aside className="lg:col-span-4 lg:pl-12 space-y-16">
            {/* Search Input widget */}
            <div className="bg-white p-8 rounded-[28px] border border-[#E7E0D4] shadow-sm">
              <h3 className="font-sans font-semibold text-[13px] tracking-[0.15em] uppercase text-[#1F1F1F] mb-4">
                Search Articles
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search keywords..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setVisibleCount(3);
                  }}
                  className="w-full bg-transparent border-0 border-b border-[#E7E0D4] pb-3 focus:ring-0 focus:border-[#795825] text-[15px] outline-none transition-colors"
                />
                <span className="material-symbols-outlined absolute right-0 top-1 text-[#68645D]">
                  search
                </span>
              </div>
            </div>

            {/* Popular Articles Widget */}
            <div className="bg-white p-8 rounded-[28px] border border-[#E7E0D4] shadow-sm">
              <h3 className="font-sans font-semibold text-[13px] tracking-[0.15em] uppercase text-[#1F1F1F] mb-6">
                Popular Articles
              </h3>
              <div className="space-y-6">
                {popularArticles.map((pop, idx) => (
                  <div
                    key={idx}
                    className="group block cursor-pointer border-b border-[#E7E0D4] pb-6 last:border-0 last:pb-0"
                  >
                    <span className="font-sans font-semibold text-[11px] tracking-[0.15em] uppercase text-[#795825] block mb-1">
                      {pop.category}
                    </span>
                    <h4 className="font-serif font-bold text-[18px] leading-snug text-[#1F1F1F] group-hover:text-[#795825] transition-colors">
                      {pop.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly newsletter subscription form */}
            <div className="bg-[#F2EDE3] rounded-[28px] p-8 border border-[#E7E0D4] shadow-sm">
              <h3 className="font-serif font-bold text-[24px] text-[#1F1F1F] mb-3">Stay Inspired</h3>
              <p className="font-sans text-[15px] leading-[1.6] text-[#68645D] mb-6">
                Curated design ideas delivered monthly to your inbox.
              </p>

              {subscribeSuccess ? (
                <div className="bg-[#FAF8F3] border border-[#795825]/30 text-[#795825] p-4 rounded-xl text-center font-sans text-[14px]">
                  ✓ Subscribed successfully!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-[#FAF8F3] border border-[#E7E0D4] rounded-lg px-4 py-3 focus:outline-none focus:border-[#795825] text-[15px] font-sans"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#1D1C19] text-white py-3 rounded-full font-sans font-semibold text-[12px] tracking-[0.15em] uppercase hover:bg-black transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </aside>
        </div>
      </main>

      {/* ── Bottom CTA ───────────────────────────────────── */}
      <section className="bg-[#1D1C19] text-white py-24 text-center px-6 md:px-20 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU4E5-q-jr0gn9A2naK93JHar9mmHSmtXZpZHiDBV5XlozdJKU1sTrnRzk3za0D5zRn9ZZZzZmstcnvmDqPxQrgeOLE4dn-8CuvMQJ9Gztep39-pve1hC56tBwOJankpwwfVsB0scCu0jdNgGEerQqOzG572Wx7uyWxEcZFB2LEWlFm_WtraYZV_k1OEKwaousnMoAg-HXnnhBVOz78rEDAIjqAJ8fs4CJZy2QK4_BEgjtNGiE8Mhm"
            alt="Technical blueprint backdrop pattern"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="font-serif font-bold text-[36px] md:text-[56px] leading-[1.15] mb-6">
            Planning Your Dream Home?
          </h2>
          <p className="font-sans text-[16px] md:text-[18px] text-[#FAF8F3]/70 mb-10">
            Connect with our team to discuss your vision and learn how our seamless design-to-handover
            process can bring it to life in Nagercoil.
          </p>
          <Link
            href="/contact"
            className="inline-flex bg-transparent border border-[#e5c093] text-[#e5c093] px-8 py-4 rounded-full font-sans font-semibold text-[13px] tracking-[0.15em] uppercase hover:bg-[#e5c093] hover:text-[#1D1C19] transition-all duration-300"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
