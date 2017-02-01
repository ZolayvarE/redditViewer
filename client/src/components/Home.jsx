import React from 'react';
import globalState from 'mindful';
import Post from './Post.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        { globalState.get('posts').map((post, index) => {
          return (
            <Post post={post} key={index} />
          );
        }) }
      </div>
    );
  }
}


export default globalState.subscribe(Home, 'posts');
