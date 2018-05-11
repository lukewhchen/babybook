import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ASignupFormContainer from './session_form/another_signup_form_container';
import postShowContainer from './post_form/post_show_container';
import FooterMessage from './greeting/footer_message';
// this should be separate to different components to handle
// not just write here...       <LoginFormContainer />
// change inside <nav> to   <AuthRoute exact path='/' component={LoginFormContainer}/>
// ok url change to /users (but page did not change...)
// inside <div left-side-login> add <Route ... postShowContainer>
const App = () => (
  <div>
    <header id='bb-header'>
      <Link to="/">
        <h1>babybook</h1>
      </Link>
    </header>

    <nav id='bb-login'>
      <Switch>
        <AuthRoute exact path='/' component={LoginFormContainer}/>
      </Switch>
      <GreetingContainer />
    </nav>

    <div id='left-side-login'>
      <h2>Connect with friends and the world around you on Babybook.</h2>
      <ul>
        <li><strong>See photos and updates</strong> from friends in News Feed.</li>
        <li><strong>Share what's new</strong> in your life on your Timeline.</li>
        <li><strong>Find more</strong> of what you're looking for with Facebook Search.</li>
      </ul>
      <Route exact path="/users/show" component={ postShowContainer }/>;
    </div>

    <div id='right-side-login'>
      <ASignupFormContainer />
    </div>

    <FooterMessage/>

  </div>
);

export default App;


      // <Link to="/">
      // </Link>
