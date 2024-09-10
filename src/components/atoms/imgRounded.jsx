import React from "react";

export default class ImgRounded extends React.Component {
  render() {
    return (
      <>
        <img
          className="p-2 mx-auto rounded-circle"
          src={this.props.src}
          alt={this.props.alt}
        />
      </>
    );
  }
}
