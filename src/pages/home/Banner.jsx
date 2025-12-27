import React from "react";
import { Link } from "react-router-dom";
import BannerImg from "../../assets/header.png";

const Banner = () => {
  return (
    <div className="max-w-11/12 mx-auto px-4 pt-2 min-h-[650px] bg-slate-100 grid grid-cols-1 lg:grid-cols-2 items-center gap-2 rounded-b-2xl">
      <div className="max-w-[600px] ml-auto z-30 gap-2">
        <h4 className="uppercase text-base font-medium text-red-600">
          Up To 20% Discount On
        </h4>
        <h1 className="text-7xl font-extrabold text-slate-900">
          Men's Fashion
        </h1>
        <p className="mb-8 text-gray-900">
          Upgrade your wardrobe with the latest men’s fashion essentials.
          Discover premium quality clothing designed for comfort, style, and
          everyday confidence. From casual wear to trendy outfits, find
          everything you need to elevate your look—now at unbeatable prices.
        </p>
        <button className="px-6 py-3 text-white bg-rose-600 rounded cursor-pointer hover:bg-red-700">
          <Link to="/categories/mens-clothing">Explore Now</Link>
        </button>
      </div>
      <div className="relative h-full">
        <img src={BannerImg} alt="Banner Image" />
      </div>
    </div>
  );
};

export default Banner;
