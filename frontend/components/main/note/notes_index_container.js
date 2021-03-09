import { connect } from 'react-redux';
import { requestNotes } from '../../../actions/note_actions';
import { removeTagFilter } from '../../../actions/tag_actions';
import { getNotes } from '../../../reducers/selectors';
import NotesIndex from './notes_index';


const mapStateToProps = (state) => {
  return {
    notes: getNotes(state),
    tagFilter: state.entities.tags[state.ui.tagFilter]
  }
  debugger
}

const mapDispatchToProps = dispatch => {
  return {
    requestNotes: () => dispatch(requestNotes()),
    removeTagFilter: (tagId) => dispatch(removeTagFilter(tagId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesIndex);