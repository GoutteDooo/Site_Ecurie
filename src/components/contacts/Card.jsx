import React from "react";

const Card = ({ icon, content }) => {
  return (
    <div className="contacts__card">
      <div className="contacts__card--icon">
        <i className={`fa-solid fa-${icon}`}></i>
      </div>
      <div className="contacts__card--content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
