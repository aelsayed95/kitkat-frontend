import React, { useState, useEffect } from "react";
import AddTeamMember from "./AddTeamMember";
import TeamViewer from "./TeamViewer";

function TeamMembers(props) {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/members")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  const updateMembers = (members) => {
    setData(members);
  }

  return <div>
    <AddTeamMember updateMembers={updateMembers} />
    <TeamViewer team={data} />
  </div>;
}

TeamMembers.propTypes = {};

export default TeamMembers;
