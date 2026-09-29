import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@/data/blog";

interface FeaturedArticleProps {
  post: BlogPost;
}

export default function FeaturedArticle({ post }: FeaturedArticleProps) {
  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-IN", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <section aria-labelledby="featured-article-heading" className="mb-14 sm:mb-20">
      <div className="group bg-white rounded-[28px] sm:rounded-[36px] border border-[#E7E0D4] overflow-hidden hover:border-[#B08A52]/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Image Column */}
          {post.coverImage ? (
            <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[300px] sm:min-h-[380px] bg-[#F2EDE3] overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.coverImageAlt || post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          ) : (
            <div className="lg:col-span-1 hidden lg:block" />
          )}

          {/* Editorial Content Column */}
          <div className={`${post.coverImage ? "lg:col-span-5" : "lg:col-span-12"} p-7 sm:p-10 lg:p-12 flex flex-col justify-between`}>
            <div>
              {/* Eyebrow & Badges */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3.5 py-1 rounded-full bg-[#FAF8F3] border border-[#E7E0D4] text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#B08A52]">
                  Featured Guide
                </span>
                <span className="text-[12px] font-sans font-medium text-[#77736C]">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h2
                id="featured-article-heading"
                className="text-[26px] sm:text-[32px] lg:text-[36px] font-semibold text-[#171614] leading-[1.2] tracking-tight group-hover:text-[#B08A52] transition-colors mb-4"
              >
                <Link href={`/blog/${post.slug}`} className="focus:outline-none focus:underline">
                  {post.title}
                </Link>
              </h2>

              {/* Excerpt */}
              <p className="font-sans text-[15px] sm:text-[16.5px] text-[#68645D] leading-[1.7] mb-8">
                {post.excerpt}
              </p>
            </div>

            {/* Bottom Meta & Read Action */}
            <div className="pt-6 border-t border-[#E7E0D4]/80 flex flex-wrap items-center justify-between gap-4 font-sans text-[13.5px]">
              <div className="flex items-center gap-4 text-[#77736C]">
                {formattedDate && (
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={13} className="shrink-0" />
                    <span>{formattedDate}</span>
                  </span>
                )}
                {post.readingTime && (
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={13} className="shrink-0" />
                    <span>{post.readingTime}</span>
                  </span>
                )}
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 font-semibold text-[#171614] group-hover:text-[#B08A52] transition-colors"
                aria-label={`Read featured guide: ${post.title}`}
              >
                <span>Read Full Guide</span>
                <ArrowRight size={15} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
