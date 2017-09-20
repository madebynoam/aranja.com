import React from 'react'
import Contact from './Contact'
// import { formatHero } from '../../utils/formatters'

export default {
  path: '/contact',

  action({ context: { api } }) {
    // const [pages, collage] = await Promise.all([
    //   api.getEntries({ content_type: 'page' }),
    //   api.getEntries({ content_type: 'collage' }),
    // ])

    // const content = pages.items.find(
    //   page => page.sys.id === '3X6iiQT9ZKYyIkgaIWgo6A'
    // )
    return <Contact />
  },
}
