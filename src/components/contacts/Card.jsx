import React from "react";

const Card = ({ icon, content, link = false }) => {
  return (
    <>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="contacts__card">
            <div className="contacts__card--icon">{icon}</div>
            <div className="contacts__card--content">
              <p className="contacts__card--link">{content}</p>
            </div>
          </div>
        </a>
      ) : (
        <div className="contacts__card">
          <div className="contacts__card--icon">{icon}</div>
          <div className="contacts__card--content">{content}</div>
        </div>
      )}
    </>
  );
};

export default Card;
