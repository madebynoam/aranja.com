import root from 'window-or-global'
import throttle from 'lodash.throttle'

export function offsetTop(el) {
  const { top } = el.getBoundingClientRect()
  return top + root.pageYOffset
}

class ParallaxService {
  constructor() {
    this.items_ = []
    this.isUpdating_ = false
    this.scrollPosition_ = 0
    this.viewHeight_ = 0
    this.setScene()

    // Prebound event handlers...
    this.onResize_ = this.onResize_.bind(this)
    this.onScroll_ = this.onScroll_.bind(this)

    // Might want to destroy hese at some point...
    if (typeof root.addEventListener === 'function') {
      root.addEventListener('resize', this.onResize_)
      root.addEventListener('scroll', throttle(this.onScroll_, 50))
    }
  }

  addItem(item) {
    this.items_.push(item)
  }

  removeItem(item) {
    this.items_ = this.items_.filter(x => x !== item)
  }

  get data() {
    return {
      scrollPosition: this.scrollPosition_,
      viewHeight: this.viewHeight_,
    }
  }

  setScene() {
    if (typeof window !== 'undefined') {
      this.viewHeight_ = root.innerHeight || document.documentElement.clientHeight
      this.scrollPosition_ = root.pageYOffset
    }
  }

  onResize_() {
    this.setScene()
    for (const item of this.items_) {
      item.cache()
    }
  }

  onScroll_() {
    if (!this.isUpdating_) {
      this.isUpdating_ = true

      requestAnimationFrame(() => {
        this.scrollPosition_ = root.pageYOffset

        for (const item of this.items_) {
          item.translate()
        }

        this.isUpdating_ = false
      })
    }
  }
}

export default new ParallaxService()
