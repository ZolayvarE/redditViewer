import React from 'react';
import { Router, IndexRoute, Route, Link, browserHistory } from 'react-router';
import NavBar from './Navbar.jsx';
import Home from './Home.jsx';
import mindful from 'mindful';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  getPosts() {
    var subreddits = mindful.get('subreddits') || {'all': true};
    mindful.set('posts', []);
    for (var key in subreddits) {
      fetch('https://www.reddit.com/r/' + key + '.json?count=50')
        .then((response) => { return response.json(); })
        .then((json) => {
          mindful.update('posts', (posts) => {
            return posts.concat(json.data.children);
          });
        });
    }
  }

  componentWillMount() {
    this.getPosts();
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