import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiX, HiMenu } from "react-icons/hi";

const NavbarBottom = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const activeLink = location.pathname;

  const categories = [
    ["electronics", "Electronics"],
    ["womens-clothing", "Women's Clothing"],
    ["mens-clothing", "Men's Clothing"],
    ["jewelery", "Jewellery"],
  ];

  return (
    <nav className="sticky top-28 lg:top-17 z-50 bg-rose-500 text-white shadow-xl">
      <div className="mx-auto flex max-w-11/12 items-center justify-between py-2">
        {/* Mobile / Tablet Menu Button */}
        <button
          className="lg:hidden rounded-md p-2 text-white hover:bg-white/20 transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <HiX className="size-5" />
          ) : (
            <HiMenu className="size-5" />
          )}
        </button>

        {/* Desktop Main Links */}
        <ul className="hidden lg:flex items-center gap-2 font-medium">
          {[
            ["/", "Home"],
            ["/shop", "Shop"],
            ["/contact", "Contact"],
          ].map(([path, label]) => (
            <li key={path}>
              <Link
                to={path}
                className={`block rounded-md px-3 py-1.5 transition
                  ${
                    activeLink === path
                      ? " text-slate-900"
                      : "text-white hover:bg-white/50 hover:text-slate-700"
                  }
                `}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Categories */}
        <ul className="hidden lg:flex items-center gap-6 font-medium">
          {categories.map(([path, label]) => (
            <li key={path}>
              <Link
                to={`/categories/${path}`}
                className={`block rounded-md px-3 py-1.5 transition
                  ${
                    activeLink === `/categories/${path}`
                      ? "text-slate-900"
                      : "text-white hover:bg-white/50 hover:text-slate-700"
                  }
                `}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Clearance Text */}
        <span className="hidden xl:block font-semibold text-white/90">
          💡 Clearance Up to 30% Off
        </span>
      </div>

      {/* Mobile / Tablet Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-2xl">
          {/* Main Links */}
          <ul className="space-y-1 px-4 py-4 font-medium">
            {[
              ["/", "Home"],
              ["/shop", "Shop"],
              ["/contact", "Contact"],
            ].map(([path, label]) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block rounded-lg px-4 py-2 transition
                    ${
                      activeLink === path
                        ? "bg-rose-100 text-rose-600"
                        : "text-slate-700 hover:bg-rose-50 hover:text-rose-600"
                    }
                  `}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mx-4 h-px bg-slate-200" />

          {/* Categories */}
          <ul className="space-y-1 px-4 py-4 text-sm">
            {categories.map(([path, label]) => (
              <li key={path}>
                <Link
                  to={`/categories/${path}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block rounded-lg px-4 py-2 transition
                    ${
                      activeLink === `/categories/${path}`
                        ? "bg-rose-100 text-rose-600"
                        : "text-slate-700 hover:bg-rose-50 hover:text-rose-600"
                    }
                  `}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavbarBottom;
