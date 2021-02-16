import { connect } from 'react-redux';
import NotebookShow from './notebook_show';
import { getAllNotebookNotes } from '../../../reducers/selectors';
import { requestNotes, requestNotebook } from '../../../actions/notebook_actions';

const mapStateToProps = (state) => {
  return {
    notes: getAllNotebookNotes(state, ownProps.match.params.notebookId),
    notebook: state.entities.notebooks[ownProps.match.params.notebookId]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestNotes: () => dispatch(requestNotes()),
    requestNotebook: (notebookId) => dispatch(requestNotebook(notebookId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotebookShow);