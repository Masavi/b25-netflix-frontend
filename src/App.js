import React, { Component } from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Navbar from './components/Navbar/NavbarComponent';
import routes from './routes.js';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
        <Router>
          <Switch>
            { routes }
          </Switch>
        </Router>
        </div>
      </div>
    );
  }
}

export default App;
