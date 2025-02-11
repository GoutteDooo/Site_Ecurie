import React, { useState } from "react";

/**
 * Affiche le Carousel avec la carte passée en paramètre
 * @param {JSON} card (NECESSAIRE) données contenues dans /src/data/cards.json
 * @param {boolean} compteur affiche le compteur de l'image
 * @param {number} compteurSize Définit la taille du compteur
 * @returns
 */
const Carousel = ({
  card,
  compteur = card.carousel > 1 ? true : false,
  compteurSize = 70,
}) => {
  const [slideX, setSlideX] = useState(-100);
  const [carouselEnding, setCarouselEnding] = useState(false);
  const [activeFilterButton, setActiveFilterButton] = useState(false);
  const numberImages = card.carousel + 2;
  const handleSlide = (direction) => {
    const newX = slideX + direction;
    const indexes = numberImages;
    setCarouselEnding(false);
    if (newX === 0) {
      setSlideX(0);
      setTimeout(() => {
        setSlideX(-(indexes - 2) * 100);
        setCarouselEnding(true);
      }, 300);
    } else if (newX === -(indexes - 1) * 100) {
      //si newX atteint l'index de la dernière image
      setSlideX((prevState) => prevState + direction);
      setTimeout(() => {
        setSlideX(-100);
        setCarouselEnding(true);
      }, 300);
    } else {
      setSlideX((prevState) => prevState + direction);
    }
    //Bouton "DECOUVRIR TOUTES NOS INSTALLATIONS"
    const actualIndex = -newX / 100;
    isFilter(actualIndex)
      ? setActiveFilterButton(true)
      : setActiveFilterButton(false);
  };

  const isFilter = (index) =>
    (numberImages - 2 === index && card.filter) || (index === 0 && card.filter);

  const calculatePictureIndex = () => {
    const indexParsed = -(slideX / 100);
    if (slideX === 0) {
      return numberImages - 2;
    } else if (indexParsed === numberImages - 1) {
      return 1;
    } else {
      return indexParsed;
    }
  };

  return (
    <div className="carousel--viewport">
      {compteur && (
        <>
          <div
            style={activeFilterButton ? { width: "20vw" } : null}
            className="carousel--arrow"
            onClick={() => handleSlide(100)}
          ></div>
          <div
            style={activeFilterButton ? { width: "20vw" } : null}
            className="carousel--arrow"
            onClick={() => handleSlide(-100)}
          ></div>
        </>
      )}
      <div
        className="carousel--slides"
        style={{
          transform: `translateX(${slideX / numberImages}%)`,
          width: `calc(100% * ${numberImages})`,
          transition: `all ${carouselEnding ? "0s" : "0.3s"} ease-in-out`,
        }}
      >
        {[...Array(numberImages).keys()].map((_, index) => (
          <div
            className={`carousel--item ${isFilter(index) ? "filter" : ""}`}
            style={{
              backgroundImage: `url(${card.path}${card.id}_${
                isFilter(index)
                  ? "filter"
                  : index == 0
                  ? card.carousel - 1
                  : index == numberImages - 1
                  ? 0
                  : index - 1
              }.jpg)`,
            }}
            key={index}
          >
            {isFilter(index) && (
              <button>DÉCOUVRIR TOUTES NOS INSTALLATIONS</button>
            )}
          </div>
        ))}
      </div>
      {compteur && (
        <div
          className="carousel--counter"
          style={{ transform: `translateX(-50%) scale(${compteurSize / 100})` }}
        >
          <p>
            {calculatePictureIndex()} / {card.carousel}
          </p>
        </div>
      )}
    </div>
  );
};

export default Carousel;
