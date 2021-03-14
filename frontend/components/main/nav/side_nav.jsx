import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faAngellist } from '@fortawesome/free-brands-svg-icons';

export default class SideNav extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      accountDropdown: "hidden",
      notebookDropdown: "hidden",
      tagDropdown: "hidden", 
      search: '',
      showSearch: false,
      searchNoteMatches: [], 
      searchNotebookMatches: []
    }

    this.handleLogout = this.handleLogout.bind(this);
    this.handleCreateNewNote = this.handleCreateNewNote.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }
  
  componentDidMount() {
    this.props.requestNotebooks();
    this.props.requestTags();
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

  handleSearchChange(e) {
    e.preventDefault();
    this.setState({ search: e.target.value }, () => {
      if (this.state.search.length >= 1) {
        this.searchAll(this.state.search)
      } else {
        this.setState({ searchNoteMatches: [], searchNotebookMatches: [] });
      }
    })
  }

  searchAll(search) {
    const noteMatches = this.props.notes.filter(note => {
      return note.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    })

    const notebookMatches = this.props.notebooks.filter(notebook => {
      return notebook.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    })

    if (noteMatches.length || notebookMatches.length) {
      this.setState({ searchNoteMatches: noteMatches, searchNotebookMatches: notebookMatches });
    } else {
      this.setState({ searchNoteMatches: [], searchNotebookMatches: [] });
    }
  }

  clearSearch() {
    this.setState({ search: '', searchNoteMatches: [], searchNotebookMatches: [] });
    this.props.clearSearch();
  }

  toggleSearch() {
    this.setState({ showSearch: !this.state.showSearch });
  }

  handleSearchSubmit(e) {
    e.preventDefault();

    const { search } = this.state;
    if (search.length) {
      this.props.receiveSearch(search);
      this.props.removeTagFilter();
      this.setState({ searchNoteMatches: [], searchNotebookMatches: [] });
      this.props.history.push(`/notes/`);
    }
  }

  populateSearchResults() {
    const { search, searchNoteMatches, searchNotebookMatches } = this.state;

    if (!searchNoteMatches.length && !searchNotebookMatches.length) {
      return (
        <li>
          No matches found
        </li>
      )
    }

    const noteHits = searchNoteMatches.map( note => {
      return (
        <li key={note.id}>
          <button onMouseDown={() => {
            this.clearSearch(),
            this.props.history.push(`/notes/${note.id}`);
          }}>
            <i className="fas fa-sticky-note"></i>
            {this.highlightText(note.title, search)}
          </button>
        </li>
      )
    })

    const notebookHits = searchNotebookMatches.map( notebook => {
      return (
        <li key={notebook.id}>
          <button onMouseDown={() => {
            this.clearSearch(),
            this.props.history.push(`/notebooks/${notebook.id}`);
          }}>
            <i className="fas fa-book"></i>
            {this.highlightText(notebook.name, search)}
          </button>
        </li>
      )
    })

    return (
      <>
        {noteHits}
        {notebookHits}
      </>
    )
  }

  highlightText(str, text) {
    const regex = new RegExp(`(${text})`, "gi");

    const strParts = str.split(regex);

    return strParts.map((part, i) =>
      regex.test(part) ? <b key={i}>{part}</b> : <span key={i}>{part}</span>
    );
  }
  
  render() {
    const { currentUser, notebooks, tags, editorExpand } = this.props;
    const { notebookDropdown, accountDropdown, tagDropdown, search, showSearch } = this.state;
    const searchResults = this.populateSearchResults();

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

    const tagList = tags.map(tag => {
      const currentTag = (tag.id === this.props.tagFilter);
      return (
        <div className={`nav-hover-tag ${currentTag ? "selected" : ""}`} key={tag.id}>
          <a onClick={() => this.props.receiveTagFilter(tag.id)}>
            <li key={tag.id}>{tag.name}</li>
          </a>
        </div>
      )
    });

    return (
      <div className={`main-side-nav ${editorExpand ? "collapse" : ""}`}>

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
            <form onSubmit={this.handleSearchChange}>
            <i className="fas fa-search"></i>
              <input 
                placeholder="Search" 
                value={search}
                onChange={this.handleSearchChange}
                onFocus={this.toggleSearch}
                onBlur={this.toggleSearch}
              />
            </form>
            <button onClick={this.clearSearch} 
              className={`clear-search-button ${search.length ? "" : "hidden"}`}>
              <i className="fas fa-times-circle clear-search-icon"></i>
            </button>
            {search && 
              <ul className={`search-dropdown dropdown ${showSearch ? "" : "hidden"}`}>
                {searchResults}
              </ul>
            }
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

          <div className="nav-item-container">
            <button className="caret-dropdown-button"
              onClick={() => this.toggleHidden("tagDropdown")}>
                <i className={`fas fa-caret-right ${tagDropdown === "" ? "open" : ""}`}></i>
            </button>
            <div>
              <i className="fas fa-tag"></i>Tags
            </div>
            <ul className={`nav-tag-list ${tagDropdown}`}>
              {tagList}
            </ul>
          </div>
        </ul>
        
        <div className="social-links">
          <a href="https://www.linkedin.com/in/colin-eckert/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/colineckert" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://angel.co/u/colin-eckert#" target="_blank">
              <FontAwesomeIcon icon={faAngellist} />
          </a>
        </div>
      </div>
    )
  }
}
