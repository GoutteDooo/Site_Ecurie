import React from "react";
import { Link } from "react-router-dom";

const Card = ({ icon, content, link = false }) => {
  return (
    <>
      {link ? (
        <Link to={link}>
          <div className="contacts__card">
            <div className="contacts__card--icon">{icon}</div>
            <div className="contacts__card--content">
              <p className="contacts__card--link">{content}</p>
            </div>
          </div>
        </Link>
      ) : (
        <div className="contacts__card">
          <div className="contacts__card--icon">{icon}</div>
          <div className="contacts__card--content">
            <p>{content}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
