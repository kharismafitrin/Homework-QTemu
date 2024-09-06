import React from 'react';

function NavbarComponent() {
  return (
    <header className="d-flex justify-content-between bg-secondary align-items-center p-3">
      <div className="logo h4 text-white">QTemu</div>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">Create Meetup</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">Explore</a>
          </li>
        </ul>
      </nav>
      <div className="login">
        <a className="btn" href="#">Login</a>
      </div>
    </header>
  );
}
export default NavbarComponent;
