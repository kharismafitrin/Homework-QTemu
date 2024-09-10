import React from "react";

export default class StrongText extends React.Component {
  render() {
    return (
      <>
        <strong>{this.props.text}</strong>
      </>
    );
  }
}
