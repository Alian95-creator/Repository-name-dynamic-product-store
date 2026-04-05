import { motion, AnimatePresence } from "framer-motion";
import { useProductStore } from "../store/useProductStore";

const ProductModal = () => {
  const { selectedProduct, closeProduct, addToCart } = useProductStore();

  return (
    <AnimatePresence>
      {selectedProduct && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeProduct}
        >
          {/* MODAL BOX */}
          <motion.div
            className="bg-dark text-white rounded-2xl max-w-lg w-full p-6 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={closeProduct}
              className="absolute top-3 right-3 text-white text-xl"
            >
              ✕
            </button>

            {/* IMAGE */}
            <img
              src={selectedProduct.images?.[0]}
              alt={selectedProduct.title}
              className="w-full h-60 object-cover rounded-xl mb-4"
            />

            {/* INFO */}
            <h2 className="text-2xl font-bold mb-2">
              {selectedProduct.title}
            </h2>

            <p className="text-gray-400 mb-4">
              {selectedProduct.description}
            </p>

            <p className="text-lg font-semibold mb-4">
              Rp {selectedProduct.price}
            </p>

            {/* BUTTON */}
            <button
              onClick={() => addToCart(selectedProduct)}
              className="w-full bg-gradient-main py-3 rounded-xl font-semibold hover:shadow-glow transition"
            >
              Add to Cart
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;