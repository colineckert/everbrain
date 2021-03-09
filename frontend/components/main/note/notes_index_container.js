import { connect } from 'react-redux';
import { requestNotes } from '../../../actions/note_actions';
import { removeTagFilter } from '../../../actions/tag_actions';
import { getAllNotes } from '../../../reducers/selectors';
import NotesIndex from './notes_index';


const mapStateToProps = (state) => {
  const notes = getAllNotes(state);

  return {
    notes: notes,
    tagFilter: state.entities.tags[state.ui.tagFilter]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestNotes: () => dispatch(requestNotes()),
    removeTagFilter: (tagId) => dispatch(removeTagFilter(tagId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesIndex);