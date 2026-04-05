import { motion } from "framer-motion";
import { useProductStore } from "../store/useProductStore";

const ProductModal = () => {
  const { selectedProduct, closeProduct, addToCart } = useProductStore();

  if (!selectedProduct) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div
        className="bg-white rounded-xl p-6 max-w-md w-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <img
          src={selectedProduct.thumbnail}
          className="w-full h-60 object-cover rounded-lg"
        />

        <h2 className="mt-4 text-lg font-bold">
          {selectedProduct.title}
        </h2>

        <p className="text-gray-500 text-sm mt-2">
          {selectedProduct.description}
        </p>

        <p className="text-xl font-bold mt-3">
          ${selectedProduct.price}
        </p>

        <div className="flex gap-3 mt-4">
          <button
            onClick={() => addToCart(selectedProduct)}
            className="flex-1 bg-black text-white py-2 rounded-lg"
          >
            Add to Cart
          </button>

          <button
            onClick={closeProduct}
            className="flex-1 border py-2 rounded-lg"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductModal;