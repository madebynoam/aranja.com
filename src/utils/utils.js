export function imageWidths(file, opts) {
  const options = Array.isArray(opts) ? { widths: opts } : opts
  const {
    widths,
    progressive,
    aspectRatio: customRatio,
    focusArea,
    format = 'jpg'
  } = options

  // Only resize png or jpeg files.
  const imageSize = file.details.image
  if (!imageSize) {
    return file.url
  }
  const imageAspect = imageSize.width / imageSize.height
  const targetAspect = customRatio || imageAspect

  if (widths.length === 0) {
    throw new Error('At least one width is required.')
  }

  return widths.map(width => {
    const args = {
      w: width.toString(),
      fm: format
    }
    if (customRatio) {
      args.h = Math.round(width / customRatio).toString()
      args.fit = 'fill'
    }
    if (progressive) {
      args.fl = 'progressive'
    }
    if (focusArea) {
      args.f = focusArea
    }
    const params = Object.keys(args)
      .map(param => `${param}=${args[param]}`)
      .join('&')

    return {
      src: `${file.url}?${params}`,
      width: width,
      height: Math.round(width / targetAspect)
    }
  })
}
