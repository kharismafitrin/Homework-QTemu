import React from "react";
import ItemsCardMolecules from "./ItemsCardMolecules";
import HeadingFour from "../atoms/HeadingFour";
import AnchorComponent from "../atoms/anchorComponents";

export default class PastMeetupMolecules extends React.Component {
  render() {
    return (
      <section className="my-4">
        <div className="d-flex justify-content-between align-items-center">
          <HeadingFour title="Past Meetup" />
          <AnchorComponent link="See All" />
        </div>
        <div class="d-flex justify-content-between">
          <ItemsCardMolecules
            titlecard="27 November 2017"
            text="#39 Jakarta JS April Meetup with Kumparan"
            person="139"
          />
          <ItemsCardMolecules
            titlecard="27 Oktober 2017"
            text="#38 Jakarta JS April Meetup with BliBli"
            person="113"
          />
          <ItemsCardMolecules
            titlecard="27 September 2017"
            text="#39 Jakarta JS April Meetup with Hactiv8"
            person="110"
          />
        </div>
      </section>
    );
  }
}
