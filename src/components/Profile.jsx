function Profile({ userData }) {
  const username = userData?.username;
  return (
    <div id='profile-container'>
      <h1 className='profile-header'>Welcome, {username}!</h1>
      <div className='profile-posts-and-messages'>
        <div className='your-posts'>
          {userData?.posts?.length ? (
            userData?.posts.map((post) => {
              return <PostItem key={post._id} post={post} />;
            })
          ) : (
            <h2>You do not have any posts.</h2>
          )}
        </div>
        <div className='your-messages'>
          {userData?.messages?.length ? (
            userData?.messages.map((message) => {
              return (
                <div key={message?._id}>
                  <h3>For: {message?.post}</h3>
                  <p>Content: {message?.content}</p>
                  <p>From: {message?.fromContent}</p>
                  <p>Created: {message?.creatdAt}</p>
                </div>
              );
            })
          ) : (
            <h2>You do not have any messages.</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
