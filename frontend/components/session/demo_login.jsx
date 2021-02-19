
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { login } from '../../actions/session_actions';

class DemoLogin extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      email: "demo@everbrain.com",
      password: "password"
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.props.login(this.state)
      .then(() => this.props.history.push('/notes'));
  }
  
  render() {
    return (
      <button 
        onClick={this.handleClick}>Demo
      </button>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(DemoLogin));