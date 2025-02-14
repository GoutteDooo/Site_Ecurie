import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const fbIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
      {/* !Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
      <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
    </svg>
  );
  const link = "https://www.facebook.com/profile.php?id=100067889324501";
  return (
    <div className="footer">
      <div className="footer__legals">
        <Link to="/mentions-legales">
          <div className="footer__legals--mentions">Mentions légales </div>
        </Link>
      </div>
      <div className="footer__contacts">
        <Link to="/contacts">
          <div className="footer__contacts--link">Contactez-nous</div>
        </Link>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="footer__contacts--fb">{fbIcon}</div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
