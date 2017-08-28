import React from 'react'
import About from './About'
import { formatHero } from '../../utils/formatters'

export default {
  path: '/about',

  async action({ context: { api } }) {
    const [pages] = await Promise.all([
      api.getEntries({ content_type: 'page' }),
    ])

    const content = pages.items.find(
      page => page.sys.id === '3X6iiQT9ZKYyIkgaIWgo6A'
    )
    return <About hero={formatHero(content.fields.hero)} />
  },
}
