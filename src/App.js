import React from "react";
import KudosBoard from "./Components/KudosBoard";
import TeamMembers from "./Components/TeamMembers";

function App(props) {

  return <div>
    <h1>KitKat Board</h1>
    <TeamMembers></TeamMembers>
    <KudosBoard />
  </div>;
}

App.propTypes = {};

export default App;
