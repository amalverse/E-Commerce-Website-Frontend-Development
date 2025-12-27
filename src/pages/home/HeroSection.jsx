import React from "react";
import { useNavigate } from "react-router-dom";

import card1 from "../../assets/card-1.png";
import card2 from "../../assets/card-2.png";
import card3 from "../../assets/card-3.png";

const cards = [
  {
    id: 1,
    image: card1,
    trend: "2025 Trends",
    title: "T Shirt Dress",
  },
  {
    id: 2,
    image: card2,
    trend: "2025 Trends",
    title: "Gaming Gear",
  },
  {
    id: 3,
    image: card3,
    trend: "2025 Trends",
    title: "Casual Dress",
  },
];

const HeroSection = () => {
  const navigate = useNavigate();

  const handleSearch = (title) => {
    const normalizedTitle = title.toLowerCase().trim().replace(/\s+/g, " ");
    navigate(`/search?query=${encodeURIComponent(normalizedTitle)}`);
  };

  return (
    <section className="max-w-6xl mx-auto py-8 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
      {cards.map((card) => (
        <div
          key={card.id}
          className="relative shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <img src={card.image} alt={card.title} className="rounded-lg" />

          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center">
            <p className="text-lg font-medium text-rose-600">{card.trend}</p>
            <h3 className="mb-3 text-xl font-extrabold text-slate-900">
              {card.title}
            </h3>

            <button
              onClick={() => handleSearch(card.title)}
              className="cursor-pointer text-md font-medium text-slate-600 underline"
            >
              Discover More
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroSection;
