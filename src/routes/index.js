import React from 'react'
import Transition from 'react-transition-group/Transition'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import home from './home'
import work from './work'
import about from './about'
import notFound from './not-found'
import Page from '../components/Page'

const transitionDuration = 1300

export default [
  {
    path: '/',
    action: async data => {
      const element = await data.next()
      return (
        <TransitionGroup>
          {[element]}
        </TransitionGroup>
      )
    },
    children: [{
      path: '/',
      children: [home, work, about, notFound],
      action: async data => {
        const element = await data.next()
        const key = data.context.history.location.pathname
        return (
          <Transition key={key} timeout={transitionDuration}>
            {state => (
              <Page transitionState={state}>
                {element}
              </Page>
            )}
          </Transition>
        )
      }
    }]
  }
]
