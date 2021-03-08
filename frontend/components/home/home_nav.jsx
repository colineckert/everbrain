import React from 'react';
import { Link } from 'react-router-dom';
import DemoLogin from '../session/demo_login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faAngellist } from '@fortawesome/free-brands-svg-icons';

const HomeNav = () => {
  return (
    <div className="home-nav-container">

      <div className="logos-nav-container">
        <div className="home-nav-logo">
          <Link to="/">
            <img src={window.EverbrainNavLogo} alt="Everbrain Logo"/>
          </Link>
        </div>
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