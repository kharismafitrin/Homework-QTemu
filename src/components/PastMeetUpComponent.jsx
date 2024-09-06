import React from "react";
import ItemPastMeetUpComponent from "./ItemPastMeetUpComponent";

function PastMeetUpComponent() {
  return (
    <section className="my-4">
        <div className="d-flex justify-content-between align-items-center">
            <h4>Past Meetup</h4>
            <a href="" className=" nav-link text-dark fw-bold">
            See All
            </a>
        </div>
        <div class="d-flex justify-content-between">
            <ItemPastMeetUpComponent/>
            <ItemPastMeetUpComponent/>
            <ItemPastMeetUpComponent/>
        </div>
    </section>
  );
}

export default PastMeetUpComponent;
