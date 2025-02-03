import React from "react";

/**
 * Affiche une image en arrière-plan avec un effet de parallax ou non
 * @param {string} imgLink url de l'image
 * @param {number} size taille de l'image en bg (default : 100px)
 * @param {boolean} isParallax parallax ou non (default: true)
 * @returns
 */
const DecorImage = ({ imgLink, size = "250px", isParallax = true }) => {
  const style = {
    backgroundImage: `url(${imgLink})`,
    height: size,
    backgroundAttachment: isParallax ? "fixed" : "local",
  };
  return <div className="decor-image" style={style}></div>;
};

export default DecorImage;
