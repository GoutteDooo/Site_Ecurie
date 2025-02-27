import React from "react";
import Bubble from "../Bubble";
import { MAIN_COLOR, BG_COLOR } from "../../utils/variables";

const Prestations = () => {
  const content = [
    <>
      <b>Pension Chevaux et Poneys</b>
      <em>(cliquer pour voir le détail)</em>
    </>,
    <>
      <b>Cours d'équitation & éthologie</b>
      <em>(cliquer pour aller sur la page)</em>
    </>,
    <p>Sorties/Libertés manège et/ou paddock</p>,
    <p>Monte et Longe par la monitrice</p>,
    <p>Tonte de votre animal</p>,
    <p>Solarium avec monnayeur</p>,
  ];
  const linkings = ["scroll", "/cours"];
  return (
    <div className="proprietaires__prestations">
      <h1>Nos Prestations</h1>
      <div className="proprietaires__prestations--bubbles">
        {content.map((c, i) => (
          <Bubble
            bgColor={BG_COLOR}
            textColor={MAIN_COLOR}
            content={c}
            key={i}
            clickable={i < 2 ? true : false}
            linking={i < 2 ? linkings[i] : null}
          />
        ))}
      </div>
    </div>
  );
};

export default Prestations;
