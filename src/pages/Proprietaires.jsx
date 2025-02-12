import React from "react";
import IntroAnnexe from "../components/IntroAnnexe";
import Prestations from "../components/proprietaires/Prestations";
import Details from "../components/proprietaires/Details";
import DecorImage from "../components/DecorImage";
import Proposition from "../components/proprietaires/Proposition";
import Interested from "../components/Interested";
import { annexes } from "../data/annexes.jsx";

const Proprietaires = () => {
  window.scrollTo(0, 0);
  return (
    <div className="proprietaires">
      <IntroAnnexe annexe={annexes[0]} />
      <Prestations />
      <DecorImage imgLink={"proprio_1.jpg"} />
      <Details />
      <Proposition />
      <DecorImage imgLink={"/proprio_2.jpg"} size={"300px"} />
      <Interested />
    </div>
  );
};

export default Proprietaires;
