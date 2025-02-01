import React from "react";

/**
 * Affiche introduction des pages annexes
 * Une image avec le titre de la page
 * puis une légère description
 * @returns
 */
const IntroAnnexe = ({ annexe }) => {
  const parseDescription = () => {
    const bold = annexe.bold;
    const desc = annexe.description;
    if (bold) {
      return desc.replace(
        new RegExp(bold.join("|"), "g"),
        (match) => `<strong>${match}</strong>`
      );
    } else {
      return desc;
    }
  };
  const parsedDescription = parseDescription();
  return (
    <div className="intro-annexe">
      <div className="intro-annexe__bg-media">
        <h1>{annexe.title}</h1>
        {annexe.videoLink && (
          <video
            className="intro-annexe__bg-video--video"
            autoPlay
            muted
            loop
            poster="/assets/images/accueil_mobile.jpg"
          >
            <source
              src={`/assets/videos/intro-${annexe.videoLink}-light.mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        )}
        {annexe.imageLink && (
          <img
            className="intro-annexe__bg-image"
            src={`/assets/images/annexes/${annexe.imageLink}.jpg`}
          />
        )}
      </div>
      <div className="intro-annexe__description">
        <p dangerouslySetInnerHTML={{ __html: parsedDescription }}></p>
      </div>
    </div>
  );
};

export default IntroAnnexe;
