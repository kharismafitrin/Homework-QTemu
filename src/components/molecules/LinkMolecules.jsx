import React from "react";

import AnchorComponent from "../atoms/anchorComponents";

export default class LinkMolecules extends React.Component {
  render() {
    return (
      <>
        <div className="navbar-nav mx-auto">
          <AnchorComponent link="Create Meet Up" />
          <AnchorComponent link="Explore" />
          <AnchorComponent link="Login" />
        </div>
      </>
    );
  }
}
