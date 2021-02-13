import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { updateNotebook } from '../../actions/notebook_actions';
import { clearNotebookErrors } from '../../actions/notebook_actions';

class RenameNotebookModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      id: null,
      author_id: this.props.currentUser
    }

    this.updateNotebook = this.updateNotebook.bind(this);
  }

  componentDidMount() {
    this.setState({
      name: this.props.notebook.name,
      id: this.props.notebook.id,
    })
  }
  

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  updateNotebook(e) {
    e.preventDefault();

    const notebook = this.state;
    this.props.updateNotebook(notebook)
      .then(() => this.props.closeModal());
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={i}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  componentWillUnmount() {
    this.props.clearNotebookErrors();
  }

  render() {
    const { name } = this.state;

    return (
      <div className="modal-content">
        <div className="modal-header">
          <h1>Rename notebook</h1>
          <button className="close-modal" onClick={this.props.closeModal}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <form id="notebook-form" onSubmit={this.updateNotebook}>
          <label htmlFor="name" className="input-label">Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Notebook name"
            value={name} 
            autoFocus={true}
            onChange={this.update('name')}
          />
          <div className="errors">
            {this.renderErrors()}
          </div>
          
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
    currentUser: state.session.id,
    notebook: state.entities.notebooks[state.ui.modal.notebookId],
    errors: Object.values(state.errors.notebook)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateNotebook: notebook => dispatch(updateNotebook(notebook)),
    closeModal: () => dispatch(closeModal()),
    clearNotebookErrors: () => dispatch(clearNotebookErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RenameNotebookModal);