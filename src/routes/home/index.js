import React from 'react'
import Transition from 'react-transition-group/Transition'
import Home from './Home'
import { formatHero } from '../../utils/formatters'

const duration = 300

const defaultStyle = {
  transition: `background-color ${duration}ms ease-in-out`,
  backgroundColor: 'rebeccapurple'
}

const transitionStyles = {
  entering: { backgroundColor: 'blue' },
  entered: { backgroundColor: 'red' },
  exiting: { backgroundColor: 'pink' },
  exited: { backgroundColor: 'orange' }
}

export default {
  path: ['/', '/home'],

  async action({ context: { api } }) {
    const [pages, services, showOffs, caseStudies] = await Promise.all([
      api.getEntries({ content_type: 'page' }),
      api.getEntries({ content_type: 'service' }),
      api.getEntries({ content_type: 'showOff' }),
      api.getEntries({ content_type: 'caseStudy', include: 2 })
    ])

    const content = pages.items.find(
      page => page.sys.id === '4TC4xZTIYokUiC2IecUOc6'
    )
    return (
      <Transition timeout={500}>
        {state => (
          <Home
            transitionState={state}
            content={content}
            hero={formatHero(content.fields.hero)}
            services={services}
            showOffs={showOffs}
            caseStudies={caseStudies}
          />
        )}
      </Transition>
    )
  }
}
