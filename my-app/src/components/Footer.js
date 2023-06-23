import React from 'react';
import { Typography, Link, makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.bg[300],
    padding: theme.spacing(4),
    marginTop: 'auto',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="text.secondary" align="center">
        &copy; {new Date().getFullYear()} CraveMaster. Todos os direitos reservados.
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        <Link href="#">Termos de Uso</Link> | <Link href="#">Política de Privacidade</Link>
      </Typography>
    </footer>
  );
};

export default Footer;
