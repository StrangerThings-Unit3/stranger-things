import React, { useState } from 'react';
import postMessage from './Api';

const postMessage = ({ token, postId }) => {
  const [content, setContent] = useState('');

  return (
    <form onSubmit={onSubmit} className='post-form'>
      <input
        type='text'
        className='post-form-input'
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
        }}
        placeholder='What would you like to post?'
      ></input>
      <button className='submit-message' type='submit'>
        Submit
      </button>
    </form>
  );
};

export default postMessage;
