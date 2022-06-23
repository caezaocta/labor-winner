import Button from '../../components/atoms/Button'
import ButtonAuth from '../../components/atoms/ButtonAuth'
import Navbar from '../../components/organisms/Navbar'

const Landing = () => {
    return (
        <>
            <Navbar></Navbar>
            <Button header="Search Now"></Button>
            <br />
            <ButtonAuth header="Log In"></ButtonAuth>
        </>
    )
}

export default Landing;