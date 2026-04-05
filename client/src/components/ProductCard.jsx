import React from "react";

const ProductCard = ({ image, title, price, onAddToCart }) => {
  return (
    <div className="group relative rounded-2xl p-[1px] bg-gradient-main transition-all duration-300 ease-smooth hover:scale-[1.02]">
      
      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="w-full h-full bg-gradient-main blur-2xl"></div>
      </div>

      {/* Card Content */}
      <div className="relative rounded-2xl bg-dark/90 backdrop-blur-xl p-4 h-full flex flex-col justify-between hover:shadow-glow transition-all duration-300">
        
        {/* Image */}
        <div className="overflow-hidden rounded-xl">
          <img
            src={image}
            alt={title}
            className="w-full h-40 object-cover transition-transform duration-500 ease-smooth group-hover:scale-110"
          />
        </div>

        {/* Info */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-400">Rp {price}</p>
        </div>

        {/* Button */}
        <button
          onClick={onAddToCart}
          className="mt-4 bg-gradient-main text-white py-2 rounded-xl font-semibold tracking-wide transition-all duration-300 hover:shadow-glow hover:scale-105 active:scale-95"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;