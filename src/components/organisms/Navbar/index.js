import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Logo from '../../../../src/assets/logo-laborwinner.png'

export default function Navbar({ userLoggedIn }) {

    return (
        < Box sx={{ flexGrow: 1 }
        }>
            <AppBar position="static" sx={{ padding: 1 }}>

                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <Button>
                            <img src={Logo} alt="labor-winner-logo"
                                style={{ width: 50 }}
                            />
                        </Button>
                    </Box>
                    <Box align="center" sx={{ flexGrow: 1 }}>
                        <Button color="inherit">Search Job</Button>
                        <Button color="inherit">Our Partners</Button>
                        <Button color="inherit">Testimonial</Button>
                        <Button color="inherit">Contact Us</Button>
                    </Box>
                    <Button color="inherit">{userLoggedIn}</Button>
                </Toolbar>

            </AppBar >
        </Box >
    );
}
