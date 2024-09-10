import React from "react";

export default class Image extends React.Component {
  render() {
    return (
      <>
        <img
          className="p-2 img-fluid rounded mx-auto d-block"
          src={this.props.srcImg}
          alt={this.props.altImg}
        />
      </>
    );
  }
}
