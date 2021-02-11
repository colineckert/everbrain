import React from "react";
import { Route } from "react-router-dom";

import NavContainer from './nav/nav_container';

export default () => (
  <div>
    <Route component={NavContainer} />
  </div>
);