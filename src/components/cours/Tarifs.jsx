import React from "react";
import Bubble from "../../components/Bubble";
import { BG_COLOR } from "../../utils/variables";
import { CONTENT_PRESTATIONS } from "../../data/Tarifs_data";

/**
 * Display les tarifs des cours
 * @returns
 */
const Tarifs = () => {
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
    </div>
  );
};

export default Tarifs;
