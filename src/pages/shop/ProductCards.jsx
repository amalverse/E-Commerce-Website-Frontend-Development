import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice.js";
import { addToWishlist } from "../../redux/features/wishlist/wishlistSlice.js";

const ProductCards = ({ products }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
  };

  if (!products || products.length === 0) return <p>No products found.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
      {products.map((product, index) => (
        <div key={index} className="shadow rounded overflow-hidden bg-white">
          <div className="relative">
            {/* Product Image */}
            <Link to={`/shop/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="max-h-96 md:h-64 w-full object-cover hover:scale-105 transition duration-300 ease-in-out"
              />
            </Link>

            {/* Add to Wishlist - Floating Button */}

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAddToWishlist(product);
              }}
              className="absolute top-3 right-10 mr-2 rounded bg-red-600 px-2 py-2 text-white hover:bg-red-900 cursor-pointer"
            >
              <FaRegHeart />
            </button>

            {/* Add to Cart - Button */}

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart(product);
              }}
              className="absolute top-3 right-3 rounded bg-red-600 px-2 py-2 text-white hover:bg-red-900 cursor-pointer"
            >
              <MdOutlineShoppingCart />
            </button>

            {/* Product Content */}
            <div className="p-4 text-center">
              <h4 className="font-semibold text-gray-800 line-clamp-2">
                {product.title}
              </h4>

              <p className="text-lg font-bold text-green-700 mt-1">
                ${product.price}
              </p>

              {/* Rating */}
              {product.rating && (
                <div className="flex items-center justify-center mt-2 gap-2">
                  <span className="text-yellow-500">★</span>
                  <span className="text-gray-700">{product.rating.rate}</span>
                  <span className="text-gray-400 text-sm">
                    ({product.rating.count})
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
