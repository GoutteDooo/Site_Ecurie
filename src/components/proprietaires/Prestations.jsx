import React from "react";
import Bubble from "../Bubble";
import { MAIN_COLOR, BG_COLOR } from "../../utils/variables";

const Prestations = () => {
  return (
    <div className="proprietaires__prestations">
      <h1>Nos Prestations</h1>
      <Bubble
        bgColor={MAIN_COLOR}
        textColor={BG_COLOR}
        content="Pension Chevaux à partir de 300€ TTC"
      />
      <Bubble
        bgColor={MAIN_COLOR}
        textColor={BG_COLOR}
        content="Pension Chevaux à partir de 300€ TTC"
      />
      <Bubble
        bgColor={MAIN_COLOR}
        textColor={BG_COLOR}
        content="Pension Chevaux à partir de 300€ TTC"
      />
      <Bubble
        bgColor={MAIN_COLOR}
        textColor={BG_COLOR}
        content="Pension Chevaux à partir de 300€ TTC"
      />
      <Bubble
        bgColor={MAIN_COLOR}
        textColor={BG_COLOR}
        content="Pension Chevaux à partir de 300€ TTC"
      />
    </div>
  );
};

export default Prestations;
