import Button from '../../components/atoms/Button'
import AuthButton from '../../components/atoms/AuthButton'
import Navbar from '../../components/organisms/Navbar'

const LandingPage = () => {
    return (
        <>
            <Navbar></Navbar>
            <Button header={"Search Now"}></Button>
            <br />
            <AuthButton header={"Log In"}></AuthButton>
        </>
    )
}

export default LandingPage;