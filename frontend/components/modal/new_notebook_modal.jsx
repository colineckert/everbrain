import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { createNotebook } from '../../actions/notebook_actions';
import { clearNotebookErrors } from '../../actions/notebook_actions';

class NewNotebookModal extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name: "",
      author_id: this.props.currentUser
    }

    this.createNotebook = this.createNotebook.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  createNotebook(e) {
    e.preventDefault();

    const notebook = this.state;
    this.props.createNotebook(notebook)
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
          <h1>Create new notebook</h1>
          <button className="close-modal" onClick={this.props.closeModal}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div>
          <p>Notebooks are useful for grouping notes around a common topic.</p>
        </div>

        <form id="notebook-form" onSubmit={this.createNotebook}>
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
    errors: Object.values(state.errors.notebook)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createNotebook: notebook => dispatch(createNotebook(notebook)),
    closeModal: () => dispatch(closeModal()),
    clearNotebookErrors: () => dispatch(clearNotebookErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewNotebookModal);