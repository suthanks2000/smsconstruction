"use client";

import React, { useState, useMemo } from "react";
import type { BlogPost, BlogCategory } from "@/data/blog";
import { BLOG_CATEGORIES } from "@/data/blog";
import BlogCategoryFilter from "./BlogCategoryFilter";
import FeaturedArticle from "./FeaturedArticle";
import ArticleCard from "./ArticleCard";
import BlogEmptyState from "./BlogEmptyState";

interface BlogContentSectionProps {
  initialPosts: BlogPost[];
}

export default function BlogContentSection({ initialPosts }: BlogContentSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>("All");

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All") {
      return initialPosts;
    }
    return initialPosts.filter((post) => post.category === selectedCategory);
  }, [initialPosts, selectedCategory]);

  const featuredPost = useMemo(() => {
    if (filteredPosts.length === 0) return null;
    return filteredPosts.find((p) => p.featured) || filteredPosts[0];
  }, [filteredPosts]);

  const remainingPosts = useMemo(() => {
    if (!featuredPost) return [];
    return filteredPosts.filter((p) => p.slug !== featuredPost.slug);
  }, [filteredPosts, featuredPost]);

  const hasArticles = filteredPosts.length > 0;

  return (
    <div>
      {/* Category Navigation Bar */}
      <BlogCategoryFilter
        categories={BLOG_CATEGORIES}
        activeCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Main Content Area: Articles or Designed Empty State */}
      {hasArticles && featuredPost ? (
        <div>
          {/* Featured Article */}
          <FeaturedArticle post={featuredPost} />

          {/* Editorial Article Grid */}
          {remainingPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {remainingPosts.map((post, idx) => (
                <ArticleCard key={post.slug} post={post} priority={idx < 2} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <BlogEmptyState selectedCategory={selectedCategory} />
      )}
    </div>
  );
}
