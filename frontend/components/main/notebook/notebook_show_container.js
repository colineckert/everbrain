import { connect } from 'react-redux';
import NotebookShow from './notebook_show';
import { getNotebookNotes } from '../../../reducers/selectors';
import { requestNotebook } from '../../../actions/notebook_actions';
import { requestNotes } from '../../../actions/note_actions';
import { removeTagFilter } from '../../../actions/tag_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    notes: getNotebookNotes(state, ownProps.match.params.notebookId),
    notebook: state.entities.notebooks[ownProps.match.params.notebookId], 
    checkNotesState: state.entities.notes,
    tagFilter: state.entities.tags[state.ui.tagFilters],
    editorExpand: state.ui.editor
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestNotes: () => dispatch(requestNotes()),
    requestNotebook: (notebookId) => dispatch(requestNotebook(notebookId)),
    removeTagFilter: tagId => dispatch(removeTagFilter(tagId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotebookShow);