import React from 'react'
import Observer from 'react-intersection-observer'
import classNames from 'classnames'
import './styles.scss'
import SmartImage from '../../SmartImage'

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
              <SmartImage image={image}>
                {imageUrl => (
                  <div
                    className="Team-gridImage"
                    style={{
                      backgroundImage: `url(${imageUrl})`,
                    }}
                  />
                )}
              </SmartImage>
            </div>
          ))}
      </div>
    )}
  </Observer>
)

export default TeamGrid
