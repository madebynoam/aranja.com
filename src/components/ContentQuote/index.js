import React, { Component } from 'react'
import './styles.css'

class ContentQuote extends Component {
  render() {
    const { quote, attestant } = this.props
    return (
      <figure className="ContentQuote">
        <blockquote className="ContentQuote-quote">
          {quote}
        </blockquote>
        <figcaption className="ContentQuote-quoteAuthor">{attestant}</figcaption>
      </figure>
    )
  }
}

export default ContentQuote
