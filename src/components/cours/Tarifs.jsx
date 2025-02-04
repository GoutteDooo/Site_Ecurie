import React from "react";
import Bubble from "../../components/Bubble";
import { BG_COLOR } from "../../utils/variables";

/**
 * Display les tarifs des cours
 * @returns
 */
const Tarifs = () => {
  const content = [
    <>
      <p>Cours Individuels</p>
      <em>30€/heure & 250€ pour 10 heures</em>
    </>,
    <>
      <p>Cours Collectifs</p>
      <em>15€/heure & 120€ pour 10 heures</em>
    </>,
  ];
  const MAIN_COLOR__OPACITY = "#5c6bc099";
  return (
    <div className="cours__tarifs">
      <div className="cours__tarifs--bg"></div>
      <h1>Les Tarifs des Cours</h1>
      {content.map((c, i) => (
        <Bubble
          bgColor={MAIN_COLOR__OPACITY}
          textColor={BG_COLOR}
          content={c}
          key={i}
          borderColor="none"
        />
      ))}
    </div>
  );
};

export default Tarifs;
