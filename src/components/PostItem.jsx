import React from 'react';
import { Link } from 'react-router-dom';
import { deletePost } from '../api';

const PostItem = ({ post, token }) => {
  const removePost = async (id) => {
    await deletePost(id, token);
  };

  const linkStyle = {
    width: '90px',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: '600',
    padding: '5px 12px',
    down: '5px',
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
              <Link style={linkStyle} to={`/posts/${post._id}`}>
                Details
              </Link>
              <Link style={linkStyle} to={`/posts/update/${post._id}`}>
                Update
              </Link>
              <button
                id='delete-btn'
                onClick={() => {
                  removePost(post._id);
                }}
              >
                Delete
              </button>
            </div>
          ) : (
            // If isAuthor is false, render the message link
            <Link style={linkStyle} to={`/posts/${post._id}/messages`}>
              Message
            </Link>
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
