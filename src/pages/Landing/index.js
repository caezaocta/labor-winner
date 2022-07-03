import Navbar from '../../components/organisms/Navbar'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import HeroImage from '../../assets/heroImage.png'
import Partner from '../../assets/logo-bwa.png'
import Partner1 from '../../assets/Partner1.png'
import Partner2 from '../../assets/Partner2.png'
import Partner3 from '../../assets/Partner3.png'
import Avatar1 from '../../assets/Avatar1.png'
import Avatar2 from '../../assets/Avatar2.png'
import Avatar3 from '../../assets/Avatar3.png'
import './styles.css'


const Landing = () => {
    return (
        <>
            <Navbar></Navbar>

            <Container id='hero-section'>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: 10 }}>
                    <Grid item xs={6}>
                        <Typography variant="h3" sx={{ marginTop: 9, textAlign: 'left' }}>Join with us in <br /><span variant="h3" style={{ fontWeight: 'bold' }}>Labor Winner</span></Typography>
                        <Typography variant="subtitle" sx={{ fontStyle: 'italic' }}>"We provide the best job seeking platfom for every job seekers out there"</Typography>
                        <br />
                        <Button variant="contained" sx={{ marginTop: 5 }}>Search Now!</Button>

                    </Grid>
                    <Grid item xs={6}>
                        <img src={HeroImage} alt="" style={{ width: 400 }} />
                        <Box sx={{ background: 'linear-gradient(90deg, rgba(113,136,255,1) 2%, rgba(35,174,159,1) 100%)', width: 300, height: 300, borderRadius: '50%', position: 'absolute', top: 150, right: 325, zIndex: '-1' }}></Box>
                    </Grid>
                </Box>
            </Container>

            <Container id="ourPartners-section" sx={{ marginTop: 15 }}>
                <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                    Our Partners
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: 5 }}>
                    <Grid item xs={6}>
                        <img className="ourpartners-img" src={Partner} alt="partner-img" style={{ width: 200 }} />
                        <Typography variant="h6" sx={{ textAlign: 'center', fontSize: '16px', marginTop: '-16px' }}>
                            Build With Angga
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <img className="ourpartners-img" src={Partner1} alt="partner-img" style={{ width: 200 }} />
                        <Typography variant="h6" sx={{ textAlign: 'center', fontSize: '16px', marginTop: '-16px' }}>
                            Kemendikbudristek RI
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <img className="ourpartners-img" src={Partner2} alt="partner-img" style={{ width: 200 }} />
                        <Typography variant="h6" sx={{ textAlign: 'center', fontSize: '16px', marginTop: '-16px' }}>
                            Amazon
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <img className="ourpartners-img" src={Partner3} alt="partner-img" style={{ width: 200 }} />
                        <Typography variant="h6" sx={{ textAlign: 'center', fontSize: '16px', marginTop: '-16px' }}>
                            Unilever Indonesia
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={Partner1} alt="partner-img" style={{ width: 200 }} />
                        <Typography variant="h6" sx={{ textAlign: 'center', fontSize: '16px', marginTop: '-16px' }}>
                            Kemdikbudristek RI
                        </Typography>
                    </Grid>
                </Box>
            </Container>

            <Container id="testimonials-section" sx={{ marginTop: 15 }}>
                <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                    Testimonials
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: 5 }}>
                    <Grid item xs={12}>
                        <Card className="testimonial-card" sx={{ display: 'flex', padding: 5, justifyContent: 'space-between', alignItems: 'center', maxWidth: '800px', marginBottom: '32px' }}>
                            <Grid item xs={6}>
                                <img src={Avatar1} alt="testimonial1" style={{ width: '100px', borderRadius: '50%' }} />
                            </Grid>
                            <Grid item xs={6} sx={{ marginLeft: 4 }}>
                                <Typography variant="h6" sx={{ fontSize: '16px', marginTop: '-16px', fontWeight: 'bold' }}>
                                    Build With Angga
                                </Typography>
                                <Typography variant="subtitle" sx={{ fontSize: '16px', marginTop: '0px', fontStyle: 'italic' }}>
                                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta possimus fugit quo repellat maiores dolorem, <br />
                                    ratione natus ex, cum sint nihil laborum iste voluptatem laudantium beatae doloribus! Cumque, quod aperiam!""
                                </Typography>
                            </Grid>
                        </Card>
                        <Card className="testimonial-card" sx={{ display: 'flex', padding: 5, justifyContent: 'space-around', alignItems: 'center', maxWidth: '800px', marginBottom: '32px' }}>
                            <Grid item xs={6}>
                                <img src={Avatar2} alt="testimonial1" style={{ width: '100px', borderRadius: '50%' }} />
                            </Grid>
                            <Grid item xs={6} sx={{ marginLeft: 4 }}>
                                <Typography variant="h6" sx={{ fontSize: '16px', marginTop: '-16px', fontWeight: 'bold' }}>
                                    Build With Angga
                                </Typography>
                                <Typography variant="subtitle" sx={{ fontSize: '16px', marginTop: '0px', fontStyle: 'italic' }}>
                                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta possimus fugit quo repellat maiores dolorem, ratione natus ex, cum sint nihil laborum iste voluptatem laudantium beatae doloribus! Cumque, quod aperiam!""
                                </Typography>
                            </Grid>
                        </Card>
                        <Card className="testimonial-card" sx={{ display: 'flex', padding: 5, justifyContent: 'space-around', alignItems: 'center', maxWidth: '800px', marginBottom: '32px' }}>
                            <Grid item xs={6}>
                                <img src={Avatar3} alt="testimonial1" style={{ width: '100px', borderRadius: '50%' }} />
                            </Grid>
                            <Grid item xs={6} sx={{ marginLeft: 4 }}>
                                <Typography variant="h6" sx={{ fontSize: '16px', marginTop: '-16px', fontWeight: 'bold' }}>
                                    Build With Angga
                                </Typography>
                                <Typography variant="subtitle" sx={{ fontSize: '16px', marginTop: '0px', fontStyle: 'italic' }}>
                                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta possimus fugit quo repellat maiores dolorem, ratione natus ex, cum sint nihil laborum iste voluptatem laudantium beatae doloribus! Cumque, quod aperiam!""
                                </Typography>
                            </Grid>
                        </Card>
                    </Grid>

                </Box>
            </Container>

        </>
    );
};

export default Landing;