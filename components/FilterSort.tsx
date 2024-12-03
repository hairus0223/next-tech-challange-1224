"use client";

interface FilterSortProps {
  onFilterChange: (filter: string) => void;
  onSortChange: (sort: "asc" | "desc") => void;
  onCategoryChange: (category: string) => void;
  filter: string;
  sort: "asc" | "desc";
  categories: string[];
  selectedCategory: string;
}

const FilterSort: React.FC<FilterSortProps> = ({
  onFilterChange,
  onSortChange,
  onCategoryChange,
  filter,
  sort,
  categories,
  selectedCategory,
}) => {
  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <input
        type="text"
        placeholder="Filter by title or description"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        className="border p-2 rounded"
      />
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="border p-2 rounded"
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
        className="border p-2 rounded"
      >
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default FilterSort;
