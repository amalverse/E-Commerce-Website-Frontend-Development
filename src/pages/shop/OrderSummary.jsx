import React from "react";
import { useSelector } from "react-redux";
import { AiTwotoneDelete } from "react-icons/ai";
import { RiBankCardFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/features/cart/cartSlice";

const OrderSummary = () => {
  const { selectedItems, totalPrice, tax, taxRate, grandTotal } = useSelector(
    (store) => store.cart
  );

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="bg-white mt-5 rounded-xl text-sm shadow-md border border-gray-100">
      <div className="px-6 py-5 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">Order Summary</h2>

        <div className="space-y-1 text-slate-600">
          <p>
            Selected Items: <span className="font-medium">{selectedItems}</span>
          </p>
          <p>
            Total Price:
            <span className="font-semibold text-gray-800">
              ${totalPrice.toFixed(2)}
            </span>
          </p>
          <p>
            Tax ({taxRate * 100}%):{" "}
            <span className="font-semibold text-gray-800">
              ${tax.toFixed(2)}
            </span>
          </p>
        </div>

        <h3 className="text-base font-bold text-gray-900 border-t border-gray-100 pt-3">
          Grand Total:{" "}
          <span className="text-rose-600 text-lg">
            ${grandTotal.toFixed(2)}
          </span>
        </h3>

        <div className="px-1 mt-4 mb-2 space-y-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClearCart();
            }}
            className="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-2.5 px-4 rounded-md flex items-center justify-center gap-2 transition-colors"
          >
            <span>Clear Cart</span>
            <span className="text-lg">
              <AiTwotoneDelete />
            </span>
          </button>

          <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-4 rounded-md flex items-center justify-center gap-2 transition-colors">
            <span>Checkout</span>
            <span className="text-lg">
              <RiBankCardFill />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
