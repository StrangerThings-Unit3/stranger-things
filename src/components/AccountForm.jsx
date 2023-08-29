import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { registerUser, LogUser } from '../api';

function AccountForm({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { action } = useParams();

  const title = action === 'login' ? 'Log In' : 'Sign Up';

  const handleSubmit = async (event) => {
    event.preventDefault();
    const funcType = action === 'register' ? registerUser : LogUser;
    const result = await funcType(username, password);
    setToken(result.data.token);
    if (result.data.token) {
      navigate('/');
    }
  };

  const navigate = useNavigate();

  return (
    <form id='account-form' onSubmit={handleSubmit}>
      <h1>{title}</h1>
      <label htmlFor='username'>Username: </label>
      <input
        type='text'
        value={username}
        minLength={7}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <label htmlFor='password'>Password: </label>
      <input
        type='password'
        value={password}
        minLength={8}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type='submit'>{title}</button>
    </form>
  );
}

export default AccountForm;
