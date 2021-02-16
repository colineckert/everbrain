import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import NotesList from '../note/notes_list';
import EditorContainer from '../editor/editor_container';

export default class NotebookShow extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestNotes();
  }
  
  render() {
    const { notes, notebook } = this.props;
    
    return (
      <div className="notes-index-container">
        <div className="notes-sidebar-header">
          <h1>{notebook.name}</h1>
          <h5>{notes.length} notes</h5>
        </div>
        <div className="notes-sidebar-container">
          <div className="notes-list-container">
            <NotesList notes={notes} notebook={notebook} />
          </div>
        </div>
      <Route path={["/notebooks/:notebookId/:noteId"]} component={EditorContainer} />
      </div>
    )
  }
}
