/**
 * Fonction qui permet de mettre un texte sur plusieurs lignes pour chaque "\n"
 * @param {string} text texte à mettre sur plusieurs lignes
 */

export const breakLines = (text) => {
  return text.split("/br").map((line, i) => <p key={i}>{line}</p>);
};
