import { useEffect } from "react";
import { motion } from "framer-motion";
import { useProductStore } from "../store/useProductStore";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const {
    filtered,
    fetchProducts,
    setSearch,
    setCategory,
    products,
    addToCart,
    openProduct,
  } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  const categories = [
    "all",
    ...new Set(products.map((p) => p.category)),
  ];

  return (
    <div>
      {/* FILTER BAR */}
      <div className="bg-dark/80 backdrop-blur-xl p-4 rounded-2xl mb-6 flex flex-col md:flex-row gap-4 border border-white/10">
        <input
          type="text"
          placeholder="Search product..."
          className="p-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="p-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary"
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* EMPTY STATE */}
      {filtered.length === 0 && (
        <div className="text-center text-gray-500 py-10">
          No products found
        </div>
      )}

      {/* GRID */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {filtered.map((p) => (
          <ProductCard
            key={p.id}
            image={p.images?.[0]}
            title={p.title}
            price={p.price}
            onAddToCart={() => addToCart(p)}
            onClick={() => openProduct(p)}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Home;