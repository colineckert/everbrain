import { connect } from 'react-redux';
import { getAllNotebooks } from '../../../reducers/selectors'
import { requestNotebooks } from '../../../actions/notebook_actions';
import NotebookIndex from './notebook_index';
import { openModal } from '../../../actions/modal_actions';


const mapStateToProps = (state) => {
  const notebooks = getAllNotebooks(state);

  return {
    notebooks: notebooks,
    user: state.entities.users[state.session.id]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestNotebooks: () => dispatch(requestNotebooks()),
    openModal: (modalName, notebookId) => dispatch(openModal(modalName, notebookId)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotebookIndex);