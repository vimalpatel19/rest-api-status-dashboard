import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Menu from './components/Menu.js';
import Status from './components/Status.js';
import Services from './services/services.json';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 25,
  }
});

function App() {
  const classes = useStyles();

  return (
    <Fragment>
      <Menu />
      <div className={classes.root}>
        <Grid container direction={'row'} spacing={4}>
          {Services.map((value, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Status input={value} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Fragment>
  );
}

export default App;
