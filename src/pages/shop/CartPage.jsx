import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import OrderSummary from "./OrderSummary";
import {
  updateQuantity,
  removeFromCart,
} from "../../redux/features/cart/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products); // Get products from Redux store

  // Function to handle quantity updates
  const handleQuantity = (type, id) => {
    dispatch(updateQuantity({ type, id }));
  };

  // Function to handle item removal
  const handleRemove = (e, id) => {
    e.preventDefault();
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <section className="max-w-11/12 mx-auto px-4 py-5 bg-rose-50 rounded-lg shadow">
        <h2 className="mb-2 text-2xl font-bold text-center text-rose-700">
          Shopping Cart
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
          <span className="text-rose-600">cart</span>
        </div>
      </section>

      {/* Main Cart Content */}
      <section className="max-w-11/12 mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="cart-items space-y-4">
              {products.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <p className="text-slate-600 text-lg mb-4">
                    Your Cart is Empty
                  </p>
                  <Link
                    to="/shop"
                    className="inline-block px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                products.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center md:justify-between 
                    bg-white shadow-sm hover:shadow-md transition-shadow 
                    rounded-lg p-4 border border-gray-100"
                  >
                    <div className="flex items-center gap-4">
                      {/* Item Number */}
                      <span className="px-3 py-1 bg-rose-500 text-white rounded-full text-sm shadow">
                        {index + 1}
                      </span>

                      {/* Image */}
                      <img
                        src={item.image}
                        className="w-14 h-14 rounded-md object-cover shadow-sm"
                        alt={item.title}
                      />

                      {/* Name & Price */}
                      <div>
                        <h5 className="text-lg font-semibold text-gray-800">
                          {item.title}
                        </h5>
                        <p className="text-gray-500 text-sm">
                          ${Number(item.price).toFixed(2)}
                        </p>
                      </div>
                    </div>

                    {/* Quantity + Remove */}
                    <div className="flex items-center gap-3 mt-3 md:mt-0">
                      {/* - button */}
                      <button
                        onClick={() => handleQuantity("decrement", item.id)}
                        className="w-7 h-7 flex items-center justify-center bg-gray-200 
                         text-gray-700 rounded hover:bg-rose-500 hover:text-white 
                         transition-colors"
                      >
                        -
                      </button>

                      {/* Quantity */}
                      <span className="w-7 text-center font-medium">
                        {item.quantity}
                      </span>

                      {/* + button */}
                      <button
                        onClick={() => handleQuantity("increment", item.id)}
                        className="w-7 h-7 flex items-center justify-center bg-gray-200 
                         text-gray-700 rounded hover:bg-rose-500 hover:text-white 
                         transition-colors"
                      >
                        +
                      </button>

                      {/* Remove */}
                      <button
                        onClick={(e) => handleRemove(e, item.id)}
                        className="text-rose-600 hover:text-rose-800 ml-2 text-sm font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Order Summary Sidebar */}
          {products.length > 0 && (
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-20">
                <OrderSummary />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CartPage;
