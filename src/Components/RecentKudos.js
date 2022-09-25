import React from "react";

function RecentKudos({kudosList}) {

  return <div>
    {(typeof kudosList.kudos === "undefined") ? (
        <p>Loading...</p>
    ): (
        kudosList.kudos.map((text, i) => (
            <p key={i}>{text}</p>
        ))
    )}
  </div>;
}

RecentKudos.propTypes = {};

export default RecentKudos;
