import { List, ListItem } from "@mui/material";
import React from "react";

function TeamViewer({team}) {

  return <List>
    {(typeof team.members === "undefined") ? (
        <ListItem>Loading...</ListItem>
    ): (
        team.members.map((member, i) => (
            <ListItem key={i}>{member}</ListItem>
        ))
    )}
  </List>;
}

TeamViewer.propTypes = {};

export default TeamViewer;
