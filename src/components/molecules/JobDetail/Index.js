import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import FavButton from '../../atoms/FavButton';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import CustomizedSnackbars from '../../atoms/SnackBar';


export default function DetailCard() {
  const { state } = useLocation();
  return (
    <Card sx={{ px: 15, py: 5 }}>
      <Box sx={{ display: 'flex' }}>
        <Grid container
          direction="row"
          justifyContent="space-around"
          alignItems="center">
          <CustomizedSnackbars />
          <Avatar src={state.image_url} sx={{ width: 100, height: 100 }} alt="profilelogo" />
          <FavButton />
        </Grid>
      </Box>
      <Box>
        <Grid >
          <Typography variant="h5" color="primary" width="120">
            Job Title : {state.title}
          </Typography>
          <Typography variant="h5" color="primary">
            Company : {state.name}
          </Typography>
          <Typography variant="h5" color="primary">
            Salary : {state.salary}
          </Typography>
          <Typography variant="h5" color="primary">
            Location : {state.location}
          </Typography>
        </Grid>
      </Box>
      <Box>
        <Grid direction="row"
          justifyContent="space-around"
          alignItems="center">
          <Typography variant="h5" color="primary">
            Jobdesk
          </Typography>
          <Typography>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </Typography>
          <Typography variant="h5" color="primary">
            Minimum Qualification
          </Typography>
          <Typography>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </Typography>
          <Typography variant="h5" color="primary">
            Required Skill
          </Typography>
          <Typography>
            {state.skills}
          </Typography>
          <Typography variant="h5" color="primary">
            Summary
          </Typography>
          <Typography>
            Job Level : Internship
          </Typography>
          <Typography variant="h5" color="primary">
            About the Company
          </Typography>
          <Typography>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </Typography>
        </Grid>
      </Box>
    </Card>


  );

}