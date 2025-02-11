import React from "react";
import { MAIN_COLOR } from "../utils/variables";
import { Link, useNavigate } from "react-router-dom";

/**
 * Affiche une bulle centrée verticalement
 * @param {string} bgColor couleur de fond de la bulle
 * @param {string} textColor couleur du texte de la bulle
 * @param {number} opacity opacité de la bulle (default = 1)
 * @param {string} content contenu de la bulle (ASTUCE : utiliser "/br" pour passage à la ligne)
 * @returns
 */
const Bubble = ({
  bgColor = MAIN_COLOR,
  textColor = "black",
  opacity = 1,
  size = 90,
  borderColor = `3px solid ${textColor}`,
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
      border: borderColor,
      height: `${size}px`,
    };
    if (clickable) {
      if (isHover) {
        return {
          backgroundColor: textColor,
          color: bgColor,
          cursor: "pointer",
          transform: "scale(1.05)",
          border: borderColor,
        };
      } else {
        return {
          ...defaultStyle,
          cursor: "pointer",
          border: `4px solid ${textColor}`,
        };
      }
    }
    return {
      ...defaultStyle,
    };
  };

  const handleLink = () => {
    if (linking === "scroll") {
      const detailsElement = document.getElementById("details");
      if (detailsElement) {
        const offset = 70; // Hauteur de la navbar
        const elementPosition =
          detailsElement.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    } else {
      navigate(linking);
    }
  };

  return (
    <div
      className={`bubble ${clickable ? "clickable" : ""}`}
      style={style()}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={linking ? handleLink : null}
    >
      <span>{content}</span>
    </div>
  );
};

export default Bubble;
