import React from "react";

export default class ButtonSecondary extends React.Component {
  render() {
    return (
      <button className="mt-2 btn btn-secondary">{this.props.text}</button>
    );
  }
}
