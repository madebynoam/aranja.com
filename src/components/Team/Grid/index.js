import React from 'react'
import Observer from 'react-intersection-observer'
import classNames from 'classnames'
import './styles.css'

const TeamGrid = ({ images }) => (
  <Observer triggerOnce threshold={0.4} className="u-paddingBottomXLarge">
    {isVisible => (
      <div className="Team-grid">
        {images &&
          images.items[0].fields.images.map(image => (
            <div
              className={classNames(
                'Team-gridImageMask',
                isVisible && 'is-visible'
              )}
              key={images && image.fields.file.url}
            >
              <div
                className="Team-gridImage"
                style={{
                  backgroundImage: `url(${image && image.fields.file.url}?w=800)`
                }}
              />
            </div>
          ))}
      </div>
    )}
  </Observer>
)

export default TeamGrid
