import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './header.styles';
import { Menu } from './menu';

export const Header = props => {
  const { showMenu } = props;
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          My App
        </Typography>
        {showMenu ? (
          <Menu />
        ) : (
          <>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Contact</Button>
            <Button color="inherit">About</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
