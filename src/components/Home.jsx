import React from 'react';

function Home({ userData }) {
  return (
    <div id='home'>
      {userData ? (
        <h1>
          Hi {userData?.username}! We're glad to see you again at Stranger's
          Things!
        </h1>
      ) : (
        <h1>Welcome to Stranger's Things! Log in or Register!</h1>
      )}
    </div>
  );
}

export default Home;
