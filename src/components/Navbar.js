import React from "react";
import {AppBar, Toolbar,CssBaseline, Typography, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    logo: {
        cursor: "pointer",
        fontSize: "15px"
      },
      link: {
        textDecoration: "none",
        fontWeight: "400",
        lineHeight:" 16px",
        textAlign: "center",
        color: "white",
        fontSize: "14px",
        marginLeft: theme.spacing(20),
        "&:hover": {
          color: "yellow",
          borderBottom: "1px solid white",
        },
      },
      appBar: {
        backgroundColor: "#1a5336"
      }

}));

function Navbar() {
    const classes = useStyles();
    
    return (
    <AppBar className={classes.appBar} position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>TD Bank
             <a href="#" to="/" className={classes.link}>HOME</a>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;