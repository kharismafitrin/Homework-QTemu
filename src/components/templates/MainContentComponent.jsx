import React from "react";
import AboutMeetUpComponent from "../AboutMeetUpComponent";
import NextMeetUpComponent from "../NextMeetUpComponent";
import MeetUpInfoComponent from "../MeetUpInfoComponent";
import MemberMeetUpComponent from "../MemberMeetUpComponent";
import PastMeetupComponent from "../PastMeetUpComponent";
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
