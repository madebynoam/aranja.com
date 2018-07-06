let supportsWebP = false
const STORAGE_KEY = 'supportsWebP'

function checkWebPSupport(callback) {
  const stored = localStorage && localStorage.getItem(STORAGE_KEY)
  if (stored) {
    return callback(stored === '1')
  }

  const testImage = 'UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA'
  const img = new Image()
  img.onload = function() {
    const result = img.width > 0 && img.height > 0
    localStorage.setItem(STORAGE_KEY, result ? '1' : '0')
    callback(result)
  }
  img.onerror = function() {
    localStorage.setItem(STORAGE_KEY, '0')
    callback(false)
  }
  img.src = 'data:image/webp;base64,' + testImage
}

if (typeof window !== 'undefined') {
  checkWebPSupport(supports => {
    supportsWebP = supports
  })
}

export default supportsWebP
