import React from "react";

const PostItem = ({ post }) => {
  return (
    <div className="post-item" key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.price}</p>
    </div>
  );
};
export default PostItem;
