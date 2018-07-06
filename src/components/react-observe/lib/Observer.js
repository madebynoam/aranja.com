import fastdom from 'fastdom'
import { update, resolve, getInstance } from './nodes'

class Observer {
  constructor(value, options = {}) {
    this.onChange = options.onChange
    this.root = null
    this.queued = false
    this.value = undefined
    this.context = options.context || {}
    this.debug = options.debug

    this.update(value)
  }

  dispose() {
    this.onChange = null
    this.update(undefined)
  }

  _triggerChange = () => {
    if (this.onChange) {
      this.onChange(this.value)
    }
  }

  printDebug() {
    if (this.debug) {
      const instance = getInstance(this.root)
      if (instance) {
        const table = instance.debug({})
        console.table(table, ['value'])
      }
    }
  }

  resolve = () => {
    this.queued = false
    const oldValue = this.value
    this.value = resolve(this.root)

    if (oldValue !== this.value) {
      this.printDebug()
      fastdom.mutate(this._triggerChange)
    }
  }

  triggerResolve = () => {
    if (this.queued) {
      return
    }
    this.queued = true
    fastdom.measure(this.resolve)
  }

  update(value) {
    const oldValue = this.value
    this.root = update(value, this.root, this)
    this.value = resolve(this.root)
    this.printDebug()

    if (this.onChange && this.value !== oldValue) {
      this.onChange(this.value)
    }
  }
}

export default Observer
