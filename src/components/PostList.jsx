import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props){
  
  return (
    <div>
      <hr/>
      {props.postList.map((post, index) =>
        <Post postText={post.postText} voteUp={props.voteUp} voteDown={props.voteDown}
          votes={post.votes}
          index={index}
          key={post.id}/>
      )}
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.array,
  voteUp: PropTypes.func,
  voteDown: PropTypes.func,
  index: PropTypes.number
};

export default PostList;
