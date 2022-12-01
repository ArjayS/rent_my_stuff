import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const StarRating = () => {
  const [starRating, setStarRating] = useState(null);
  const [starHover, setStarHover] = useState(null);


  return (
    <div className="flex">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              className="hidden"
              value={ratingValue}
              onClick={() => setStarRating(ratingValue)}
            />
            <FaStar
              size={25}
              className="cursor-pointer"
              color={
                ratingValue <= (starHover || starRating)
                  ? "#ffc107"
                  : "#e4e5e9"
              }
              onMouseEnter={() => setStarHover(ratingValue)}
              onMouseLeave={() => setStarHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
