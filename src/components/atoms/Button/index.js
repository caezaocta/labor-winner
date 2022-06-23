import React from 'react';
import ButtonMui from '@mui/material/Button';

const Button = ({ buttonText }) => {
    return (
        <>
            <ButtonMui variant="contained"> {buttonText} </ButtonMui>{' '}
        </>
    );
};

export default Button;
