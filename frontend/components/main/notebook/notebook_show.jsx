import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NotesList from '../note/notes_list';
import EditorContainer from '../editor/editor_container';

export default class NotebookShow extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestNotebook(this.props.match.params.notebookId)
      .then((res) => {
        if (!this.props.match.params.noteId && res.notes.length) {
          this.props.history.push(`/notebooks/${this.props.match.params.notebookId}/${res.notes[0].id}`)
        }
      }
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.notebookId !== prevProps.match.params.notebookId) {
      this.props.requestNotebook(this.props.match.params.notebookId)
        .then((res) => {
          if (res.notes.length) {
            this.props.history.push(`/notebooks/${this.props.match.params.notebookId}/${res.notes[0].id}`);
          }
        });
    }

    if (JSON.stringify(this.props.checkNotesState) === JSON.stringify(prevProps.checkNotesState)) return null;
    
    if (this.props.match.params.noteId && !prevProps.match.params.noteId) {
      this.props.requestNotebook(this.props.match.params.notebookId);
    } else if (this.props.match.params.noteId !== prevProps.match.params.noteId) {
      this.props.requestNotebook(this.props.match.params.notebookId);
    } else {
      this.props.requestNotebook(this.props.match.params.notebookId).then((res) => {
        if (res.notes.length) {
          this.props.history.push(`/notebooks/${this.props.match.params.notebookId}/${res.notes[0].id}`);
        }
      });
    }
  }
  
  render() {
    const { notes, notebook } = this.props;
    if (!notebook) return (
      <div>Loading...</div>
    )
    const selectedNote = this.props.match.params.noteId;

    let tagFilterItem = (<div></div>);
      const tagFilter = this.props.tagFilter;
      if (tagFilter) tagFilterItem = (
        <li className="tag-filter-button" key={tagFilter.id}>
          <div><i className={`fas fa-tag nav-icon`}></i></div>
          <div>{tagFilter.name}</div>
          <div>
            <button className="tag-filter-close-button"
              onClick={() => this.props.removeTagFilter(tagFilter.id)}>
              <i className="fas fa-times-circle"></i>
            </button>
          </div>
        </li>
      )

    return (
      <>
        <div className="notes-index-container">
          <div className="notes-sidebar-header">
            <h1>{notebook.name}</h1>
            <h5>{notes.length} notes</h5>
          </div>
          <div className={`sidebar-tag-filters ${tagFilter ? "" : "hidden"}`}>
            <ul>
              {tagFilterItem}
            </ul>
          </div>
          <div className={`notes-sidebar-container ${tagFilter ? "shifted" : ""}`}>
            <NotesList 
              notes={notes} 
              notebook={notebook} 
              view="notebook" 
              selectedNote={selectedNote}
            />
          </div>
        </div>
        <Route path={["/notebooks/:notebookId/:noteId"]} component={EditorContainer} />
      </>
    )
  }
}
