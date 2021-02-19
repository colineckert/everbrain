import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import NoteList from './notes_list';
import EditorContainer from '../editor/editor_container';

export default class NotesIndex extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (!this.props.match.params.noteId || !this.props.notes.length) {
      this.props.requestNotes()
        .then((res) => this.props.history.push(`/notes/${res.notes[0].id}`));
    } else if (this.props.notes.length && !this.props.match.params.noteId) {
      this.props.history.push(`/notes/${this.props.notes[0].id}`);
    }
  }
  
  render() {
    if (!this.props.notes) return null;
    
    const selectedNote = this.props.match.params.noteId;

    return (
      <>
        <div className="notes-index-container">
          <div className="notes-sidebar-header">
            <h1>All Notes</h1>
            <h5>{this.props.notes.length} notes</h5>
          </div>
            <div className="notes-sidebar-container">
              <NoteList notes={this.props.notes} selectedNote={selectedNote} />
            </div>
        </div>
        <Route path={["/notes/:noteId"]} component={EditorContainer} />
      </>
    )
  }
}
