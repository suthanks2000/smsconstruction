"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── Mock Data ───────────────────────────────────────── */
const missionVision = [
  {
    type: "Mission",
    icon: "insights",
    desc: "To deliver structural masterpieces and curated interior spaces that reflect our clients' unique identities, combining rigorous engineering with a warm luxury design language.",
  },
  {
    type: "Vision",
    icon: "visibility",
    desc: "To be recognized as the premier architecture, construction, and design studio in South Tamil Nadu, setting new benchmarks for transparent communication and craftsmanship.",
  },
];

const values = [
  { title: "Quality", desc: "No compromises. We source premium-grade steel, local limestone, and artisan hardwoods for enduring structures.", icon: "star_half" },
  { title: "Integrity", desc: "Honest quotes, transparent billing, and zero hidden charges from discovery to key handover.", icon: "gavel" },
  { title: "Innovation", desc: "Integrating smart lighting, climate-sensitive architectural materials, and modern layouts.", icon: "lightbulb" },
  { title: "Craftsmanship", desc: "Hand-restored woodwork, book-matched marble, and meticulous plastering by seasoned regional artisans.", icon: "architecture" },
  { title: "Transparency", desc: "Frequent site progress updates, material grade verifications, and structured schedules.", icon: "visibility" },
  { title: "Satisfaction", desc: "Dedicated support post-occupancy to ensure your space adapts perfectly to your lifestyle.", icon: "sentiment_very_satisfied" },
];

const features = [
  { title: "Complete Solutions", desc: "We manage the entire project from architectural plans and government permits to final interior styling.", icon: "all_inclusive" },
  { title: "Experienced PM", desc: "Dedicated project manager coordinates timelines, contractors, and material deliveries on your behalf.", icon: "assignment_ind" },
  { title: "Premium Materials", desc: "Direct tie-ups with global marble quarries, Grade-A steel suppliers, and local teak woods.", icon: "texture" },
  { title: "Transparent Chats", desc: "Real-time updates via client portal, regular site photos, and structural reports.", icon: "chat" },
  { title: "On-Time Delivery", desc: "Strict milestones, double-shift options during crucial phases, and proactive timeline management.", icon: "schedule" },
  { title: "Dedicated Support", desc: "Post-handover warranty visits and support for electrical, plumbing, and woodwork updates.", icon: "support_agent" },
];

const timelineSteps = [
  { year: "2010", title: "Company Started", desc: "Founded with a single visionary designer and a small site engineering team in Nagercoil." },
  { year: "2014", title: "Major Milestones", desc: "Completed our first luxury multi-storey residential project in Suchindram." },
  { year: "2018", title: "Studio Growth", desc: "Expanded to offer complete turnkey interior design alongside structural construction." },
  { year: "2022", title: "Completed Projects", desc: "Crossed 150+ completed residential, commercial, and renovation landmarks." },
  { year: "2026", title: "Future Vision", desc: "Pioneering sustainable eco-homes and digital-first building coordination." },
];

const commitmentSteps = [
  { num: "01", title: "Planning", desc: "Site study, architectural drafting, and budget alignment." },
  { num: "02", title: "Design", desc: "3D walkthroughs, moodboards, and interior layouts." },
  { num: "03", title: "Material Select", desc: "Choosing marble, wood, fixtures from our catalog." },
  { num: "04", title: "Execution", desc: "Foundation, framework, masonry, and electrical wiring." },
  { num: "05", title: "Quality Check", desc: "Rigorous check lists for strength, finish, alignment." },
  { num: "06", title: "Final Handover", desc: "Fully-cleaned, styled space delivered on schedule." },
];

const teamMembers = [
  { name: "S. Mohan Sundar", role: "Founder & Principal Architect", desc: "Over 18 years of experience designing premium spaces in Nagercoil.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPJJQMe1s3IAn4zdrWvAzu3ZsYjXF8BuLwWrfjsoSFXMwRHO1iTa61gWZCig2i0MWLk92F0Ybpoa0_zB_VZipeTuf7f_om4oyVFgn-Z3qt1z9voHoJSk4hnlm2b5e9apKT6EDaHAV551M7aBaI2ttSXR9T66KxgF2kKQKUuECDWaY_UVOgkcxlRK6a4qTzG-MslpzZHF0ErP6qF3FdIhTtqIJgQiGHgYoLsgW43cu8vIyNQyrrtugM" },
  { name: "Arun Kumar", role: "Chief Project Manager", desc: "Ensures timelines, budget compliance, and structural excellence.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyzSqguT_CG4dDNc40ENJqUenHE48xgelLoh0RUdKoe7gU1L3QMKhbuQNaZG0G5fHLa_qqged4HvrHHsK1MopflLauMXt4NmnifxZ5ik6cY6Sk7eRx0YopCgdjNuK3JqLw-vpaiNb9g-w6Snzfr-ROcw8-HA-mAX96HRb2QL-jraFBoR_ifF2mjimdKWH5AD2_cINWjW4XdrE60ZCLUl8aAkpqUHzDnDcQN3deK_LjzbpvDKOrYhtH" },
  { name: "Priyanka Sen", role: "Lead Interior Designer", desc: "Specializes in soft luxury, organic textures, and curated styling.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsc46s9mdARWyrZMovUG0R9EcoPiVtJuxkdDdXl3F4U8pAuKD6jUPx6SwIJoIPV7BvYGkI0NdWOiwH9nE3xsc61Jt5-m4xHO0VuqtfHW-v9LJD1Ey0WG_elwwqw0HSWnTXGRwmakqagm7aLrTmpqz_v6MJhsR0Ovs_af4lMyFvhFmgut19txMukscULqoKdybC11FxEPfg1_5kDZmqEtWHq6ea5lkU9NYFJexr-PYrxOfgFnjRWuC-" },
];

const achievements = [
  { val: "180+", label: "Completed Projects" },
  { val: "15+", label: "Years Experience" },
  { val: "99%", label: "Happy Clients" },
  { val: "300+", label: "Site Visits" },
];

const areasWeServe = [
  "Nagercoil Town",
  "Suchindram",
  "Kanyakumari Coast",
  "Marthandam",
  "Thuckalay",
  "Parvathipuram",
  "Vadasery",
  "Ozhuginasery",
];

export default function AboutUs() {
  return (
    <>
      <Navbar />

      {/* ── 1. Hero Section ──────────────────────────────── */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbmm-egaqIKiRRL9UlaU4cKml29xg6VrWi9COJvF1CkMzwmPtDs5wB3v3A6cOpvyo_HA40cFWGq-Yv0EMsjLazEYEDE4JpZrpkKWlw22NGGqMd5iTSsTytoKHLOpvNj6dOdhp6R97F59-1tDD-2vFCcLipndXFjjS-5eBnDIStd__N-v0a7VrP1yObCTaph4Nz_YjiauqYiaCICPlhzSIoNdNRQqpoh8Q-3GNZXxzHuf5zHSxZu0Aj"
            alt="SMS Construction office space layout"
            fill
            priority
            className="object-cover object-center scale-105"
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-[#1D1C19]/50 z-10" />
        </div>

        <div className="relative z-20 text-center px-6 md:px-20 max-w-4xl mx-auto mt-16">
          <h1 className="font-serif font-bold text-[48px] md:text-[84px] leading-[1.05] tracking-[-0.02em] text-white mb-6 animate-fade-in">
            Building Beautiful Spaces with Purpose.
          </h1>
          <p className="font-sans text-[18px] md:text-[20px] leading-[1.7] text-white/90 max-w-2xl mx-auto mb-10">
            SMS Construction is a trusted Interior Design and Construction company delivering premium
            residential, commercial, and renovation projects across Nagercoil and Kanyakumari District.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-[#1D1C19] font-sans font-semibold text-[13px] tracking-[0.15em] uppercase hover:scale-105 transition-all shadow-lg"
            >
              View Our Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/40 text-white font-sans font-semibold text-[13px] tracking-[0.15em] uppercase hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. Our Story ─────────────────────────────────── */}
      <section className="py-24 md:py-40 bg-[#FAF8F3]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="relative w-full h-[550px] rounded-[28px] overflow-hidden shadow-md">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmn-7W2tlaqKwGM7zXre4dztO4PU8c6Oc2JG_ud13U1frmdUP6sxDq_YvOM2RlEo35fzVK0EtXOmzifAD3qBPA1sSaflfRfLmXI8diIkQ94txfhFjdHXYEwt2etfB6K5aDE1fqyG-lrxLpV3xuQ0sVkCBdEdX3pkqWH9gem0cCJgoMgz-3C5sUfn9cqFNOrKUQtvQm3vmSflWYs984C1GHSvdzAsQmZB9VZQ2zHLlbqRimw1NiDTsN"
                  alt="SMS Construction architectural team planning"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
            <div className="lg:col-span-6 space-y-6">
              <span className="font-sans font-semibold text-[12px] tracking-[0.15em] uppercase text-[#795825]">
                Our Roots
              </span>
              <h2 className="font-serif font-bold text-[32px] md:text-[48px] leading-[1.15] text-[#1F1F1F]">
                Our Story
              </h2>
              <p className="font-sans text-[16px] leading-[1.8] text-[#68645D]">
                SMS Construction began with a simple yet profound vision: to bridge the gap between
                architectural ambition and masterful execution. Founded on the principles of integrity and
                craftsmanship, we have grown from a small local firm into a premier name in the Nagercoil
                and Kanyakumari region.
              </p>
              <p className="font-sans text-[16px] leading-[1.8] text-[#68645D]">
                We believe that a building is more than just a structure; it is a legacy. Our journey has
                been defined by a relentless pursuit of quality, a deep understanding of local materials
                and climate, and an unwavering commitment to our clients&apos; dreams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Mission & Vision ──────────────────────────── */}
      <section className="py-16 md:py-24 bg-[#F2EDE3]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {missionVision.map((mv) => (
            <div key={mv.type} className="bg-white p-10 rounded-[28px] border border-[#E7E0D4] shadow-sm flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-[#795825] text-[36px] mb-6">{mv.icon}</span>
                <h3 className="font-serif font-bold text-[24px] text-[#1F1F1F] mb-4">{mv.type}</h3>
                <p className="font-sans text-[16px] leading-[1.7] text-[#68645D]">{mv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. Why Choose SMS ────────────────────────────── */}
      <section className="py-24 md:py-40 bg-[#FAF8F3]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <span className="font-sans font-semibold text-[12px] tracking-[0.15em] uppercase text-[#795825] mb-4 block">
              Why Choose SMS
            </span>
            <h2 className="font-serif font-bold text-[32px] md:text-[48px] leading-[1.15] text-[#1F1F1F]">
              One Team. One Vision. One Complete Solution.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-white p-8 rounded-[28px] border border-[#E7E0D4] shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300">
                <span className="material-symbols-outlined text-[#B08A52] text-[32px] mb-6 block">{f.icon}</span>
                <h3 className="font-sans font-semibold text-[18px] text-[#1F1F1F] mb-3">{f.title}</h3>
                <p className="font-sans text-[15px] leading-[1.7] text-[#68645D]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Design Philosophy Quote ────────────────────── */}
      <section className="relative py-32 md:py-48 bg-[#1D1C19] text-center px-6 md:px-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvrJqbPm9hy3nYRxKNsmn2GKYTfq2a7mL2ATXoUNQGRHE4fL5uIaBF_uJjgU8u28hr-K0P5DC3AbYPJNILoIlk-c3ycdUoBby578kGisoCg2eluPYU5qvV61i9t6-fqtbkKu4piESjghXO4O56Jzp8pkkeQisbccvH4umTxsPoAALcOkwuNeFJ7Rr03r3DI5ILVXaamXiTiDXp-J79ktrz6dXydNmjpVk6gXQA4P_gH90jYVwCWtZ9"
            alt="Design backdrop"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <span className="font-sans font-semibold text-[12px] tracking-[0.15em] uppercase text-[#e5c093] block">
            Our Philosophy
          </span>
          <blockquote className="font-serif italic text-[24px] md:text-[40px] leading-relaxed text-[#FAF8F3]">
            &ldquo;We believe every space should combine beauty, functionality, and long-term value.&rdquo;
          </blockquote>
          <div className="w-16 h-px bg-[#e5c093] mx-auto"></div>
          <cite className="font-sans text-[15px] text-[#F8F4EE]/70 uppercase tracking-widest block">
            SMS Design Studio
          </cite>
        </div>
      </section>

      {/* ── 6. Experience Timeline ───────────────────────── */}
      <section className="py-24 md:py-40 bg-[#FAF8F3] overflow-x-auto">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="text-center mb-20">
            <span className="font-sans font-semibold text-[12px] tracking-[0.15em] uppercase text-[#795825] mb-4 block">
              Timeline
            </span>
            <h2 className="font-serif font-bold text-[32px] md:text-[48px] leading-[1.15] text-[#1F1F1F]">
              Experience Timeline
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start relative min-w-[700px] md:min-w-0">
            {timelineSteps.map((step, idx) => (
              <div key={step.year} className="flex-1 relative">
                {/* Horizontal timeline connector */}
                {idx < timelineSteps.length - 1 && (
                  <div className="absolute top-[35px] left-12 right-0 h-0.5 bg-[#E7E0D4] hidden md:block" />
                )}
                <div className="flex items-center gap-4 mb-4 md:flex-col md:items-start md:gap-2">
                  <span className="font-serif font-bold text-[28px] text-[#795825]">{step.year}</span>
                  <span className="w-3 h-3 rounded-full bg-[#B08A52] md:-translate-x-1.5" />
                </div>
                <h4 className="font-sans font-semibold text-[17px] text-[#1F1F1F] mb-2">{step.title}</h4>
                <p className="font-sans text-[14px] leading-[1.6] text-[#68645D]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Our Values ────────────────────────────────── */}
      <section className="py-24 bg-[#F2EDE3]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="text-center mb-20">
            <span className="font-sans font-semibold text-[12px] tracking-[0.15em] uppercase text-[#795825] mb-4 block">
              Core Beliefs
            </span>
            <h2 className="font-serif font-bold text-[32px] md:text-[48px] leading-[1.15] text-[#1F1F1F]">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-8 rounded-[28px] border border-[#E7E0D4] shadow-sm">
                <span className="material-symbols-outlined text-[#B08A52] text-[32px] mb-6 block">{v.icon}</span>
                <h3 className="font-sans font-semibold text-[18px] text-[#1F1F1F] mb-3">{v.title}</h3>
                <p className="font-sans text-[15px] leading-[1.7] text-[#68645D]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Our Commitment (6 Steps) ──────────────────── */}
      <section className="py-24 md:py-40 bg-[#FAF8F3]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="text-center mb-20">
            <span className="font-sans font-semibold text-[12px] tracking-[0.15em] uppercase text-[#795825] mb-4 block">
              How We Deliver
            </span>
            <h2 className="font-serif font-bold text-[32px] md:text-[48px] leading-[1.15] text-[#1F1F1F]">
              Our Commitment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {commitmentSteps.map((step) => (
              <div key={step.num} className="relative group">
                <div className="font-serif text-[48px] leading-none text-[#E7E0D4] group-hover:text-[#B08A52] transition-colors mb-4 italic font-bold">
                  {step.num}
                </div>
                <h4 className="font-sans font-semibold text-[16px] text-[#1F1F1F] mb-2">{step.title}</h4>
                <p className="font-sans text-[13px] leading-[1.6] text-[#68645D]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Areas We Serve ────────────────────────────── */}
      <section className="py-24 bg-[#F2EDE3]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="font-sans font-semibold text-[12px] tracking-[0.15em] uppercase text-[#795825] block">
              Locations
            </span>
            <h2 className="font-serif font-bold text-[32px] md:text-[48px] leading-[1.15] text-[#1F1F1F]">
              Areas We Serve
            </h2>
            <p className="font-sans text-[16px] leading-[1.8] text-[#68645D]">
              SMS Construction proudly serves the entire Kanyakumari district, executing luxury projects in
              towns and coastal regions.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {areasWeServe.map((area) => (
                <div key={area} className="bg-white p-6 rounded-[20px] text-center border border-[#E7E0D4] shadow-sm">
                  <span className="material-symbols-outlined text-[#B08A52] mb-2">location_on</span>
                  <div className="font-sans font-semibold text-[14px] text-[#1F1F1F]">{area}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. Achievements (Stats) ─────────────────────── */}
      <section className="py-16 md:py-24 bg-[#FAF8F3] border-t border-[#E7E0D4]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {achievements.map((stat) => (
            <div key={stat.label}>
              <div className="font-serif font-bold text-[40px] md:text-[56px] text-[#795825] mb-2">{stat.val}</div>
              <div className="font-sans text-[14px] text-[#68645D] uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 11. Meet Our Team ────────────────────────────── */}
      <section className="py-24 md:py-40 bg-[#FAF8F3] border-t border-[#E7E0D4]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="text-center mb-20">
            <span className="font-sans font-semibold text-[12px] tracking-[0.15em] uppercase text-[#795825] mb-4 block">
              Our Experts
            </span>
            <h2 className="font-serif font-bold text-[32px] md:text-[48px] leading-[1.15] text-[#1F1F1F]">
              Meet Our Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member) => (
              <div key={member.name} className="group flex flex-col items-center text-center">
                <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-md mb-6 bg-[#F2EDE3]">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <h4 className="font-serif font-bold text-[22px] text-[#1F1F1F] mb-1">{member.name}</h4>
                <div className="font-sans font-semibold text-[13px] tracking-[0.15em] uppercase text-[#B08A52] mb-4">
                  {member.role}
                </div>
                <p className="font-sans text-[14px] leading-[1.7] text-[#68645D] max-w-xs">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12. Final CTA ────────────────────────────────── */}
      <section className="bg-[#1D1C19] text-[#FAF8F3] py-24 text-center px-6 md:px-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif font-bold text-[36px] md:text-[56px] leading-[1.15] mb-8">
            Let&apos;s Build Something Extraordinary Together.
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-[#1D1C19] font-sans font-semibold text-[13px] tracking-[0.15em] uppercase hover:scale-105 transition-all shadow-lg"
            >
              Book Consultation
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/30 text-white font-sans font-semibold text-[13px] tracking-[0.15em] uppercase hover:bg-white/5 transition-all"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
