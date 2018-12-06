import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import './style.scss';

const LOGIN = gql`
    mutation LOGIN($email:String!,$password:String!){
        login(email:$email,password:$password){
            token
        }
    }
`

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

    handleSubmit = (e, login) => {
        e.preventDefault();
        console.log(this.state);
        login({variables:{...this.state}});
    }

    // Cachamos el token que manda el server
    catchData = (data) => {
        console.log('DATA', data);
        console.log('LOGIN', data.login);

        // Cachamos el token
        const token = data.login.token;

        // Almacenamos token en localStorage
        localStorage.setItem('NETFLIX_TOKEN', token);

        // Redireccionar a home tras signup exitoso
        this.props.history.push('/');
    }

    renderForm() {
        return (
        <React.Fragment>
            {/* Email */ }
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

            {/* Password */ }
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

            {/* Submit */ }
            <button className="btn waves-effect waves-light" type="submit" name="action"> Enviar
                <i className="material-icons right"></i>
            </button>
        </React.Fragment>
        );
    }

    render() { 
        return (
            <Mutation mutation={LOGIN}>
            {
                (login, {data, error}) => {
                
                    if (data) this.catchData(data);
                    if (error) console.log(error);

                    return (
                        <div className='center-all'>
                            <div id='login-component' className='grey darken-4 round-corners'>
                                <h1 className="center-align white-text"> Login </h1>

                                {/* Form */}
                                <div className="row">
                                    <form className="col s12" onSubmit={ e => this.handleSubmit(e, login)}>
                                        {this.renderForm()}
                                    </form>
                                </div>
                            </div>
                        </div> 
                    );
                }
            }
            </Mutation>
        );
    }
}
 
export default LoginComponent;