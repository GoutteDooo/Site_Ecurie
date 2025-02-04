import React from "react";
import IntroAnnexe from "../components/IntroAnnexe";
import Interested from "../components/Interested";
import { annexes } from "../data/annexes.json";
import ImageCard from "../components/installations/ImageCard";
import DescriptionCard from "../components/installations/DescriptionCard";
import { cards } from "../data/cards.json";

const Installations = () => {
  // window.scrollTo(0, 0);
  const descriptions = {
    carrière: (
      <>
        <h1>Carrière</h1>
        <ul>
          <li>30m x 55m</li>
          <li>Concept Sol Filtrage</li>
          <li>Espacements</li>
          <li>Arrosages réguliers</li>
        </ul>
      </>
    ),
    manège: (
      <>
        <h1>Manège</h1>
        <ul>
          <li>25m x 15m</li>
          <li>Concept Sol Filtrage</li>
          <li>Longe et Travail libre</li>
          <li>Arrosages réguliers</li>
        </ul>
      </>
    ),
    paddocks: (
      <h1>
        12 paddocks <br /> de + de 1000 m²
      </h1>
    ),
    casiers: <h1>Casiers Individuels de 4m3</h1>,
    boxesInt: (
      <>
        <h1>Boxes Intérieurs</h1>
        <ul>
          <li>Dans Hangar sécurisé</li>
          <li>Grand espace pour la tête</li>
          <li>12 m²</li>
        </ul>
      </>
    ),
    boxesExt: (
      <>
        <h1>Boxes Extérieurs</h1>
        <ul>
          <li>Vue panoramique sur la carrière</li>
          <li>Fenêtres Verre Securit ouvrables</li>
          <li>12 m²</li>
        </ul>
      </>
    ),
  };
  return (
    <div className="installations">
      <IntroAnnexe annexe={annexes[1]} />
      <DescriptionCard
        description={descriptions["carrière"]}
        id={0}
        card={cards[4]}
      />
      <DescriptionCard
        description={descriptions["manège"]}
        id={1}
        card={cards[5]}
      />
      <ImageCard
        description={descriptions["paddocks"]}
        id={2}
        card={cards[6]}
      />
      <DescriptionCard
        description={descriptions["boxesInt"]}
        id={3}
        card={cards[7]}
      />
      <DescriptionCard
        description={descriptions["boxesExt"]}
        id={4}
        card={cards[8]}
      />
      <ImageCard description={descriptions["casiers"]} id={5} card={cards[9]} />
      <Interested />
    </div>
  );
};

export default Installations;
