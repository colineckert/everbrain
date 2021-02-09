import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <Link to="/">
        <h1>Everbrain</h1>
      </Link>
    </header>
      <AuthRoute exact path="/" />

      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;