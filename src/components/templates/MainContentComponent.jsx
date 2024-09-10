import React from "react";
import MeetUpInfo from "../organisms/MeetUpInfo";
import NextMeetup from "../organisms/NextMeetUp";
import AboutMeetup from "../organisms/AboutMeetUp";
import MemberMeetup from "../organisms/MemberMeetup";
import PastMeetup from "../organisms/PastMeetup";

function MainContentComponent() {
  return (
    <section className="m-4">
      <MeetUpInfo />
      <NextMeetup />
      <AboutMeetup />
      <MemberMeetup />
      <PastMeetup />
    </section>
  );
}

export default MainContentComponent;
