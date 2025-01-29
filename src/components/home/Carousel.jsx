import React, { useState } from "react";

const Carousel = ({ card }) => {
  const [slideX, setSlideX] = useState(0);
  const handleSlide = (direction) => {
    const newX = slideX + direction;
    const indexes = card.carousel;
    if (newX > 0) {
      setSlideX(-(indexes - 1) * 100);
    } else if (newX < -(indexes - 1) * 100) {
      setSlideX(0);
    } else {
      setSlideX((prevState) => prevState + direction);
    }
  };
  return (
    <div className="carousel--viewport">
      <div className="carousel--arrow" onClick={() => handleSlide(100)}></div>
      <div className="carousel--arrow" onClick={() => handleSlide(-100)}></div>
      <div
        className="carousel--slides"
        style={{ transform: `translateX(${slideX}vw)` }}
      >
        {[...Array(card.carousel).keys()].map((item, index) => (
          <img
            src={`/assets/images/cards/${card.id}_${item}.jpg`}
            alt="carousel"
            className="carousel--item"
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
