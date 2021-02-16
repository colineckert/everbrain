import React, { Component } from 'react';
import NotesList from '../note/notes_list';

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
      <div className="notes-sidebar-container">
        <div className="notes-sidebar-header">
          <h1>{notebook.name}</h1>
          <h5>{notes.length} notes</h5>
        </div>
        <div>
          <NotesList notes={notes} notebook={notebook} />
        </div>
      </div>
    )
  }
}
