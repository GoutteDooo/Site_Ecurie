import React from "react";
import scrollEvent from "../../utils/functions/scrollEvent";

const Introduction = () => {
  return (
    <div className="home__introduction">
      <video
        className="home__introduction__video"
        autoPlay
        muted
        loop
        poster="/assets/images/accueil_mobile.jpg"
      >
        <source src="/assets/videos/introduction.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="home__introduction__content">
        <div
          className="home__introduction__content--logo"
          onClick={() => scrollEvent(1)}
        ></div>
        <div className="home__introduction__content--titles">
          <h1>
            Bienvenue aux <br></br>Ecuries de la Selle
          </h1>
          <h2>Ecuries familiales à Saulzoir</h2>
        </div>{" "}
        <div className="home__introduction__content--button">
          <button onClick={() => scrollEvent(1)}>DECOUVRIR</button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
