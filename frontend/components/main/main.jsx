import React from "react";
import { Route, Switch } from "react-router-dom";
import Modal from '../modal/modal';
import SideNavContainer from './nav/side_nav_container';
import NotebookIndexContainer from './notebook/notebooks_index_container';
import NotesIndexContainer from './note/notes_index_container';
import NotebookShowContainer from './notebook/notebook_show_container';

export default () => (
  <div className="main-app-container">
    <Switch>
      <Route path="/notebooks/:notebookId" component={Modal} />
      <Route component={Modal} />
    </Switch>
    
    <Route component={SideNavContainer} />
    <Route path="/notebooks/:notebookId" component={NotebookShowContainer} />
    <Route exact path="/notebooks" component={NotebookIndexContainer} />
    <Route exact path="/notes" component={NotesIndexContainer} />
  </div>
);