// React, Component & Router
import React, { Component } from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';

// Apollo Client
import client from './graphql/ApolloClient';
import { ApolloProvider } from "react-apollo";

// Components
import Navbar from './components/Navbar/NavbarComponent';
import routes from './routes.js';

// Style
import './App.scss';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
          <Navbar />
          <Router>
            <Switch>
              { routes }
            </Switch>
          </Router>
      </ApolloProvider>
    );
  }
}

export default App;
