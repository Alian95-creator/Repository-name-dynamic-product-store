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
  addToCart: (product) => {
    const { cart } = get();

    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      set({
        cart: cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        ),
      });
    } else {
      set({
        cart: [...cart, { ...product, qty: 1 }],
      });
    }
  },

  removeFromCart: (id) => {
  const { cart } = get();
  set({
    cart: cart.filter((item) => item.id !== id),
   });
  },

  getTotalPrice: () => {
  const { cart } = get();
  return cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  },

  darkMode: false,

  toggleDarkMode: () =>
  set((state) => ({ darkMode: !state.darkMode })),
}));