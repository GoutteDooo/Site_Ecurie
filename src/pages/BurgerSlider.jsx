import React from "react";
import { Link } from "react-router-dom";

const BurgerSlider = ({ active, setActive }) => {
  return (
    <div
      className="burger-slider"
      style={{ transform: active ? "translateX(0)" : "" }}
    >
      <Link to="/">
        <div
          className="burger-slider__logo"
          onClick={() => setActive(false)}
        ></div>
      </Link>
      <div className="burger-slider__content">
        <Link to="/">
          <div
            className="burger-slider__content--item"
            onClick={() => setActive(false)}
          >
            Accueil
          </div>
        </Link>
        <Link to="/proprietaires">
          <div
            className="burger-slider__content--item"
            onClick={() => setActive(false)}
          >
            Ecurie de Propriétaires
          </div>
        </Link>
        <Link to="/installations">
          <div
            className="burger-slider__content--item"
            onClick={() => setActive(false)}
          >
            Installations
          </div>
        </Link>
        <Link to="/cours">
          <div
            className="burger-slider__content--item"
            onClick={() => setActive(false)}
          >
            Les Cours
          </div>
        </Link>
        <Link to="/contacts">
          <div
            className="burger-slider__content--item"
            onClick={() => setActive(false)}
          >
            Nous Contacter
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BurgerSlider;
