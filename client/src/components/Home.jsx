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
        { mindful.get('posts').map((post, index) => {
          return (<Post post={post} key={index} />);
        }) }
      </div>
    )
  }
}


export default mindful(Home, 'posts');
