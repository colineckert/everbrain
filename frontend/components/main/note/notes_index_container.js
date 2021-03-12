import { connect } from 'react-redux';
import { requestNotes } from '../../../actions/note_actions';
import { removeTagFilter } from '../../../actions/tag_actions';
import { getNotes } from '../../../reducers/selectors';
import NotesIndex from './notes_index';

const mapStateToProps = (state) => {
  const search = state.ui.search;
  const header = search ? `${search}` : "All Notes"

  return {
    notes: getNotes(state),
    tagFilter: state.entities.tags[state.ui.tagFilters],
    editorExpand: state.ui.editor, 
    search: search,
    header: header
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestNotes: () => dispatch(requestNotes()),
    removeTagFilter: (tagId) => dispatch(removeTagFilter(tagId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesIndex);