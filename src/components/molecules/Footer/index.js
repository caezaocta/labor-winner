import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import logo from '../../atoms/Logo/logo.png';
//
export default function Footer() {
    return <footer>
        <Box bgcolor="text.secondary" color="white">
            <Container maxWidth="lg" >
                <Grid container spacing ="5">
                    <Grid item xs={12} sm={6}>
                        <Box>
                        <img src={logo} alt="logo" height={100} width={100}/>
                       </Box>
                    </Grid>
                    <Grid  item xs={12} sm={6}>
                        <Box >
                            <Link href = "/" color="inherit" textAlign= "center">
                                Contacs
                            </Link>
                        </Box>
                        <Box >
                            <Link href = "/" color="inherit">
                                Social Media
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
                <Box textAlign= "center" padding={10} pt={{xs: 5, sm: 10}} pb={{xs: 5, sm: 0}}>
                Labor-Winner &reg; 2022
                </Box>
            </Container>
        </Box>
    </footer>
}