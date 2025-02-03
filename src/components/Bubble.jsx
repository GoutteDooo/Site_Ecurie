import React from "react";
import { MAIN_COLOR } from "../utils/variables";
import { breakLines } from "../utils/functions/breakLines";
/**
 * Affiche une bulle centrée verticalement
 * @param {string} bgColor couleur de fond de la bulle
 * @param {string} textColor couleur du texte de la bulle
 * @param {number} opacity opacité de la bulle (default = 1
 * @param {string} content contenu de la bulle
 * @returns
 */
const Bubble = ({
  bgColor = MAIN_COLOR,
  textColor = "black",
  opacity = 1,
  content = null,
}) => {
  const style = {
    backgroundColor: bgColor,
    color: textColor,
    opacity: opacity,
  };
  return (
    <div className="bubble" style={style}>
      {breakLines(content)}
    </div>
  );
};

export default Bubble;
