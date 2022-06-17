import React from 'react'
import ButtonMui from '@mui/material/Button';

const Button = ({ header }) => {
    return (
        <>
            <ButtonMui variant="contained">{header}</ButtonMui>
        </>
    )
}

export default Button