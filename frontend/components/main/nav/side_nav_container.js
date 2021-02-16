import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import SideNav from './side_nav';
import { getAllNotebooks, getAllNotes } from '../../../reducers/selectors';
import { requestNotebooks } from '../../../actions/notebook_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    notebooks: getAllNotebooks(state),
    notes: getAllNotes(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    requestNotebooks: () => dispatch(requestNotebooks()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);