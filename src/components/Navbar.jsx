import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
    <div className='navbar'>
      <Link to={'/register'}>Register</Link>
      <Link to={'/'}>Home</Link>
    </div>
  );
}

export default Navbar;
