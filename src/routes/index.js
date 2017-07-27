import React from 'react'
import Home from './home'
import CaseStudies from './casestudies'

export default [
  {
    path: '/',
    async action({ context: { api } }) {
      const [pages, services, showOffs] = await Promise.all([
        api.getEntries({ content_type: 'page' }),
        api.getEntries({ content_type: 'service' }),
        api.getEntries({ content_type: 'showOff' }),
      ])

      const content = pages.items.find(page => page.sys.id === '4TC4xZTIYokUiC2IecUOc6')

      return <Home content={content} services={services} showOffs={showOffs} />
    },
  },
  {
    path: '/casestudies',
    async action({ context: { api } }) {
      const [pages, caseStudy] = await Promise.all([
        api.getEntries({ content_type: 'page' }),
        api.getEntries({ content_type: 'caseStudy' }),
      ])

      const content = pages.items.find(page => page.sys.id === '4TC4xZTIYokUiC2IecUOc6')

      return <CaseStudies content={content} casestudies={caseStudy} />
    },
  },
  {
    path: '/*',
    action() {
      return <h1>404 Not Found</h1>
    },
  },
]
