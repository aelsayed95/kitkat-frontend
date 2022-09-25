import { Box, Grid, Paper } from "@mui/material";
import React, { useState, useEffect } from "react";
import KudosBoard from "./KudosBoard";
import TeamMembers from "./TeamMembers";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function TopLevel(props) {
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
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={8}>
          <Item>
            <TeamMembers members={data} setMembers={setData} />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <KudosBoard members={data} setMembers={setData} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

TopLevel.propTypes = {};

export default TopLevel;
