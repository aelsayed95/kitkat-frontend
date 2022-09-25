import React from "react";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import KudosBoard from "./Components/KudosBoard";
import Layout from "./Components/Layout";
import TeamMembers from "./Components/TeamMembers";
import TopBar from "./Components/TopBar";
import CssBaseline from  "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";

function App(props) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TopBar title={"Kitkat Board"} />
        <Layout>
          <TeamMembers></TeamMembers>
          <KudosBoard />
        </Layout>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

App.propTypes = {};

export default App;
