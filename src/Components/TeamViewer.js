import React from "react";

function TeamViewer({team}) {

  return <div>
    {(typeof team.members === "undefined") ? (
        <p>Loading...</p>
    ): (
        team.members.map((member, i) => (
            <p key={i}>{member}</p>
        ))
    )}
  </div>;
}

TeamViewer.propTypes = {};

export default TeamViewer;
