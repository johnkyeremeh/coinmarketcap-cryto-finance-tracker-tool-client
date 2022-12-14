import React from "react";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
 

});

function Dashboard() {
  return (
    <>
        <div className="main">
            <div className="main-information">
                <h1 className="main--name">Total Balance</h1>
                <h2>$64.7K/28.2 ETH</h2>
                <h4 className="main--name">Investment</h4>
                <h4 >$6,121,321,321 USD</h4>
                <h4 className="main--name">Cash</h4>
                <h4 >$9,121,321,321 USD</h4>
            </div>
            <div className="main-information">
                <h1 className="main--name">Risk</h1>
                <h2>Moderate</h2>
            </div>
            <div className="main-information">
                <h1 className="main--name">Gas Fee</h1>
                <h2>Moderate</h2>
            </div>
        </div>
     </> 
  );
}
export default Dashboard;