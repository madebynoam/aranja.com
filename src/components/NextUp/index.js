import React from 'react'
import PropTypes from 'prop-types'
// import { Body1, Body2, H1, H2, H3, H4 } from '../../typography'
// import ArrowButton from '../ArrowButton'
import './styles.scss'

const NextUp = ({ next }) => (
  <div style={{ backgroundImage: `url(${next.fields.heroImage.fields.file.url})` }} className="NextUp">
  </div>
)



export default NextUp
