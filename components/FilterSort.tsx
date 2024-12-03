"use client";

import React from "react";

interface FilterSortProps {
  onFilterChange: (filter: string) => void;
  onSortChange: (sort: "asc" | "desc") => void;
  onCategoryChange: (category: string) => void;
  onClearFilters: () => void;
  filter: string;
  sort: "asc" | "desc";
  categories: string[];
  selectedCategory: string;
}

const FilterSort: React.FC<FilterSortProps> = ({
  onFilterChange,
  onSortChange,
  onCategoryChange,
  onClearFilters,
  filter,
  sort,
  categories,
  selectedCategory,
}) => {
  const hasFilters = filter || selectedCategory || sort !== "asc"; // Check if any filter is active

  return (
    <div className="flex flex-col gap-4 md:flex-row md:justify-between">
      <input
        type="text"
        placeholder="Filter by title or description"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        className="w-full rounded-lg border px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400 md:flex-1"
      />

      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="w-full rounded-lg border px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400 md:flex-1"
      >
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <select
        value={sort}
        onChange={(e) => onSortChange(e.target.value as "asc" | "desc")}
        className="w-full rounded-lg border px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400 md:flex-1"
      >
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>

      {hasFilters && (
        <button
          onClick={onClearFilters}
          className="w-full rounded-lg bg-red-500 px-4 py-2 text-sm text-white transition hover:bg-red-600 md:w-auto"
        >
          Clear Filters
        </button>
      )}
    </div>
  );
};

export default FilterSort;
