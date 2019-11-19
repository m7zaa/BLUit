import React from 'react';
import PropTypes from 'prop-types';

function Post (props) {
  // constructor(props) {
  //   super(props);
  
  //   this.state = {
  //     count: 0,
  //   };
  //   this.handleUpVoteClick = this.handleUpVoteClick.bind(this);
  //   this.handleDownVoteClick = this.handleDownVoteClick.bind(this);
  // }

  function handleUpVoteClick() {
    props.voteUp(props.index);
  }

  function handleDownVoteClick() {
    props.voteDown(props.index);
  }

  
  return (
    <div>
      {/* <style global jsx>{`
          div {
            background-color: white;
          }`}
          </style> */}
      <h3>{props.postText} <button onClick = {handleUpVoteClick}>Upvote</button> <button onClick = {handleDownVoteClick}>Downvote</button></h3> 
      <p>{props.votes}</p>
      <hr/>
    </div>
  );
}

Post.propTypes = {
  postText: PropTypes.string,
  votes: PropTypes.number,
  voteUp: PropTypes.func,
  voteDown: PropTypes.func,
  index: PropTypes.number
};

export default Post;
