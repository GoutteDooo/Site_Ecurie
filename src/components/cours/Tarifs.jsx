import React from "react";
import Bubble from "../../components/Bubble";
import { BG_COLOR } from "../../utils/variables";
import { CONTENT_PRESTATIONS } from "../../data/Tarifs_data";
import ScrollArrow from "../ScrollArrow";

/**
 * Display les tarifs des cours
 * @returns
 */
const Tarifs = () => {
  const SECONDARY_COLOR_OPACITY = "#3f51b5cc";
  console.log(window.innerWidth);

  return (
    <div className="cours__tarifs">
      <div className="cours__tarifs--bg"></div>
      <h1>Nos Prestations</h1>
      <div className="cours__tarifs--content">
        {CONTENT_PRESTATIONS.map((c, i) => (
          <Bubble
            bgColor={SECONDARY_COLOR_OPACITY}
            textColor={BG_COLOR}
            content={c}
            key={i}
            borderColor={SECONDARY_COLOR_OPACITY}
          />
        ))}
        {window.innerWidth < 1280 ? (
          <ScrollArrow size={70} scrolling={2} />
        ) : null}
      </div>
    </div>
  );
};

export default Tarifs;
