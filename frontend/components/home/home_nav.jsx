import React from 'react';
import { Link } from 'react-router-dom';

const HomeNav = () => {
  return (
    <div>
      <div>
        <img src="" alt="Evernote Logo"/>
      </div>
      <div>
        <Link to="/login">Log in</Link>
        <p>or</p>
        <Link to="/signup">
          <button>Demo</button>
        </Link>
      </div>
    </div>
  )
}

export default HomeNav;