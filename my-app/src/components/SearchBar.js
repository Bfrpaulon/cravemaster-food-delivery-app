import React from 'react';
import { Box, TextField, Button, makeStyles } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(4),
  },
  searchInput: {
    marginRight: theme.spacing(2),
    backgroundColor: theme.palette.bg[200],
  },
}));

const SearchBar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.searchContainer}>
      <TextField
        className={classes.searchInput}
        variant="outlined"
        placeholder="Pesquisar restaurantes ou tipos de comida"
        fullWidth
        InputProps={{
          startAdornment: <SearchIcon />,
        }}
      />
      <Button variant="contained" color="primary">
        Pesquisar
      </Button>
    </Box>
  );
};

export default SearchBar;
