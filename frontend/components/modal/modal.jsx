import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import NewNotebookModal from './new_notebook_modal';
import RenameNotebookModal from './rename_notebook_modal';
import DeleteNotebookModal from './delete_notebook_modal';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'newNotebook':
      component = <NewNotebookModal />;
      break;
    case 'deleteNotebook':
      component = <DeleteNotebookModal />;
      break;
    case 'renameNotebook':
      component = <RenameNotebookModal />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal.modalName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);