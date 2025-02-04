import React, { useEffect } from "react";
import ScrollArrow from "../ScrollArrow";

const Presentation = () => {
  const [windowSize, setWindowSize] = React.useState(window.innerHeight);
  console.log(windowSize);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize(window.innerHeight);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setWindowSize(window.innerHeight);
      });
    };
  }, []);

  const setFontSize = () => {
    if (windowSize > 900) {
      return "0.95rem";
    }
    if (windowSize > 850) {
      return "0.9rem";
    }
    if (windowSize > 800) {
      return "0.85rem";
    }
    return "0.8rem";
  };

  return (
    <div className="main__presentation" style={{ fontSize: setFontSize() }}>
      <h1>Les Ecuries de la Selle</h1>
      <p>
        Depuis 2021, Les Écuries de la Selle accueillent les cavaliers
        propriétaires dans un cadre familial, chaleureux et convivial au cœur de
        Saulzoir.
      </p>
      <p>
        Dédiée au bien-être des chevaux et à l'accompagnement des cavaliers, nos
        écuries proposent des installations modernes et un service de qualité
        pour répondre aux besoins de chaque propriétaire.
      </p>
      <p>
        De plus, avec des propriétaires résidant sur place, nos écuries assurent
        une présence permanente et une vigilance constante pour répondre à vos
        attentes en matière de sécurité.
      </p>
      <p>
        Rejoignez-nous et partagez votre passion dans une ambiance à la fois
        sereine et dynamique !
      </p>
      <ScrollArrow size={70} />
    </div>
  );
};

export default Presentation;
