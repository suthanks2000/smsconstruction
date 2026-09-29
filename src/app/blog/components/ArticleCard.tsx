import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@/data/blog";

interface ArticleCardProps {
  post: BlogPost;
  priority?: boolean;
}

export default function ArticleCard({ post, priority = false }: ArticleCardProps) {
  // Format publication date only if valid
  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-IN", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <article className="group flex flex-col justify-between bg-white rounded-[24px] border border-[#E7E0D4] overflow-hidden hover:border-[#B08A52]/60 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] transition-all duration-300">
      {post.coverImage && (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F2EDE3]">
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt || post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>
      )}

      <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
        <div>
          {/* Category Eyebrow */}
          <div className="flex items-center justify-between gap-3 mb-3">
            <span className="text-[11.5px] font-sans font-semibold tracking-[0.2em] uppercase text-[#B08A52]">
              {post.category}
            </span>

            {/* Reading Time (only if explicitly provided) */}
            {post.readingTime && (
              <span className="inline-flex items-center gap-1 text-[12px] font-sans text-[#77736C]">
                <Clock size={12} className="shrink-0" />
                <span>{post.readingTime}</span>
              </span>
            )}
          </div>

          {/* Title */}
          <h2 className="text-[20px] sm:text-[23px] font-semibold text-[#171614] leading-[1.28] tracking-tight group-hover:text-[#B08A52] transition-colors mb-3">
            <Link href={`/blog/${post.slug}`} className="focus:outline-none focus:underline">
              {post.title}
            </Link>
          </h2>

          {/* Excerpt */}
          <p className="font-sans text-[14.5px] sm:text-[15.5px] text-[#68645D] leading-[1.65] line-clamp-3 mb-6">
            {post.excerpt}
          </p>
        </div>

        {/* Footer: Date & Read Link */}
        <div className="pt-4 border-t border-[#E7E0D4]/70 flex items-center justify-between gap-4 text-[13px] font-sans">
          {formattedDate ? (
            <span className="inline-flex items-center gap-1.5 text-[#77736C]">
              <Calendar size={13} className="shrink-0" />
              <span>{formattedDate}</span>
            </span>
          ) : (
            <span />
          )}

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1.5 font-semibold text-[#171614] group-hover:text-[#B08A52] group-hover:translate-x-0.5 transition-all"
            aria-label={`Read article: ${post.title}`}
          >
            <span>Read Article</span>
            <ArrowRight size={13} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </article>
  );
}
