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
const DescriptionCard = ({ description, id, card }) => {
  return (
    <div className="installations--description-card" id={id}>
      <div className="installations--description-card__carousel">
        <Carousel card={card} />
      </div>
      <div className="installations--description-card__description">
        {description}
      </div>
      <ScrollArrow size={50} scrolling={String(id + 1)} />
    </div>
  );
};

export default DescriptionCard;
