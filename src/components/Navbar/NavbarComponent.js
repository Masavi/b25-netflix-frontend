import React, { Component } from 'react';
import NetflixLogo from '../../assets/netflix.svg';
import getPayload from '../../utils/getPayload';
import './style.scss';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            auth: localStorage.getItem('NETFLIX_TOKEN') !== null
        }
    }

    authRender() {
        if (localStorage.getItem('NETFLIX_TOKEN') !== null) {
            return (
                <ul className="right hide-on-med-and-down">
                    <li><a href="/me">Hola {getPayload().first_name}</a></li>
                    <li><a href="/browse">Catálogo</a></li>
                    <li><a href="/logout">Logout</a></li>
                </ul>
            );
        } else {
            return (
                <ul className="right hide-on-med-and-down">
                    <li><a href="/login">Login</a></li>
                    <li><a href="/signup">Sign Up</a></li>
                </ul>
            );
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper bg-main grey darken-4">
                    <a href="/" className="brand-logo">
                        <img 
                            src={NetflixLogo}
                            height="25em"
                            alt="Netflix Logo"
                            />
                    </a>
                    {
                        this.authRender()
                    }
                </div>
            </nav>
        )
    }
}

export default Navbar;