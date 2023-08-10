import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../api';
import { LogUser } from '../api';

function Register() {
  const [newUsername, setNewUsername] = useState('');
  const [newUserPassword, setNewUserPassword] = useState('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const createUser = async (event) => {
    try {
      event.preventDefault();
      await registerUser(newUsername, newUserPassword);
    } catch (error) {
      console.error(`There is an issue in creating a player!`, error);
    }
  };

  const loginUser = async (event) => {
    try {
      event.preventDefault();
      await LogUser(username, password);
    } catch (error) {
      console.error('Unable to log in user!', error);
    }
  };

  return (
    <div className='membership-container'>
      <div className='register'>
        <h2>Not a member? Become one today!</h2>
        <form id='register-form' onSubmit={createUser}>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            value={newUsername}
            minLength={7}
            onChange={(e) => setNewUsername(e.target.value)}
            required
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            value={newUserPassword}
            minLength={8}
            onChange={(e) => setNewUserPassword(e.target.value)}
            required
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
      <div className='login'>
        <h2>Already a member? Login here!</h2>
        <form id='login-form' onSubmit={loginUser}>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            value={username}
            minLength={7}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            value={password}
            minLength={8}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
      <Link></Link>
    </div>
  );
}

export default Register;
