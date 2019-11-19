import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  console.log(props);
  return (
    <div>
      {/* <style global jsx>{`
        div {
          background-color: white;
        }`}
        </style> */}
      <h3>{props.postText}</h3>
      <hr/>
    </div>
  );
}

Post.propTypes = {
  postText: PropTypes.string,
};

export default Post;
