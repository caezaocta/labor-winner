import React from "react";
import joblist from "../../atoms/Data";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';

export default function List(props) {
    const listitems = joblist.map((joblist) => (
    <Card variant="outlined" sx={{ width : 500}}>
      <CardContent >
      <Box sx={{display: 'flex'}}>
        <CardMedia sx={{pr: 2}} >
         <img src={joblist.image_url} height= "100" width="100" alt="Logo" />
         </CardMedia>   
         <Box sx={{display: 'column'}}>    
        <Typography sx={{ fontSize: 20 }} color="primary" gutterBottom>
          {joblist.name}
        </Typography>
        <Typography sx={{ fontSize: 16 }} variant="body2">
          {joblist.title}
        </Typography>
        <Typography sx={{ fontSize: 10 }} variant="body2">
          {joblist.desc}
        </Typography>
        <Typography sx={{ fontSize: 14, pt: 1, color :"green" }} variant="body2">
          Salary : {joblist.salary}
        </Typography>
        </Box>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">Apply</Button>
      </CardActions>
    </Card>
  ));
  return <div>{listitems}</div>;
}

