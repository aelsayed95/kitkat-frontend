import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import KudosBoard from "./Components/KudosBoard";
import Layout from "./Components/Layout";
import TeamMembers from "./Components/TeamMembers";
import TopBar from "./Components/TopBar";

function App(props) {
  return (
    <StyledEngineProvider injectFirst>
      <TopBar title={"Kitkat Board"}/>
      <Layout>
        <TeamMembers></TeamMembers>
        <KudosBoard />
      </Layout>
    </StyledEngineProvider>
  );
}

App.propTypes = {};

export default App;
