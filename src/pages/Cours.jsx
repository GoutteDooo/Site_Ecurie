import React from "react";
import IntroAnnexe from "../components/IntroAnnexe";
import { annexes } from "../data/annexes.json";

const Cours = () => {
  window.scrollTo(0, 0);
  return (
    <div className="cours">
      <IntroAnnexe annexe={annexes[2]} />
    </div>
  );
};

export default Cours;
