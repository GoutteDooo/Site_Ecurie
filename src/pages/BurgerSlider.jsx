import React from "react";

const BurgerSlider = ({ active }) => {
  return (
    <div
      className="burger-slider"
      style={{ transform: active ? "translateX(0)" : "" }}
    >
      <div className="burger-slider__logo"></div>
      <div className="burger-slider__content">
        <div className="burger-slider__content--item">Accueil</div>
        <div className="burger-slider__content--item">
          Ecurie de Propriétaires
        </div>
        <div className="burger-slider__content--item">Installations</div>
        <div className="burger-slider__content--item">Les Cours</div>
        <div className="burger-slider__content--item">Nous Contacter</div>
      </div>
    </div>
  );
};

export default BurgerSlider;
