import React, { useState } from 'react';
import { makePost } from '../api';
import { useNavigate } from 'react-router-dom';

function CreatePost({ setToken, token }) {
  // Create useState variables for input field
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [willDeliver, setWillDeliver] = useState(false);

  /* Create a useNavigate variable to navigate back to posts 
    after creating a post*/

  const goBack = useNavigate();

  // Use handler function after submitting a form
  const handleCreatePost = async (event) => {
    try {
      event.preventDefault();
      // Call POST method with alll fields and token arguments
      await makePost(title, description, price, location, willDeliver, token);
      // Alert a successful response
      alert(`I new post was created for ${title}`);
      // Navigate back to posts
      goBack('/posts');
      window.location.reload();
    } catch (error) {
      console.error(`Unable to make post! Cause: ${error}`);
    }
  };

  // Create a form
  return (
    <form onSubmit={handleCreatePost} className='create-post'>
      <h2>Create Post</h2>
      <label htmlFor='title'>Title:</label>
      <input
        type='text'
        placeholder='Title'
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />
      <label htmlFor='description'>Description</label>
      <input
        type='text'
        placeholder='Description'
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
      />
      <label htmlFor='Price'>Price</label>
      <input
        type='text'
        placeholder='Price'
        value={price}
        onChange={(event) => setPrice(event.target.value)}
        required
      />
      <label htmlFor='location'>Location</label>
      <input
        type='text'
        placeholder='Location'
        value={location}
        onChange={(event) => setLocation(event.target.value)}
      />
      <label>Will Deliver? </label>
      <input
        type='checkbox'
        value={willDeliver}
        onChange={(event) => setWillDeliver(event.target.value)}
      />
      <br />
      <button type='submit'>Create Post</button>
    </form>
  );
}
export default CreatePost;
