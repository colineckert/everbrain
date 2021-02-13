import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { deleteNotebook, requestNotebooks } from '../../actions/notebook_actions';

class DeleteNotebookModal extends Component {
  constructor(props) {
    super(props)

    this.deleteNotebook = this.deleteNotebook.bind(this);
  }

  deleteNotebook(e) {
    e.preventDefault();

    const notebookId = this.props.notebookId;  
    this.props.deleteNotebook(notebookId)
      .then(() => this.props.closeModal())
        .then(() => this.props.requestNotebooks());
  }

  render() {
    return (
      <div className="modal-content">
        <div className="modal-header">
          <h1>Delete notebook?</h1>
          <button className="close-modal" onClick={this.props.closeModal}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div>
          <p>Any notes in the notebook will be moved to Trash. This cannot be undone.</p>
        </div>
        <form id="notebook-form" onSubmit={this.deleteNotebook}>
          <div className="modal-buttons">
            <button 
              className="cancel-button" 
              onClick={this.props.closeModal}>Cancel
            </button>
            <button 
              className="delete-button" 
              type="submit" 
              form="notebook-form">Continue
            </button>
          </div>
        </form>
      </div>
    )
  }

}


const mapStateToProps = (state) => {
  return {
    notebookId: state.ui.modal.notebookId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteNotebook: notebookId => dispatch(deleteNotebook(notebookId)),
    requestNotebooks: () => dispatch(requestNotebooks()),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteNotebookModal);