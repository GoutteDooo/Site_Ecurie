import React from "react";
import IntroAnnexe from "../components/IntroAnnexe";
import Interested from "../components/Interested";
import ImageCard from "../components/installations/ImageCard";
import DescriptionCard from "../components/installations/DescriptionCard";
import { annexes } from "../data/annexes.json";
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
      <>
        <h1>
          12 paddocks <br /> de + de 1000 m²
          <em>Avec point d'eau</em>
        </h1>
      </>
    ),
    casiers: (
      <h1>
        Casiers Individuels de 4m³ <em>Offert avec la pension</em>
      </h1>
    ),
    boxesInt: (
      <>
        <h1>Boxes Intérieurs</h1>
        <ul>
          <li>Dans Hangar sécurisé</li>
          <li>Grand espace pour la tête</li>
          <li>Abreuvoirs antigel</li>
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
          <li>Abreuvoirs antigel</li>
          <li>12 m²</li>
        </ul>
      </>
    ),
    Solarium: (
      <>
        <h1>Solarium</h1>
        <ul>
          <li>Accélération de la récupération après l'effort</li>
          <li>Séchage rapide après le travail ou la pluie</li>
          <li>Soutien dans la rééducation post-traumatique</li>
        </ul>
      </>
    ),
    Douche: (
      <h1>
        Espace Douche{" "}
        <em style={{ fontSize: "1rem", lineHeight: "1.5rem" }}>
          Pour leur plus grand bonheur après une séance intense ou de fortes
          chaleurs
        </em>
      </h1>
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
      <DescriptionCard
        description={descriptions["Solarium"]}
        id={6}
        card={cards[10]}
      />
      <ImageCard description={descriptions["Douche"]} id={7} card={cards[11]} />
      <Interested />
    </div>
  );
};

export default Installations;
