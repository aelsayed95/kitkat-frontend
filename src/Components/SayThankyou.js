import React, { useState, useEffect } from "react";
import {Autocomplete} from "@mui/material";
import { TextField } from "@mui/material";

function SayThankyou({updateKudosList}) {
    const [kudos, setKudos] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(kudos);
        const requestOpts = {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({kudos: kudos})
        };
        fetch('/kudos/add', requestOpts)
          .then((res) => res.json())
          .then((kudos) => {
            updateKudosList(kudos);
            setKudos("");
          })
    }

    return (
      <form onSubmit={handleSubmit}>
        <label>Who would you like to thank?  </label>
        {/* <Autocomplete
          id="user-autocomplete"
          freeSolo
          options={members.members}
          renderInput={(params) => <TextField {...params} label="team member" />}
        /> */}
        <input
        type="text" 
        value={kudos}
        onChange={(e) => setKudos(e.target.value)}
        />
        <input type="submit" />
      </form>
    )
}

SayThankyou.propTypes = {};

export default SayThankyou;
