import scrollEvent from "../utils/functions/scrollEvent";

/**
 * Après coup, je me suis rendu compte que je me suis trop pris la tête à vouloir faire des objets json.
 * J'aurais pu simplement fonctionner comme ça, avec un array comprenant du JSX.
 * C'est bcp plus simple, et facile à manipuler.
 */
export const annexes = [
  {
    id: 1,
    title: <h1>Écurie de Propriétaires</h1>,
    description: (
      <>
        <p>
          Les Écuries de la Selle proposent des pensions pour chevaux. Lorsque
          votre cheval est en pension chez nous, vous bénéficiez d'avantages que
          vous pouvez découvrir ci-dessous.
        </p>
        <button onClick={() => scrollEvent(1)}>DÉCOUVRIR</button>
      </>
    ),
    videoLink: "proprietaires",
    name: "proprietaires",
  },
  {
    id: 2,
    title: <h1>Les Installations de l'Écurie</h1>,
    description: (
      <p>
        Les Écuries de la Selle ont plusieurs installations à votre disposition,
        dont un <b>manège couvert</b>, une <b>carrière</b> en parfaite
        condition, et six <b>grands paddocks</b> offrant liberté et détente à
        vos chevaux. Chaque cavalier bénéficie d'un <b>casier individuel</b>{" "}
        ainsi que d'
        <b>équipements</b> adaptés au travail du cheval. Et ce n’est pas tout –
        d’autres aménagements vous attendent tout au long de votre découverte en
        explorant notre page.
      </p>
    ),
    videoLink: "installations",
    name: "installations",
  },
  {
    id: 3,
    title: <h1>Cours Individuels & Collectifs</h1>,
    description: (
      <p>
        Les Écuries de la Selle proposent des cours <b>classiques</b> et{" "}
        <b>éthologiques</b> pour les cavaliers. Vous pouvez choisir entre un
        cours individuel ou un cours collectif. Ceux-ci sont adaptés à vos
        besoins et à vos compétences.
      </p>
    ),
    imageLink: "cours",
    name: "cours",
  },
];
