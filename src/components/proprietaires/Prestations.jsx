import React from "react";
import Bubble from "../Bubble";
import { MAIN_COLOR, BG_COLOR } from "../../utils/variables";

const Prestations = () => {
  // window.scrollTo(0, 0);

  const content = [
    <>
      <p>Pension Chevaux et/ou Poneys</p>
      <em>(cliquer pour voir le détail)</em>
    </>,
    <>
      <p>Cours d'équitation & éthologie</p>
      <em>(cliquer pour aller sur la page)</em>
    </>,
    <p>Sorties des chevaux</p>,
    <p>Tonte</p>,
    <p>Solarium avec monnayeur</p>,
  ];
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
        />
      ))}
    </div>
  );
};

export default Prestations;
