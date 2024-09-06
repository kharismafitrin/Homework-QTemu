import React from "react";

function ItemPastMeetUpComponent() {
    return (
        <div class="ms-4 me-2 card col-3 bg-light">
            <div class="card-body">
                <h5 class="card-title">27 November 2017</h5>
                <hr />
                <p class="card-text">
                <strong>
                    #39 Jakarta JS Meetup with Kumparan
                </strong>
                </p>
                <p class="card-text">
                <strong>
                    139 
                </strong>
                <span className="text-muted"> went</span>
                </p>
                <button className="btn btn-secondary">View</button>
            </div>
        </div>
    );
}

export default ItemPastMeetUpComponent;
