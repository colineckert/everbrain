import React from 'react';
import { Link } from 'react-router-dom';

const HomeContent = () => {
  return (
    <div className="home-content">
      <div className="home-content-header">
        <h1>Accomplish more with better notes</h1>
        <h5>Everbrain helps you capture ideas and find them fast.</h5>

        <Link className="main-cta" to="/signup"><button>Sign up for free</button></Link>
        <br/>
        <Link className="login-alt-cta" to="/login">Already have an account? Log in</Link>
      </div>
    
      <div className="home-content-body">

        <div className='hero-image-container'>
          <img src={window.heroAppURL} alt="Everbrain App" />
        </div>

        <section className="home-content-sidebar">
          <div>
            <h4>WORK ANYWHERE</h4>
            <p>Keep important info handy by syncing your notes to all your devices.</p>
          </div>
          <div>
            <h4>CAPTURE WHAT MATTERS</h4>
            <p>Add text, images, audio, scans, PDFs, and documents to your notes.</p>
          </div>
          <div>
            <h4>YOUR NOTES, YOUR WAY</h4>
            <p>Express yourself with formatting tools that help you write how you think.</p>
          </div>
          <div>
            <h4>FIND THINGS FAST</h4>
            <p>Get what you need, when you need it. Search gives you results as you type.</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomeContent;