import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class SideNav extends Component {

  render() {
    return (
      <div className="main-side-nav">
        <div>
          <button className="user-logout-button" onClick={() => this.props.logout()}>
            <i className="fas fa-user"></i>
            Logout
          </button>
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
            <i className="fas fa-plus"></i>
          New Note
          </button>
        </div>
        <div className="nav-notebooks">
          <Link to="/notebooks"><i className="fas fa-book"></i> Notebooks</Link>
        </div>
      </div>
    )
  }
}
