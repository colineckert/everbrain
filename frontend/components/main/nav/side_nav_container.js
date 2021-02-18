import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../../actions/session_actions';
import SideNav from './side_nav';
import { getAllNotebooks, getAllNotes } from '../../../reducers/selectors';
import { requestNotebooks } from '../../../actions/notebook_actions';
import { createNote } from '../../../actions/note_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    notebooks: getAllNotebooks(state),
    notes: getAllNotes(state)
  }
}

const newNoteTemplate = (notebookId) => {
  return {
    title: '',
    body: '',
    notebook_id: notebookId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    requestNotebooks: () => dispatch(requestNotebooks()),
    createNewNote: notebookId => dispatch(createNote(newNoteTemplate(notebookId)))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideNav));