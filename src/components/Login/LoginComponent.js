import React, { Component } from 'react';

class LoginComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleInput = (e) => {

        switch (e.target.id) {
            case 'email':
                this.setState({ email: e.target.value });
                break;

            case 'password':
                this.setState({ password: e.target.value });
                break;

            default:
                break;
        }

    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() { 
        return ( 
            <div id='login-component'>
                <h1 className="center-align"> Login </h1>

                {/* Form */}
                <div className="row">
                    <form className="col s12" onSubmit={this.handleSubmit}>

                        {/* Email */}
                        <div className="row">
                            <div className="input-field col s12">
                                <input 
                                    id="email" 
                                    type="email" 
                                    className="validate" 
                                    value={this.state.email}
                                    onChange={this.handleInput}
                                />
                                <label>Email</label>
                            </div>
                        </div>

                        {/* Password */}
                        <div className="row">
                            <div className="input-field col s12">
                                <input 
                                    id="password" 
                                    type="password" 
                                    className="validate" 
                                    value={this.state.password}
                                    onChange={this.handleInput}
                                />
                                <label>Password</label>
                            </div>
                        </div>

                        {/* Submit */}
                        <button className="btn waves-effect waves-light" type="submit" name="action">Enviar
                            <i className="material-icons right"></i>
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default LoginComponent;