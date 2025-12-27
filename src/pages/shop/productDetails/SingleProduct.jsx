import React, { useMemo, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/features/cart/cartSlice";
import { addToWishlist } from "../../../redux/features/wishlist/wishlistSlice";
import { fetchProducts } from "../../../redux/features/products/productSlice";
import ProductTabs from "./ProductTabs";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { items: products } = useSelector((state) => state.products); // Access products from Redux store

  // Fetch products when the component mounts - from productSlice.js
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Find the product with the matching id
  const product = useMemo(
    () => products.find((product) => String(product.id) === String(id)),
    [id, products]
  );

  // Handlers for adding to cart and wishlist
  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };
  const handleAddToWishlist = () => {
    if (product) {
      dispatch(addToWishlist(product));
    }
  };

  // If product is not found, display a message
  if (!product) {
    return (
      <section className="max-w-11/12 mx-auto px-4 py-8 text-center">
        <p className="text-slate-600">Product not found.</p>
      </section>
    );
  }

  return (
    <>
      <section className="max-w-11/12 mx-auto px-4 py-5 bg-rose-50 rounded-lg shadow">
        <h2 className="mb-2 text-2xl font-bold text-center text-rose-700 capitalize">
          Product Details
        </h2>

        {/* Breadcrumb navigation */}
        <div className="flex items-center justify-center space-x-2 text-slate-600 text-sm mt-1">
          <span>
            <Link to="/" className="hover:text-rose-600">
              home
            </Link>
          </span>
          <IoIosArrowForward className="text-gray-500" />
          <span>
            <Link to="/shop" className="hover:text-rose-600">
              shop
            </Link>
          </span>
          <IoIosArrowForward className="text-gray-500" />
          <span className="text-gray-700 capitalize">{product.title}</span>
        </div>
      </section>

      {/* Display Single Product */}
      <section className="max-w-11/12 mx-auto px-4 py-8 mt-4">
        <div className="flex flex-col items-center md:flex-row gap-8">
          {/* Product Image */}
          <div className="md:w-1/2 w-full">
            <img
              src={product.image}
              alt={product.title}
              className="rounded-md w-full h-auto"
            />
          </div>
          {/* Product Details */}
          <div className="md:w-1/2 w-full">
            <h3 className="text-2xl font-semibold mb-4">{product.title}</h3>
            <p className="text-xl text-rose-600 mb-4">${product.price}</p>
            <p className="text-gray-700 mb-4">{product.description}</p>

            {/* Additional product info */}
            <div className="space-y-2">
              <p>
                <strong>Category:</strong> {product.category}
              </p>
              <div className="flex gap-1 items-center">
                <strong>Rating: </strong>
                {product.rating && (
                  <>
                    <span className="text-yellow-500">★</span>
                    <span>{product.rating.rate}</span>
                    <span className="text-gray-400 text-sm">
                      ({product.rating.count})
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Action Buttons- Wishlist and Cart */}
            <button
              onClick={handleAddToWishlist}
              className="mt-6 mr-4 px-6 py-3 bg-rose-600 text-white cursor-pointer rounded hover:bg-red-700 transition"
            >
              Add to Wishlist
            </button>
            <button
              onClick={handleAddToCart}
              className="mt-6 px-6 py-3 bg-rose-600 text-white cursor-pointer rounded hover:bg-red-700 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>
      {/*  Display Discription,  Additional information, shipping and return, Reviews */}
      <ProductTabs product={product} />
    </>
  );
};

export default SingleProduct;
