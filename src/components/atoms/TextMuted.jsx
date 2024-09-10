import React from "react";

export default class TextMuted extends React.Component {
  render() {
    return (
      <>
        <p className="text-muted">{this.props.text}</p>
      </>
    );
  }
}
