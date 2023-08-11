import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogUser } from '../api';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (event) => {
    try {
      event.preventDefault();
      await LogUser(username, password);
    } catch (error) {
      console.error('Unable to log in user!', error);
    }
  };
  return (
    <div className='login'>
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
  );
}

export default Login;
