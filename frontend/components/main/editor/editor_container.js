import { connect } from 'react-redux';
import Editor from './editor';
import { requestNote, updateNote, deleteNote } from '../../../actions/notes/notes_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    note: state.entities.notes[ownProps.match.params.noteId],
    notebook: state.entities.notebooks[note.notebook_id]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestNote: noteId => dispatch(requestNote(noteId)), 
    updateNote: note => dispatch(updateNote(note)),
    deleteNote: noteId => dispatch(deleteNote(noteId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);