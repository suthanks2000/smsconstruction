import Link from "next/link";
import { ArrowRight, Compass, Hammer, Paintbrush, Ruler, ShieldCheck, Sparkles } from "lucide-react";

interface BlogEmptyStateProps {
  selectedCategory?: string;
}

const UPCOMING_DISCIPLINES = [
  {
    name: "Civil Construction",
    href: "/construction",
    icon: Hammer,
    description:
      "Engineering checklists, residential planning steps, and structural guidelines for building in Nagercoil and Kanyakumari.",
  },
  {
    name: "Interior Design",
    href: "/interior-design",
    icon: Paintbrush,
    description:
      "Material palettes, modern kitchen planning, space optimization, and bespoke styling insights for coastal homes.",
  },
  {
    name: "Design & Planning",
    href: "/design-planning",
    icon: Compass,
    description:
      "3D elevation visualization, functional floor plans, structural layouts, and council approval preparations.",
  },
  {
    name: "Survey & Approvals",
    href: "/survey-approvals",
    icon: Ruler,
    description:
      "Total station topographical surveys, digital land measurements, boundary verification, and municipal sanctions.",
  },
  {
    name: "Fabrication Works",
    href: "/fabrication-works",
    icon: ShieldCheck,
    description:
      "Structural steel frameworks, aluminium joinery, ACP cladding, and decorative architectural metal detailing.",
  },
];

export default function BlogEmptyState({ selectedCategory = "All" }: BlogEmptyStateProps) {
  const isFiltered = selectedCategory !== "All";

  return (
    <div className="py-6 sm:py-10">
      {/* Editorial Announcement Card */}
      <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-white border border-[#E7E0D4] p-8 sm:p-12 lg:p-16 shadow-[0_16px_40px_rgba(0,0,0,0.03)] text-center max-w-4xl mx-auto mb-14 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F3] border border-[#E7E0D4] text-[#B08A52] text-[12px] font-sans font-semibold tracking-[0.2em] uppercase mb-6">
          <Sparkles size={14} className="shrink-0" />
          <span>EDITORIAL NOTE</span>
        </div>

        <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-semibold text-[#171614] leading-[1.2] tracking-tight mb-4">
          {isFiltered
            ? `Guides for ${selectedCategory} are on the way.`
            : "The first set of guides is on the way."}
        </h2>

        <p className="font-sans text-[16px] sm:text-[17.5px] text-[#68645D] leading-[1.7] max-w-2xl mx-auto mb-9">
          We are preparing practical articles covering construction, interior design, planning and related project topics from our studio in Nagercoil. In the meantime, explore our verified project services or speak directly with our engineering team.
        </p>

        {/* Primary and Secondary Action Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#171614] hover:bg-[#B08A52] text-white font-sans font-semibold text-[14.5px] transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98]"
          >
            <span>Explore Our Services</span>
            <ArrowRight size={16} />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-[#E7E0D4] hover:border-[#171614] bg-[#FAF8F3] text-[#171614] font-sans font-semibold text-[14.5px] transition-all duration-300 active:scale-[0.98]"
          >
            <span>Start a Project</span>
          </Link>
        </div>
      </div>

      {/* Internal Linking: Core Editorial Focus Areas / Services */}
      <div className="pt-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[11.5px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] block mb-2">
              EDITORIAL DISCIPLINES
            </span>
            <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#171614] tracking-tight">
              Explore Our Core Practices
            </h3>
          </div>
          <p className="text-[14px] text-[#77736C] font-sans max-w-md">
            Directly discover how SMS Construction plans, designs, and delivers spaces across Tamil Nadu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {UPCOMING_DISCIPLINES.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="group p-6 sm:p-7 rounded-[22px] bg-white border border-[#E7E0D4] hover:border-[#B08A52]/70 hover:shadow-[0_12px_32px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-full bg-[#FAF8F3] border border-[#E7E0D4] flex items-center justify-center text-[#B08A52] mb-5 group-hover:bg-[#171614] group-hover:text-white transition-colors duration-300">
                    <Icon size={19} strokeWidth={2} />
                  </div>
                  <h4 className="text-[18px] sm:text-[19px] font-semibold text-[#171614] mb-2 group-hover:text-[#B08A52] transition-colors flex items-center justify-between">
                    <span>{item.name}</span>
                    <ArrowRight size={15} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#B08A52]" />
                  </h4>
                  <p className="text-[13.5px] sm:text-[14px] text-[#68645D] leading-[1.6] font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E7E0D4]/60 text-[12.5px] font-semibold text-[#B08A52] font-sans inline-flex items-center gap-1.5">
                  <span>View Practice Details</span>
                  <ArrowRight size={13} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
