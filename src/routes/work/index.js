import React from 'react'
import Overview from './Overview'
import CaseStudy from './CaseStudy'

export default {
  path: '/work',

  children: [
    {
      path: '/',
      async action({ context: { api } }) {
        const [pages, caseStudy] = await Promise.all([
          api.getEntries({ content_type: 'page' }),
          api.getEntries({ content_type: 'caseStudy' }),
        ])

        const content = pages.items.find(
          page => page.sys.id === '4TC4xZTIYokUiC2IecUOc6'
        )

        return <Overview content={content} casestudies={caseStudy} />
      }
    },
    {
      path: '/:slug',
      async action({ params, context: { api }}) {
        const [pages, caseStudies] = await Promise.all([
          api.getEntries({ content_type: 'page' }),
          api.getEntries({
            content_type: 'caseStudy',
            'fields.slug': params.slug
          }),
        ])

        const content = pages.items.find(
          page => page.sys.id === '4TC4xZTIYokUiC2IecUOc6'
        )

        return <CaseStudy content={content} caseStudy={caseStudies.items[0]} />
      }
    }
  ]
}
