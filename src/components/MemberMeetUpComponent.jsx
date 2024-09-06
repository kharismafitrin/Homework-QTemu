import React from 'react';

function MemberMeetUpComponent() {
  return (
    <section className>
    <div className="d-flex justify-content-between align-items-center">
        <h4>Members</h4>
        <a href="" className=' nav-link text-dark fw-bold'>See All</a>
    </div>
      <div className='ms-4 me-2 py-2 px-4 rounded bg-light row'>
        <div className="col-1">
            <img className="p-2 mx-auto rounded-circle" src="https://picsum.photos/100" alt="ini foto random boy" />
        </div>
        <div className="col my-auto">
            <p className='fs-5'>Organizers</p>
            <table>
                <tr className='text-xs-start'>
                    <td className='pe-4'>Kharisma Fitri</td>
                    <td>4 others.   </td>
                </tr>
            </table>
        </div>
      </div>
    </section>
  );
}

export default MemberMeetUpComponent;
