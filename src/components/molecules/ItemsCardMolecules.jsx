import React from "react";
import HeadingFive from "../atoms/HeadingFive";
import StrongText from "../atoms/StrongText";
import TextMuted from "../atoms/TextMuted";
import ButtonSecondary from "../atoms/ButtonSecondary";

export default function ItemPastMeetUpMolecules({ titlecard, text, person }) {
  return (
    <div className="ms-4 me-2 card col-3 bg-light">
      <div className="card-body">
        <HeadingFive title={titlecard} />
        <hr />
        <p className="card-text">
          <StrongText text={text} />
        </p>
        <p className="card-text">
          <StrongText text={person} />
          <span className="text-muted">
            <TextMuted text="went" />
          </span>
        </p>
        <ButtonSecondary text="View" />
      </div>
    </div>
  );
}
