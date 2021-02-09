import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route_util';

// Session components
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

// Home splash page
import Home from './home/home';

const App = () => (
  <div>
    <header>
      <Link to="/">
        <h1>Everbrain</h1>
      </Link>
    </header>
      <AuthRoute exact path="/" component={Home} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;