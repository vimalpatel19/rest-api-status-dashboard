import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import DashboardIcon from '@material-ui/icons/Dashboard';

import pjson from '../../package.json';

const useStyles = makeStyles({
    heading: {
      paddingLeft: 25,
    }
  });

function Menu() {
    const classes = useStyles();

    return(
        <AppBar position="static">
            <Toolbar>
            <Badge badgeContent={pjson.version} anchorOrigin={{vertical: 'top', horizontal: 'right' }} color="secondary">
                <DashboardIcon fontSize="large" />
            </Badge>
            <Typography variant="h6" color="inherit" className={classes.heading}>
                {pjson.appName}
            </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Menu;