import React from "react";
import { annexes } from "../data/annexes.json";
import IntroAnnexe from "../components/IntroAnnexe";
import Prestations from "../components/proprietaires/Prestations";

const Proprietaires = () => {
  window.scrollTo(0, 0);
  return (
    <div className="proprietaires">
      <IntroAnnexe annexe={annexes[0]} />
      <Prestations />
    </div>
  );
};

export default Proprietaires;
