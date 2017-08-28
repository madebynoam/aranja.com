import { imageWidths } from './utils'

const getImage = (asset, opts) =>
  asset &&
  asset.fields &&
  asset.fields.file &&
  imageWidths(asset.fields.file, opts)

const getImageAlt = asset => asset && asset.fields && asset.fields.title

export const formatHero = hero => ({
  hero: {
    alt: getImageAlt(hero),
    src: getImage(hero, {
      aspectRatio: 1.9 / 1,
      widths: [1280, 50, 400, 800, 1920, 3000]
    })
  }
})
