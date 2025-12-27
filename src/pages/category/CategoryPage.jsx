import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/features/products/productSlice";
import ProductCards from "../shop/ProductCards";

const CategoryPage = () => {
  const dispatch = useDispatch();
  const { items: products, loading } = useSelector((state) => state.products);
  const { categoryName } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const categoryMap = {
      "mens-clothing": "men's clothing",
      "womens-clothing": "women's clothing",
      jewelery: "jewelery",
      electronics: "electronics",
    };

    const productCategory = categoryMap[categoryName?.toLowerCase()];
    const filtered = products.filter(
      (product) =>
        product.category.toLowerCase() === productCategory?.toLowerCase()
    );
    setFilteredProducts(filtered);
  }, [categoryName, products]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryName]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <section className="max-w-11/12 mx-auto px-4 py-5 bg-rose-50 rounded-lg shadow">
        <h2 className="mb-2 text-2xl font-bold text-center text-rose-700 capitalize">
          {categoryName}
        </h2>

        <p className="max-w-md mx-auto text-center text-slate-600 text-sm capitalize">
          Browse a diverse range of versatile {categoryName} products..
        </p>
      </section>

      {/* Products Card */}
      <div className="max-w-11/12 mx-auto px-5 py-10">
        <ProductCards products={filteredProducts} />
      </div>
    </>
  );
};

export default CategoryPage;
