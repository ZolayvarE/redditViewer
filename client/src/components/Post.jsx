import React from 'react';


var Post = (props) => {
  console.log(props.post);
  return (
    <div>
      <a href={props.post.data.url} target='_blank'>{ props.post.data.title }</a>
    </div>
  );
};


export default Post;