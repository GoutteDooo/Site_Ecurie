import React from "react";
import { annexes } from "../data/annexes.json";
import IntroAnnexe from "../components/IntroAnnexe";
import Prestations from "../components/proprietaires/Prestations";
import Details from "../components/proprietaires/Details";
import DecorImage from "../components/DecorImage";
import Proposition from "../components/proprietaires/Proposition";

const Proprietaires = () => {
  window.scrollTo(0, 0);
  return (
    <div className="proprietaires">
      <IntroAnnexe annexe={annexes[0]} />
      <Prestations />
      <DecorImage imgLink={"/assets/images/decor_image/proprio_1.jpg"} />
      <Details />
      <Proposition />
    </div>
  );
};

export default Proprietaires;
