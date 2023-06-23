import React from 'react';
import { Container, Typography, makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  heroSection: {
    backgroundColor: theme.palette.bg[100],
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}));

const HeroSection = () => {
  const classes = useStyles();

  return (
    <Container className={classes.heroSection}>
      <Typography variant="h4" component="h1" align="center">
        Encontre os melhores restaurantes perto de você!
      </Typography>
    </Container>
  );
};

export default HeroSection;
