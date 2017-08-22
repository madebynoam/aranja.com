import React from 'react'
import './styles.css'

const Link = ({ href, children }) => <a href={href} className="Link">{children}</a>

export default Link