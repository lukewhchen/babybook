import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import PostShowContainer from './post_form/post_show_container';
import Welcome from './welcome/welcome';
import Feed from './post_form/feed';

const App = () => (
  <div>
    <Route exact path="/" component={Welcome} />
    <Route exact path='/posts' component={PostShowContainer} />
  </div>
);

export default App;
