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

  render() {
    return (
      <div>
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
        <p>or</p>
        <DemoLogin />
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