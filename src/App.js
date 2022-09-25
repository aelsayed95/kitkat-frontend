import React from "react";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import TopBar from "./Components/TopBar";
import CssBaseline from  "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import TopLevel from "./Components/TopLevel";

function App(props) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TopBar title={"Kitkat Board"} />
        <TopLevel />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

App.propTypes = {};

export default App;
