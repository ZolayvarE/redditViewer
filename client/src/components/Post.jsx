import React from 'react';


var Post = (props) => {
  return (
    <div>
      <li className="list-group-item post">
        <h5 className="score">
          {props.post.data.score}
        </h5>

        <div className="infoBox">
          <div className="link">
            <h5>
              <a href={props.post.data.url} target='_blank'>
                { props.post.data.title }
              </a>
            </h5>
            <div className="domain">
              ({ props.post.data.domain }) 
            </div>
          </div>

          <div>
            { props.post.data.author }
          </div>
        </div>
      </li>
    </div>
  );
};


export default Post;