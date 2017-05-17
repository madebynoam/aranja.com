import React from "react";

class Delay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.initial,
    };
  }
  refresh(props) {
    let { value, period } = props;
    setTimeout(
      () =>
        this.setState({
          value,
        }),
      period,
    );
  }
  componentDidMount() {
    this.refresh(this.props);
  }
  componentWillReceiveProps(next) {
    this.refresh(next);
  }
  render() {
    // function-as-children
    return this.props.children(this.state.value);
  }
}

export default Delay;
