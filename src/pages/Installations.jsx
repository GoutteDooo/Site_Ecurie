import React from "react";
import IntroAnnexe from "../components/IntroAnnexe";
import Interested from "../components/Interested";
import ImageCard from "../components/installations/ImageCard";
import DescriptionCard from "../components/installations/DescriptionCard";
import EnPlus from "../components/installations/EnPlus";
//datas
import { annexes } from "../data/annexes.json";
import { cards } from "../data/cards.json";
import { descriptions } from "../data/Installations_data";

const Installations = () => {
  window.scrollTo(0, 0);
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
      <EnPlus />
      <Interested />
    </div>
  );
};

export default Installations;
