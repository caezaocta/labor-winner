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

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
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



    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ minWidth: 600, padding: 5 }}>
                <CardContent sx={{ display: 'block' }}>
                    <Typography sx={{ fontSize: 32, fontWeight: 'bold' }} component="div">
                        Create New Account
                    </Typography>
                    <Typography sx={{ fontSize: 16, fontWeight: 'light' }} component="div">
                        Type in your details.
                    </Typography>
                    <form>
                        <div>
                            <CustomInput
                                sx={{ marginTop: 5 }}
                                label="Email"
                                id="email"
                                type="email"
                                fullWidth

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
                    </form>


                </CardContent>

                <CardActions>
                    <Button sx={{ marginTop: 6, height: '50px' }} variant="contained" fullWidth>Register</Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default Register;