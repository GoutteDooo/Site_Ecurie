import React from "react";
import IntroAnnexe from "../components/IntroAnnexe";
import { annexes } from "../data/annexes.json";

const Installations = () => {
  window.scrollTo(0, 0);
  return (
    <div className="installations">
      <IntroAnnexe annexe={annexes[1]} />
    </div>
  );
};

export default Installations;
