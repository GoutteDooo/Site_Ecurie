import React from "react";

const Horaires = () => {
  return (
    <>
      <div className="horaires">
        <div className="horaires__background" />
        <div className="horaires__blur" />
        <div className="horaires__container">
          <h1>Les horaires</h1>
          <p className="horaires--days">Lundi - Samedi</p>
          <p className="horaires--hours">8:30 - 20:30</p>
          <p className="horaires--days">Dimanche</p>
          <p className="horaires--hours">8:30 - 18:30</p>
        </div>
      </div>
    </>
  );
};

export default Horaires;
