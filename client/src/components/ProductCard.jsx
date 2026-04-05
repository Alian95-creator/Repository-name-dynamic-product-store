import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
      whileHover={{ scale: 1.04 }}
    >
      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/300";
          }}
          className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="text-sm font-semibold line-clamp-2 min-h-[40px]">
          {product.title}
        </h3>

        <p className="text-lg font-bold mt-2 text-gray-900">
          ${product.price}
        </p>

        {/* BUTTON */}
        <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
          Buy Now
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;