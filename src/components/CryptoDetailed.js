import React from "react";
import {makeStyles } from "@material-ui/core";
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
    
}));

// custom function to format text
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export default function CryptoDetailed(props) {
    const classes = useStyles();

  return (
    <div>
         <div>
            <div>
                <h1>
                {props.row.name}
                </h1>
            </div>
          
          <h1 >
            Market Stats
          </h1>
          <div>
            <div>
                <div >Market Cap</div>
                <p>{formatter.format(props.row.quote.USD.market_cap)}</p>
            </div>
            
            <div>
                <div>Volume</div>
                <p>{formatter.format(props.row.quote.USD.volume_24h)}</p>
            </div>
    
            <div>
                <div>circulating supply</div>
                <p>{formatter.format(props.row.quote.USD.volume_24h)}</p>
            </div>
            
            <div>
                <div>Typical Hold Time</div>
                <p>{formatter.format(props.row.quote.USD.volume_24h)}</p>
            </div>
            
            <div>
                <div>Volume</div>
                <p>{formatter.format(props.row.quote.USD.volume_24h)}</p>
            </div>
            
        </div>
        </div>
        <div>
          <h1>
          Ready to get started?
          </h1>
          <h1>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.
          </h1>
          <Button variant="contained">Sign Up</Button>
        </div>
    </div>
  );
}