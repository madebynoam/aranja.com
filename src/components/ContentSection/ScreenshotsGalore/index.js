import React from 'react'
import classNames from 'classnames'
import Parallax from '../../Parallax'
import { withReveal } from '../../../hoc/withReveal'
import './styles.css'

const Wrapped = ({ img, isVisible }) => (
  <div className={classNames('ScreenshotsGalore-wrap', isVisible && 'is-visible')}>
    <div
      className="ScreenshotsGalore-image"
      style={{ backgroundImage: `url(${img})` }}
    />
  </div>
)

const ScreenshotsGalore = ({ screenshots }) => {
  const Wrapper = withReveal(Wrapped)
  return (
  <Parallax>
    <div className="ScreenshotsGalore">
      {screenshots.map(shot => (
        <Wrapper img={shot.fields.file.url} key={shot.fields.title} />
      ))}
    </div>
  </Parallax>
  )
}

export default ScreenshotsGalore
