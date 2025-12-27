import React from "react";
import { Link } from "react-router-dom";
import category1 from "../../assets/category-1.jpg";
import category2 from "../../assets/category-2.jpg";
import category3 from "../../assets/category-3.jpg";
import category4 from "../../assets/category-4.jpg";

const Categories = () => {
  const categories = [
    {
      name: "Men's Clothing",
      path: "/mens-clothing",
      image: category1,
    },
    {
      name: "Women's Clothing",
      path: "/womens-clothing",
      image: category2,
    },
    {
      name: "Jewelery",
      path: "/jewelery",
      image: category3,
    },
    {
      name: "Electronics",
      path: "/electronics",
      image: category4,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category.path}
            to={`/categories${category.path}`}
            className="text-center transition-transform duration-300 hover:scale-110"
          >
            <img
              src={category.image}
              alt={category.name}
              className="mx-auto mb-4 
                         h-24 w-24 
                         sm:h-28 sm:w-28 
                         md:h-32 md:w-32
                         object-cover rounded-full 
                         border-4 border-white shadow-lg"
            />
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 capitalize">
              {category.name}
            </h4>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
