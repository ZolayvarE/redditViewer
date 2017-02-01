import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, Link, browserHistory } from 'react-router';
import App from './components/App.jsx';
import NavBar from './components/Navbar.jsx';
import Subreddits from './components/Subreddits.jsx';
import Home from './components/Home.jsx';

ReactDOM.render(

  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home } />
      <Route path='/subreddits' component={ Subreddits } />
      <Route path='*' component={ Home } />
    </Route>
  </Router>

, document.getElementById('app'));






