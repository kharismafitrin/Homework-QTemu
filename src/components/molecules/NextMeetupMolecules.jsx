import React from "react";
import Paragraf from "../atoms/Paragraf";
import TextMuted from "../atoms/TextMuted";
import HeadingFour from "../atoms/HeadingFour";

export default class NextMeetUpMolecules extends React.Component {
  render() {
    return (
      <>
        <HeadingFour title="Awesome meetup and event" />
        <div className="ms-4 py-2 px-4 rounded bg-light">
          <TextMuted text="25 January 2019" />
          <Paragraf
            text="Hello, JavaScript & Node.js Ninjas! Get ready for our monthly meetup
        JakartaJS!"
          />
          <Paragraf
            text="The meetup format will contain some short stories and technical talks.
        If you have a short announcement you’d like to share with the audience,
        you may do so during open mic announcements."
          />
          <Paragraf text="Remember to bring a photo ID to get through building security." />
          <Paragraf text="See you there!" />
          <Paragraf text="Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers" />
        </div>
      </>
    );
  }
}
