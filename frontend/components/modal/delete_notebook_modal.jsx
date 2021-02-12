import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { deleteNotebook } from '../../actions/notebook_actions';

class NewNotebookModal extends Component {
  constructor(props) {
    super(props)

  }

  deleteNotebook(e) {
    e.preventDefault();

    const notebook = this.state;
    this.props.deleteNotebook(notebook)
      .then(() => this.props.closeModal());
  }

  render() {
    const { name } = this.state;
    return (
      <div className="modal-content">
        <div className="modal-header">
          <h1>Create new notebook</h1>
          <button className="close-modal" onClick={this.props.closeModal}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div>
          <p>Notebooks are useful for grouping notes around a common topic.</p>
        </div>
        <form id="notebook-form" onSubmit={this.deleteNotebook}>
          <label htmlFor="name" className="input-label">Name
          </label>
          <div className="modal-buttons">
            <button className="cancel-button" onClick={this.props.closeModal}>
              Cancel
            </button>
            <button type="submit" form="notebook-form">Continue</button>
          </div>
        </form>
      </div>
    )
  }

}


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteNotebook: notebookId => dispatch(deleteNotebook(notebookId)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewNotebookModal);