import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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
    
    const noteCount = this.props.notes.length;
    const noteCountText = noteCount ? `${noteCount} notes` : `No notes found`;
    const selectedNote = this.props.match.params.noteId;

    let tagFilterItem = (<div></div>);
    const tagFilter = this.props.tagFilter;
    if (tagFilter) tagFilterItem = (
      <li>
        <div><i className={`fas fa-tag nav-icon`}></i></div>
          <div>{tagFilter.name}</div>
          <div>
            <button className="tag-filter-close-button"
              onClick={() => this.props.removeTagFilter(tagFilter.id)}>
              {/* <i className="fas fa-times"></i> */}
              <i class="fas fa-times-circle"></i>
            </button>
          </div>
      </li>
    )

    return (
      <>
        <div className="notes-index-container">
          <div className="notes-sidebar-header">
            <h1>All Notes</h1>
            <h5>{noteCountText}</h5>
          </div>
          <div className={`sidebar-tag-filters ${tagFilter ? "" : "hidden"}`}>
            <ul>
              {tagFilterItem}
            </ul>
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
