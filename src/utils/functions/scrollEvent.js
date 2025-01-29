/**
 * Déclenche le scroll à scrolling * vh
 * @param {number} scrolling
 */
export default function scrollEvent(scrolling) {
  const target = (window.innerHeight - 140) * scrolling;
  window.scrollTo({
    top: target,
  });
}
