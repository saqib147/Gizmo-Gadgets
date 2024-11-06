import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/product/${5}`)}
      className="productCard cursor-pointer w-1/2 sm:w-1/2 md:w-1/4 p-3"
    >
      <div className="bg-gray-100 rounded-2xl p-1 md:p-4  h-full">
        <div className="space-y-4 h-full flex flex-col">
          {/* Product Image */}
          <div className="image flex-grow">
            <img
              src={product.imgUrl}
              alt={product.name}
              className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-2xl"
            />
          </div>

          {/* Product Info Container */}
          <div className="space-y-3 flex-grow flex flex-col justify-between">
            {/* Title and Price Row */}
            <div className="block md:flex justify-between ">
              <h2 className="text-sm md:text-xl  font-bold text-gray-900 leading-tight">
                {product.name}
              </h2>
              <div className="bg-white rounded-full px-4 py-1 mt-2">
                <p className="font-bold text-center text-gray-900 whitespace-nowrap text-base">
                  ${product.price}
                </p>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-1.5 md:py-3 px-2  md:px-4 rounded-xl transition-colors text-base">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
