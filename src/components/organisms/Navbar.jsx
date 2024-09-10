import React from "react";
import BrandMolecules from "../molecules/BrandMolecules";
import LinkMolecules from "../molecules/LinkMolecules";
export default class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <BrandMolecules />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <LinkMolecules />
          <div
            className="collapse navbar-collapse"
            id="navbarNavAltMarkup"
          ></div>
        </nav>
      </>
    );
  }
}
