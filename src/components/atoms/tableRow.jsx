import React from "react";
import TableCell from "./tableCell";

// Molekul: TableRow (Class Component)
export default class TableRow extends React.Component {
  render() {
    return (
      <tr>
        <TableCell>{this.props.label}</TableCell>
        <TableCell> {this.props.value}</TableCell>
      </tr>
    );
  }
}
