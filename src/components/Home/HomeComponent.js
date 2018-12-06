import React, { Component } from 'react';
import './style.scss';

class HomeComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div id='home-component' className='row center flex-container'>
                <a  href="/login" 
                    className="waves-effect waves-light btn-large center-align red">
                    Iniciar Sesión
                </a>
            </div>
        );
    }
}
 
export default HomeComponent;