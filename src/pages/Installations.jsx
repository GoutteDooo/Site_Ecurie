import React from "react";
import IntroAnnexe from "../components/IntroAnnexe";
import Interested from "../components/Interested";
import { annexes } from "../data/annexes.json";
import ImageCard from "../components/installations/ImageCard";
import DescriptionCard from "../components/installations/DescriptionCard";
import { cards } from "../data/cards.json";

const Installations = () => {
  window.scrollTo(0, 0);
  const titles = [
    <h1>
      Une carrière de <br /> 55m x 30m
    </h1>,
    "Un manège de 25m x 15m",
    "12 paddocks de plus de 1000 m² de terrain",
  ];
  const descriptions = [];
  return (
    <div className="installations">
      <IntroAnnexe annexe={annexes[1]} />
      <ImageCard imgLink="test.jpg" title={titles[0]} id={0} card={cards[4]} />
      <DescriptionCard
        imgLink="/assets/images/installations/test.jpg"
        title={titles[0]}
        description={descriptions[0]}
      />
      <Interested />
    </div>
  );
};

export default Installations;
