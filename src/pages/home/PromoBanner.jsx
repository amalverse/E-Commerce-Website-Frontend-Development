import React from "react";
import { FaTruckMoving } from "react-icons/fa6";
import { HiCurrencyDollar } from "react-icons/hi";
import { RiUserVoiceFill } from "react-icons/ri";
import { FaInfoCircle } from "react-icons/fa";

const PromoBanner = () => {
  return (
    <section
      id="promo"
      className="max-w-11/12 mx-auto my-10 px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 scroll-mt-20"
    >
      <div className="text-center px-4 hover:scale-105 transition-transform duration-300 ease-in-out">
        <span className="mb-4 inline-block text-3xl sm:text-4xl text-rose-600">
          <FaTruckMoving />
        </span>
        <h4 className="mb-2 text-lg sm:text-xl font-semibold">Free Shipping</h4>
        <p className="text-sm sm:text-base text-gray-700">
          Free shipping on all orders over $50
        </p>
      </div>

      <div className="text-center px-4 hover:scale-105 transition-transform duration-300 ease-in-out">
        <span className="mb-4 inline-block text-3xl sm:text-4xl text-rose-600">
          <HiCurrencyDollar />
        </span>
        <h4 className="mb-2 text-lg sm:text-xl font-semibold">
          100% Money Back Guaranty
        </h4>
        <p className="text-sm sm:text-base text-gray-700">
          User can return product within 7 days with 100% refund
        </p>
      </div>
      <div className="text-center px-4 hover:scale-105 transition-transform duration-300 ease-in-out">
        <span className="mb-4 inline-block text-3xl sm:text-4xl text-rose-600">
          <FaInfoCircle />
        </span>
        <h4 className="mb-2 text-lg sm:text-xl font-semibold">
          Get 20% Off Your First Order
        </h4>
        <p className="text-sm sm:text-base text-gray-700">
          Sign up and receive a 20% discount on your first order.
        </p>
      </div>

      <div className="text-center px-4 hover:scale-105 transition-transform duration-300 ease-in-out">
        <span className="mb-4 inline-block text-3xl sm:text-4xl text-rose-600">
          <RiUserVoiceFill />
        </span>
        <h4 className="mb-2 text-lg sm:text-xl font-semibold">
          24/7 Customer Support
        </h4>
        <p className="text-sm sm:text-base text-gray-700">
          Offers customer support services for any query
        </p>
      </div>
    </section>
  );
};

export default PromoBanner;
