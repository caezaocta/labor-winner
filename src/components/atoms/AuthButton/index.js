import React from 'react'
import ButtonMui from '@mui/material/Button'

function Authbutton({ header, href }) {
    return (
        <>
            <ButtonMui variant="contained" href={href} >
                {header}
            </ButtonMui >
        </>
    )
}

export default Authbutton;