import React from 'react'
import { Legend, Body1, Body2, H2, H3 } from '../../typography'
import './styles.css'

const tempPosition = [
  {
    title: 'Front-end engineer',
    description:
      'Do you engineer beautiful web apps and performant web games? Are you independent, disciplined and a good team player? If so, we are looking for you!',
  },
]

const Career = ({ title, description }) =>
  <div className="Career">
    <H3 bottom="xsmall">
      {title}
    </H3>
    <Body2>
      {description}
    </Body2>
  </div>

const Careers = ({ openPositions = tempPosition }) =>
  <div className="Careers">
    <Body1 bottom="medium">
      If you are passionate about web development and want to be part of a fun, driven team, then
      check out our open positions below and don't hesitate to apply.
    </Body1>
    <div className="Career-list">
      {openPositions.map(position =>
        <div className="Career-column" key={position.title}>
          <Career title={position.title} description={position.description} />
        </div>,
      )}
    </div>
  </div>

export default Careers
