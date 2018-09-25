
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Router, browserHistory } from 'react-router';
import routes from 'react-router-dom';
import RouterClass from './routes.js';

// ReactDOM.render(
//    (<Router history={browserHistory} routes={RouterClass}/>) ,document.getElementById('App'));
ReactDOM.render(<App />, document.getElementById('root'));
