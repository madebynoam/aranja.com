import React from 'react'
import classNames from 'classnames'
import { H1 } from '../../../typography'
import './styles.css'

const TechStack = ({ techStack }) => {
  console.log(techStack)
  return (
    <div className="TechStack">
      {techStack &&
        Array.isArray(techStack) &&
        techStack.map(item => (
          <div className="TechStack-item">
            <div className="TechStack-name">{item.fields.techName}</div>
            <div className="TechStack-description">
              {item.fields.techDescription}
            </div>
            <img
              className="TechStack-logo"
              src={item.fields.icon.fields.file.url}
            />
          </div>
        ))}
    </div>
  )
}

export default TechStack
