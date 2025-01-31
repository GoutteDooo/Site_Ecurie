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
        <Link to="/" onClick={() => setActive(false)}>
          <div className="burger-slider__content--item">Accueil</div>
        </Link>
        <Link to="/proprietaires" onClick={() => setActive(false)}>
          <div className="burger-slider__content--item">
            Ecurie de Propriétaires
          </div>
        </Link>
        <Link to="/installations" onClick={() => setActive(false)}>
          <div className="burger-slider__content--item">Installations</div>
        </Link>
        <Link to="/cours" onClick={() => setActive(false)}>
          <div className="burger-slider__content--item">Les Cours</div>
        </Link>
        <Link to="/contacts" onClick={() => setActive(false)}>
          <div className="burger-slider__content--item">Nous Contacter</div>
        </Link>
      </div>
    </div>
  );
};

export default BurgerSlider;
