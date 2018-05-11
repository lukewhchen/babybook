import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

// import GreetingContainer from './greeting/greeting_container';
// import LoginFormContainer from './session_form/login_form_container';
// import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import postShowContainer from './post_form/post_show_container';
import Welcome from './greeting/welcome';
// this should be separate to different components to handle
// not just write here...       <LoginFormContainer />
// change inside <nav> to   <AuthRoute exact path='/' component={LoginFormContainer}/>
// ok url change to /users (but page did not change...)
// inside <div left-side-login> add <Route ... postShowContainer>
const App = () => (
  <div>
    <AuthRoute path="/" component={Welcome} />
  </div>
);

export default App;
