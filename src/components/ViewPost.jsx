import { useEffect, useState } from "react";

// Function to hold the post data
function ViewPost (postId) {
    const [post, setPost] = useState([]);
    useEffect(() =>{
        const fetchPost = async () => {
            try{
                const response = await ViewPostByID(postId);
                setPost(response);
            } catch (error) {
                console.log('Error fetching post:', error);
            }
        };
fetchPost();
}, []);
return (
  <div className='container'>
    <div className='View Post'>
    {post((details) => {
          return (
            <div className='post-item' key={post.id}>
            <h2>{details.title}</h2>
            <p>{details.location}</p>
            <p>{details.price}</p>
            <p>{details.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default ViewPost;