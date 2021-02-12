import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <div className="main-side-nav">
        <button onClick={() => this.props.logout()}>Logout</button><br/>
        <Link to="/notebooks">Notebooks</Link>
      </div>
    )
  }
}
