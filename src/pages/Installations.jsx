import React from "react";
import IntroAnnexe from "../components/IntroAnnexe";
import Interested from "../components/Interested";
import { annexes } from "../data/annexes.json";
import ImageCard from "../components/installations/ImageCard";
import DescriptionCard from "../components/installations/DescriptionCard";
import { cards } from "../data/cards.json";

const Installations = () => {
  // window.scrollTo(0, 0);
  const imageCardDesc = [
    <h1>
      Une carrière de <br /> 55m x 30m <br /> <em>Filtrage Concept Sol</em>
    </h1>,
    <h1>Un manège de 25m x 15m</h1>,
    <h1>
      12 paddocks <br /> de + de 1000 m²
    </h1>,
    <h1>Casiers Individuels de 4m3</h1>,
  ];
  const descCardDesc = [
    <>
      <h1>Boxes Intérieurs</h1>
      <ul>
        <li>Dans Hangar sécurisé</li>
        <li>Grand espace pour la tête</li>
        <li>12 m²</li>
      </ul>
    </>,
    <>
      <h1>Boxes Extérieurs</h1>
      <ul>
        <li>Vue panoramique sur la carrière</li>
        <li>Fenêtres Verre Securit ouvrables</li>
        <li>12 m²</li>
      </ul>
    </>,
  ];
  return (
    <div className="installations">
      <IntroAnnexe annexe={annexes[1]} />
      <ImageCard description={imageCardDesc[0]} id={0} card={cards[4]} />
      <ImageCard description={imageCardDesc[1]} id={1} card={cards[5]} />
      <ImageCard description={imageCardDesc[2]} id={2} card={cards[6]} />
      <DescriptionCard description={descCardDesc[0]} id={3} card={cards[7]} />
      <DescriptionCard description={descCardDesc[1]} id={4} card={cards[8]} />
      <ImageCard description={imageCardDesc[3]} id={5} card={cards[9]} />
      <Interested />
    </div>
  );
};

export default Installations;
