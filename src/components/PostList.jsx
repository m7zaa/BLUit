import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props){
  console.log(props.postList);
  console.log(props);
  
  return (
    <div>
      <hr/>
      {props.postList.map((post) =>
        <Post postText={post.postText}
          key={post.id}/>
      )}
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.array
};

export default PostList;
