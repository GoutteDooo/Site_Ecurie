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
  clickable = false,
}) => {
  const [isHover, setIsHover] = React.useState(false);
  const style = () => {
    const defaultStyle = {
      backgroundColor: bgColor,
      color: textColor,
      opacity: opacity,
      border: `3px solid ${textColor}`,
    };
    if (clickable) {
      if (isHover) {
        return {
          backgroundColor: textColor,
          color: bgColor,
          cursor: "pointer",
          transform: "scale(1.05)",
        };
      } else {
        return {
          ...defaultStyle,
          cursor: "pointer",
        };
      }
    }
    return {
      ...defaultStyle,
    };
  };

  return (
    <div
      className={` bubble ${clickable ? "clickable" : ""}`}
      style={style()}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {breakLines(content)}
    </div>
  );
};

export default Bubble;
