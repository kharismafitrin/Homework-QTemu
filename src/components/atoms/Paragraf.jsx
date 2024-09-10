import React from "react";

export default class Paragraf extends React.Component {
  render() {
    return (
      <>
        <p>{this.props.text}</p>
      </>
    );
  }
}
