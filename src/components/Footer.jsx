import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__copyright">
        © Copyright Les Ecuries de la Selle
      </div>
      <Link to="/contact">
        <div className="footer__contacts">Contactez-nous</div>
      </Link>
    </div>
  );
};

export default Footer;
