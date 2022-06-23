import React from 'react';
import ButtonMui from '@mui/material/Button';

function Authbutton({ buttonText, href }) {
    return (
        <>
            <ButtonMui variant="contained" href={href}>
                {buttonText}
            </ButtonMui>
        </>
    );
}

export default Authbutton;
