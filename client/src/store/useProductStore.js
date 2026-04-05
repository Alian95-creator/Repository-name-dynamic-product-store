import { create } from "zustand";
import { getProducts } from "../services/productService";

export const useProductStore = create((set, get) => ({
  products: [],
  filtered: [],
  loading: false,

  search: "",
  category: "all",

  cart: [],
  selectedProduct: null,

  darkMode: false,

  // FETCH
  fetchProducts: async () => {
    set({ loading: true });

    const data = await getProducts();

    set({
      products: data,
      filtered: data,
      loading: false,
    });
  },

  // SEARCH
  setSearch: (value) => {
    const { products } = get();

    const filtered = products.filter((p) =>
      p.title.toLowerCase().includes(value.toLowerCase())
    );

    set({ search: value, filtered });
  },

  // CATEGORY
  setCategory: (value) => {
    const { products } = get();

    const filtered =
      value === "all"
        ? products
        : products.filter((p) => p.category === value);

    set({ category: value, filtered });
  },

  // MODAL
  openProduct: (product) => set({ selectedProduct: product }),
  closeProduct: () => set({ selectedProduct: null }),

  // CART
  addToCart: (product) =>
    set((state) => {
      const exist = state.cart.find((item) => item.id === product.id);

      if (exist) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, qty: item.qty + 1 }
              : item
          ),
        };
      }

      return {
        cart: [...state.cart, { ...product, qty: 1 }],
      };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  getTotalPrice: () => {
    const { cart } = get();
    return cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  },

  toggleDarkMode: () =>
    set((state) => ({ darkMode: !state.darkMode })),
}));