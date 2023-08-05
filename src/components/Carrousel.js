import React, { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Carrousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    setCurrentImageIndex(index);
  };

  const prevSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    setCurrentImageIndex(index);
  };

  return (
    <div className="carrousel-container">
      <button className="arrow left" onClick={prevSlide}>
        <FaAngleLeft />
      </button>
      <div className="image-counter-container">
        <img src={images[currentImageIndex]} alt="" />
        <div className="counter">{`${currentImageIndex + 1}/${
          images.length
        }`}</div>
      </div>
      <button className="arrow right" onClick={nextSlide}>
        <FaAngleRight />
      </button>
    </div>
  );
};

export default Carrousel;
