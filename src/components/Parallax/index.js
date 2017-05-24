import React from "react";

function offsetTop(el) {
  const { top } = el.getBoundingClientRect();
  return top + window.pageYOffset;
}

let isUpdating = false;
let lastScrollPosition = -1;
let scrollPosition;
let viewHeight;

class Parallax extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      didMount: false,
    };

    Parallax.items.push(this);
  }

  componentDidMount() {
    window.addEventListener("resize", Parallax.cache, false);
    window.addEventListener("scroll", Parallax.onScroll, false);

    this.setState({
      didMount: true,
    });

    this.cache();
  }

  translate() {
    console.log(this.element);
    if (!this.state.didMount) return;
    const viewBottom = scrollPosition + viewHeight;
    const ratio = (this.top - viewBottom) / (scrollPosition - viewBottom);
    this.element.setProperty("--parallax", ratio);
  }

  cache() {
    if (!this.state.didMount) return;
    this.top = offsetTop(this.element);

    if (scrollPosition === undefined) {
      Parallax.setScene();
    }

    this.translate();
  }

  render() {
    return (
      <div
        className="Service-imageWrapper"
        ref={element => {
          this.element = element;
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

Parallax.items = [];

Parallax.cache = () => {
  Parallax.setScene();
  Parallax.items.forEach(item => item.cache());
};

Parallax.setScene = () => {
  viewHeight = window.innerHeight || document.documentElement.clientHeight;
  scrollPosition = window.pageYOffset;
};

Parallax.onAnimation = () => {
  for (let index = 0; index < Parallax.items.length; index++) {
    Parallax.items[index].translate();
  }

  isUpdating = false;
};

Parallax.onScroll = () => {
  scrollPosition = window.pageYOffset;

  if (scrollPosition === lastScrollPosition) {
    return;
  }

  lastScrollPosition = scrollPosition;

  if (!isUpdating) {
    requestAnimationFrame(Parallax.onAnimation);
    isUpdating = true;
  }
};

export default Parallax;
