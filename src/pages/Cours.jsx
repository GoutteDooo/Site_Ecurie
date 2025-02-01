import React from "react";
import IntroAnnexe from "../components/IntroAnnexe";
import { annexes } from "../data/annexes.json";

const Cours = () => {
  return (
    <div className="cours">
      <IntroAnnexe annexe={annexes[2]} />
    </div>
  );
};

export default Cours;
