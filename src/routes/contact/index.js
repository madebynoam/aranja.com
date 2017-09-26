import React from 'react'
import Contact from './Contact'
import { formatHero } from '../../utils/formatters'

export default {
  path: '/contact',

  async action({ context: { api } }) {
    const [pages] = await Promise.all([
      api.getEntries({ content_type: 'page' }),
    ])

    const content = pages.items.find(
      page => page.sys.id === '4R48MvJpoccAgIsKCu02GO'
    )
    return <Contact content={content} hero={formatHero(content.fields.hero)}/>
  },
}
