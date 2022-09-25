import React, { useState, useEffect } from "react";

function SayThankyou({addKudos}) {
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
        fetch('/add-kudos', requestOpts);
        addKudos(kudos);
    }

    return (
      <form onSubmit={handleSubmit}>
        <label>Who would you like to thank?  </label>
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
