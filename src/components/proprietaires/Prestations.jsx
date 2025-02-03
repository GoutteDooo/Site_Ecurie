import React from "react";
import Bubble from "../Bubble";
import { MAIN_COLOR, BG_COLOR } from "../../utils/variables";

const Prestations = () => {
  const content = [
    <>
      <b>Pension Chevaux et/ou Poneys</b>
      <em>(cliquer pour voir le détail)</em>
    </>,
    <>
      <b>Cours d'équitation & éthologie</b>
      <em>(cliquer pour aller sur la page)</em>
    </>,
    <p>Sorties de votre animal</p>,
    <p>Tonte</p>,
    <p>Solarium avec monnayeur</p>,
  ];
  const linkings = ["scroll", "/cours"];
  return (
    <div className="proprietaires__prestations">
      <h1>Nos Prestations</h1>
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
  );
};

export default Prestations;
