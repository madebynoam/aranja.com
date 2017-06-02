export function offsetTop(el) {
  const { top } = el.getBoundingClientRect();
  return top + window.pageYOffset;
}

class ParallaxService {
  constructor() {
    this.items_ = [];
    this.isUpdating_ = false;
    this.lastScrollPosition_ = -1;
    this.scrollPosition_;
    this.viewHeight_;
    this.setScene();

    // Prebound event handlers...
    this.onResize_ = this.onResize_.bind(this);
    this.onScroll_ = this.onScroll_.bind(this);

    // Might want to destroy hese at some point...
    window.addEventListener("resize", this.onResize_);
    window.addEventListener("scroll", this.onScroll_);
  }

  addItem(item) {
    this.items_.push(item);
  }

  get data() {
    return {
      lastScrollPosition: this.lastScrollPosition_,
      scrollPosition: this.scrollPosition_,
      viewHeight: this.viewHeight_
    };
  }

  setScene() {
    this.viewHeight_ =
      window.innerHeight || document.documentElement.clientHeight;
    this.scrollPosition_ = window.pageYOffset;
  }

  onResize_() {
    this.setScene();
    for (const item of this.items_) {
      item.cache();
    }
  }

  onScroll_() {
    this.scrollPosition_ = window.pageYOffset;

    if (this.scrollPosition_ === this.lastScrollPosition_) {
      return;
    }

    this.lastScrollPosition_ = this.scrollPosition_;

    if (!this.isUpdating_) {
      this.isUpdating_ = true;

      requestAnimationFrame(() => {
        for (const item of this.items_) {
          item.translate();
        }

        this.isUpdating_ = false;
      });
    }
  }
}

export default new ParallaxService();
