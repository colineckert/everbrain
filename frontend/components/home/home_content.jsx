import React from 'react';
import { Link } from 'react-router-dom';

const HomeContent = () => {
  return (
    <div>
      <div>
        <h1>Accomplish more with better notes</h1>
        <h3>Everbrain helps you capture ideas and find them fast.</h3>
        <Link to="/signup"><button>Sign up for free</button></Link>
        <br/>
        <Link to="/login">Already have an account? Log in</Link>
      </div>
      <div className='hero-image-container'>
        <img src={window.heroAppURL} alt="Everbrain App" />
      </div>
      <div>
        <h4>WORK ANYWHERE</h4>
        <p>Keep important info handy by syncing your notes to all your devices.</p>

        <h4>CAPTURE WHAT MATTERS</h4>
        <p>Add text, images, audio, scans, PDFs, and documents to your notes.</p>

        <h4>YOUR NOTES, YOUR WAY</h4>
        <p>Express yourself with formatting tools that help you write how you think.</p>

        <h4>FIND THINGS FAST</h4>
        <p>Get what you need, when you need it. Search gives you results as you type.</p>
      </div>
    </div>
  )
}

export default HomeContent;