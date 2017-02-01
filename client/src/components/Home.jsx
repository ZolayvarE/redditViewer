import React from 'react';
import mindful from 'mindful';
import Post from './Post.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('rendering Home!');
    return (
      <div>
        { mindful.get('posts').map((post) => {
          return (<Post post={post} />);
        }) }
      </div>
    )
  }
}


export default mindful(Home, 'posts');
