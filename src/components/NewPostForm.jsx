import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewPostForm(props){
  let _postText = null;
  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({postText: _postText.value, id: v4()});
    _postText.value = '';

  }
  return (
    <div>
      <form onSubmit={handleNewPostFormSubmission}>
        <textarea
          id='postText'
          placeholder='Type your post, mofo'
          ref={(textarea) => { _postText = textarea; }} />
        <button type='submit'>Post</button>
      </form>
    </div>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;