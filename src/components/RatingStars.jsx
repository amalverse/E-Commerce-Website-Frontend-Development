import React from "react";
import { IoStar, IoStarOutline } from "react-icons/io5";

const RatingStars = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      i <= rating ? (
        <IoStar key={i} className="text-yellow-500 " />
      ) : (
        <IoStarOutline key={i} className="text-yellow-500 " />
      )
    );
  }

  return (
    <div className="text-lg flex justify-center items-center">{stars}</div>
  );
};

export default RatingStars;
