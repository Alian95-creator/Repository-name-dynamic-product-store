import { create } from "zustand";
import { getProducts } from "../services/productService";

export const useProductStore = create((set) => ({
  products: [],
  filtered: [],
  search: "",
  category: "all",

  fetchProducts: async () => {
    const data = await getProducts();
    set({ products: data, filtered: data });
  },

  setSearch: (value) =>
    set((state) => {
      const filtered = state.products.filter((p) =>
        p.title.toLowerCase().includes(value.toLowerCase())
      );
      return { search: value, filtered };
    }),

  setCategory: (value) =>
    set((state) => {
      const filtered =
        value === "all"
          ? state.products
          : state.products.filter((p) => p.category === value);

      return { category: value, filtered };
    }),
}));