import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCards from "./ProductCards";
import { fetchProducts } from "../../redux/features/products/productSlice";

const TrendingProducts = () => {
  const dispatch = useDispatch();
  // Get products and loading state from Redux store
  const { items: products, loading } = useSelector((state) => state.products);
  // State to manage number of visible products
  const [visibleProducts, setVisibleProducts] = useState(8);

  // Fetch products when component mounts
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Load more products handler
  const loadMoreProducts = () => {
    setVisibleProducts((prevCount) => prevCount + 4);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <section className="max-w-11/12 mx-auto px-5 py-15 bg-slate-100 rounded-2xl my-10">
      <h2 className="mb-5 text-4xl font-semibold text-slate-900 text-center">
        Trending Products
      </h2>
      <p className="max-w-[500px] mx-auto text-slate-600 text-center mb-5">
        Discover the Hottest Picks: Elevate Your LifeStyle with Trending
        Products.
      </p>

      {/* Product Cards */}
      <ProductCards products={products.slice(0, visibleProducts)} />

      {/* Load More Button */}
      <div className="text-center mt-6">
        {visibleProducts < products.length && (
          <button
            onClick={loadMoreProducts}
            className="px-6 py-3 text-white bg-rose-600 rounded cursor-pointer hover:bg-red-700"
          >
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default TrendingProducts;
