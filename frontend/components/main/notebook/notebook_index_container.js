import { connect } from 'react-redux';
import { getAllNotebooks } from '../../../reducers/selectors'
import { requestNotebooks, createNotebook } from '../../../actions/notebook_actions';
import NotebookIndex from './notebook_index';
import { openModal } from '../../../actions/modal_actions';
import modal from '../../modal/modal';


const mapStateToProps = (state) => {
  const notebooks = getAllNotebooks(state);
  
  return {
    notebooks: notebooks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestNotebooks: () => dispatch(requestNotebooks()),
    openModal: modal => dispatch(openModal(modal)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotebookIndex);