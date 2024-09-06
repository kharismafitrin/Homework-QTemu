import React from 'react';

function MeetupInfoComponent() {
  return (
    <section className="p-2 bg-light">
        <div className="row">
            <div className="col-2">
                <img className="p-2" src="https://picsum.photos/200" alt="ini foto random boy" />
            </div>
            <div className="col-10 my-auto">
                <h1>Hacktiv8 Meetup</h1>
                <table>
                    <tr>
                        <td>Location</td>
                        <td>: Jakarta, Indonesia</td>
                    </tr>
                    <tr>
                        <td>Members</td>
                        <td>: 1,078</td>
                    </tr>
                    <tr>
                        <td>Organizers</td>
                        <td>: Kharisma Fitri Nurunnisa Siahaan</td>
                    </tr>
                </table>
                <button className="mt-2 btn btn-secondary">Join Us</button>
            </div>
        </div>
    </section>
  );
}
export default MeetupInfoComponent;
