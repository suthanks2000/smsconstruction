import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Phone, MessageSquare, Layers } from "lucide-react";
import { projects } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} | ${project.category} in ${project.location} | SMS Construction`,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | SMS Construction`,
      description: project.description,
      url: `https://smsconstruction.in/projects/${project.slug}`,
      images: [
        {
          url: project.image,
          alt: project.alt,
        },
      ],
    },
  };
}

export default async function ProjectSlugPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const phoneNumber = "+919488021183";
  const formattedPhone = "+91 94880 21183";
  const whatsappNumber = "919488021183";

  // Structured Data
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
        name: "Projects",
        item: "https://smsconstruction.in/projects",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `https://smsconstruction.in/projects/${project.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="bg-[#FAF8F3] text-[#171614] selection:bg-[#B08A52] selection:text-white">
        {/* Floating Back to Projects */}
        <Link
          href="/projects"
          className="fixed bottom-6 left-6 md:bottom-10 md:left-10 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-[#171614] text-white shadow-xl hover:bg-[#B08A52] transition-all duration-300 group"
          aria-label="Back to Projects Archive"
        >
          <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="font-sans text-[12px] uppercase tracking-wider font-semibold">Projects</span>
        </Link>

        {/* Hero Section */}
        <header className="pt-28 pb-12 sm:pt-36 sm:pb-16 border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-[13px] font-sans text-[#77736C]">
                <li>
                  <Link href="/" className="hover:text-[#B08A52] transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-[#B08A52]/60">
                  /
                </li>
                <li>
                  <Link href="/projects" className="hover:text-[#B08A52] transition-colors">
                    Projects
                  </Link>
                </li>
                <li aria-hidden="true" className="text-[#B08A52]/60">
                  /
                </li>
                <li aria-current="page" className="text-[#171614] font-medium truncate max-w-[240px]">
                  {project.title}
                </li>
              </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 text-[#B08A52] font-sans text-[12px] uppercase font-semibold tracking-widest mb-3">
                  <span>{project.category}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B08A52]" />
                  <span>{project.location}</span>
                </div>
                <h1 className="font-serif text-[36px] sm:text-[52px] lg:text-[60px] font-bold text-[#171614] leading-[1.08] tracking-tight mb-4">
                  {project.title}
                </h1>
                <p className="text-[17px] sm:text-[19px] text-[#68645D] max-w-2xl leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Quick Specs Card */}
              <div className="lg:col-span-4 p-6 rounded-[22px] bg-white border border-[#E7E0D4] shadow-sm">
                <h2 className="font-sans text-[11px] uppercase tracking-widest text-[#B08A52] font-semibold mb-4">
                  Project Highlights
                </h2>
                <div className="space-y-3 text-[14px]">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E7E0D4]/60">
                    <span className="text-[#77736C]">Scope:</span>
                    <span className="font-medium text-[#171614]">{project.area}</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-[#E7E0D4]/60">
                    <span className="text-[#77736C]">Timeline:</span>
                    <span className="font-medium text-[#171614]">{project.duration}</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-[#E7E0D4]/60">
                    <span className="text-[#77736C]">Delivered:</span>
                    <span className="font-medium text-[#171614]">{project.completionDate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#77736C]">Location:</span>
                    <span className="font-medium text-[#171614]">{project.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Primary Hero Image */}
        <section className="py-10 border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] rounded-[28px] overflow-hidden bg-[#171614] shadow-lg">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                priority
                sizes="(max-width: 1360px) 100vw, 1360px"
                className="object-cover"
                unoptimized={project.image.startsWith("http")}
              />
            </div>
          </div>
        </section>

        {/* Project Narrative & Case Details */}
        <section className="py-16 sm:py-24 border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Left Column: Core Narrative */}
              <div className="lg:col-span-7 space-y-10">
                <div>
                  <h2 className="font-sans text-[12px] uppercase tracking-widest text-[#B08A52] font-semibold mb-3">
                    Project Overview
                  </h2>
                  <p className="text-[17px] text-[#171614] leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                <div>
                  <h3 className="font-sans text-[12px] uppercase tracking-widest text-[#B08A52] font-semibold mb-3">
                    Client Requirements
                  </h3>
                  <p className="text-[16px] text-[#68645D] leading-relaxed">
                    {project.requirements}
                  </p>
                </div>

                <div>
                  <h3 className="font-sans text-[12px] uppercase tracking-widest text-[#B08A52] font-semibold mb-3">
                    Architectural Concept &amp; Approach
                  </h3>
                  <p className="text-[16px] text-[#68645D] leading-relaxed">
                    {project.concept}
                  </p>
                </div>

                <div className="p-8 rounded-[24px] bg-[#F6F3EB] border border-[#E7E0D4]">
                  <h3 className="font-serif text-[20px] font-bold text-[#171614] mb-3">
                    Execution Challenges &amp; Solutions
                  </h3>
                  <p className="text-[15px] text-[#68645D] mb-4 leading-relaxed">
                    <strong className="text-[#171614]">Challenge: </strong>
                    {project.challenges}
                  </p>
                  <p className="text-[15px] text-[#68645D] leading-relaxed">
                    <strong className="text-[#171614]">Solution: </strong>
                    {project.solutions}
                  </p>
                </div>
              </div>

              {/* Right Column: Materials & Review */}
              <div className="lg:col-span-5 space-y-8">
                {/* Materials & Craftsmanship */}
                <div className="p-8 rounded-[24px] bg-white border border-[#E7E0D4] shadow-sm">
                  <div className="flex items-center gap-2 font-sans text-[12px] uppercase tracking-widest text-[#B08A52] font-semibold mb-5">
                    <Layers size={16} />
                    <span>Materials &amp; Finishes</span>
                  </div>
                  <ul className="space-y-3">
                    {project.materials.map((mat) => (
                      <li key={mat} className="flex items-start gap-3 text-[14px] text-[#171614]">
                        <CheckCircle2 size={16} className="text-[#B08A52] shrink-0 mt-0.5" />
                        <span>{mat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Client Review Quote */}
                {project.clientReview && (
                  <div className="p-8 rounded-[24px] bg-white border border-[#E7E0D4] shadow-sm">
                    <span className="font-serif text-[48px] leading-none text-[#B08A52] select-none block mb-2">
                      “
                    </span>
                    <blockquote className="text-[15px] sm:text-[16px] text-[#171614] italic leading-relaxed mb-6">
                      {project.clientReview.text}
                    </blockquote>
                    <div className="border-t border-[#E7E0D4] pt-4">
                      <p className="font-sans font-bold text-[14px] text-[#171614]">
                        {project.clientReview.author}
                      </p>
                      <p className="font-sans text-[12px] text-[#77736C]">
                        {project.clientReview.role} • {project.location}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        {project.gallery.completed.length > 0 && (
          <section className="py-16 sm:py-24 border-b border-[#E7E0D4] bg-white">
            <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
              <div className="max-w-2xl mb-12">
                <span className="inline-block text-[12px] font-sans font-semibold tracking-widest uppercase text-[#B08A52] mb-3">
                  COMPLETED WORK
                </span>
                <h2 className="font-serif text-[30px] sm:text-[40px] font-bold text-[#171614] leading-[1.18] tracking-tight">
                  Visual Documentation
                </h2>
                <p className="text-[15px] sm:text-[16px] text-[#68645D] mt-2">
                  Detailed frames capturing the textures, spatial flow and material precision of this project.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {project.gallery.completed.map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-[4/3] rounded-[22px] overflow-hidden bg-[#171614] border border-[#E7E0D4] shadow-sm group"
                  >
                    <Image
                      src={imgUrl}
                      alt={`${project.title} detailed photograph ${idx + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      unoptimized={imgUrl.startsWith("http")}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Cross Discipline Connection */}
        <section className="py-16 bg-[#FAF8F3] border-b border-[#E7E0D4]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[#B08A52]">
                  Explore Architecture Disciplines
                </p>
                <p className="font-serif text-[20px] font-bold text-[#171614]">
                  Interested in services behind this project?
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-[13px] font-sans">
                <Link
                  href="/services"
                  className="px-4 py-2 rounded-full bg-white hover:bg-[#B08A52] hover:text-white border border-[#E7E0D4] text-[#171614] font-medium transition-colors"
                >
                  Services Hub
                </Link>
                <Link
                  href="/interior-design"
                  className="px-4 py-2 rounded-full bg-white hover:bg-[#B08A52] hover:text-white border border-[#E7E0D4] text-[#171614] font-medium transition-colors"
                >
                  Interior Design
                </Link>
                <Link
                  href="/construction"
                  className="px-4 py-2 rounded-full bg-white hover:bg-[#B08A52] hover:text-white border border-[#E7E0D4] text-[#171614] font-medium transition-colors"
                >
                  Construction
                </Link>
                <Link
                  href="/design-planning"
                  className="px-4 py-2 rounded-full bg-white hover:bg-[#B08A52] hover:text-white border border-[#E7E0D4] text-[#171614] font-medium transition-colors"
                >
                  Design &amp; Planning
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 sm:py-32 bg-[#171614] text-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#B08A52]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative max-w-[900px] mx-auto px-5 sm:px-8 text-center">
            <span className="inline-block text-[12px] font-sans font-semibold tracking-widest uppercase text-[#B08A52] mb-4">
              START YOUR PROJECT
            </span>
            <h2 className="font-serif text-[34px] sm:text-[48px] lg:text-[54px] font-bold text-[#FAF8F3] leading-[1.14] tracking-tight mb-6">
              Plan a space tailored to your lifestyle.
            </h2>
            <p className="text-[17px] text-[#FAF8F3]/80 max-w-xl mx-auto mb-10 font-sans leading-relaxed">
              Whether building new or designing interiors, schedule an engineering consultation with our team in Nagercoil.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#B08A52] hover:bg-[#97733f] text-white font-sans font-semibold text-[15px] transition-all duration-300 shadow-md"
              >
                <span>Get a Free Quote</span>
                <ArrowRight size={17} />
              </Link>
              <a
                href={`tel:${phoneNumber}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/30 hover:border-white text-white font-sans font-medium text-[15px] hover:bg-white/10 transition-colors"
              >
                <Phone size={16} />
                <span>Call {formattedPhone}</span>
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-white/80 hover:text-white font-sans text-[15px] hover:underline"
              >
                <MessageSquare size={16} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
