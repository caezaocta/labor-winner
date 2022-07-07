import React from "react";
import joblist from "../../atoms/Data";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom'

export default function List(props) {
    const listitems = joblist.map((joblist) => (
    <Card variant="outlined" sx={{ width : 500}}>
      <Link to={{
        pathname: `/search-page/${joblist.name}`,
        state: {  name :joblist.name ,
                  title :joblist.title,
                  salary : joblist.salary,
                  qualification:joblist.qualification,
                  skill:joblist.skill,
                  company:joblist.company,
                  joblevel:joblist.level,
                  desc:joblist.desc,
                  image_url:joblist.image_url,
                  location:joblist.location,
                  skills:joblist.skills
                }}} 
        style={{ textDecoration: 'none' }} >
      <CardContent >
      <Box sx={{display: 'flex'}}>
        <CardMedia sx={{pr: 2}} >
         <img src={joblist.image_url} height= "100" width="100" alt="Logo" />
         </CardMedia>   
         <Box sx={{display: 'column'}}>    
        <Typography sx={{ fontSize: 20 }} color="primary" gutterBottom>
          {joblist.name}
        </Typography>
        <Typography sx={{ fontSize: 16 }} variant="body2" color="black">
          {joblist.title}
        </Typography>
        <Typography sx={{ fontSize: 10 }} variant="body2" color="black">
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
      </Link>
    </Card>
  ));
  return <div>{listitems}</div>;
}
