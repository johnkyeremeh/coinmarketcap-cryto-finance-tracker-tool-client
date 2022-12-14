import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/ArrowDownward';
import KeyboardArrowUpIcon from '@mui/icons-material/ArrowUpward'
import { green, red } from '@material-ui/core/colors';
import CryptoDetailed from "./CryptoDetailed"

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto'
      },
      table: {
        minWidth: 650,
      },
      header: {
        backgroundColor: `rgba(255, 255, 255, 1)`,  
        boxShadow: `inset 0px -2px 0px rgba(176, 176, 176, 1)`,  
        height: `36px`
      },
      name: {
        color: `rgba(176, 176, 176, 1)`, 
        fontStyle: `normal`,  
        fontWeight: `700`, 
        letterSpacing: `0px`,  
        textDecoration: `none`,  
        textTransform: `uppercase`, 
      },
      primary: {
        fontStyle: `bold`,
        fontWeight: `700`,
        color: `rgba(0, 0, 0, 0.87)`,
      },
      positive: {
        color: green,
      }, 
      negative: {
        color: red
      }
});

// custom function to format text
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

const ExpandableTableRow = ({ children, expandComponent, ...otherProps }) => {

  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <>
      <TableRow {...otherProps}>
        <TableCell padding="checkbox">
          <IconButton onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {children}
      </TableRow>
      {isExpanded && (
        <TableRow>
          <TableCell padding="checkbox" />
          {expandComponent}
        </TableRow>
      )}
    </>
  );
};

export default function CryptoList(props) {
  const classes = useStyles();
  const records = props.records
  return (
    <Paper className={classes.root}>
      <Table aria-label="simple table" className={classes.table}>
        <TableHead className={classes.header}>
          <TableRow>
            <TableCell padding="checkbox" />
            <TableCell className={classes.name} align="right">Rank</TableCell>
            <TableCell className={classes.name} align="right">Name</TableCell>
            <TableCell className={classes.name} align="right">Price (USD)</TableCell>
            <TableCell className={classes.name} align="right">1 hr %</TableCell>
            <TableCell className={classes.name} align="right">24 hr %</TableCell>
            <TableCell className={classes.name} align="right">7 day %</TableCell>
            <TableCell className={classes.name} align="right">Market Cap</TableCell>
            <TableCell className={classes.name} align="right">Volume</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {records.map(row => (
            <ExpandableTableRow
              key={row.name}
              expandComponent={<TableCell colSpan="5"><CryptoDetailed row={row} /></TableCell>}
              hover
              row={row}
            >
              <TableCell align="right">{row.cmc_rank}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{formatter.format(row.quote.USD.price)}</TableCell>
              
              {row.quote.USD.percent_change_1h < 0 ? (
            <TableCell style={{color:'red'}} align="right">{row.quote.USD.percent_change_1h.toFixed(2)}</TableCell>
          ) : (
            <TableCell style={{color:'green'}} align="right">{row.quote.USD.percent_change_1h.toFixed(2)}</TableCell>
          )}
  
              {row.quote.USD.percent_change_24h < 0 ? (
            <TableCell style={{color:'red'}} align="right">{row.quote.USD.percent_change_24h.toFixed(2)}</TableCell>
          ) : (
            <TableCell style={{color:'green'}} align="right">{row.quote.USD.percent_change_24h.toFixed(2)}</TableCell>
          )}
              {row.quote.USD.percent_change_7d < 0 ? (
            <TableCell style={{color:'red'}} align="right">{row.quote.USD.percent_change_7d.toFixed(2)}</TableCell>
          ) : (
            <TableCell style={{color:'green'}} align="right">{row.quote.USD.percent_change_7d.toFixed(2)}</TableCell>
          )}
              <TableCell align="right">{formatter.format(row.quote.USD.market_cap)}</TableCell>
              <TableCell align="right">{formatter.format(row.quote.USD.volume_24h)}</TableCell>
              </ExpandableTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );

}

