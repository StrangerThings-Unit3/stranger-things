import React, { useState } from 'react';
import PostItem from './PostItem';

const Posts = ({ posts }) => {
  const [searchParam, setSearchParam] = useState('');
  const displayPosts = searchParam
    ? posts.filter((post) => post.title.toLowerCase().includes(searchParam))
    : posts;

  return (
    <div className='post-page'>
      <div className='post-actions'>
        <div className='search-post'>
          <label>
            Search:{' '}
            <input
              type='text'
              placeholder='Post Title'
              value={searchParam}
              onChange={(e) => {
                setSearchParam(e.target.value);
              }}
            />
          </label>
        </div>
        <button>Create Post</button>
      </div>
      <div className='posts'>
        {displayPosts.map((post) => {
          return <PostItem key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default Posts;
