import React, { Component } from 'react'
import classNames from 'classnames'
import './styles.css'

class AnimatedText extends Component {
  constructor(props) {
    super(props)
    this.state = {
        isVisible: false
    }
  }

  componentDidMount() {
      this.setState({
          isVisible: true
      })
  }

  render() {
    const { isVisible } = this.state
    const { text } = this.props

    return text.map(text => <span className="AnimatedText"><span className={classNames('AnimatedText-part', isVisible && 'is-visible')}>{text}</span> </span>)
    
  }
}

export default AnimatedText
