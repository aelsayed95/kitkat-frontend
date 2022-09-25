import { List, ListItem } from "@mui/material";
import React from "react";

function RecentKudos({kudosList}) {

  return <List>
    {(typeof kudosList.kudos === "undefined") ? (
        <ListItem>Loading...</ListItem>
    ): (
        kudosList.kudos.map((text, i) => (
            <ListItem key={i}>{text}</ListItem>
        ))
    )}
  </List>;
}

RecentKudos.propTypes = {};

export default RecentKudos;
