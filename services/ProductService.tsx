import { Product } from "@/types/ProductType";

const BASE_URL = "https://dummyjson.com/products";

// Fetch all products
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error("Failed to fetch products");
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Fetch a product by its ID
export const fetchProductById = async (id: string): Promise<Product> => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) throw new Error("Failed to fetch product");
    return response.json();
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error;
  }
};

// Fetch categories for filtering
export const fetchCategories = async (): Promise<string[]> => {
  try {
    const res = await fetch("https://dummyjson.com/products/category-list");
    if (!res.ok) throw new Error("Failed to fetch categories");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
