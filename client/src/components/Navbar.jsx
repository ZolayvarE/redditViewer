import React from 'react';
import { Link } from 'react-router';
import globalState from 'mindful';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  sortBy(input) {
    globalState.set('sortBy', input);
    globalState.get('getPosts')();
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to='/' className="navbar-brand">Eric's Wonderous Reddit Viewer</Link>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Order By <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#" onClick={this.sortBy.bind(null, 'hot')}>Hot</a></li>
                    <li><a href="#" onClick={this.sortBy.bind(null, 'top')}>Top</a></li>
                    <li><a href="#" onClick={this.sortBy.bind(null, 'new')}>New</a></li>
                    <li><a href="#" onClick={this.sortBy.bind(null, 'rising')}>Rising</a></li>
                    <li><a href="#" onClick={this.sortBy.bind(null, 'controversial')}>Controversial</a></li>
                  </ul>
                </li>
                <li><Link to='/'>Home</Link></li>
                <li role="separator" className="divider"></li>
                <li><Link to='/subreddits'>Configure Subreddits</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
};

export default NavBar;
