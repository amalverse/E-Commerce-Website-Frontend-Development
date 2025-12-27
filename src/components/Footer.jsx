import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

import instagram1 from "../assets/instagram-1.jpg";
import instagram2 from "../assets/instagram-2.jpg";
import instagram3 from "../assets/instagram-3.jpg";
import instagram4 from "../assets/instagram-4.jpg";
import instagram5 from "../assets/instagram-5.jpg";
import instagram6 from "../assets/instagram-6.jpg";

const Footer = () => {
  return (
    <footer className="bg-slate-100 shadow-2xl">
      <div className="max-w-7xl px-4 py-10 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-between">
        {/* Contact Info */}
        <div>
          <h4 className="mb-4 text-md font-semibold text-slate-900">
            CONTACT INFO
          </h4>
          <p className="flex items-start mb-3 font-medium text-slate-600">
            <span className="mr-2 text-xl text-rose-600">
              <FaLocationDot />
            </span>
            123 Main Street, Lal Bagh, New Delhi
          </p>
          <p className="flex items-center mb-3 font-medium text-slate-600">
            <span className="mr-2 text-xl text-rose-600">
              <IoMail />
            </span>
            shopverse@mail.com
          </p>
          <p className="flex items-center font-medium text-slate-600">
            <span className="mr-2 text-xl text-rose-600">
              <FaPhoneAlt />
            </span>
            +1 234 567 8900
          </p>
        </div>

        {/* Useful links */}
        <div className="flex flex-col gap-2 font-medium text-slate-600">
          <h4 className="mb-2 text-md font-semibold text-slate-900">
            USEFUL LINKS
          </h4>
          <ul className="space-y-3 ">
            {[
              "About Us",
              "Our Services",
              "Work With Us",
              "Our Blog",
              "FAQ",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="transition-all duration-300 hover:text-slate-900 hover:translate-x-1 inline-block"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CUSTOMER SERVICE */}
        <div className="flex flex-col gap-2 font-medium text-slate-600">
          <h4 className="mb-2 text-md font-semibold text-slate-900">
            CUSTOMER SERVICE
          </h4>
          <ul className="space-y-3">
            {[
              "Payment Methods",
              "Money Back Guarantee",
              "Return",
              "Shipping",
              "Terms & Conditions",
              "Privacy Policy",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="transition-all duration-300 hover:text-slate-900 hover:translate-x-1 inline-block"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* My Account */}
        <div className="flex flex-col gap-2 font-medium text-slate-600">
          <h4 className="mb-2 text-md font-semibold text-slate-900">MY ACCOUNT</h4>
          <ul className="space-y-3">
            {[
              { label: "Sign In", link: "/login" },
              { label: "View Cart", link: "/cart" },
              { label: "My Wishlist", link: "/wishlist" },
              { label: "Track Order", link: "#" },
              { label: "Help", link: "#" },
            ].map(({ label, link }) => (
              <li key={label}>
                <a
                  href={link}
                  className="transition-all duration-300 hover:text-slate-900 hover:translate-x-1 inline-block"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-slate-300">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
          {/* Copyright */}
          <p className="text-md font-medium text-slate-900 text-center md:text-left gap-10">
            Copyright © {new Date().getFullYear()}
            <span className="font-semibold ml-4">Shopverse</span>. All rights
            reserved.
          </p>

          {/* Instagram */}
          <div className="w-full md:w-auto">
            <h4 className="mb-2 text-sm font-semibold text-slate-900 text-center md:text-right">
              INSTAGRAM
            </h4>
            <div className="grid grid-cols-6 gap-2 max-w-xs mx-auto md:mx-0">
              <img src={instagram1} alt="instagram" className="rounded" />
              <img src={instagram2} alt="instagram" className="rounded" />
              <img src={instagram3} alt="instagram" className="rounded" />
              <img src={instagram4} alt="instagram" className="rounded" />
              <img src={instagram5} alt="instagram" className="rounded" />
              <img src={instagram6} alt="instagram" className="rounded" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
