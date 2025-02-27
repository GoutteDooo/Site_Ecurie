import React from "react";
import IntroAnnexe from "../components/IntroAnnexe";
import Interested from "../components/Interested";
import Tarifs from "../components/cours/Tarifs";
import Options from "../components/cours/Options";
import { annexes } from "../data/annexes.jsx";

const Cours = () => {
  window.scrollTo(0, 0);
  return (
    <div className="cours">
      <IntroAnnexe annexe={annexes[2]} />
      <Tarifs />
      <Options />
      <Interested />
    </div>
  );
};

export default Cours;
