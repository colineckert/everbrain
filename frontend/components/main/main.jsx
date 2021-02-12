import React from "react";
import { Route, Switch } from "react-router-dom";
import SideNavContainer from './nav/side_nav_container';
import NotebookIndexContainer from './notebook/notebook_index_container';
import Modal from '../modal/modal';

export default () => (
  <div className="main-app-container">
    <Modal />

    <Route component={SideNavContainer} />
    <Route exact path="/notebooks" component={NotebookIndexContainer} />
    {/* <Route exact path="/notes" component={SideNavContainer} /> */}
  </div>
);