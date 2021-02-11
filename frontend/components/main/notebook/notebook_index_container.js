import { connect } from 'react-redux';
import { fetchNotebooks } from '../../../util/notebook_api_util';
import { getAllNotebooks } from '../../../reducers/selectors'
import NotebookIndex from './notebook_index';

const mapStateToProps = (state) => {
  const notebooks = getAllNotebooks(state);
  
  return {
    notebooks: notebooks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchNotebooks: () => dispatch(fetchNotebooks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotebookIndex);