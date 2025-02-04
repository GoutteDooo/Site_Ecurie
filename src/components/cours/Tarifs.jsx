import React from "react";
import Bubble from "../../components/Bubble";
import { BG_COLOR, SECONDARY_COLOR } from "../../utils/variables";
import { CONTENT_PRESTATIONS, CONTENT_INFOS } from "../../data/Tarifs_data";

/**
 * Display les tarifs des cours
 * @returns
 */
const Tarifs = () => {
  const MAIN_COLOR_OPACITY = "#5c6bc0cc";
  const SECONDARY_COLOR_OPACITY = "#3f51b5cc";

  return (
    <div className="cours__tarifs">
      <div className="cours__tarifs--bg"></div>
      <h1>Nos Prestations</h1>
      {CONTENT_PRESTATIONS.map((c, i) => (
        <Bubble
          bgColor={SECONDARY_COLOR_OPACITY}
          textColor={BG_COLOR}
          content={c}
          key={i}
          borderColor={SECONDARY_COLOR_OPACITY}
        />
      ))}
      <h1 style={{ fontSize: "1.4rem", backgroundColor: MAIN_COLOR_OPACITY }}>
        Informations supplémentaires
      </h1>
      {CONTENT_INFOS.map((c, i) => (
        <Bubble
          bgColor={MAIN_COLOR_OPACITY}
          textColor={BG_COLOR}
          content={c}
          key={i}
          size={70}
          borderColor={MAIN_COLOR_OPACITY}
        />
      ))}
    </div>
  );
};

export default Tarifs;
