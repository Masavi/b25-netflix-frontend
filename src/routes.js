import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Components
import Home from './components/Home/HomeComponent';
import Login from './components/Login/LoginComponent';
import Signup from './components/Signup/SignupComponent';
import Browse from './components/Browse/BrowseComponent';

const Logout = () => {
    localStorage.removeItem('NETFLIX_TOKEN');
    // return this.props.history.push('/') 
    return <Redirect to="/login" />
}

export default [
    <Route exact path='/'        component={ Home }    key={ 1 }/>,
    <Route exact path='/signup'  component={ Signup }  key={ 2 }/>,
    <Route exact path='/login'   component={ Login }   key={ 3 }/>,
    <Route exact path='/logout'  component={ Logout }  key={ 4 }/>,
    <Route exact path='/browse'  component={ Browse }  key={ 5 }/>
];