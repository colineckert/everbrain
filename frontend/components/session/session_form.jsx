import React, { Component } from 'react';
import { Link } from "react-router-dom";
import DemoLogin from './demo_login';

export default class SessionForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email: "",
       password: ""
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }
  
  handleSubmit(e) {
    e.preventDefault();

    const user = Object.assign({}, this.state);

    this.props.processForm(user)
      .then(() => this.props.history.push('/notes'));
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={i}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }
  

  render() {
    return (
      <div className="session-form-background">
        <div className="session-form-container">
          <div className="main-session-form">
            <form onSubmit={this.handleSubmit}>

              <Link to="/"><h1>Everbrain</h1></Link>
              <br/>
              <p>Remember everything important.</p>
              <br/>
              
              <div id="session-demo">
                <DemoLogin />
              </div>

              <div className="line">
                <div> or </div>
              </div>
              
              <input 
                className="email-input"
                type="text" 
                placeholder="Email address"
                value={this.state.email}
                onChange={this.update('email')}
              /> <br/>
              <input
                className="password-input"
                type="password" 
                placeholder="Password"
                value={this.state.password}
                onChange={this.update('password')}
              /> <br/>

              <div className="errors">
                {this.renderErrors()}
              </div>
              
              <div className="form-submit-container">
                <button 
                  className="form-submit"
                  type="submit">{this.props.buttonText}
                </button>
              </div>
            </form>
            <br/>

            <AccountLink formType={this.props.formType}/>
          </div>
        </div>
      </div>
    )
  }
}

const AccountLink = ({ formType }) => {
  let link, text;

  if (formType === "Sign in") {
    text = "Don't have an account?"
    link = <Link to="/signup">Create account</Link>
  } else {
    text = "Already have an account?"
    link = <Link to="/login">Sign in</Link>
  };

  return (
    <div className="form-alt">
      <div className="form-alt-text">
        {text}
      </div>
      <div className="form-alt-link">
        {link}
      </div>
    </div>
  )
}