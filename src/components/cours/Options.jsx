import React from "react";
import Bubble from "../Bubble";
import { CONTENT_INFOS } from "../../data/Tarifs_data";
import { MAIN_COLOR } from "../../utils/variables";

/**
 * Display les options supplémentaires pour les cours
 * @returns
 */
const Options = () => {
  const MAIN_COLOR_OPACITY = "#5c6bc0cc";
  const BG_COLOR_OPACITY = "#eeeeeecc";

  return (
    <div className="cours__options">
      <h1>Informations supplémentaires</h1>
      {CONTENT_INFOS.map((c, i) => (
        <Bubble
          bgColor={BG_COLOR_OPACITY}
          textColor={MAIN_COLOR}
          content={c}
          key={i}
          size={70}
          borderColor={MAIN_COLOR_OPACITY}
        />
      ))}
    </div>
  );
};

export default Options;
