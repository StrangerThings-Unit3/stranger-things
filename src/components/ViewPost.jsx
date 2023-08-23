import { useEffect, useState } from 'react';

// Function to hold the post data
function ViewPost(postId) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await ViewPost(postId);
        setPosts(response);
      } catch (error) {
        console.log('Error fetching post:', error);
      }
    };
    fetchPosts();
  }, []);
  return (
    <div className='container'>
      <div className='View Post'>
        {posts.map((post) => {
          return <PostItem key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
}

export default ViewPost;
