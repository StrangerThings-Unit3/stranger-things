import React from 'react';

const postItem = ({ post }) => {
  return (
    <div className="post-item">
      <h2>{post.title}</h2>
        <p>{post.price}</p>
    </div>
  );
}