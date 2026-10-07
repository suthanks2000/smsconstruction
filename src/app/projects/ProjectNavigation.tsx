import Link from "next/link";
import Image from "next/image";
import { projects as allProjects, Project } from "@/data/projects";

export interface ProjectNavigationItem {
  slug: string;
  title: string;
  subtitle?: string;
  image: string;
  alt?: string;
}

export interface ProjectNavigationProps {
  /** Current project slug — if provided, automatically computes previous & next projects */
  currentSlug?: string;
  /** Explicit list of project items to display */
  items?: ProjectNavigationItem[];
  /** Explicit previous project item */
  prevProject?: ProjectNavigationItem;
  /** Explicit next project item */
  nextProject?: ProjectNavigationItem;
  /** Eyebrow badge text (default: "Selected Portfolio") */
  badge?: string;
  /** Main heading title (default: "Continue Exploring") */
  title?: string;
  /** Action button text (default: "Explore More") */
  buttonText?: string;
  /** Additional CSS class names for the section container */
  className?: string;
}

function projectToItem(p: Project): ProjectNavigationItem {
  return {
    slug: p.slug,
    title: p.title,
    subtitle: `${p.location} · ${p.category}`,
    image: p.image,
    alt: p.alt || `${p.title} - SMS Construction`,
  };
}

export default function ProjectNavigation({
  currentSlug,
  items,
  prevProject,
  nextProject,
  badge = "Selected Portfolio",
  title = "Continue Exploring",
  buttonText = "Explore More",
  className = "",
}: ProjectNavigationProps) {
  // Determine the display items
  let displayItems: ProjectNavigationItem[] = [];

  if (items && items.length > 0) {
    displayItems = items.slice(0, 2);
  } else if (prevProject && nextProject) {
    displayItems = [prevProject, nextProject];
  } else if (currentSlug) {
    const currentIndex = allProjects.findIndex((p) => p.slug === currentSlug);
    if (currentIndex !== -1 && allProjects.length > 1) {
      const prevIdx = (currentIndex - 1 + allProjects.length) % allProjects.length;
      const nextIdx = (currentIndex + 1) % allProjects.length;
      displayItems = [
        projectToItem(allProjects[prevIdx]),
        projectToItem(allProjects[nextIdx]),
      ];
    }
  }

  // Fallback if none determined
  if (displayItems.length === 0 && allProjects.length >= 2) {
    displayItems = [
      projectToItem(allProjects[0]),
      projectToItem(allProjects[1]),
    ];
  }

  return (
    <section
      className={`scroll-reveal relative overflow-hidden px-6 md:px-12 lg:px-20 py-10 md:py-14 ${className}`}
      aria-label="Project Navigation"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="relative max-w-[980px] mx-auto px-5 sm:px-8 text-center mb-8 md:mb-10 pb-4 border-b border-[#E7E0D4]">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#B08A52]/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          {badge && (
            <span className="relative z-10 inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.25em] uppercase mb-4 text-[#B08A52]">
              {badge}
            </span>
          )}

          {title && (
            <h2 className="relative z-10 font-semibold text-[32px] sm:text-[46px] lg:text-[52px] leading-[1.14] tracking-tight mb-5 text-[#171614]">
              {title}
            </h2>
          )}
        </div>

        {/* Navigation - Projects Side-by-Side (SpaceX Card Aesthetic) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {displayItems.map((item) => (
            <Link
              key={item.slug}
              href={`/projects/${item.slug}`}
              className="group relative w-full h-[280px] sm:h-[320px] md:h-[340px] rounded-[24px] overflow-hidden block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A52] shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Background Image */}
              <Image
                src={item.image}
                alt={item.alt || item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient Overlays matching reference */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20 pointer-events-none"
                aria-hidden="true"
              />

              {/* Bottom: Title, Subtitle & Action Button */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <h3 className="font-sans font-semibold text-[24px] sm:text-[28px] md:text-[32px] text-white leading-tight drop-shadow-sm truncate">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="mt-1 text-[13px] sm:text-[14px] text-white/80 font-normal tracking-wide line-clamp-1">
                      {item.subtitle}
                    </p>
                  )}
                </div>

                <div className="shrink-0 self-start sm:self-end">
                  <span className="inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-black/60 hover:bg-black/90 group-hover:bg-black/90 backdrop-blur-md text-white text-[12px] sm:text-[13px] font-medium border border-white/15 shadow-lg transition-all duration-300 group-hover:scale-105">
                    {buttonText}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
