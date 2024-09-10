import React from "react";
import Paragraf from "../atoms/Paragraf";
import TextMuted from "../atoms/TextMuted";
import HeadingFour from "../atoms/HeadingFour";

export default class AboutMeetupMolecules extends React.Component {
  render() {
    return (
      <>
        <HeadingFour title="About Meetup" />
        <div className=" py-2 px-4">
          <Paragraf
            text="Come and meet other developers interested in the JavaScript and its
            library in the Greater Jakarta area."
          />
          <Paragraf
            text="Twitter: @JakartaJS and we use the hashtag
            #jakartajs"
          />
        </div>
      </>
    );
  }
}
