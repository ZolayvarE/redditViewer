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
    addOntoExisting = addOntoExisting || false;

    if (globalState.get('currentlySearching') === true) {
      return;
    } else {
      globalState.set('currentlySearching', true);
    }


    if (!globalState.get('posts') || !addOntoExisting) {
      globalState.set('posts', []);
    }

    var subreddits = globalState.get('subreddits');

    var sortBy = globalState.get('sortBy') || 'hot';
    if (!subreddits.length) {
      var baseURL = 'https://www.reddit.com/' + sortBy + '.json';
    } else {
      var baseURL = 'https://www.reddit.com/r/' + subreddits.join('+') + '/' + sortBy + '.json';
    }
    
    let queryString = 'limit=20';
    if (addOntoExisting && globalState.get('after')) {
      queryString += '&after=' + globalState.get('after');
    }

    console.log(baseURL + '?' + queryString);

    fetch(baseURL + '?' + queryString)
      .then((response) => { return response.json(); })
      .then((json) => {
        globalState.set('after', json.data.after);
        globalState.update('posts', (posts) => {
          return posts.concat(json.data.children);
        });
        globalState.set('currentlySearching', false);
      })
      .catch((error) => {
        globalState.set('currentlySearching', false);
        setTimeout(() => {
          globalState.get('getPosts')(addOntoExisting);
        }, 1000);
      });
  }

  componentWillMount() {
    if (!globalState.get('subreddits')) {
      globalState.retain('subreddits', []);
    }

    this.getPosts();

    globalState.set('getPosts', this.getPosts);


    var scrollBox = document.getElementById('scrollBox');
    window.onscroll = function () {
      if (document.body.scrollTop + window.innerHeight === document.body.scrollHeight) {
        globalState.get('getPosts')(true);
      }
    };
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