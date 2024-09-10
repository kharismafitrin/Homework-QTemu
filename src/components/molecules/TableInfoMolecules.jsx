import React from "react";
import TableRow from "../atoms/tableRow";
export default class TableInfoMolecules extends React.Component {
  render() {
    return (
      <>
        <table>
          <tbody>
            <TableRow label="Location" value=": Jakarta, Indonesia" />
            <TableRow label="Members" value=": 1,078" />
            <TableRow
              label="Organizers"
              value=": Kharisma Fitri Nurunnisa Siahaan"
            />
          </tbody>
        </table>
      </>
    );
  }
}
