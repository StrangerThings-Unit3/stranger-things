function Profile({ userData }) {
  return (
    <div id='profile-container'>
      <div>
        <h1 className='profile-header'>Welcome, {userData?.username}!</h1>
        <div className='message-container'>
          <div className='recieved-messages'>
            <h2>Received messages</h2>
            {userData?.posts.length ? (
              userData?.posts.map((post) => {
                return (
                  <div key={post._id} className='recieved-messages-for-post'>
                    <h3>Messages for: {post.title}</h3>
                    <div className='recieved-message'>
                      {post?.messages.length ? (
                        post?.messages.map((message) => {
                          return (
                            <div key={message._id} className='content'>
                              <h3>From: {message.fromUser.username}</h3>
                              <p>{message.content}</p>
                            </div>
                          );
                        })
                      ) : (
                        <p className='content'>You don't have any messages</p>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <p>You don't have any posts</p>
            )}
          </div>
          <div className='sent-messages'>
            <h2>Sent Messages</h2>
            {userData?.messages.length ? (
              userData?.messages.map((message) => {
                return (
                  <div key={message._id} className='sent-message'>
                    <h3>For: {message.post.title}</h3>
                    <p className='content'>{message.content}</p>
                  </div>
                );
              })
            ) : (
              <p>You haven't sent any messages...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
