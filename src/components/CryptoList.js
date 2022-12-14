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
    <Paper>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox" />
            <TableCell  align="right">Rank</TableCell>
            <TableCell  align="right">Name</TableCell>
            <TableCell  align="right">Price (USD)</TableCell>
            <TableCell  align="right">1 hr %</TableCell>
            <TableCell  align="right">24 hr %</TableCell>
            <TableCell  align="right">7 day %</TableCell>
            <TableCell  align="right">Market Cap</TableCell>
            <TableCell  align="right">Volume</TableCell>
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
              <TableCell align="right">{row.quote.USD.price}</TableCell>
              <TableCell align="right">{row.quote.USD.percent_change_1h.toFixed(2)}</TableCell>
              <TableCell align="right">{row.quote.USD.percent_change_24h.toFixed(2)}</TableCell>
              <TableCell  align="right">{row.quote.USD.percent_change_7d.toFixed(2)}</TableCell>
              <TableCell align="right">{row.quote.USD.market_cap}</TableCell>
              <TableCell align="right">{row.quote.USD.volume_24h}</TableCell>
              </ExpandableTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );

}

