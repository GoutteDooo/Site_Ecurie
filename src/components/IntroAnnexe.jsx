import React from "react";

/**
 * Affiche introduction des pages annexes
 * Une image avec le titre de la page
 * puis une légère description
 * @returns
 */
const IntroAnnexe = ({ annexe }) => {
  return (
    <div className="intro-annexe">
      <div className="intro-annexe__bg-video">
        <h1>{annexe.title}</h1>
        <video
          className="intro-annexe__bg-video--video"
          autoPlay
          muted
          loop
          poster="/assets/images/accueil_mobile.jpg"
        >
          <source
            src={`/assets/videos/intro-${annexe.videoLink}.mp4`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="intro-annexe__description">{annexe.description}</div>
    </div>
  );
};

export default IntroAnnexe;
