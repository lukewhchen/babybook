import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ASignupFormContainer from './session_form/another_signup_form_container';

const App = () => (
  <div>
    <header id='bb-header'>
        <h1>babybook</h1>
    </header>

    <nav id='bb-login'>
      <GreetingContainer />
      <LoginFormContainer />
    </nav>

    <div id='left-side-login'>
      <h2>Connect with friends and the world around you on Babybook.</h2>
      <ul>
        <li><strong>See photos and updates</strong> from friends in News Feed.</li>
        <li><strong>Share what's new</strong> in your life on your Timeline.</li>
        <li><strong>Find more</strong> of what you're looking for with Facebook Search.</li>
      </ul>
    </div>

    <div id='right-side-login'>
      <ASignupFormContainer />
    </div>

    <div id='footer'>
      <p>babybook @ 2018 developed by Luke Chen</p>
    </div>

  </div>
);

export default App;


      // <Link to="/">
      // </Link>
