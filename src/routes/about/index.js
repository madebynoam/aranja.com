import React from 'react'
import Team from './Team'
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
    return <Team hero={formatHero(content.fields.hero)} />
  },
}
