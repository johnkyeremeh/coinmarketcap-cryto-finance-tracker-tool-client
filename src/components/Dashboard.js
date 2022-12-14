import React from "react";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    main: {
        display: "flex",
        justifyContent: "space-between"
    },
    information: {
        justifyContent: "space-between",
        padding: "1rem 2rem 1rem 2rem",
        borderRadius: "1rem",
        color: "black",
        backgroundColor: "white",
        alignItems: "center",
        width: "100%"
    }, 
    primary: {
        marginTop: "20px",
        color: "grey",
        padding: "0"
    }
});

function Dashboard() {
    const classes = useStyles();
    return (
    <>
        <div className={classes.main}>
            <div className={classes.information}>
                <h1 className={classes.primary}>Total Balance</h1>
                <h2>$64.7K/28.2 ETH</h2>
                <h4 className={classes.primary}>Investment</h4>
                <h4 >$6,121,321,321 USD</h4>
                <h4 className={classes.primary}>Cash</h4>
                <h4 >$9,121,321,321 USD</h4>
            </div>
            <div className={classes.information}>
                <h1 className={classes.primary}>Risk</h1>
                <h2>Moderate</h2>
            </div>
            <div className={classes.information}>
                <h1 className={classes.primary}>Gas Fee</h1>
                <h2>Moderate</h2>
            </div>
        </div>
     </> 
  );
}
export default Dashboard;