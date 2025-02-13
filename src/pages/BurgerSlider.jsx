import React from "react";
import { Link, useLocation } from "react-router-dom";

const BurgerSlider = ({ active, setActive }) => {
  const location = useLocation();
  return (
    <div
      className="burger-slider"
      style={{ transform: active ? "translateX(0)" : "" }}
    >
      <Link to="/">
        <div
          className={`burger-slider__logo`}
          onClick={() => setActive(false)}
        ></div>
      </Link>
      <div className="burger-slider__content">
        <Link to="/" onClick={() => setActive(false)}>
          <div
            className={`burger-slider__content--item ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            Accueil
          </div>
        </Link>
        <Link to="/proprietaires" onClick={() => setActive(false)}>
          <div
            className={`burger-slider__content--item ${
              location.pathname === "/proprietaires" ? "active" : ""
            }`}
          >
            Écurie de Propriétaires
          </div>
        </Link>
        <Link to="/installations" onClick={() => setActive(false)}>
          <div
            className={`burger-slider__content--item ${
              location.pathname === "/installations" ? "active" : ""
            }`}
          >
            Installations
          </div>
        </Link>
        <Link to="/cours" onClick={() => setActive(false)}>
          <div
            className={`burger-slider__content--item ${
              location.pathname === "/cours" ? "active" : ""
            }`}
          >
            Les Cours
          </div>
        </Link>
        <Link to="/contacts" onClick={() => setActive(false)}>
          <div
            className={`burger-slider__content--item ${
              location.pathname === "/contacts" ? "active" : ""
            }`}
          >
            Nous Contacter
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BurgerSlider;
