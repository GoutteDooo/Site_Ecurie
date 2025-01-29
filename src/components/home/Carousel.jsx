import React, { useState } from "react";

const Carousel = ({ card }) => {
  const [slideX, setSlideX] = useState(-100);
  const numberImages = card.carousel + 2;
  const handleSlide = (direction) => {
    const newX = slideX + direction;
    const indexes = numberImages;
    if (newX === 0) {
      setSlideX(0);
      //téléporte à la fin
      setTimeout(() => setSlideX(-(indexes - 2) * 100), 300);
    } else if (newX < -(indexes - 1) * 100) {
      setSlideX(0);
    } else {
      setSlideX((prevState) => prevState + direction);
    }
    console.log(newX);
  };

  const isFilter = (index) => numberImages - 2 === index && card.filter;

  return (
    <div className="carousel--viewport">
      <div className="carousel--arrow" onClick={() => handleSlide(100)}></div>
      <div className="carousel--arrow" onClick={() => handleSlide(-100)}></div>
      <div
        className="carousel--slides"
        style={{
          transform: `translateX(${slideX / numberImages}%)`,
          width: `calc(100% * ${numberImages})`,
          transition: `all ${
            slideX == -(numberImages - 2) * 100 ? "0s " : "0.3s "
          }ease-in-out`,
        }}
      >
        {[...Array(numberImages).keys()].map((_, index) => (
          <div
            className={`carousel--item ${isFilter(index) ? "filter" : ""}`}
            style={{
              backgroundImage: `url(/assets/images/cards/${card.id}_${
                isFilter(index)
                  ? "filter"
                  : index == 0
                  ? card.carousel - 1
                  : index == numberImages - 1
                  ? 0
                  : index - 1
              }.jpg)`,
            }}
            key={index}
          >
            {isFilter(index) && (
              <button>DÉCOUVRIR TOUTES NOS INSTALLATIONS</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
