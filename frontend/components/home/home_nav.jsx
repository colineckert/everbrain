import React from 'react';
import { Link } from 'react-router-dom';
import DemoLogin from '../session/demo_login';

const HomeNav = () => {
  return (
    <div>
      <div>
        <Link to="/">
          <img src={window.EnNavLogo} alt="Evernote Logo"/>
        </Link>
      </div>
      <div>
        <Link to="/login">Log in</Link>
        <p>or</p>
        <DemoLogin />
      </div>
    </div>
  )
}

export default HomeNav;