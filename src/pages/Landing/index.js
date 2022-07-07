import Navbar from '../../components/organisms/Navbar'
import { Redirect } from 'react-router-dom'
import { useState, } from 'react'

const Landing = () => {
    const [isLoggedIn, setIsLoggedIn] = useState('')
    const loginData = JSON.parse(localStorage.getItem('active-data')) || []
    console.log(loginData)
    // setIsLoggedIn(loginData);

    // if (loginData.length) {
    //     // console.log('setIsLoggedIn');
    //     setIsLoggedIn(loginData);
    // }
    return (
        <>
            {/* <Navbar></Navbar> */}
            {
                <Navbar />
            }
        </>
    );
};

export default Landing;