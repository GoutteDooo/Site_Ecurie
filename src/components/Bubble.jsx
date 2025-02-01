import React from "react";

/**
 * Affiche une bulle centrée verticalement
 * @param {string} bgColor couleur de fond de la bulle
 * @param {string} textColor couleur du texte de la bulle
 * @param {number} opacity opacité de la bulle
 * @param {string} content contenu de la bulle
 * @returns
 */
const Bubble = ({ bgColor, textColor, opacity, content }) => {
  const style = {
    backgroundColor: bgColor,
    color: textColor,
    opacity: opacity,
  };
  return (
    <div className="bubble" style={style}>
      {content}
    </div>
  );
};

export default Bubble;
