import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavbarDesktop = () => {
  const location = useLocation();
  return (
    <div className="navbar-desktop">
      <Link to="/">
        <div className={`navbar-desktop--logo`}></div>
      </Link>
      <Link to="/">
        <div
          className={`navbar-desktop--item ${
            location.pathname === "/" ? "active" : ""
          }`}
        >
          Accueil
        </div>
      </Link>
      <Link to="/proprietaires">
        <div
          className={`navbar-desktop--item ${
            location.pathname === "/proprietaires" ? "active" : ""
          }`}
        >
          Écurie de Propriétaires
        </div>
      </Link>
      <Link to="/installations">
        <div
          className={`navbar-desktop--item ${
            location.pathname === "/installations" ? "active" : ""
          }`}
        >
          Installations
        </div>
      </Link>
      <Link to="/cours">
        <div
          className={`navbar-desktop--item ${
            location.pathname === "/cours" ? "active" : ""
          }`}
        >
          Les Cours
        </div>
      </Link>
      <Link to="/contacts">
        <div
          className={`navbar-desktop--item ${
            location.pathname === "/contacts" ? "active" : ""
          }`}
        >
          Nous Contacter
        </div>
      </Link>
    </div>
  );
};

export default NavbarDesktop;
