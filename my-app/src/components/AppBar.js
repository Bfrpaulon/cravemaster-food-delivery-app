import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.primary[100],
  },
}));

const AppNavbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          {/* Adicione o ícone do menu aqui */}
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CraveMaster
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default AppNavbar;
