import React from "react";
import { Route, Switch } from "react-router-dom";
import NavContainer from './nav/nav_container';
import NotebookIndexContainer from './notebook/notebook_index_container';

export default () => (
  <div>

      <Route exact path="/notebooks" component={NotebookIndexContainer} />
      <Route component={NavContainer} />

  </div>
);