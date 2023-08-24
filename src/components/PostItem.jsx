import React from 'react';
import { Link } from 'react-router-dom';
import { deletePost } from '../api';

const PostItem = ({ post, token }) => {
  const removePost = async (id) => {
    await deletePost(id, token);
  };

  return (
    //Render small details for a post
    <div className='post-item' key={post._id}>
      <h2>{post.title}</h2>
      <p>{post.location}</p>
      <p>{post.price}</p>

      {/* Creating a conditional logic
       for isAuthor that'll render functional features
       for a post or at least send a message feature
       to the author ONLY if there is an existing token */}
      {
        //If there is a token, create options for the user
        token ? (
          // If isAuthor is true, render functional features
          post.isAuthor ? (
            <div className='post-options'>
              <Link to={'/posts/details'}>View</Link>
              <Link to={'/posts/update'}>Update</Link>
              <button
                onClick={() => {
                  removePost(post._id);
                }}
              >
                Delete
              </button>
            </div>
          ) : (
            // If isAuthor is false, render the message link
            <Link to={'/post/message'}>Message</Link>
          )
        ) : (
          //If there is no token, then render nothing
          <p>...</p>
        )
      }
    </div>
  );
};
export default PostItem;
