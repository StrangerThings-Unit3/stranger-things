import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ post }) => {
  return (
    <div className='post-item' key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.location}</p>
      <p>{post.price}</p>
      <Link></Link>
      <button className='delete-btn'>Delete</button>
    </div>
  );
};
export default PostItem;
