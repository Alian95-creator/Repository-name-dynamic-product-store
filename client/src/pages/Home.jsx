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
  } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  const categories = [
    "all",
    ...new Set(products.map((p) => p.category)),
  ];

<q></q>

  return (
    <div>
      {/* FILTER BAR */}
      <div className="bg-white p-4 rounded-xl shadow-sm mb-6 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search product..."
          className="flex-1 p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-black/20"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-black/20"
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
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
          <ProductCard key={p.id} product={p} />
        ))}
      </motion.div>
    </div>
  );
};


export default Home;