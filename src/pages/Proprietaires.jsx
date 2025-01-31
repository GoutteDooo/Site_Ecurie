import React from "react";
import IntroAnnexe from "../components/IntroAnnexe";
import { annexes } from "../data/annexes.json";

const Proprietaires = () => {
  return (
    <div className="proprietaires">
      <IntroAnnexe annexe={annexes[0]} />
    </div>
  );
};

export default Proprietaires;
