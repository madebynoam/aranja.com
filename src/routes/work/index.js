import React from 'react'
import Overview from './Overview'
import CaseStudy from './CaseStudy'
import { formatHero } from '../../utils/formatters'

// Todo: Get content from case studies ID
const ID = "8yAcPh4Z3y6UCi0acsUu4"

export default {
  path: '/work',

  children: [
    {
      path: '/',
      async action({ context: { api } }) {
        const [pages, caseStudy] = await Promise.all([
          api.getEntries({ content_type: 'page' }),
          api.getEntries({ content_type: 'caseStudy', include: 2 }),
        ])

        const content = pages.items.find(
          page => page.sys.id === ID
        )
        
        return <Overview content={content} hero={formatHero(content.fields.hero)} casestudies={caseStudy} />
      }
    },
    {
      path: '/:slug',
      async action({ params, context: { api }}) {
        const [pages, caseStudy, caseStudies] = await Promise.all([
          api.getEntries({ content_type: 'page' }),
          api.getEntries({
            content_type: 'caseStudy',
            'fields.slug': params.slug,
            include: 2,
          }),
          api.getEntries({ content_type: 'caseStudy', include: 2 }),
        ])

        const content = pages.items.find(
          page => page.sys.id === ID
        )


        return <CaseStudy content={content} hero={formatHero(content.fields.hero)} caseStudy={caseStudy.items[0]} caseStudies={caseStudies} />
      }
    }
  ]
}
