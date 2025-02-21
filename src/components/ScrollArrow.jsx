import React from "react";
import scrollEvent from "../utils/functions/scrollEvent";

/**
 * Arrow de scrolling en bas de certains composants pour aider
 * l'utilisateur a scroll plus facilement
 * @param {number} size définit la taille du composant en px
 * @param {number} scrolling définit une target : scrolling * 100vh
 * @returns
 */
const ScrollArrow = ({ size = 100, scrolling = 1 }) => {
  //Cas particulier pour les installations dans Home
  if (scrolling === "homeCard4") {
    scrolling = "allInstallations";
  }
  return (
    <div
      className="scroll-arrow"
      onClick={() => scrollEvent(scrolling)}
      style={{ height: size }}
    >
      <div className="arrow" style={{ width: size * 0.66 }}>
        <div className="arrow--tip"></div>
        <div className="arrow--tip"></div>
        <div className="arrow--tip"></div>
      </div>
    </div>
  );
};

export default ScrollArrow;
