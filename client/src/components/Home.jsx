import React from 'react';
import mindful from 'mindful';
import Post from './Post.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  getPosts() {
    var subreddits = mindful.get('subreddits');
    if (!subreddits.length) {
      subreddits = ['all'];
    }

    mindful.set('posts', []);
    subreddits.forEach((subreddit) => {

      let link = 'https://www.reddit.com/r/' + subreddit + '.json?count=50';
      console.log(link);
      fetch(link)
        .then((response) => { return response.json(); })
        .then((json) => {
          mindful.update('posts', (posts) => {
            return posts.concat(json.data.children);
          });
        });
    })
  }

  componentWillMount() {
    this.getPosts();
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
