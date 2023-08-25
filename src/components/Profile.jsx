function Profile({ userData }) {
  const username = userData?.username;

  // const messages;
  return (
    <div id='profile-container'>
      <h1 className='profile-header'>Welcome, {username}!</h1>
      <div className='your-messages'>{'messages in process'}</div>
    </div>
  );
}

export default Profile;
