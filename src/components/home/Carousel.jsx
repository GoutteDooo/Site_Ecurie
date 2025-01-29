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
        style={{
          transform: `translateX(${slideX}vw)`,
          width: `calc(100vw * ${card.carousel})`,
        }}
      >
        {[...Array(card.carousel).keys()].map((item, index) => (
          <div
            className="carousel--item"
            style={{
              backgroundImage: `url(/assets/images/cards/${card.id}_${item}.jpg)`,
            }}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
