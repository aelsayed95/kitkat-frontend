import { Button, FormGroup, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function AddTeamMember({ updateMembers }) {
  const [member, setMember] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(member);
    const requestOpts = {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: member }),
    };
    fetch("/members/add", requestOpts)
      .then((res) => res.json())
      .then((members) => {
        console.log("in here");
        console.log(members);
        updateMembers(members);
        setMember("");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Typography variant="body2">Add team member: </Typography>
        <TextField
          type="text"
          placeholder="New team member's name"
          value={member}
          onChange={(e) => setMember(e.target.value)}
        />
        <Button type="submit" variant="primary">
          Add
        </Button>
      </FormGroup>
    </form>
  );
}

AddTeamMember.propTypes = {};

export default AddTeamMember;
