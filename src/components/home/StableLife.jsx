import React from "react";
import Carousel from "../Carousel";

const StableLife = ({ card }) => {
  return (
    <div className="stable-life">
      <div className="stable-life--title">
        <h1>Vie de l'Ecurie</h1>
      </div>
      <div className="stable-life--carousel">
        <Carousel card={card} compteur={true} />
      </div>
    </div>
  );
};

export default StableLife;
