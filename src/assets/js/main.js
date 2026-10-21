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
    if (slides.length > 1) {
      let current = 0;
      const dots = document.createElement("ul");
      dots.className = "slideshow-dots";
      const buttons = slides.map((_, i) => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.type = "button";
        button.setAttribute("aria-label", `Show slide ${i + 1}`);
        button.addEventListener("click", () => { show(i); restart(); });
        li.append(button);
        dots.append(li);
        return button;
      });
      slideshow.append(dots);

      const show = (index) => {
        slides[current].hidden = true;
        buttons[current].removeAttribute("aria-current");
        current = index;
        slides[current].hidden = false;
        buttons[current].setAttribute("aria-current", "true");
      };
      show(0);

      let timer;
      const restart = () => {
        clearInterval(timer);
        if (!reduceMotion) timer = setInterval(() => show((current + 1) % slides.length), 5000);
      };
      restart();
    }
  }
});
