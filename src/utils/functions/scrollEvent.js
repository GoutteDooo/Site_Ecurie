/**
 * Déclenche un scroll avec une valeur définie
 * @param {number} scrollingPx 1 = 100vh
 * @param {number} offset 100 = 100vh
 */
export default function scrollEvent(scrollingPx = null, anchor = null) {
  if (scrollingPx) {
    const offset = window.innerWidth < 1280 ? 0 : 100;
    const target = (window.innerHeight - offset) * scrollingPx;
    window.scrollTo({
      top: target,
    });
  } else if (anchor) {
    const target = document.getElementById(anchor).offsetTop;
    window.scrollTo({
      top: target,
    });
  }
}
