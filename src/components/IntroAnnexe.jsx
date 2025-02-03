import React from "react";
import ScrollArrow from "./ScrollArrow";

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

  const reduceText = (text) => {
    const values = {
      0: { fontSize: "1rem", lineHeight: "2.1rem" },
      30: { fontSize: "0.9rem", lineHeight: "1.9rem" },
      55: { fontSize: "0.8rem", lineHeight: "1.5rem" },
      70: { fontSize: "0.6rem", lineHeight: "1.2rem" },
    };
    let rem = null;
    const sizeOfText = text.split(" ").length;
    for (const size in values) {
      rem = size < sizeOfText ? values[size] : rem;
    }
    return rem;
  };

  const parsedDescription = parseDescription();

  return (
    <div className="intro-annexe">
      <div className="intro-annexe__bg-media">
        <h1>{annexe.title}</h1>
        {annexe.videoLink && (
          <video
            className="intro-annexe__bg-media--video"
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
          <div
            className="intro-annexe__bg-media--image"
            style={{
              backgroundImage: `url(/assets/images/annexes/${annexe.imageLink}/intro.jpg`,
            }}
          />
        )}
      </div>
      <div className="intro-annexe__description">
        <p
          dangerouslySetInnerHTML={{ __html: parsedDescription }}
          style={reduceText(parsedDescription)}
        />
      </div>
      <ScrollArrow size={50} scrolling={1} />
    </div>
  );
};

export default IntroAnnexe;
