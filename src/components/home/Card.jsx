import React from "react";

/**
 * Affiche les différentes Installations de l'Ecurie
 * @param {Object} card
 * card.id : String
 * card.carousel : Number (nombre d'images dans le carousel)
 * card.title : String
 * card.description : Array de Strings
 * @returns
 */
const Card = ({ card }) => {
  console.log(card);

  return (
    <div className="main__card">
      <div className="main__card__carousel--viewport">
        <div className="main__card__carousel--carousel">
          {card.carousel.map((item, index) => (
            <div className="main__card__carousel--item" key={index}>
              <img
                src={`/assets/images/accueil/carousel/${item}.jpg`}
                alt="carousel"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="main__card__content">
        <h1>Boxes Ext</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatibus, doloremque, voluptas, quia, quos, aspernatur, fugiat
          doloribus, voluptatem, dolores, quisquam, quod, asperiores
          consequuntur, voluptatum, doloremque, quibusdam, quos, aspernatur,
          fugiat doloribus, voluptatem, dolores, quisquam, quod, asperiores
          consequuntur, voluptatum, doloremque, quibusdam, quos, aspernatur,
          fugiat doloribus, voluptatem, dolores, quisquam, quod, asperiores
          consectetur, voluptatum, doloremque, quibusdam, quos, aspernatur,
          fugiat doloribus, voluptatem, dolores, quisquam, quod, asperiores
          quia, voluptatibus, doloremque
        </p>
      </div>
    </div>
  );
};

export default Card;
