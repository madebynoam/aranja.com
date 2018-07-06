import { Node, lastValueSymbol } from './nodes'
import fastdom from 'fastdom'

const eventHandler = (onChange, event) => {
  window.addEventListener(event, onChange)
  return () => {
    window.removeEventListener(event, onChange)
  }
}

const rafHandler = onChange => {
  let unsubscribed = false
  fastdom.measure(frame)

  function frame() {
    // Stop if unsubscribed.
    if (unsubscribed) {
      return
    }

    // To schedule a measure in the next frame, we need to be
    // in the mutation phase.
    fastdom.mutate(request)

    // Invalidate subscribed observers.
    onChange()
  }

  function request() {
    fastdom.measure(frame)
  }

  return () => {
    unsubscribed = true
  }
}

const intervalHandler = (ms, onChange) => {
  const intervalId = setInterval(onChange, ms)
  return () => {
    clearInterval(intervalId)
  }
}

const scrollYHandler = () => window.pageYOffset

const scrollXHandler = () => window.pageXOffset

const viewportHeightHandler = () => window.innerHeight

const viewportWidthHandler = () => window.innerWidth

const elementWidthHandler = element => element.offsetWidth

const elementHeightHandler = element => element.offsetHeight

const viewportRatioHandler = (ratio, scroll, size) => scroll + ratio * size

const elementXHandler = (ratio, offset, size) => offset.left + ratio * size

const elementYHandler = (ratio, offset, size) => offset.top + ratio * size

const rootElementHandler = context => context.rootElement

const elementHandler = (rootElement, selector) =>
  rootElement.querySelector(selector)

const elementOffsetHandler = element => {
  let x = 0
  let y = 0
  while (element && !isNaN(element.offsetLeft) && !isNaN(element.offsetTop)) {
    x += element.offsetLeft + element.clientLeft
    y += element.offsetTop + element.clientTop

    if (element === document.body) {
      x -=
        window.pageXOffset ||
        document.documentElement.scrollLeft ||
        document.body.scrollLeft ||
        0
      y -=
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0
    } else {
      x -= element.scrollLeft
      y -= element.scrollTop
    }

    element = element.offsetParent
  }
  return { top: y + window.pageYOffset, left: x + window.pageXOffset }
}

const transformedBoundsHandler = element => {
  const rect = element.getBoundingClientRect()
  return {
    x: rect.left + window.pageXOffset,
    y: rect.top + window.pageYOffset,
    width: rect.width,
    height: rect.height,
  }
}

const createNodeFactory = type => (...deps) => {
  const func = deps.pop()
  return new Node(func, deps, type)
}

export const subscribe = createNodeFactory('event')

export const context = createNodeFactory('context')

export const observe = createNodeFactory('observe')

export const lastValue = () => lastValueSymbol

export const resizeEvent = () => subscribe('resize', eventHandler)

export const scrollEvent = () => subscribe('scroll', eventHandler)

export const event = eventName => subscribe(eventName, eventHandler)

export const rafEvent = () => subscribe(rafHandler)

export const intervalEvent = ms => subscribe(ms, intervalHandler)

export const scrollY = () => observe(scrollEvent(), scrollYHandler)

export const scrollX = () => observe(scrollEvent(), scrollXHandler)

export const viewportHeight = () =>
  observe(resizeEvent(), viewportHeightHandler)

export const viewportWidth = () => observe(resizeEvent(), viewportWidthHandler)

export const viewportY = (ratio = 0) =>
  ratio
    ? observe(ratio, scrollY(), viewportHeight(), viewportRatioHandler)
    : scrollY()

export const viewportX = (ratio = 0) =>
  ratio
    ? observe(ratio, scrollX(), viewportWidth(), viewportRatioHandler)
    : scrollX()

export const rootElement = () => context(rootElementHandler)

export const element = (selector = null, deps = []) =>
  selector
    ? observe(rootElement(), selector, ...deps, elementHandler)
    : rootElement()

export const globalElement = (selector, deps = []) =>
  observe(...deps, () => document.querySelector(selector))

export const elementOffset = (
  element = rootElement(),
  deps = [resizeEvent()]
) => observe(element, ...deps, elementOffsetHandler)

export const elementHeight = (
  element = rootElement(),
  deps = [resizeEvent()]
) => observe(element, ...deps, elementHeightHandler)

export const elementWidth = (element = rootElement(), deps = [resizeEvent()]) =>
  observe(element, ...deps, elementWidthHandler)

export const elementY = (
  ratio = 0,
  element = rootElement(),
  deps = [resizeEvent()]
) =>
  observe(
    ratio,
    elementOffset(element, deps),
    elementHeight(element, deps),
    elementYHandler
  )

export const elementX = (
  ratio = 0,
  element = rootElement(),
  deps = [resizeEvent()]
) =>
  observe(
    ratio,
    elementOffset(element, deps),
    elementWidth(element, deps),
    elementXHandler
  )

export const transformedBounds = (
  element = rootElement(),
  deps = [resizeEvent()]
) => observe(element, ...deps, transformedBoundsHandler)

export const getElementOffset = elementOffsetHandler
