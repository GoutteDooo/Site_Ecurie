/**
 * Déclenche un scroll avec une valeur définie
 * @param {number} scrolling 1 = 100vh, string = anchor
 */
export default function scrollEvent(scrolling = null) {
  if (typeof scrolling === "number") {
    const offset = window.innerWidth < 1280 ? -70 : 100;
    const target = (window.innerHeight - offset) * scrolling;
    window.scrollTo({
      top: target,
    });
  } else if (typeof scrolling === "string") {
    const anchor = scrolling;
    const target = document.getElementById(anchor).offsetTop;
    window.scrollTo({
      top: target,
    });
  }
}
