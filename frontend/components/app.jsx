import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import FeedContainer from './feed/feed_container';
import ProfileContainer from './profile/profile_container';
import Welcome from './welcome/welcome';

const App = () => (
  <div>
    <AuthRoute exact path="/" component={Welcome} />
    <ProtectedRoute exact path='/posts' component={FeedContainer} />
    <ProtectedRoute path='/users/:userId' component={ProfileContainer}/>
  </div>
);

export default App;
