import queryString from 'query-string'
import supportsWebP from './supportsWebP'

const pixelRatio =
  typeof window === 'undefined' ? 1 : window.devicePixelRatio || 1

export const getImageUrl = (
  file,
  { width, height, format, exact, quality, forceProtocol }
) => {
  if (!file || !file.fields) {
    return ''
  }
  file = file.fields.file
  let url = file.url

  if (format === undefined) {
    format = supportsWebP ? 'webp' : undefined
  }
  if (quality === undefined) {
    quality = pixelRatio > 1 ? 80 : 90
  }
  if (forceProtocol && url.startsWith('//')) {
    url = `https:${url}`
  }

  const { width: imageWidth, height: imageHeight } = file.details.image
  if (exact) {
    // Don't change width or height.
  } else if (width && height) {
    // Crop the image, round to the next 100 pixels, keep aspect ratio for rects larger than image.
    const imageRatio = imageWidth / imageHeight
    const ratio = width / height

    if (imageRatio > ratio) {
      height = Math.min(
        imageHeight,
        Math.round(pixelRatio * height / 100) * 100
      )
      width = Math.round(height * ratio / 100) * 100
    } else {
      width = Math.min(imageWidth, Math.round(pixelRatio * width / 100) * 100)
      height = Math.round(width / ratio / 100) * 100
    }
  } else {
    // Just round to next 100 pixels.
    width = width && Math.round(width * pixelRatio / 100) * 100
    height = height && Math.round(height * pixelRatio / 100) * 100
  }

  const sizeProps = queryString.stringify({
    w: width ? Math.min(imageWidth, width) : undefined,
    h: height ? Math.min(imageHeight, height) : undefined,
    fit: width && height ? 'fill' : undefined,
    fm: format || undefined,
    q: quality || undefined,
  })
  return `${url}?${sizeProps}`
}

export default getImageUrl
