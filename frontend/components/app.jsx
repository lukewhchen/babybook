import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header id='bb-header'>
        <h1>babybook</h1>
      <GreetingContainer />
    </header>
    <nav id='bb-login'>
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </Switch>
    </nav>
    <div id='left-side-login'>
      <h2>left side</h2>
    </div>
    <div id='right-side-login'>
      <h2>Sign up form</h2>
    </div>
  </div>
);

export default App;


      // <Link to="/">
      // </Link>
