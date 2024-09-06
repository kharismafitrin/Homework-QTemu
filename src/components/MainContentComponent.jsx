import React from 'react';
import AboutMeetUpComponent from './AboutMeetUpComponent';
import NextMeetUpComponent from './NextMeetUpComponent';
import MeetUpInfoComponent from './MeetUpInfoComponent';
import MemberMeetUpComponent from './MemberMeetUpComponent';
import PastMeetupComponent from './PastMeetUpComponent';

function MainContentComponent() {
  return (
    <section className="m-4">
        <MeetUpInfoComponent/>
        <NextMeetUpComponent/>
        <AboutMeetUpComponent/>
        <MemberMeetUpComponent/>
        <PastMeetupComponent/>
    </section>
  );
}

export default MainContentComponent;
