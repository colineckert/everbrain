import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import Nav from './nav';

const mapDispatchToProps = dispatch => {
  return {
    logout: user => dispatch(logout(user))
  }
}

export default connect(null, mapDispatchToProps)(Nav);