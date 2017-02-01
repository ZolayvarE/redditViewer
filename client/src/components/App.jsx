import React from 'react';
import { Router, IndexRoute, Route, Link, browserHistory } from 'react-router';
import NavBar from './Navbar.jsx';
import Home from './Home.jsx';
import globalState from 'mindful';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (!globalState.get('subreddits')) {
      globalState.set('subreddits', []);
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        { this.props.children }
      </div>
    );
  }

}


export default App;