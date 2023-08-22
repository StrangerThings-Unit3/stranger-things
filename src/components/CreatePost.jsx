import React, { useState } from 'react';

function CreatePost({ setToken, token }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [willDeliver, setWillDeliver] = useState(false);

  const handleCreatePost = async (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleCreatePost} className='create-post'>
      <h2>Create Post</h2>
      <label htmlFor='title'>Title:</label>
      <input
        type='text'
        placeholder='Title'
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <label htmlFor='description'>Description</label>
      <input
        type='text'
        placeholder='Description'
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <label htmlFor='Price'>Price</label>
      <input
        type='text'
        placeholder='Price'
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <label htmlFor='willDeliver'>Will Deliver?</label>
      <input
        type='checkbox'
        placeholder='Location'
        value={location}
        onChange={(event) => setLocation(event.target.value)}
      />
      <label>
        Will Deliver:
        <input
          type='checkbox'
          value={willDeliver}
          onChange={(event) => setWillDeliver(event.target.value)}
        />
      </label>
      <button type='submit'>Create Post</button>
    </form>
  );
}
export default CreatePost;
