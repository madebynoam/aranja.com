import React from 'react'
import classNames from 'classnames'
import Parallax from '../Parallax'
import { withReveal } from '../../hoc/withReveal'
import { Body2 } from '../../typography'
import './styles.css'

const SectionHero = ({ img, caption, hasBeenSeen }) =>
  <Parallax clamp>
    <div className={classNames('SectionHero', hasBeenSeen && 'is-visible')}>
      <div className="SectionHero-imageWrap">
        <div className="SectionHero-image" style={{ backgroundImage: `url(${img})` }} />
      </div>
      {caption ? <Body2 className="SectionHero-caption">{caption}</Body2> : null}
    </div>
  </Parallax>

export default withReveal(SectionHero)
