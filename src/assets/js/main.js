document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.getElementById("top-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  const slideshow = document.querySelector("[data-slideshow]");
  if (slideshow) {
    const slides = [...slideshow.querySelectorAll("img")];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (slides.length > 1 && !reduceMotion) {
      let current = 0;
      setInterval(() => {
        slides[current].hidden = true;
        current = (current + 1) % slides.length;
        slides[current].hidden = false;
      }, 5000);
    }
  }
});
