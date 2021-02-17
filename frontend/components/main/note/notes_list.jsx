import React, { Component } from 'react';
import { parseDate } from '../../../util/date_util';
import { Link } from 'react-router-dom';

export default class NotesList extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { notes, view, notebook, selectedNote } = this.props;
    
    let noteUrl = "";
    if (view === "notebook") {
      noteUrl = `/notebooks/${notebook.id}/`;
    } else {
      noteUrl = "/notes/";
    }

    const noteList = notes.map(note => {
      if (!note) return null;

      const title = note.title === '' ? 'Untitled' : note.title;
      const body = note.body.slice(0, 100).replace(/<[^>]*>?/gm, '');
      const date = parseDate(note.updated_at);
      const selected = (selectedNote == note.id);

      return (
        <div className="notes-list-item-container" key={note.id}>
          <Link to={`${noteUrl}${note.id}`}>
            <button className={`notes-list-item ${selected ? " selected" : ""}`}>
              <div className="sidebar-note-grid">
                <h4>{title}</h4>
                <p>{body}</p>
                <div className="sidebar-note-date">
                  <h5>{date}</h5>
                </div>
              </div>
            </button>
          </Link>
        </div>
      )
    })

    return noteList;
  }
}
