import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Landing from '../pages/Landing';
import Register from '../pages/Register';
import Login from '../pages/Login';

function Routes() {
    // const registeredData = JSON.parse(localStorage.getItem('register-data'))
    // const loggedInData = JSON.parse(localStorage.getItem('active-data'))

    return (

        <Router>
            <Switch>
                <Route exact path="/">
                    <Landing></Landing>
                </Route>
                <Route exact path="/landing-page">
                    <Landing></Landing>
                </Route>
                <Route exact path="/register">
                    <Register></Register>
                </Route>
                <Route exact path="/login">
                    <Login></Login>
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;
