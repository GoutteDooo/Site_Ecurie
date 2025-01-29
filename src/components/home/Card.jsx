import React from "react";
import { useState } from "react";
import Carousel from "./Carousel";
import ScrollArrow from "../ScrollArrow";

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
      <Carousel card={card} />
      <div className="main__card__content">
        <h1>{card.title}</h1>
        {card.description.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <ScrollArrow size={50} scrolling={Number(card.id) + 2} />
    </div>
  );
};

export default Card;
