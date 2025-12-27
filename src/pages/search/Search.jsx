import React, { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductCards from "../shop/ProductCards";
import { fetchProducts } from "../../redux/features/products/productSlice";

const Search = () => {
  const dispatch = useDispatch();

  // Get products and loading state from Redux store
  const { items: products, loading } = useSelector((state) => state.products);

  // Read search params from URL
  const [searchParams] = useSearchParams();

  // Get "query" value from URL and remove extra spaces
  const query = (searchParams.get("query") || "").trim();

  // Fetch products when component mounts
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = useMemo(() => {
    if (!query) return [];

    // Convert query into words (min 4 chars)
    const queryWords = query
      .toLowerCase()
      .split(" ")
      .filter((word) => word.length >= 4);

    return products.filter((product) => {
      const title = (product.title || "").toLowerCase();
      const description = (product.description || "").toLowerCase();

      // Match ANY word from query
      return queryWords.some(
        (word) => title.includes(word) || description.includes(word)
      );
    });
  }, [query, products]);

  // Show loading text while products are being fetched
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <section className="max-w-11/12 mx-auto px-4 py-5 bg-rose-50 rounded-lg shadow">
        <h2 className="mb-2 text-2xl font-bold text-center text-rose-700">
          Search Products
        </h2>
      </section>

      {/* Search results section */}
      <section className="max-w-11/12 mx-auto px-5 py-10">
        {query ? (
          <>
            {/* Display search keyword */}
            <h3 className="text-center mb-6 text-lg text-gray-700">
              Results for "{query}"
            </h3>

            {/* Show products if found, else show no results message */}
            {filteredProducts.length > 0 ? (
              <ProductCards products={filteredProducts} />
            ) : (
              <p className="text-center text-slate-600">
                No products found for "{query}"
              </p>
            )}
          </>
        ) : (
          // Message when no search is performed
          <p className="text-center text-slate-600">
            Use the search box in the navbar to search products.
          </p>
        )}
      </section>
    </>
  );
};

export default Search;
