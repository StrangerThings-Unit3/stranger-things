import { useParams } from 'react-router-dom';

// Function to hold the post data
function ViewPost({ posts }) {
  const params = useParams();
  const post = posts.find((post) => post._id === params.id);
  return (
    <div className='view-container'>
      <div className='view-post'>
        <h2>{post?.title}</h2>
        <p>
          <strong>Description: </strong> {post?.description}
        </p>
        <p>
          <strong>Lopcation: </strong> {post?.location}
        </p>
        <p>
          <strong>Price: </strong> {post?.price}
        </p>
        <p>
          <strong>Active? </strong>
          {!post?.active ? 'No longer available...' : 'Yes'}
        </p>
        <p>
          <strong>Will Deliver? </strong> {!post?.willDeliver ? 'No' : 'Yes'}
        </p>
        <p>Created: {post?.createdAt}</p>
        <p>Last updated: {post?.updatedAt}</p>
      </div>
      <div className='recieved-messages-in-details'>
        <h2>Messages</h2>
        {post?.messages.length ? (
          post?.messages.map((message) => {
            return (
              <div key={message._id} className='recieved-messages-for-post'>
                <h3>From: {message.fromUser.username}</h3>
                <p>{message.content}</p>
              </div>
            );
          })
        ) : (
          <p>You don't have any messages for this post...</p>
        )}
      </div>
    </div>
  );
}

export default ViewPost;
