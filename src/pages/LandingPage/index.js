import React from 'react'
import Button from '../../components/atoms/Button'
import AuthButton from '../../components/atoms/AuthButton'

function LandingPage() {
    return (
        <>
            <Button header={"Search Now"}></Button>
            <br />
            <AuthButton header={"Log In"}></AuthButton>
        </>
    )
}

export default LandingPage;