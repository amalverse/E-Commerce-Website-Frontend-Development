import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";

const NavbarMiddle = () => {
  const cartProducts = useSelector((state) => state.cart.products);
  const wishlistProducts = useSelector((state) => state.wishlist.products);
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    if (searchInput.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchInput)}`);
      setSearchInput("");
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="mx-auto max-w-11/12 py-3">
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-4">
          {/* Logo */}
          <Link to="/" className="text-xl sm:text-2xl font-bold shrink-0">
            <span className="text-red-500">Shop</span>Verse
          </Link>

          {/* Search */}
          <div className="relative w-full lg:flex-1 order-3 lg:order-0 lg:mx-10">
            <input
              type="text"
              placeholder="Search product ..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="w-full rounded-md border border-red-500 py-2.5 pl-4 pr-16 
           focus:outline-none focus:ring-0"
            />
            <button
              onClick={handleSearch}
              className="absolute right-0 top-0 h-full rounded-r-md bg-red-500 px-5 text-white"
            >
              <RiSearch2Line size={18} />
            </button>
          </div>

          {/* Icons */}
          <div className="ml-auto flex items-center gap-4 sm:gap-6 shrink-0">
            {/* Wishlist Link */}
            <Link
              to="/wishlist"
              className="relative flex flex-col items-center hover:text-rose-600"
            >
              <FaRegHeart className="text-xl sm:text-2xl" />

              <span className="absolute -top-2 -right-2 size-4 sm:size-5 rounded-full bg-red-500 text-[10px] sm:text-xs text-white grid place-items-center">
                {wishlistProducts.length}
              </span>

              <p className="hidden sm:block text-xs">Wishlist</p>
            </Link>

            {/* Cart Link*/}
            <Link
              to="/cart"
              className="relative text-center hover:text-rose-600"
            >
              <HiOutlineShoppingBag className="text-xl sm:text-2xl" />
              <span className="absolute -right-2 -top-2 size-4 sm:size-5 rounded-full bg-red-500 text-[10px] sm:text-xs text-white grid place-items-center">
                {cartProducts.length}
              </span>
              <p className="hidden sm:block text-xs">Cart</p>
            </Link>

            {/* Auth Links */}
            <Link
              to="/login"
              className="relative flex flex-col items-center hover:text-rose-600"
            >
              <CgProfile className="text-xl sm:text-2xl " />
              <p className="hidden sm:block text-xs">Login</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMiddle;
