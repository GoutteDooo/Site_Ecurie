import React from "react";
import Carousel from "../Carousel";
import ScrollArrow from "../ScrollArrow";

/**
 * Affiche une image a 50% de l'écran
 * Et un texte descriptif sur les 50% autres
 * @param {string} imgLink lien vers l'image
 * @param {string} title titre de l'image
 * @param {JSX} description description de l'image
 * @returns
 */
const DescriptionCard = ({ title, description, id, card }) => {
  return (
    <div className="installations--description-card">
      <div className="installations--description-card__carousel">
        <Carousel card={card} compteur={card.carousel > 1 ? true : false} />
      </div>
      <div className="installations--description-card__description">
        {title}
        {description}
      </div>
      <ScrollArrow size={50} scrolling={id + 2} />
    </div>
  );
};

export default DescriptionCard;
