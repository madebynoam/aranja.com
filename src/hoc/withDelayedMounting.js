import React, { Component } from 'react'

export const withDelayedMounting = WrappedComponent => {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isMounted: false
      }
    }

    componentDidMount() {
      this.setState({
        isMounted: true
      })
    }

    render() {
      const { isMounted } = this.state
      if (isMounted) {
        return <WrappedComponent {...this.props} />
      } else {
        return null
      }
    }
  }
}
