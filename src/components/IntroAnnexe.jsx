import React from "react";

/**
 * Affiche introduction des pages annexes
 * Une image avec le titre de la page
 * puis une légère description
 * @returns
 */
const IntroAnnexe = ({ videoLink }) => {
  return (
    <div className="intro-annexe">
      <div className="intro-annexe__bg-video">
        <h1>Écurie de Propriétaires</h1>
        <video
          className="intro-annexe__bg-video--video"
          autoPlay
          muted
          loop
          poster="/assets/images/accueil_mobile.jpg"
        >
          <source
            src={`/assets/videos/intro-${videoLink}.mp4`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="intro-annexe__description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
        sapiente voluptas obcaecati praesentium. Delectus, quas provident cumque
        veritatis vel quam voluptas laudantium repellat quo eaque!
      </div>
    </div>
  );
};

export default IntroAnnexe;
