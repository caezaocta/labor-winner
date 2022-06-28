import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import BasicTextFields from "../../atoms/TextFields";
import ResponsiveDateRangePicker from "../../atoms/DatePicker"

const useStyles = makeStyles({
  root: {
    minWidth: 400
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 36,
    paddingLeft: 10
  },
  content: {
    marginBottom: 10,
    paddingLeft: 10
  }
});

export default function ProfileCard(props) {
  const classes = useStyles();
   return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="primary">
          {props.title}
        </Typography>
        <Typography className={classes.content} color="textSecondary">
          {props.firstcontent}
        </Typography>
        <BasicTextFields />
        <Typography className={classes.content} color="textSecondary">
          {props.secondcontent}
        </Typography>
        <BasicTextFields />
        <Typography className={classes.content} color="textSecondary">
          {props.thirdcontent}
        </Typography>
        <ResponsiveDateRangePicker/>
        <Typography className={classes.content} color="textSecondary">
          Hingga
        </Typography>
        <ResponsiveDateRangePicker/>
                </CardContent>
      <CardActions>
        <Button size="small">Save</Button>
        <Button size="small">Cancel</Button>
      </CardActions>
    </Card>
  );
}
