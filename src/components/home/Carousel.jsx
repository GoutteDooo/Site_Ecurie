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

  const isFilter = (index) => card.carousel - 1 === index && card.filter;

  return (
    <div className="carousel--viewport">
      <div className="carousel--arrow" onClick={() => handleSlide(100)}></div>
      <div className="carousel--arrow" onClick={() => handleSlide(-100)}></div>
      <div
        className="carousel--slides"
        style={{
          transform: `translateX(${slideX / card.carousel}%)`,
          width: `calc(100% * ${card.carousel})`,
        }}
      >
        {[...Array(card.carousel).keys()].map((_, index) => {
          if (isFilter(index)) {
            return (
              <div
                className={`carousel--item filter`}
                style={{
                  backgroundImage: `url(/assets/images/cards/${card.id}_filter.jpg)`,
                }}
                key={index}
              >
                <button>DÉCOUVRIR TOUTES NOS INSTALLATIONS</button>
              </div>
            );
          } else {
            return (
              <div
                className={`carousel--item `}
                style={{
                  backgroundImage: `url(/assets/images/cards/${card.id}_${index}.jpg)`,
                }}
                key={index}
              ></div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Carousel;
