import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
  errors: Object.values(state.errors),
  formType: 'signup'
})

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(signup(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
