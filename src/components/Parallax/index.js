import React from "react";

function offsetTop(el) {
  const { top } = el.getBoundingClientRect();
  return top + window.pageYOffset;
}

let isUpdating = false;
let lastScrollPosition = -1;
let scrollPosition;
let viewHeight;

const items = [];

const onResize = () => {
  setScene();
  items.forEach(item => item.cache());
};

const setScene = () => {
  viewHeight = window.innerHeight || document.documentElement.clientHeight;
  scrollPosition = window.pageYOffset;
};

const onScroll = () => {
  scrollPosition = window.pageYOffset;

  if (scrollPosition === lastScrollPosition) {
    return;
  }

  lastScrollPosition = scrollPosition;

  if (!isUpdating) {
    isUpdating = true;

    requestAnimationFrame(() => {
      items.forEach(item => item.translate());
      isUpdating = false;
    });
  }
};

window.addEventListener("resize", onResize, false);
window.addEventListener("scroll", onScroll, false);

class Parallax extends React.Component {
  componentDidMount() {
    items.push(this);
    this.cache();
  }

  translate() {
    const viewBottom = scrollPosition + viewHeight;
    const ratio = (this.top - viewBottom) / (scrollPosition - viewBottom);

    this.element_.style.setProperty("--parallax", ratio);
  }

  cache() {
    this.top = offsetTop(this.element_);

    if (scrollPosition === undefined) {
      setScene();
    }

    this.translate();
  }

  render() {
    return (
      <div
        className="Service-imageWrapper"
        ref={element => {
          this.element_ = element;
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Parallax;
