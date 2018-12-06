import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const REGISTER = gql`

    mutation Register($first_name:String!,$last_name:String!,$email:String!,
    $password:String!){
        signup(data:{
            first_name:$first_name,
            last_name:$last_name,
            email:$email,
            password:$password
        }){
            token
        }
    }
`;

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

    handleSubmit = (e, signup) => {
        e.preventDefault();
        console.log(this.state);
        signup({variables:{...this.state}});
    }

    // Cachamos el token que manda el server
    catchData = (data) => {
        console.log('DATA', data);
        console.log('SIGNUP', data.signup);
        
        // Cachamos el token
        const token = data.signup.token;

        // Almacenamos token en localStorage
        localStorage.setItem('NETFLIX_TOKEN', token);

        // Redireccionar a home tras signup exitoso
        this.props.history.push('/');
    }

    renderForm(){
        return (

        <React.Fragment>
            {/* First Name & Last Name */ }
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
            <button className = "btn waves-effect waves-light" type="submit" name="action"> Enviar
                <i className = "material-icons right" ></i>
            </button>

        </React.Fragment>
        );
    }
    
    render() {
        return (
            <Mutation mutation={REGISTER}>
            {
                (signup, {data, error}) => {
            
                    //if(data) console.log(data);
                    if (data) this.catchData(data)
                    if(error) console.log(error);

                    return(
                        <div id='signup-component' className='grey darken-4 round-corners'>

                            {/* Signup Title */}
                            <h1 className='center-align white-text'> Signup </h1>

                            {/* Form */}
                            <div className="row">
                                <form className="col s12" onSubmit={ e => this.handleSubmit(e, signup)}>
                                    {this.renderForm()}
                                </form>
                            </div>
                        </div>
                    );
                }
            }
            </Mutation>
        );
    }
}

export default SignupComponent;
