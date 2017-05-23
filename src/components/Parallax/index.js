function offsetTop(el) {
  const { top } = el.getBoundingClientRect();
  return top + window.pageYOffset;
}

class Parallax {
  static init() {
    if (!document) return;
    var h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight",
      scroll;

    document.addEventListener("scroll", function() {
      scroll = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight);
      h.style.setProperty("--parallax", scroll);

      if (scroll > 0.007) {
        h.classList.add("is-scrolled");
      } else {
        h.classList.remove("is-scrolled");
      }
    });
  }
}

export default Parallax;
