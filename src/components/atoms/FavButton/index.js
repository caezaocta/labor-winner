import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles({
  fav: {
    display: 'block',
  },
});

export default function FavButton() {
  const classes = useStyles();
  return (
    <FormControlLabel
      className={classes.fav}
      control={
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          name="checkedH"
        />
      }
    />
  );
}
