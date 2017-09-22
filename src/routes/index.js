import React from 'react'
import Transition from 'react-transition-group/Transition'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import home from './home'
import work from './work'
import contact from './contact'
import about from './about'
import notFound from './not-found'
import Page from '../components/Page'

const transitionDuration = 480

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
      children: [home, work, about, contact, notFound],
      action: async data => {
        const element = await data.next()
        const pathName = data.context.history.location.pathname
        return (
          <Transition key={pathName} timeout={transitionDuration}>
            {state =>
              <Page transitionState={state} key={pathName} name={String(pathName).replace('/', '')}>
                {element}
              </Page>
          }
          </Transition>
        )
      }
    }]
  }
]
