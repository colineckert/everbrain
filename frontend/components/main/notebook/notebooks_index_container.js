import { connect } from 'react-redux';
import { getAllNotebookNotes, getAllNotebooks } from '../../../reducers/selectors';
import { requestNotebooks } from '../../../actions/notebook_actions';
import { requestNotes } from '../../../actions/note_actions';
import { openModal } from '../../../actions/modal_actions';
import NotebookIndex from './notebooks_index';


const mapStateToProps = (state) => {
  const notebooks = getAllNotebooks(state);
  const notes = {};
  notebooks.forEach(notebook => {
    notes[notebook.id] = getAllNotebookNotes(state, notebook.id);
  });
  // debugger
  return {
    notebooks: notebooks,
    notes: notes,
    user: state.entities.users[state.session.id]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestNotebooks: () => dispatch(requestNotebooks()),
    requestNotes: () => dispatch(requestNotes()),
    openModal: (modalName, notebookId) => dispatch(openModal(modalName, notebookId)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotebookIndex);