import { connect } from 'react-redux';
import { getAllNotebooks } from '../../../reducers/selectors'
import { requestNotebooks, createNotebook } from '../../../actions/notebook_actions';
import NotebookIndex from './notebook_index';

const mapStateToProps = (state) => {
  const notebooks = getAllNotebooks(state);
  
  return {
    notebooks: notebooks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestNotebooks: () => dispatch(requestNotebooks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotebookIndex);