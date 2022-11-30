import React, { useContext } from "react";
import { RentMyStuffContext } from "../context/RentMyStuffContext";
import { FaStar } from "react-icons/fa";

const StarRatingInputComponent = () => {
  const { starRatingInput, setStarRatingInput, starHover, setStarHover } =
    useContext(RentMyStuffContext);
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
              onClick={() => setStarRatingInput(ratingValue)}
            />
            <FaStar
              size={25}
              className="cursor-pointer"
              color={
                ratingValue <= (starHover || starRatingInput)
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

export default StarRatingInputComponent;
