import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class SideNav extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      accountDropdown: "hidden",
      notebookDropdown: "hidden",
    }

    this.handleLogout = this.handleLogout.bind(this);
    this.handleCreateNewNote = this.handleCreateNewNote.bind(this);
  }
  
  componentDidMount() {
    this.props.requestNotebooks();
  }
  

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleCreateNewNote(e) {
    e.preventDefault();

    let notebookId;
    if (this.props.match.params.notebookId) {
      notebookId = this.props.match.params.notebookId;
      this.props.createNewNote(notebookId)
        .then((res) => this.props.history.push(`/notebooks/${notebookId}/${res.note.id}`));
    } else {
      notebookId = this.props.notebooks[0].id;
      this.props.createNewNote(notebookId)
        .then((res) => this.props.history.push(`/notes/${res.note.id}`));
    }
  } 

  toggleHidden(dropdown) {
    this.state[dropdown] === "hidden" ?
      this.setState({ [dropdown]: "" }) : this.setState({ [dropdown]: "hidden" });
  }

  render() {
    const { currentUser, notebooks } = this.props;
    const { notebookDropdown, accountDropdown } = this.state;

    const notebookList = notebooks.map(notebook => {
      const currentNotebook = (notebook.id == this.props.match.params.notebookId);
      return (
        <div key={notebook.id}
        className={`nav-hover-notebook ${currentNotebook ? "selected" : ""}`}>
          <Link to={`/notebooks/${notebook.id}`}>
            <li key={notebook.id}>
              <i className="fas fa-book"></i>{notebook.name}
            </li>
          </Link>
        </div>
      )
    });

    return (
      <div className="main-side-nav">

        <div className="nav-profile">
          <button className="account-dropdown-button" 
            onClick={() => this.toggleHidden("accountDropdown")}>
              <i className="fas fa-user"></i>
              {currentUser.email} <i className="fas fa-angle-down"></i>
          </button>
          <ul className={`account-dropdown dropdown ${accountDropdown}`}>
            <li>
              <button onClick={this.handleLogout}>Sign out</button>
            </li>
          </ul>
        </div>

        <div className="nav-search">
          <div className="nav-search-bar">
            <i className="fas fa-search"></i>
            <form>
              <input placeholder="Search"/>
            </form>
          </div>
        </div>

        <div className="new-note-button-container">
          <button className="new-note-button"
            onClick={this.handleCreateNewNote}>
            <i className="fas fa-plus"></i>New Note
          </button>
        </div>

        <ul className="main-nav-links">
          <div className="nav-item-container">
            <div></div>
            <Link to="/notes" className="main-nav-link">
              <i className="fas fa-sticky-note"></i>
              All Notes
            </Link>
          </div>
          
          <div className="nav-item-container">
            <button className="caret-dropdown-button" 
              onClick={() => this.toggleHidden("notebookDropdown")}>
              <i className={`fas fa-caret-right ${notebookDropdown === "" ? "open" : ""}`}></i>
            </button>
            <Link to="/notebooks" className="main-nav-link">
              <i className="fas fa-book"></i>
              Notebooks
            </Link>
            <ul className={`nav-notebook-list ${notebookDropdown}`}>
              {notebookList}
            </ul>
          </div>
        </ul>
      </div>
    )
  }
}
