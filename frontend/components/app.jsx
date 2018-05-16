import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import PostContainer from './post/post_container';
import Welcome from './welcome/welcome';

const App = () => (
  <div>
    <AuthRoute exact path="/" component={Welcome} />
    <ProtectedRoute exact path='/posts' component={PostContainer} />
  </div>
);

export default App;
