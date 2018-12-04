import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

// Materialize CSS & JS
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

import App from './App';
import * as serviceWorker from './serviceWorker';

// Render en html único
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
