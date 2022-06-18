import React from "react";
import "../../App.css";
import Card from "../../components/atoms/ProfileCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingTop: "40px"
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={4}
      className={classes.gridContainer}
      justifyContent="center"
    >
      <Card
        title="Work Experience"
        firstcontent="Job Title"
        secondcontent="Company "
        thirdcontent="Date"
              />
    </Grid>
  );
}
