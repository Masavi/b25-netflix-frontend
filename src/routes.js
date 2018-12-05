import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Home from './components/Home/HomeComponent';
import Login from './components/Login/LoginComponent';
import Signup from './components/Signup/SignupComponent';
//import Browse from './components/Browse/BrowseComponent';

export default [
    <Route exact path='/'        component={ Home }    key={ 1 }/>,
    <Route exact path='/login'   component={ Login }   key={ 2 }/>,
    <Route exact path='/signup'  component={ Signup }  key={ 3 }/>,
    //<Route exact path='/browse'  component={ Browse }  key={ 4 }/>
];