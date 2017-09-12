import React from 'react'
import classNames from 'classnames'
import './styles.scss'
import { withReveal } from '../../../hoc/withReveal'

const TechStack = ({ techStack, isVisible }) => {
  return (
    <div className={classNames('TechStack', isVisible && 'is-visible')}>
      {techStack &&
        Array.isArray(techStack) &&
        techStack.map(item => (
          <div className="TechStack-item" key={item.fields.techName}>
            <img
              className="TechStack-logo"
              src={item.fields.icon.fields.file.url}
            />
            <div className="TechStack-info">
              <div className="TechStack-name">{item.fields.techName}</div>
              <div className="TechStack-description">
                {item.fields.techDescription}
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default withReveal(TechStack)
