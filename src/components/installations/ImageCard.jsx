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
const ImageCard = ({
  imgLink = "test.jpg",
  title = "installation",
  id = 0,
  card,
}) => {
  const image = {
    backgroundImage: `url(/assets/images/installations/${imgLink})`,
  };
  return (
    <div className="installations--image-card">
      <div className="installations--image-card__image" style={image}>
        <Carousel />
      </div>
      {title}
      <ScrollArrow size={50} scrolling={id + 2} />
    </div>
  );
};

export default ImageCard;
