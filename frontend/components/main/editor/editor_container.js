import { connect } from 'react-redux';
import Editor from './editor';
import { requestNote, updateNote, deleteNote } from '../../../actions/note_actions';
import { openModal } from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const note = state.entities.notes[ownProps.match.params.noteId];
  const notebook = state.entities.notebooks[note.notebook_id];

  return {
    note: note,
    notebook: notebook
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestNote: noteId => dispatch(requestNote(noteId)), 
    updateNote: note => dispatch(updateNote(note)),
    deleteNote: noteId => dispatch(deleteNote(noteId)),
    openModal: (modalName, itemId) => dispatch(openModal(modalName, itemId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);