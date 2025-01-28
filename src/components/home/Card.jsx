import React from "react";
import { useState } from "react";

/**
 * Affiche les différentes Installations de l'Ecurie
 * @param {Object} card
 * card.id : String
 * card.carousel : Number (nombre d'images dans le carousel)
 * card.title : String
 * card.description : Array de Strings
 * @returns
 */
const Card = ({ card }) => {
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
    <div className="main__card">
      <div className="main__card__carousel--viewport">
        <div className="carousel--arrow" onClick={() => handleSlide(100)}></div>
        <div
          className="carousel--arrow"
          onClick={() => handleSlide(-100)}
        ></div>
        <div
          className="main__card__carousel--slides"
          style={{ transform: `translateX(${slideX}vw)` }}
        >
          {[...Array(card.carousel).keys()].map((item, index) => (
            <img
              src={`/assets/images/cards/${card.id}_${item}.jpg`}
              alt="carousel"
              className="main__card__carousel--item"
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="main__card__content">
        <h1>Boxes Ext</h1>
        <p></p>
      </div>
    </div>
  );
};

export default Card;
