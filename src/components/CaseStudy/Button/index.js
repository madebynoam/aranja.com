import React from 'react'
import Button from '../../Button'
import './styles.css'

const CaseStudyButton = ({ url, children }) => (
  <Button>
    <a className="CaseStudyButton" href={url}>{children}</a>
  </Button>
)

export default CaseStudyButton
