import React from "react";
import {AppBar, Toolbar,CssBaseline, Typography, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({


}));

function Navbar() {
    const classes = useStyles();
    
    return (
    <AppBar  position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" >TD Bank
             <a href="#" to="/">HOME</a>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;