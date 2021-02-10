import React from 'react';
import { Link } from 'react-router-dom';
import DemoLogin from '../session/demo_login';

const HomeNav = () => {
  return (
    <div className="home-nav-container">
      <div className="home-nav-logo">
        <Link to="/">
          <img src={window.EnNavLogo} alt="Evernote Logo"/>
        </Link>
      </div>
      <div className="home-nav-buttons">
        <Link to="/login">Log in</Link>
        <p>or</p>
        <DemoLogin />
      </div>
    </div>
  )
}

export default HomeNav;