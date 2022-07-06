import Navbar from '../../components/organisms/Navbar'
import { Redirect } from 'react-router-dom'

const Landing = ({ authorized }) => {
    if (!authorized) {
        return <Redirect to="/login"></Redirect>
    }

    const loggedInData = JSON.parse(localStorage.getItem('active-data')) || []
    return (
        <>
            {loggedInData
                ? <Navbar userLoggedIn="user" />
                : <Navbar userLoggedIn="Login" />
            }
        </>
    );
};

export default Landing;