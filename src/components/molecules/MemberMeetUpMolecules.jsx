import React from "react";
import HeadingFour from "../atoms/HeadingFour";
import AnchorComponent from "../atoms/anchorComponents";
import ImgRounded from "../atoms/imgRounded";
import Paragraf from "../atoms/Paragraf";
import TableRow from "../atoms/tableRow";
export default class MemberMeetupMolecules extends React.Component {
  render() {
    return (
      <section className>
        <div className="d-flex justify-content-between align-items-center fw-bold">
          <HeadingFour title="Members" />
          <AnchorComponent link="See All" />
        </div>
        <div className="ms-4 me-2 py-2 px-4 rounded bg-light row">
          <div className="col-2">
            <ImgRounded
              src="https://picsum.photos/100"
              alt="ini foto random boy"
            />
          </div>
          <div className="col my-auto">
            <Paragraf text="Organizers" />
            <table>
              <tr className="text-xs-start">
                <TableRow label="Kharisma Fitri" value="4 others." />
              </tr>
            </table>
          </div>
        </div>
      </section>
    );
  }
}
