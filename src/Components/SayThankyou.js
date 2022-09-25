import React, { useState, useEffect } from "react";
import {
  Autocomplete,
  Button,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";

function SayThankyou({ updateKudosList, members, setMembers }) {
  const [kudos, setKudos] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(kudos);
    const requestOpts = {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kudos: kudos }),
    };
    fetch("/kudos/add", requestOpts)
      .then((res) => res.json())
      .then((kudos) => {
        updateKudosList(kudos);
        setKudos("");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Typography variant="body2">Who would you like to thank?</Typography>
        <Autocomplete
          id="user-autocomplete"
          freeSolo
          options={members.members}
          renderInput={(params) => <TextField {...params} label="team member" />}
        />
        <TextField
          type="text"
          placeholder="Enter a thank you message"
          value={kudos}
          onChange={(e) => setKudos(e.target.value)}
        />
        <Button type="submit" variant="primary">
          kudos!
        </Button>
      </FormGroup>
    </form>
  );
}

SayThankyou.propTypes = {};

export default SayThankyou;
