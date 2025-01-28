import React from "react";
import Presentation from "./Presentation";
import Card from "./Card";
/**
 * Composant principal affichant le corps de l'accueil
 * @returns
 */
const Main = () => {
  return (
    <div className="main">
      <Presentation />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Main;
