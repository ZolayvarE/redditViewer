import React from 'react';
import { Link } from 'react-router';

var NavBar = (props) => {
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
            <Link to='/' className="navbar-brand">Eric's Amazing Reddit Viewer</Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to='/'>Home</Link></li>
              <li role="separator" className="divider"></li>
              <li><Link to='/subreddits'>Configure Subreddits</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
