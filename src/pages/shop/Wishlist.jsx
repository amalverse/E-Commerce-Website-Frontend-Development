import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice.js";
import {
  clearWishlist,
  removeFromWishlist,
} from "../../redux/features/wishlist/wishlistSlice";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.wishlist.products);

  const handleRemove = (e, id) => {
    e.preventDefault();
    dispatch(removeFromWishlist(id));
  };

  const handleClearWishlist = () => {
    dispatch(clearWishlist());
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      {/* Header */}
      <section className="max-w-11/12 mx-auto px-4 py-5 bg-rose-50 rounded-lg shadow">
        <h2 className="mb-2 text-2xl font-bold text-center text-rose-700">
          Wishlist Items
        </h2>

        <div className="flex items-center justify-center space-x-2 text-slate-600 text-sm mt-1">
          <span>
            <Link to="/" className="hover:text-rose-600">
              home
            </Link>
          </span>
          <span>
            <IoIosArrowForward />
          </span>
          <span className="text-rose-600">wishlist</span>
        </div>
      </section>

      {/* Wishlist Items */}
      <section className="max-w-11/12 mx-auto px-4 py-10">
        <div className="max-w-3xl space-y-4">
          {products.length === 0 ? (
            <div className="text-center py-8 text-gray-500 text-lg">
              <p className="text-slate-600 text-lg mb-4">
                Your Wishlist is Empty
              </p>
              <Link
                to="/shop"
                className="inline-block px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
              >
                Continue Wishlisting
              </Link>
            </div>
          ) : (
            products.map((item, index) => (
              <div
                key={item.id ?? index}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white shadow-sm hover:shadow-md transition rounded-lg p-4 border"
              >
                {/* Product Info */}
                <div className="flex items-center gap-4">
                  <span className="h-6 w-6 flex items-center justify-center bg-rose-500 text-white rounded-full text-xs">
                    {index + 1}
                  </span>

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-14 h-14 rounded-md object-cover"
                  />

                  <div>
                    <h5 className="text-sm sm:text-base font-semibold text-gray-800">
                      {item.title}
                    </h5>
                    <p className="text-gray-500 text-sm">
                      ${Number(item.price).toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="text-green-600 hover:text-green-800 font-medium"
                  >
                    Add to Cart
                  </button>

                  <button
                    onClick={(e) => handleRemove(e, item.id)}
                    className="text-rose-600 hover:text-rose-800 font-medium"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Clear Wishlist Button */}
        {products.length > 0 && (
          <button
            onClick={handleClearWishlist}
            className="w-full sm:w-auto bg-rose-600 hover:bg-rose-700 text-white font-semibold py-2 px-4 my-4 rounded-md transition-colors"
          >
            Clear Wishlist
          </button>
        )}
      </section>
    </>
  );
};

export default Wishlist;
