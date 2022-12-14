import React from "react";
import {makeStyles } from "@material-ui/core";
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        backgroundColor: "white",
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
          alignItems: "center",
        },
      },
      sidebar: {
        width: "30%",
        [theme.breakpoints.down("md")]: {
          width: "100%",
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 25
      },
      heading: {
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center"
      },
      description: {
        width: "100%",
        padding: 25,
        paddingBottom: 15,
        paddingTop: 0,
        textAlign: "center",
        
      },
      button: {
          background: "rgba(0, 0, 0, 0.87)",
          borderRadius: "8px",
          color: "white",
          width: "323px",
          height: "60px"
      }, 
      banner: {
          backgroundColor: "#7B61FF",
          flexDirection: "column",
          justifyContent: "center",
          width: "90vw",
          color: "white",
          padding: "70px",
          display: "flex",
          gap: "20px",
          border: "1px dashed #7B61FF",
          borderRadius: "5px",
          alignItems: "center",
      },
      supportText: {
        textAlign: "center",
        justifyContent: "center"
      },
      marketDataHeader: {
          display: "flex"
      
      }, 
      marketData: {
        textAlign: "center",
        padding: 25,
        paddingTop: 10,
        width: "100%",
        [theme.breakpoints.down("md")]: {
          display: "flex",
          justifyContent: "space-around",
        },
        [theme.breakpoints.down("sm")]: {
          flexDirection: "column",
          alignItems: "center",
        },
        [theme.breakpoints.down("xs")]: {
          alignItems: "center",
        },
      },
    
}));

// custom function to format text
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export default function CryptoDetailed(props) {
    const classes = useStyles();

  return (
    <div className={classes.container}>
         <div className={classes.sidebar}>
            <div className={classes.marketDataHeader}>
                <h1 className={classes.heading}>
                {props.row.name}
                </h1>
            </div>
          
          <h1 className={classes.description}>
            Market Stats
          </h1>
          <div>
            <div className={classes.marketData}>
                <div className={classes.heading} >Market Cap</div>
                <p>{formatter.format(props.row.quote.USD.market_cap)}</p>
            </div>
            
            <div className={classes.marketData}>
                <div className={classes.heading}>Volume - 24hr</div>
                <p className= {classes.supportText}>{formatter.format(props.row.quote.USD.volume_24h)}</p>
            </div>
    
            <div className={classes.marketData}>
                <div className={classes.heading}>circulating supply</div>
                <p>{props.row.circulating_supply}</p>
            </div>
            
            <div className={classes.marketData}>
                <div className={classes.heading}>CMC Rank</div>
                <p>{props.row.cmc_rank}</p>
            </div>
    
        </div>
        </div>
        <div className={classes.banner}>
          <h1 className={classes.heading}>
          Ready to get started?
          </h1>
          <h1 className={classes.description}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.
          </h1>
          <Button className={classes.button} variant="contained">Sign Up</Button>
        </div>
    </div>
  );
}