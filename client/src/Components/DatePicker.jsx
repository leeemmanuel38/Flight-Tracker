/*
# Author(s): Emmanuel Lee
# Date: May 5, 2020
# Flight Tracker Application 
# team 3
*/

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePickers() {
  const classes = useStyles();

  return (
    <form class="dateForms">
    <form className={classes.container} Validate>
      <TextField
        id="date"
        label="Earliest Departure"
        type="date"
        defaultValue="yyy-mm-dd"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="date"
        label="Latest Return"
        type="date"
        defaultValue="yyy-mm-dd"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
    </form>
  );
}