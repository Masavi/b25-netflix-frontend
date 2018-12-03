import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Home from './components/Home/HomeComponent';
import Login from './components/Login/LoginComponent';
import Signup from './components/Signup/SignupComponent';

export default [
    <Route exact path='/'      component={ Home }/>,
    <Route exact path='/login' component={ Login }/>,
    <Route exact path='/signup'      component={ Signup } />
];