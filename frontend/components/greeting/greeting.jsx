import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {

  const sessionLinks = () => (
    <nav></nav>
  );

  const personalGreeting = () => (
    <div className='logout-button'>
      <button onClick={logout}>Log Out</button>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;

// this one put insdie sessionLinks original
// <Link to="/login">Login</Link>
// <br/>
// <Link to="/signup">Sign up!</Link>
