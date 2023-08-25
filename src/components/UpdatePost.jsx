import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updatePost } from '../api';

function UpdatePost({ posts, token }) {
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
      await updatePost(
        id,
        token,
        newTitle,
        newDescription,
        newPrice,
        newLocation,
        changedDeliver
      );
      // Call navigate to return to post list
      navigate('/posts');
      // Reload once after returning to post list
      window.location.reload();
      // Alert the user
      alert(`Update completed for ${newTitle}`);
    } catch (error) {
      console.error('Unable to update post!', error);
    }
  };

  // Render form
  return (
    <div className='update-form-container'>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type='text'
          value={newTitle}
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
        />
        <label htmlFor='description'>Description</label>
        <input
          type='text'
          value={newDescription}
          onChange={(e) => {
            setNewDescription(e.target.value);
          }}
        />
        <label htmlFor='price'>Price</label>
        <input
          type='text'
          value={newPrice}
          onChange={(e) => {
            setNewPrice(e.target.value);
          }}
        />
        <label htmlFor='location'>Location</label>
        <input
          type='text'
          value={newLocation}
          onChange={(e) => {
            setNewLocation(e.target.value);
          }}
        />
        <label htmlFor='willDeliver'>Will Deliver?</label>
        <input
          type='checkbox'
          value={changedDeliver}
          onChange={(e) => {
            setChangedDeliver(e.target.value);
          }}
        />
        <button type='submit'>Update Post</button>
      </form>
    </div>
  );
}
export default UpdatePost;
