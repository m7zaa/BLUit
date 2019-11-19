import React from 'react';
import PropTypes from 'prop-types';

class Post extends  React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      count: 0,
    };
    this.handleUpVoteClick = this.handleUpVoteClick.bind(this);
    this.handleDownVoteClick = this.handleDownVoteClick.bind(this);
  }

  handleUpVoteClick() {
    this.setState({count: this.state.count +1});
  }

  handleDownVoteClick() {
    this.setState({count: this.state.count -1});
  }

  render() {
    return (
      <div>
        {/* <style global jsx>{`
          div {
            background-color: white;
          }`}
          </style> */}
        <h3>{this.props.postText} <button onClick = {this.handleUpVoteClick}>Upvote</button> <button onClick = {this.handleDownVoteClick}>Downvote</button></h3> 
        <p>{this.state.count}</p>
        <hr/>
      </div>
    );
  }  
}

Post.propTypes = {
  postText: PropTypes.string,
  votes: PropTypes.number,
};

export default Post;
