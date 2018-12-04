import React, { Component } from 'react';

class SignupComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }
    }

    handleInput = (e) => {

        switch (e.target.id) {
            case 'first_name':
                this.setState({ first_name: e.target.value });
                break;

            case 'last_name':
                this.setState({ last_name: e.target.value });
                break;

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
            <div id='signup-component'>

                {/* Signup Title */}
                <h1 className='center-align'> Signup </h1>

                {/* Form */}
                <div className="row">
                    <form className="col s12" onSubmit={this.handleSubmit}>

                        {/* First Name & Last Name */}
                        <div className="row">
                            <div className="input-field col s6">
                                <input 
                                    id="first_name" 
                                    type="text" 
                                    className="validate" 
                                    value={this.state.first_name}
                                    onChange={this.handleInput}
                                />
                                <label>First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input 
                                    id="last_name" 
                                    type="text" 
                                    className="validate" 
                                    value={this.state.last_name}
                                    onChange={this.handleInput}        
                                />
                                <label>Last Name</label>
                            </div>
                        </div>

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

export default SignupComponent;
