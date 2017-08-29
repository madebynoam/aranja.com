import React from 'react'
import Button from '../../Button'
import './styles.css'

const CaseStudyButton = ({ to, children }) => (
  <Button to={to} className="CaseStudyButton">
    {children}
  </Button>
)

export default CaseStudyButton
