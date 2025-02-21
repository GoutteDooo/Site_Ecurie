import React from "react";
import Carousel from "../Carousel";
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
const Card = ({ card, id = "" }) => {
  console.log(id);

  return (
    <div className="main__card" id={id}>
      <Carousel card={card} compteur={true} />
      <div className="main__card__content">
        <h1>{card.title}</h1>
        {card.description.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <ScrollArrow size={50} scrolling={String("homeCard" + (card.id + 1))} />
    </div>
  );
};

export default Card;
