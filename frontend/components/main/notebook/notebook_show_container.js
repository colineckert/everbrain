import { connect } from 'react-redux';
import NotebookShow from './notebook_show';
import { getAllNotebookNotes } from '../../../reducers/selectors';
import { requestNotebook } from '../../../actions/notebook_actions';
import { requestNotes } from '../../../actions/note_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    notes: getAllNotebookNotes(state, ownProps.match.params.notebookId),
    notebook: state.entities.notebooks[ownProps.match.params.notebookId], 
    checkStateNotes: state.entities.notes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestNotes: () => dispatch(requestNotes()),
    requestNotebook: (notebookId) => dispatch(requestNotebook(notebookId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotebookShow);