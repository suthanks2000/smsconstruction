import Link from "next/link";

interface ProjectServiceHubProps {
  className?: string;
}

export default function ProjectServiceHub({
  className = "py-12 bg-[#FAF8F3] border-b border-[#E7E0D4]",
}: ProjectServiceHubProps) {
  return (
    <section className={className}>
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[#B08A52]">
              Explore Full Service Architecture
            </p>
            <p className="text-[18px] font-semibold text-[#171714]">
              Complementary Disciplines by SMS Construction
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[13px] font-sans">
            <Link
              href="/services"
              className="px-4 py-2 rounded-full bg-white hover:bg-[#B08A52] hover:text-white border border-[#E7E0D4] text-[#171714] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A52]"
            >
              Services Hub
            </Link>
            <Link
              href="/interior-design"
              className="px-4 py-2 rounded-full bg-white hover:bg-[#B08A52] hover:text-white border border-[#E7E0D4] text-[#171714] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A52]"
            >
              Interior Design
            </Link>
            <Link
              href="/construction"
              className="px-4 py-2 rounded-full bg-white hover:bg-[#B08A52] hover:text-white border border-[#E7E0D4] text-[#171714] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A52]"
            >
              Construction
            </Link>
            <Link
              href="/survey-approvals"
              className="px-4 py-2 rounded-full bg-white hover:bg-[#B08A52] hover:text-white border border-[#E7E0D4] text-[#171714] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A52]"
            >
              Survey &amp; Approvals
            </Link>
            <Link
              href="/fabrication-works"
              className="px-4 py-2 rounded-full bg-white hover:bg-[#B08A52] hover:text-white border border-[#E7E0D4] text-[#171714] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A52]"
            >
              Fabrication Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
