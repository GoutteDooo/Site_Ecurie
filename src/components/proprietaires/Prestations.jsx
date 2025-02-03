import React from "react";
import Bubble from "../Bubble";
import { MAIN_COLOR, BG_COLOR, SECONDARY_COLOR } from "../../utils/variables";

const Prestations = () => {
  // window.scrollTo(0, 0);

  return (
    <div className="proprietaires__prestations">
      <h1>Nos Prestations</h1>
      <Bubble
        bgColor={BG_COLOR}
        textColor={MAIN_COLOR}
        content="Pension Chevaux et/ou Poneys /br (cliquer pour voir le détail)"
        clickable={true}
      />
      <Bubble
        bgColor={BG_COLOR}
        textColor={MAIN_COLOR}
        content="Pension Chevaux à partir de 300€ TTC"
      />
      <Bubble
        bgColor={BG_COLOR}
        textColor={MAIN_COLOR}
        content="Pension Chevaux à partir de 300€ TTC"
      />
      <Bubble
        bgColor={BG_COLOR}
        textColor={MAIN_COLOR}
        content="Pension Chevaux à partir de 300€ TTC"
      />
    </div>
  );
};

export default Prestations;
