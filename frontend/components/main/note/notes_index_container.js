import { connect } from 'react-redux';
import { requestNotes } from '../../../actions/note_actions';
import { getAllNotes } from '../../../reducers/selectors';
import NotesIndex from './notes_index';


const mapStateToProps = (state) => {
  const notes = getAllNotes(state);

  return {
    notes: notes,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestNotes: () => dispatch(requestNotes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesIndex);