import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../api';

function Register() {
  const [newUsername, setNewUsername] = useState('');
  const [newUserPassword, setNewUserPassword] = useState('');

  const navigate = useNavigate();

  const createUser = async (event) => {
    try {
      event.preventDefault();
      await registerUser(newUsername, newUserPassword);
    } catch (error) {
      console.error(`There is an issue in creating a player!`, error);
    }
  };
  return (
    <div className='membership-container'>
      <div className='register'>
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
      <Link></Link>
    </div>
  );
}

export default Register;
