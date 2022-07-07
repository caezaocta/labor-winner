import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { styled } from '@mui/material/styles';
import { useState } from 'react'
import Alert from '@mui/material/Alert'
import Link from '@mui/material/Link'
import { Redirect } from 'react-router-dom';

const CustomInput = styled(TextField)({
    '& label.Mui-focused': {
        color: 'blue',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'blue',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'grey',
        },
        '&:hover fieldset': {
            borderColor: 'blue',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'blue',
        },
    },
});

const Register = () => {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [flag, setFlag] = useState(false)
    // const [login, setLogin] = useState(true)
    const [signUpList, setSignUpList] = useState(
        JSON.parse(localStorage.getItem("register-data")) || []
    );
    const [isRegistered, setIsRegistered] = useState('')

    const handleChange = (prop) => (e) => {
        setPassword(e.target.value);
        setValues({ ...values, [prop]: e.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = (event) => {
        console.log('handle submit')
        event.preventDefault()
        setFlag(false)
        setSignUpList((signUpListPrev) => {
            const registerData = [
                ...signUpListPrev,
                {
                    fullName: "John",
                    email,
                    password
                }
            ];
            localStorage.setItem("register-data", JSON.stringify(registerData));
            return registerData;
        });

        setIsRegistered(signUpList)
        console.log("Register data saved to local storage");
        // setLogin(!login)
    }

    const handleClick = () => {
        // setLogin(!login)
    }


    return (
        <>
            {isRegistered ? <Redirect to="/login" />
                :
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Card sx={{ minWidth: 600, padding: 5 }}>
                        <CardContent sx={{ display: 'block' }}>
                            <Typography sx={{ fontSize: 32, fontWeight: 'bold' }} component="div">
                                Create New Account
                            </Typography>
                            <Typography sx={{ fontSize: 16, fontWeight: 'light' }} component="div">
                                Type in your details.
                            </Typography>

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <CustomInput
                                        sx={{ marginTop: 5 }}
                                        label="Email"
                                        id="email"
                                        type="email"
                                        fullWidth

                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <FormControl sx={{ marginTop: 2, }} variant="outlined" fullWidth>
                                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            type={values.showPassword ? 'text' : 'password'}
                                            value={values.password}
                                            onChange={handleChange('password')}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Password"
                                        />
                                    </FormControl>
                                </div>



                                {flag && (
                                    <Alert severity="error" fullWidth sx={{ marginTop: '20px' }}>
                                        Please fill every field
                                    </Alert>
                                )}

                                <CardActions>
                                    <Button sx={{ marginTop: 6, height: '50px' }} variant="contained" fullWidth type="submit" >Register</Button>
                                    {/* <Redirect to="/login">
                                </Redirect> */}
                                </CardActions>

                                <Typography sx={{ fontWeight: 'light', fontSize: '14px', marginTop: 6, float: 'right' }}>
                                    Already have an account?
                                    <Link sx={{ cursor: 'pointer', fontColor: 'primary' }} onClick={handleClick}> login here</Link>
                                </Typography>
                            </form>
                        </CardContent>
                    </Card>
                </Box>
            }



        </>
    )
}

export default Register;