import React from 'react';
import { Router, IndexRoute, Route, Link, browserHistory } from 'react-router';
import NavBar from './Navbar.jsx';
import Home from './Home.jsx';
import globalState from 'mindful';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  getPosts(addOntoExisting) {
    if (!globalState.get('posts') || !addOntoExisting) {
      globalState.set('posts', []);
    }

    var subreddits = globalState.get('subreddits');
    if (!subreddits.length) {
      subreddits = ['all'];
    }

    let baseURL = 'https://www.reddit.com/r/' + subreddits.join('+') + '.json';
    let queryString = [
      'limit=25'
    ].join('&');

    fetch(baseURL + '?' + queryString)
      .then((response) => { return response.json(); })
      .then((json) => {
        console.log('got response!');
        globalState.update('posts', (posts) => {
          return posts.concat(json.data.children);
        });
      });
  }

  componentWillMount() {
    if (!globalState.get('subreddits')) {
      globalState.retain('subreddits', []);
    }

    this.getPosts();

    globalState.set('getPosts', this.getPosts.bind(this));
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