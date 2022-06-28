import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import logo from '../../atoms/Logo/logo.png';
import { Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import IconButton from '@mui/material/IconButton';

//
const footerheader = {
    bgcolor: "#3f50b5" ,
    color:"white"
    };
const footercontainer = {
    color :"inherit",
    textAlign : "center",
    alignItems : "flex-start",
    direction : "column",
    justifyContent :"center",
    };
const footerlist = {  
    fontSize: 15,
    color :"inherit"
    };

export default function Footer() {
    return <footer>
        <Box sx={{ ...footerheader, }} >
            <Container maxWidth="auto" >
                <Grid container spacing ="5" >
                    <Grid item xs={8} >
                        <Box>
                        <img src={logo} alt="logo" height={80} width={80}/>
                       </Box>
                    </Grid>
                    <Grid  item xs={2}  container>
                        <Box >
                            <Link sx={{ ...footercontainer, }} href = "/" >
                                CONTACTS
                            </Link>
                            <Typography sx={{ ...footerlist, }} paddingTop={1} >
                                service@laborwinner.com 
                            </Typography>
                            <Typography sx={{ ...footerlist, }} >   
                                021-7008902
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid  
                    item xs={2}  container
                                       >
                        <Box >
                            <Link sx={{ ...footercontainer, }} href = "/" >
                                SOCIAL MEDIA
                            </Link>
                            <Typography sx={{ ...footerlist, }} >   
                            <IconButton>
                            <InstagramIcon color="secondary" href = "/"/>
                            </IconButton>
                            <IconButton>
                            <TwitterIcon color="primary"  href = "/"/>
                            </IconButton>
                            <IconButton>
                            <YouTubeIcon href = "/"/>
                            </IconButton>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                </Container>
            <Box bgcolor ="black" textAlign= "center" color="white" >
           LABOR-WINNER &reg; 2022
            </Box>
        </Box>
    </footer>
}