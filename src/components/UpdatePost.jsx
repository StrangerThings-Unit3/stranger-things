import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updatePost } from '../api';

function UpdatePost({ setPosts, posts, token }) {
  // Get id from params
  const params = useParams();
  // Set id to an id variable
  const id = params.id;
  // Used navigate to return after submission
  const navigate = useNavigate();

  // Filtered post object and grabbed its keys
  const [post] = posts.filter((post) => post._id === id);
  const { title, description, price, location, willDeliver } = post ? post : {};

  // Declare useState variables for the edit form
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newPrice, setNewPrice] = useState(price);
  const [newLocation, setNewLocation] = useState(location);
  const [changedDeliver, setChangedDeliver] = useState(willDeliver);

  // Handle submission form to await a Patch request
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // Call the awaited patch method containing all the required fields

      const updatedPost = {
        title: newTitle,
        description: newDescription,
        price: newPrice,
        location: newLocation,
        willDeliver: changedDeliver,
      };
      await updatePost(id, token, updatedPost);

      setPosts((prevPosts) => {
        return prevPosts.map((post) => (post._id === id ? updatedPost : post));
      });
      // Call navigate to return to post list
      navigate('/posts');
      // Alert the user
      alert(`Update completed for ${newTitle}`);
    } catch (error) {
      console.error('Unable to update post!', error);
    }
  };

  // Render form
  return (
    <form id='post-form' onSubmit={handleSubmit}>
      <h2>Update</h2>
      <label>Title</label>
      <input
        type='text'
        value={newTitle}
        onChange={(e) => {
          setNewTitle(e.target.value);
        }}
        required
      />
      <label htmlFor='description'>Description</label>
      <input
        type='text'
        value={newDescription}
        onChange={(e) => {
          setNewDescription(e.target.value);
        }}
        required
      />
      <label htmlFor='price'>Price</label>
      <input
        type='text'
        value={newPrice}
        onChange={(e) => {
          setNewPrice(e.target.value);
        }}
        required
      />
      <label htmlFor='location'>Location</label>
      <input
        type='text'
        value={newLocation}
        onChange={(e) => {
          setNewLocation(e.target.value);
        }}
      />
      <label htmlFor='willDeliver'>
        Will Deliver?
        <input
          type='checkbox'
          value={changedDeliver}
          onChange={(e) => {
            setChangedDeliver((e.target.value = true));
          }}
        />
      </label>
      <button id='submit-btn' type='submit'>
        Update Post
      </button>
    </form>
  );
}
export default UpdatePost;
