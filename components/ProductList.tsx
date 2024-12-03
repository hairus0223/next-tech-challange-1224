"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import FilterSort from "@/components/FilterSort";
import { Product } from "@/types/ProductType";
import { fetchProducts, fetchCategories } from "@/services/ProductService";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [sort, setSort] = useState<"asc" | "desc">("asc");
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const router = useRouter();
  const searchParams = useSearchParams();

  // Fetch products and categories on mount
  useEffect(() => {
    const loadProductsAndCategories = async () => {
      try {
        const productsData = await fetchProducts();
        const categoriesData = await fetchCategories();

        setProducts(productsData);
        setFilteredProducts(productsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error loading products or categories:", error);
      }
    };

    loadProductsAndCategories();
  }, []);

  // Handle filters and category changes
  useEffect(() => {
    const filterFromUrl = searchParams.get("filter") || "";
    const sortFromUrl = searchParams.get("sort") || "asc";
    const categoryFromUrl = searchParams.get("category") || "";

    setFilter(filterFromUrl);
    setSort(sortFromUrl as "asc" | "desc");
    setSelectedCategory(categoryFromUrl);

    let filtered = [...products];

    // Apply keyword filter
    if (filterFromUrl) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(filterFromUrl.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(filterFromUrl.toLowerCase())
      );
    }

    // Apply category filter
    if (categoryFromUrl) {
      filtered = filtered.filter(
        (product) =>
          product.category.toLowerCase() === categoryFromUrl.toLowerCase()
      );
    }

    // Apply sorting by price
    filtered.sort((a, b) => {
      if (sortFromUrl === "asc") return a.price - b.price;
      return b.price - a.price;
    });

    setFilteredProducts(filtered);
  }, [searchParams, products]);

  const handleFilterChange = (value: string) => {
    setFilter(value);
    router.push(`/?filter=${value}&sort=${sort}&category=${selectedCategory}`);
  };

  const handleSortChange = (value: "asc" | "desc") => {
    setSort(value);
    router.push(
      `/?filter=${filter}&sort=${value}&category=${selectedCategory}`
    );
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    router.push(`/?filter=${filter}&sort=${sort}&category=${category}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <FilterSort
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
        onCategoryChange={handleCategoryChange}
        filter={filter}
        sort={sort}
        categories={categories}
        selectedCategory={selectedCategory}
      />
      <div className="mt-4">
        {filteredProducts.length === 0 ? (
          <p className="text-center text-xl font-semibold text-red-500">
            No products found for the selected filter and category.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
