import React from "react";

export default class HeadingOne extends React.Component {
  render() {
    return (
      <>
        <h1>{this.props.text}</h1>
      </>
    );
  }
}
