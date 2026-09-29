export const BLOG_CATEGORIES = [
  "All",
  "Construction",
  "Interior Design",
  "Design & Planning",
  "Home Ideas",
  "Guides",
  "Fabrication",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: Exclude<BlogCategory, "All">;
  publishedAt: string; // ISO date format YYYY-MM-DD
  updatedAt?: string;
  coverImage?: string;
  coverImageAlt?: string;
  readingTime?: string;
  author?: {
    name: string;
    role?: string;
  };
  featured?: boolean;
  relatedServices?: Array<{
    name: string;
    href: string;
  }>;
}

/**
 * Editorial content repository for SMS Construction Blog.
 * 
 * Note: Only verified, approved, and original articles are published here.
 * No AI placeholder articles, fake dates, fake authors, or mock stats are included.
 */
export const blogPosts: BlogPost[] = [];

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getFeaturedBlogPost(): BlogPost | undefined {
  return blogPosts.find((post) => post.featured) || blogPosts[0];
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (!category || category === "All") {
    return blogPosts;
  }
  return blogPosts.filter((post) => post.category === category);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
