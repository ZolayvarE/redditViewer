import React from 'react';
import { Link } from 'react-router';

var NavBar = (props) => {
  return (
    <div>
      <header>
        <nav>
          <Link to='/' >Home</Link>
          <span> | </span>
          <Link to='/subreddits' >Configure Subreddits</Link>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
