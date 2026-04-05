import { motion } from "framer-motion";
import { useProductStore } from "../store/useProductStore";

const ProductCard = ({ product }) => {
  const openProduct = useProductStore((s) => s.openProduct);

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition cursor-pointer"
      whileHover={{ scale: 1.04 }}
      onClick={() => openProduct(product)}
    >
      <div className="p-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-48 object-cover rounded-lg"
        />

        <h3 className="mt-3 text-sm font-semibold line-clamp-2">
          {product.title}
        </h3>

        <p className="text-lg font-bold mt-2">
          ${product.price}
        </p>
      </div>
    </motion.div>
  );
};

export default ProductCard;