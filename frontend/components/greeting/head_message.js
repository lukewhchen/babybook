import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../session_form/login_form_container';
import GreetingContainer from './greeting_container';


const HeadMessage = () => {
  return (
    <div>
      <header id='bb-header'>
        <Link to="/">
          <h1>babybook</h1>
        </Link>
      </header>

      <nav id='bb-login'>
        <LoginFormContainer />
        <GreetingContainer />
      </nav>
    </div>
  );
};

export default HeadMessage;
