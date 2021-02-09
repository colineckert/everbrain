import React, { Component } from 'react';
import { Link } from "react-router-dom";

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
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={idx}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>

          <Link to="/">Everbrain</Link>
          <br/>
          <p>Remember everything important.</p>
          <br/>

          <input 
            type="text" 
            placeholder="Email address"
            value={this.state.email}
            onChange={this.update('email')}
          /> <br/>

          <input 
            type="password" 
            placeholder="Password"
            value={this.state.password}
            onChange={this.update('password')}
          /> <br/>

          {this.renderErrors()}
          <input type="submit" value={this.props.buttonText} />
        </form>
        <br/>

        <AccountLink formType={this.props.formType}/>
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
    <div>
      <div>{text}</div>
      {link}
    </div>
  )
}