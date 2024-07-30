document.addEventListener("scroll", () => {
  let body = document.querySelector("body");
  let section = document.querySelectorAll("section");
  let scrollPosition = window.scrollY;

  body.style.backgroundPosition = `0% ${scrollPosition}px`;

  section.forEach((item) => {
    let start = parseInt(item.getAttribute("data-start"));
    let end = parseInt(item.getAttribute("data-end"));

    if (scrollPosition >= start && scrollPosition <= end) {
      let progress = (scrollPosition - start) / (end - start);
      let clipPathSize = Math.max(0, 1000 * progress);

      item.style.clipPath = `circle(${clipPathSize}px at center)`;
    } else if (scrollPosition < start) {
      item.style.clipPath = `circle(0px at center)`;
    } else if (scrollPosition > end) {
      item.style.clipPath = `circle(1000px at center)`;
    }
  });
});
