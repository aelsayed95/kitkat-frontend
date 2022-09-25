import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function TopBar({ title }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

TopBar.propTypes = {};
