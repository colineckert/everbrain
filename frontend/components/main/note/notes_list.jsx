import React, { Component } from 'react';
import { parseDate } from '../../../util/date_util';
import { Link } from 'react-router-dom';

export default class NotesList extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { notes } = this.props;
    
    const noteList = notes.map(note => {
      
      const title = note.title === '' ? 'Untitled' : note.title;
      const body = note.body.slice(0, 100).replace(/<[^>]*>?/gm, '');
      const date = parseDate(note.updated_at);
      
      return (
        <div className="notes-list-item-container" key={note.id}>
          <Link to={`/notes/${note.id}`}>
            <button className="notes-list-item">
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
