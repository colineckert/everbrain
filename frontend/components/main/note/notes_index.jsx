import React, { Component } from 'react';
import NoteList from './notes_list';

export default class NotesIndex extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestNotes();
  }
  
  render() {
    return (
      <div className="notes-index-container">
        <div className="notes-sidebar-header">
          <h1>All Notes</h1>
          <h5>{this.props.notes.length} notes</h5>
        </div>
        <div className="notes-sidebar-container">
          <div className="notes-list-container">
            <NoteList notes={this.props.notes} />
          </div>
        </div>
      </div>
    )
  }
}
