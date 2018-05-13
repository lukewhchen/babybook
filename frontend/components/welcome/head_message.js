import React from 'react';
import { Link } from 'react-router-dom';
import SessionForm from '../session_form/session_form';


const HeadMessage = () => {
  return (
    <div>
      <header id='bb-header'>
        <Link to="/">
          <h1>babybook</h1>
        </Link>
      </header>

      <nav id='bb-login'>
        <SessionForm />
      </nav>
    </div>
  );
};

export default HeadMessage;
