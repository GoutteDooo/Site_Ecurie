import React from "react";
import Presentation from "./Presentation";
import Card from "./Card";
import { cards } from "../../data/cards.json";
import AllInstallations from "./AllInstallations";
import Horaires from "./Horaires";
import StableLife from "./StableLife";
/**
 * Composant principal affichant le corps de l'accueil
 * @returns
 */
const Main = () => {
  return (
    <div className="main">
      <Presentation />
      <Card card={cards[0]} />
      <Card card={cards[1]} />
      <Card card={cards[2]} />
      <AllInstallations />
      <Horaires />
      <StableLife card={cards[3]} />
    </div>
  );
};

export default Main;
