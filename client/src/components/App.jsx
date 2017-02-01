import React from 'react';
import { Router, IndexRoute, Route, Link, browserHistory } from 'react-router';
import NavBar from './Navbar.jsx';
import About from './About.jsx';
import Home from './Home.jsx';
import mindful from 'mindful';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    var subreddits = mindful.get('subreddits') || {'all': true};
    mindful.set('posts', []);
    for (var key in subreddits) {
      fetch('https://www.reddit.com/r/' + key + '.json')
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          mindful.update('posts', (posts) => {
            return posts.concat(json.data.children);
          });
        });
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