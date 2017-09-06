import React from 'react'
import Transition from 'react-transition-group/Transition'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import home from './home'
import work from './work'
import about from './about'
import notFound from './not-found'

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

export default [
  {
    path: '/',
    action: async data => {
      const element = await data.next()
      return (
        <TransitionGroup>
          {element}
        </TransitionGroup>
      )
    },
    children: [{
      path: '/',
      children: [home, work, about, notFound],
      action: async data => {
        const element = await data.next()
        return (
          <Transition timeout={duration}>
            {state => (
              <div
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state]
                }}
              >
                {console.log(state)}
                {element}
              </div>
            )}
          </Transition>
        )
      }
    }]
  }
]
