import React, { Component } from 'react';
import NetflixLogo from '../../assets/netflix.svg';
import './style.scss';

class Navbar extends Component {

    state={}

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
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/login">Login</a></li>
                        <li><a href="/signup">Sign Up</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;