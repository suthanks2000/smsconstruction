"use client";

import React from "react";
import type { BlogCategory } from "@/data/blog";

interface BlogCategoryFilterProps {
  categories: readonly BlogCategory[];
  activeCategory: BlogCategory;
  onSelectCategory: (category: BlogCategory) => void;
}

export default function BlogCategoryFilter({
  categories,
  activeCategory,
  onSelectCategory,
}: BlogCategoryFilterProps) {
  return (
    <nav
      aria-label="Blog categories"
      className="w-full mb-10 sm:mb-14 overflow-x-auto pb-2 -mb-2 no-scrollbar"
    >
      <div className="flex items-center gap-2 sm:gap-2.5 min-w-max">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              role="button"
              aria-pressed={isActive}
              onClick={() => onSelectCategory(cat)}
              className={`px-4 sm:px-5 py-2.5 rounded-full font-sans text-[13px] sm:text-[14px] font-medium transition-all duration-200 border cursor-pointer whitespace-nowrap active:scale-[0.97] ${
                isActive
                  ? "bg-[#171614] border-[#171614] text-white shadow-xs"
                  : "bg-white border-[#E7E0D4] text-[#68645D] hover:border-[#B08A52] hover:text-[#171614]"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
