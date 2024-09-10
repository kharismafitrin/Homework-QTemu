import React from "react";

export default class AnchorComponent extends React.Component {
  render() {
    return (
      <>
        <a class="nav-item nav-link" href="#">
          {this.props.link}
        </a>
      </>
    );
  }
}
