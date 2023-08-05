import React from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({ rating }) => {
  return (
    <div className="star-rating">
      {Array.from({ length: 5 }, (_, index) => (
        <FaStar
          key={index}
          size={30}
          color={rating > index ? "#FF6060" : "#e4e5e9"}
        />
      ))}
    </div>
  );
};

export default Rating;
