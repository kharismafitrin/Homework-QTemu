import React from "react";

// Atom: TableCell (Class Component)
export default class TableCell extends React.Component {
  render() {
    return <td>{this.props.children}</td>;
  }
}
