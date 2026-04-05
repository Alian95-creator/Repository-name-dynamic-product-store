import React from "react";

const ProductCard = ({ image, title, price, onAddToCart, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer rounded-2xl p-[1px] bg-gradient-main transition-all duration-300 hover:scale-[1.02]"
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="w-full h-full bg-gradient-main blur-2xl"></div>
      </div>

      {/* Content */}
      <div className="relative rounded-2xl bg-dark/90 backdrop-blur-xl p-4">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-xl mb-3 transition-transform duration-500 group-hover:scale-110"
        />

        <h3 className="text-white font-semibold">{title}</h3>
        <p className="text-gray-400">Rp {price}</p>

        <button
          onClick={(e) => {
            e.stopPropagation(); // 🔥 penting
            onAddToCart();
          }}
          className="mt-3 w-full bg-gradient-main text-white py-2 rounded-xl hover:shadow-glow transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;