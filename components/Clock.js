import React, { Component } from "react";

export default class Clock extends Component {
  state = { currentTime: new Date() };

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  tick() {
    this.setState({ currentTime: new Date() });
  }

  render() {
    return this.props.render({
      time: this.state.currentTime
    });
  }
}
