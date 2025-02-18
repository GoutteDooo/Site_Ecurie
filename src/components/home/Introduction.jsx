import React, { useEffect } from "react";
import scrollEvent from "../../utils/functions/scrollEvent";

const Introduction = () => {
  useEffect(() => {
    // Ajouter dans useEffect ou componentDidMount
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      const videos = document.querySelectorAll("video");
      videos.forEach((video) => {
        video.play().catch(() => {
          // Fallback pour les strictes politiques autoplay
          video.setAttribute("poster", "poster.jpg");
        });
      });
    }
  }, []);
  return (
    <div className="home__introduction">
      <video
        className="home__introduction__video"
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        controls={false}
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
            Bienvenue aux <br></br>Écuries de la Selle
          </h1>
          <h2>Ecuries familiales à Saulzoir</h2>
        </div>{" "}
        <div className="home__introduction__content--button">
          <button onClick={() => scrollEvent(null, "homePres")}>
            DECOUVRIR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
