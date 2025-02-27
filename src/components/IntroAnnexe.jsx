import React, { useEffect } from "react";
import ScrollArrow from "./ScrollArrow";

/**
 * Affiche introduction des pages annexes
 * Une image avec le titre de la page
 * puis une légère description
 *  @param {object} annexe lien vers l'objet
 * @returns
 */
const IntroAnnexe = ({ annexe }) => {
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
    <div className="intro-annexe" id={annexe.name}>
      <div className="intro-annexe__bg-media">
        {annexe.title}
        {annexe.videoLink && (
          <video
            className="intro-annexe__bg-media--video"
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            controls={false}
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
          <div
            className="intro-annexe__bg-media--image"
            style={{
              backgroundImage: `url(/assets/images/annexes/${annexe.imageLink}/intro.jpg`,
            }}
          />
        )}
      </div>
      <div className="intro-annexe__description">{annexe.description}</div>
      <ScrollArrow size={50} scrolling={1} />
    </div>
  );
};

export default IntroAnnexe;
