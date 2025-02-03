import React from "react";
import { MAIN_COLOR } from "../utils/variables";
import { useNavigate } from "react-router-dom";
import scrollEvent from "../utils/functions/scrollEvent";

/**
 * Affiche une bulle centrée verticalement
 * @param {string} bgColor couleur de fond de la bulle
 * @param {string} textColor couleur du texte de la bulle
 * @param {number} opacity opacité de la bulle (default = 1
 * @param {string} content contenu de la bulle (ASTUCE : utiliser "/br" pour passage à la ligne)
 * @returns
 */

const Bubble = ({
  bgColor = MAIN_COLOR,
  textColor = "black",
  opacity = 1,
  content = null,
  clickable = false,
  linking = null,
}) => {
  const [isHover, setIsHover] = React.useState(false);
  let navigate = useNavigate();
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
          border: `3px solid ${textColor}`,
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

  const handleLink = () => {
    return linking === "scroll" ? scrollEvent(2) : navigate(linking);
  };

  return (
    <div
      className={` bubble ${clickable ? "clickable" : ""}`}
      style={style()}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={linking ? handleLink : null}
    >
      {content}
    </div>
  );
};

export default Bubble;
