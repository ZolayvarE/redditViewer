import React from 'react';


var Post = (props) => {
  return (
    <div>
      <li className="list-group-item post">
        <h5 className="score">
          {props.post.data.score}
        </h5>
        <div className="infoBox">
          <h5 className="link">
            <a href={props.post.data.url} target='_blank'>
              { props.post.data.title }
            </a>
          </h5>
          <div className="domain">
            ({ props.post.data.domain }) 
          </div>
          <div className="otherInfo">
            <a href={'https://reddit.com/u/' + props.post.data.author} target='_blank'>
              { props.post.data.author }
            </a>
            <a href={'https://reddit.com/comments/' + props.post.data.id} target='_blank'>
              Comments
            </a>
          </div>
        </div>
      </li>
    </div>
  );
};


export default Post;