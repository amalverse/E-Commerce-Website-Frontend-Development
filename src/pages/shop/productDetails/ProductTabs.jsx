import { useState } from "react";

const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "additional", label: "Additional Information" },
    { id: "shipping", label: "Shipping & Returns" },
    { id: "reviews", label: `Reviews (${product.rating?.count || 0})` },
  ];

  return (
    <section className="max-w-11/12 mx-auto mt-10 shadow-2xl">
      {/* Tabs Header */}
      <div className="flex flex-wrap border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 text-sm font-medium transition border-b-2 ${
              activeTab === tab.id
                ? "border-red-500 text-rose-600"
                : "border-transparent text-slate-600 hover:text-rose-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="mt-6 rounded-md p-6 bg-white">
        {activeTab === "description" && (
          <div>
            <h4 className="mb-3 text-lg font-semibold">Product Information</h4>
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>
        )}

        {activeTab === "additional" && (
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <p>
              <strong>Price:</strong> ${product.price}
            </p>
            <p>
              <strong>Rating:</strong> {product.rating?.rate} ⭐
            </p>
          </div>
        )}

        {activeTab === "shipping" && (
          <div className="text-gray-700 space-y-2">
            <p>🚚 Free shipping on orders over $50</p>
            <p>📦 Estimated delivery: 3-7 business days</p>
            <p>↩️ 30-day return policy</p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="text-gray-700">
            <p>
              ⭐ {product.rating?.rate} average rating based on
              {product.rating?.count} reviews
            </p>
            <p className="mt-2 text-sm text-gray-500">
              (Reviews feature coming soon)
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductTabs;
