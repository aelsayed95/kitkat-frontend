import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Layout(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container justifyContent="center" spacing={2}>
        {props.children.map((child, i) => (
          <Grid item key={i} xs={8}>
            <Item>{child}</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

Layout.propTypes = {};

export default Layout;
