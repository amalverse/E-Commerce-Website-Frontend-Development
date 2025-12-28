import React, { useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCards from "./ProductCards";
import ShopFiltering from "./ShopFiltering";
import { fetchProducts } from "../../redux/features/products/productSlice";

const filters = {
  categories: [
    "all",
    "electronics",
    "women's clothing",
    "men's clothing",
    "jewelery",
  ],
  priceRange: [
    { label: "All", min: 0, max: Infinity },
    { label: "under $50", min: 0, max: 50 },
    { label: "$50 -$100", min: 50, max: 100 },
    { label: "$100- $200", min: 100, max: 200 },
    { label: "$200 and above", min: 200, max: Infinity },
  ],
  ratingRange: [
    { label: "All", min: 0, max: Infinity },
    { label: "under 2", min: 0, max: 2 },
    { label: "2 -3", min: 2, max: 3 },
    { label: "3- 4", min: 3, max: 4 },
    { label: "4 and above", min: 4, max: Infinity },
  ],
};

const ShopPage = () => {
  const dispatch = useDispatch();
  const { items: products, loading } = useSelector((state) => state.products); // get products from the store

  // state to manage filters
  const [filtersState, setFiltersState] = useState({
    category: "all",
    priceRange: "all",
    ratingRange: "all",
  });

  // fetch products from the store
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // filtering functions with useMemo
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter By Category
    if (filtersState.category && filtersState.category !== "all") {
      result = result.filter(
        (product) => product.category === filtersState.category
      );
    }

    // Filter By Price Range
    if (filtersState.priceRange && filtersState.priceRange !== "all") {
      const { min, max } = filtersState.priceRange;
      result = result.filter(
        (product) => product.price >= min && product.price <= max
      );
    }

    // Filter By Ratings
    if (filtersState.ratingRange && filtersState.ratingRange !== "all") {
      const { min, max } = filtersState.ratingRange;
      result = result.filter(
        (product) => product.rating.rate >= min && product.rating.rate <= max
      );
    }

    return result;
  }, [
    filtersState.category,
    filtersState.priceRange,
    filtersState.ratingRange,
    products,
  ]);

  // clear the filters
  const clearFilters = () => {
    setFiltersState({
      category: "all",
      priceRange: "all",
      ratingRange: "all",
    });
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <section className="max-w-11/12 mx-auto px-4 py-5 bg-rose-50 rounded-lg shadow">
        <h2 className="mb-2 text-2xl font-bold text-center text-rose-700">
          Shop Products
        </h2>

        <p className="max-w-md mx-auto text-center text-slate-600 text-sm">
          Browse a diverse range of categories, from electronics to dresses to
          versatile accessories.
        </p>
      </section>

      <section className="max-w-11/12 mx-auto px-5 py-10">
        <div className="flex flex-col md:flex-row md:gap-12 gap-8">
          {/* Left Section- Filters */}
          <ShopFiltering
            filters={filters}
            filtersState={filtersState}
            setFiltersState={setFiltersState}
            clearFilters={clearFilters}
          />

          {/* Right Section - Displays Filtered Products */}
          <div>
            <h3 className="text-xl font-medium mb-4">
              Products Available: {filteredProducts.length}
            </h3>
            <ProductCards products={filteredProducts} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
