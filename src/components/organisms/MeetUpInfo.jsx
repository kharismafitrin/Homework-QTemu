import React from "react";
import ImageInfoMolecules from "../molecules/imageInfoMolecules";
import TitleInfoMolecules from "../molecules/TitleInfoMolecules";
import TableInfoMolecules from "../molecules/TableInfoMolecules";
export default class MeetUpInfo extends React.Component {
  render() {
    return (
      <section className="p-2 bg-light">
        <div className="row">
          <div className="col-md-2 my-auto">
            <ImageInfoMolecules />
          </div>
          <div className="col-md-10 my-auto mx-auto">
            <TitleInfoMolecules />
            <TableInfoMolecules />
            <button className="mt-2 btn btn-secondary">Join Us</button>
          </div>
        </div>
      </section>
    );
  }
}
