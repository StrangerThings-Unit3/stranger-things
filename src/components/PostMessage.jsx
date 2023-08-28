import React, { useState } from 'react';
import { postMessage } from '../api';
import { useNavigate, useParams } from 'react-router-dom';

const PostMessage = ({ token }) => {
  // Get id from params and set it to a variable
  const params = useParams();
  const id = params.id;

  // Used navigate to return after submission
  const goBack = useNavigate();

  // Declare useState variables for the message form
  const [content, setContent] = useState('');

  // Handle submission form to await a POST request
  const sendMessage = async (e) => {
    try {
      e.preventDefault();
      // Call POST method for this message form
      await postMessage(id, token, content);
      // Navigate back to posts
      goBack('/posts');
      window.location.reload();
    } catch (error) {
      console.error('We have an issue', error);
    }
  };

  // Render form
  return (
    <form onSubmit={sendMessage} id='post-form'>
      <label htmlFor='content'>Content</label>
      <input
        required
        type='text'
        className='post-form-input'
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
        placeholder='Ask me anything.'
      ></input>
      <button id='submit-btn' type='submit'>
        Submit
      </button>
    </form>
  );
};

export default PostMessage;
