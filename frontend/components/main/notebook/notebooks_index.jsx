import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { parseDate } from '../../../util/date_util';

export default class NotebookIndex extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      notebookToggleExpand: {},
      notebookActionsDropdown: {},
      noteActionsDropdown: {}
    }

    this.toggleNotebookActionsDropdown = this.toggleNotebookActionsDropdown.bind(this);
    this.toggleNoteActionsDropdown = this.toggleNoteActionsDropdown.bind(this);
    this.toggleNotebookExpand = this.toggleNotebookExpand.bind(this);
  }

  componentDidMount() {
    this.props.requestNotebooks()
      .then(() => this.props.requestNotes());
  }
  
  toggleNotebookExpand(notebookId) {
    if (this.state.notebookToggleExpand[notebookId] === true) {
      this.setState({ notebookToggleExpand: Object.assign({}, { [notebookId]: false }) })
    } else {
      this.setState({ notebookToggleExpand: Object.assign({}, { [notebookId]: true }) })
    }
  }

  toggleNotebookActionsDropdown(notebookId) {
    if (this.state.notebookActionsDropdown[notebookId] === true) {
      this.setState({ notebookActionsDropdown: Object.assign({}, { [notebookId]: false }) }) 
    } else {
      this.setState({ notebookActionsDropdown: Object.assign({}, { [notebookId]: true }) })
    }
  }

  toggleNoteActionsDropdown(noteId) {
    if (this.state.noteActionsDropdown[notebookId] === true) {
      this.setState({ noteActionsDropdown: Object.assign({}, { [noteId]: false }) })
    } else {
      this.setState({ noteActionsDropdown: Object.assign({}, { [noteId]: true }) })
    }
  }

  getNotebookNotes(notebook) {
    const { notes, user } = this.props;
    const notebookNotes = notes[notebook.id];

    return (
      notebookNotes.map(note => {
        if (!note) return null;
        const date = parseDate(note.updated_at);
        const noteActionsDropdown = this.state.noteActionsDropdown[note.id];
        
        return (
          <li key={note.id}>
            <div>
              <Link to={`/notebooks/${notebook.id}/${note.id}`}>
                <i className="fas fa-sticky-note nav-icon"></i>
                {note.title}
              </Link>
            </div>
            <div>{user.email}</div>
            <div>{date}</div>
            <div className="dropdown-anchor">
              <button className="actions-dropdown-button"
                onClick={() => this.toggleNoteActionsDropdown(note.id)}>
                  <i className="fas fa-ellipsis-h"></i>
              </button>
              <ul className={`actions-dropdown dropdown 
                ${noteActionsDropdown ? "" : "hidden"}`}>
                <li>
                  <button 
                    onClick={() => {
                    // this.props.openModal("deleteNote", note.id);
                    this.toggleNoteActionsDropdown(note.id)}}>
                      Delete note
                  </button>
                </li>
              </ul>
            </div>
          </li>
        )
      })
    )
  }
  
  render() {
    const { notebooks, user } = this.props;
    const notebookList = notebooks.map(notebook => {
      
      const date = parseDate(notebook.updated_at);
      const notebookActionsDropdown = this.state.notebookActionsDropdown[notebook.id];

      const notebookNotesList = this.getNotebookNotes(notebook);
      const notebookToggleExpand = this.state.notebookToggleExpand[notebook.id];

      return (
        <li key={notebook.id}>
          <div className="notebook-item-text">
            <div className="notebook-title">
              <button className="caret-dropdown-button" 
                onClick={() => this.toggleNotebookExpand(notebook.id)}>
                  <i className={`fas fa-caret-right nav-icon 
                  ${notebookToggleExpand ? "open" : ""}`}></i>
              </button> 
              <Link to="/notebooks">
                <i className="fas fa-book"></i>
                {notebook.name}
              </Link>
            </div>
            <div>{user.email}</div>
            <div>{date}</div>
            <div className="dropdown-anchor">
              <button className="actions-dropdown-button" 
                onClick={() => this.toggleNotebookActionsDropdown(notebook.id)}>
                  <i className="fas fa-ellipsis-h"></i>
              </button>
              <ul className={`dropdown actions-dropdown
                ${notebookActionsDropdown ? "" : "hidden"}`}>
                <li>
                  <button onClick={() => {
                    this.props.openModal("renameNotebook", notebook.id);
                    this.toggleNotebookActionsDropdown(notebook.id)}}>
                      Rename Notebook
                  </button>
                </li>
                <li>
                  <button onClick={() => {
                    this.props.openModal("deleteNotebook", notebook.id);
                    this.toggleNotebookActionsDropdown(notebook.id)}}>
                      Delete Notebook
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <ul className={`notebook-index-notes-list 
              ${notebookToggleExpand ? "" : "hidden"}`}>
            <div className="notebook-index-notes-list-container">
              {notebookNotesList}
            </div>
          </ul>
        </li>
      )
    })


    return (
      <div className="notebook-index-container">
        <div className="notebook-index-header">
          <h1>Notebooks</h1>
        </div>
        <div className="notebook-index-header-2">
          <h4>My notebook list</h4>
        </div>
        <div className="new-notebook">
          <button onClick={() => this.props.openModal('newNotebook')}>
            <i className="fas fa-book-medical"></i>New Notebook</button>
        </div>

        <div className="notebook-index-col-header notebook-title"><h5>TITLE</h5></div>
        <div className="notebook-index-col-header"><h5>CREATED BY</h5></div>
        <div className="notebook-index-col-header"><h5>UPDATED</h5></div>
        <div className="notebook-index-col-header action"><h5>ACTION</h5></div>
        <div className="notebooks-list">
          <ul>
            {notebookList}
          </ul>
        </div>
      </div>
    )
  }
}
