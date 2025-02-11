import React from "react";
import Bubble from "../Bubble";
import { BG_COLOR, MAIN_COLOR } from "../../utils/variables";
import ScrollArrow from "../ScrollArrow";

const Details = () => {
  const content = [
    <p>
      Boxes Pailles <b>uniquement</b>
    </p>,
    <>
      <b>2 repas de foin par jour</b>
      <p>Avec 3 repas de floconnés</p>
    </>,
    <p style={{ fontSize: "0.9rem" }}>
      Aide à la prise de médicaments & compléments alimentaires
    </p>,
    <>
      <p>Curage des boxes</p>
      <p>tout les jeudis</p>
    </>,
    <p>
      <b>Option</b> Repas en + sous devis
    </p>,
    <b style={{ fontSize: "1rem" }}>Autres formules sous devis</b>,
    <>
      <b style={{ textDecoration: "underline" }}>Tarifs Pension :</b>
      <p>290€/mois Cheval</p>
      <p>260€/mois Poney</p>
    </>,
  ];
  const tarifPension = content.length - 1; //la où se situe le tarif pension pour le mapping

  return (
    <div className="proprietaires__details" id="details">
      <h1>Les Détails d'une pension aux Écuries de la Selle :</h1>
      <div className="proprietaires__details--bubbles">
        {content.map((c, i) => (
          <Bubble
            bgColor={i < tarifPension ? MAIN_COLOR : BG_COLOR}
            textColor={i < tarifPension ? BG_COLOR : MAIN_COLOR}
            content={c}
            key={i}
            size={i === tarifPension ? 110 : 70}
          />
        ))}
      </div>
      <ScrollArrow size={60} scrolling={3.37} />
    </div>
  );
};

export default Details;
