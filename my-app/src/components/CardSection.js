import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 300,
    marginBottom: theme.spacing(4),
  },
  cardImage: {
    height: 200,
  },
}));

const CardSection = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      {/* Card 1 */}
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardImage}
            component="img"
            src="caminho/para/imagem"
            alt="Nome do Restaurante"
          />
          <CardContent>
            <Typography variant="h6" component="div">
              Nome do Restaurante
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Descrição do Restaurante
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {/* Card 2 */}
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardImage}
            component="img"
            src="caminho/para/imagem"
            alt="Nome do Restaurante"
          />
          <CardContent>
            <Typography variant="h6" component="div">
              Nome do Restaurante
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Descrição do Restaurante
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {/* Adicione mais cards conforme necessário */}
    </Grid>
  );
};

export default CardSection;
