import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { createNotebook } from '../../actions/notebook_actions';

class NewNotebookModal extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name: "",
      author_id: this.props.currentUser
    }

    this.update = this.update.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  createNotebook(e) {
    e.preventDefault();

    const notebook = this.state;
    this.props.createNotebook(notebook);
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <h1>Create new notebook</h1>
        <p>Notebooks are useful for grouping notes around a common topic.</p>
        <button className="close-modal" onClick={this.props.closeModal}>
          <i className="fas fa-times"></i>
        </button>
        <form onSubmit={this.createNotebook}>
          <label>Name
            <input 
              type="text" 
              placeholder="Notebook name"
              value={name} 
              onChange={this.update('name')}
            />
          </label>
          <button type="submit">Continue</button>
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
    createNotebook: notebook => dispatch(createNotebook(notebook)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewNotebookModal);