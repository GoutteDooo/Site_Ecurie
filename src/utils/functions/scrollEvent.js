/**
 * Déclenche le scroll à scrolling * vh
 * @param {number} scrolling
 */
export default function scrollEvent(scrolling) {
  const offset = window.innerWidth < 1280 ? 140 : 170;
  const target = (window.innerHeight - offset) * scrolling;
  window.scrollTo({
    top: target,
  });
}
