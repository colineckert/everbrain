import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route_util';

// Session components
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

// Home page
import Home from './home/home';
import NotFound from './not_found';

// Main app
import Main from './main/main';

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />

      <ProtectedRoute path="/notes" component={Main} />

      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;