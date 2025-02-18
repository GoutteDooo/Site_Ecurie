import React from "react";
import ScrollArrow from "../ScrollArrow";
import Carousel from "../Carousel";

/**
 * Affiche une grande image de 70% de la taille de l'écran
 * avec un titre sur les 30% autres
 * @param {string} imgLink url de l'image
 * @param {JSX} title titre de l'image
 * @returns
 */
const ImageCard = ({ description = "installation", id = 0, card }) => {
  /* ! ATTENTION ! */
  /* INSTABILITE : LE COMPOSANT EnPlus.jsx COMPORTE L'ID 8 POUR EVITER LE PROBLEME AVEC
  LA SCROLL ARROW, A VOIR SI MAJ A EFFECTUER */
  /* ! ATTENTION ! */
  return (
    <div className="installations--image-card" id={id}>
      <div className="installations--image-card__carousel">
        <Carousel card={card} />
      </div>
      {description}
      <ScrollArrow size={50} scrolling={String(id + 1)} />
    </div>
  );
};

export default ImageCard;
