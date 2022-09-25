import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import KudosBoard from "./Components/KudosBoard";
import Layout from "./Components/Layout";
import TeamMembers from "./Components/TeamMembers";

function App(props) {
  return (
    <StyledEngineProvider injectFirst>
      <h1>KitKat Board</h1>
      <Layout>
        <TeamMembers></TeamMembers>
        <KudosBoard />
      </Layout>
    </StyledEngineProvider>
  );
}

App.propTypes = {};

export default App;
