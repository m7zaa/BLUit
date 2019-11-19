import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props){
  
  return (
    <div>
      <hr/>
      {props.postList.map((post) =>
        <Post postText={post.postText}
          votes={post.votes}
          key={post.id}/>
      )}
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.array
};

export default PostList;
