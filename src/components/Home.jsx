import React from 'react';

function Home({ userData }) {
  // console.log('user:', userData);
  return (
    <div id='home'>
      {userData ? (
        <h1>
          Hi {userData?.username}! We're glad to see you again at Stranger
          Things!
        </h1>
      ) : (
        <h1>Welcome to Stranger Things! Log in or Register!</h1>
      )}
    </div>
  );
  // return (
  //   <>
  //     <h1>Welcome to stranger things</h1>
  //     {userData && <h3>Hello, {userData?.username}!</h3>}
  //   </>
  // );
}

export default Home;
