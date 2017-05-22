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
      doc = document.documentElement,
      scroll;

    document.addEventListener("scroll", function() {
      scroll = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight);
      doc.style.setProperty("--parallax", scroll);
    });
  }
}

export default Parallax;
