import Navbar from '../../components/organisms/Navbar';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import './styles.css'
import HeroImage from '../../../src/assets/heroImage.png'
import LogoBwa from '../../../src/assets/logo-bwa.png'
import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const Landing = () => {
    return (
        <>
            <Navbar></Navbar>

            <Container className="hero-section" id="hero-section">
                <Box gridTemplateColumns="repeat(12, 1fr)" gap={2} sx={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center' }}>
                    <Box gridColumn="span 6" sx={{ marginTop: 25 }}>
                        <Typography variant="h3">
                            Start your journey <span style={{ fontWeight: 'bold' }}>journey</span>
                            <br />
                            here
                        </Typography>
                        <Typography variant="subtitle" style={{ fontWeight: '200', fontSize: '25px' }}>
                            We are here to find the most suitable jobs for you here
                            <br />
                            We also provide job seekers with top skills to prepare them
                        </Typography>
                    </Box>
                    <Box gridColumn="span 6" sx={{ marginTop: 15 }}>
                        <img src={HeroImage} alt="halo" style={{ width: 500 }} />
                    </Box>
                </Box>
            </Container>

            <Container className="testimonials-section" id="testimonials-section" sx={{ minHeight: "500px", marginTop: "128px" }}>
                <Typography variant="h6" center sx={{ fontSize: 16, textAlign: 'center', marginBottom: 10 }}>
                    <h1>Our partners</h1>
                </Typography>

                <Box gridTemplateColumns="repeat(12, 1fr)" gap={2} sx={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center' }}>
                    <Card style={{ minWidth: 275, backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}>
                        <CardMedia
                            component="img"
                            height="180"
                            image={LogoBwa}
                            alt="green iguana"
                            style={{ borderRadius: '50%', textAlign: 'center' }}
                        />
                        <CardContent>
                            <Typography sx={{ textAlign: 'center', fontSize: 16 }} color="text.primary" gutterBottom>
                                Word of the Day
                            </Typography>

                        </CardContent>
                    </Card>
                    <Card style={{ minWidth: 275, backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}>
                        <CardMedia
                            component="img"
                            height="180"
                            image={LogoBwa}
                            alt="green iguana"
                            style={{ borderRadius: '50%', textAlign: 'center' }}
                        />
                        <CardContent>
                            <Typography sx={{ textAlign: 'center', fontSize: 16 }} color="text.primary" gutterBottom>
                                Word of the Day
                            </Typography>

                        </CardContent>
                    </Card>
                    <Card style={{ minWidth: 275, backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}>
                        <CardMedia
                            component="img"
                            height="180"
                            image={LogoBwa}
                            alt="green iguana"
                            style={{ borderRadius: '50%', textAlign: 'center' }}
                        />
                        <CardContent>
                            <Typography sx={{ textAlign: 'center', fontSize: 16 }} color="text.primary" gutterBottom>
                                Word of the Day
                            </Typography>

                        </CardContent>
                    </Card>
                    <Card style={{ minWidth: 275, backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}>
                        <CardMedia
                            component="img"
                            height="180"
                            image={LogoBwa}
                            alt="green iguana"
                            style={{ borderRadius: '50%', textAlign: 'center' }}
                        />
                        <CardContent>
                            <Typography sx={{ textAlign: 'center', fontSize: 16 }} color="text.primary" gutterBottom>
                                Word of the Day
                            </Typography>

                        </CardContent>
                    </Card>
                </Box>
            </Container>

            <Container className="ourpartners-section" id="ourpartners-section" sx={{ minHeight: "500px" }}>
                <h1>Our partners</h1>
            </Container>

        </>
    );
};

export default Landing;
