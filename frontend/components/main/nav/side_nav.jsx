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
  }
  
  componentDidMount() {
    this.props.requestNotebooks();
  }
  

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
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
        <div className={`nav-hover-notebook ${currentNotebook ? "selected" : ""}`} key={notebook.id}>
          <Link to={`/notebooks/${notebook.id}`}>
            <li key={notebook.id}>{notebook.name}</li>
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

        <div>
          <button className="new-note-button">
            <i className="fas fa-plus"></i>New Note
          </button>
        </div>
        <div className="nav-all-notes">
          <Link to="/notes"><i className="fas fa-sticky-note"></i>All Notes</Link>
        </div>
        <div className="nav-notebooks">
          <Link to="/notebooks"><i className="fas fa-book"></i>Notebooks</Link>
        </div>
      </div>
    )
  }
}
