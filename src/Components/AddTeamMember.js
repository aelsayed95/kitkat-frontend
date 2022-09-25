import React, { useState } from "react";

function AddTeamMember({updateMembers}) {
    const [member, setMember] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(member);
        const requestOpts = {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name: member})
        };
        fetch('/members/add', requestOpts)
            .then((res) => res.json())
            .then((members) => {
                console.log("in here")
                console.log(members)
                updateMembers(members);
                setMember("");
            })
    }

    return (
      <form onSubmit={handleSubmit}>
        <label>Add team member: </label>
        <input
        type="text" 
        value={member}
        onChange={(e) => setMember(e.target.value)}
        />
        <input type="submit" />
      </form>
    )
}

AddTeamMember.propTypes = {};

export default AddTeamMember;
