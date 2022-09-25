import React from "react";
import AddTeamMember from "./AddTeamMember";
import TeamViewer from "./TeamViewer";

function TeamMembers({members, setMembers}) {

  const updateMembers = (members) => {
    setMembers(members);
  }

  return <div>
    <AddTeamMember updateMembers={updateMembers} />
    <TeamViewer team={members} />
  </div>
}

TeamMembers.propTypes = {};

export default TeamMembers;
