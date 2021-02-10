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

      {/* <div className="social-media-list">
        <a href="https://github.com/colineckert/everbrain" target="_blank"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/colin-eckert/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
        <a href="https://angel.co/u/colin-eckert" target="_blank"><i className="fab fa-angellist"></i></a>
      </div> */}

      <div className="home-nav-buttons">
        <Link className="home-nav-login" to="/login">Log in</Link>
        <div id="home-nav-demo">
          <DemoLogin />
        </div>
      </div>
    </div>
  )
}

export default HomeNav;