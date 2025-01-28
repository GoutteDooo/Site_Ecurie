import React from "react";
import Presentation from "./Presentation";
import Card from "./Card";
import { cards } from "../../data/cards.json";
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
    </div>
  );
};

export default Main;
