import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { deleteNote, requestNotes } from '../../actions/note_actions';

class DeleteNoteModal extends Component {
  constructor(props) {
    super(props)

    this.deleteNote = this.deleteNote.bind(this);
  }

  deleteNote(e) {
    e.preventDefault();

    const note = this.props.note;
    this.props.deleteNote(note.id)
      .then(() => this.props.closeModal())
        .then(() => {
          this.props.match.params.notebookId ? 
            this.props.history.push(`/notebooks/${this.props.match.params.notebookId}`) : 
            this.props.history.push('/notes')
        });
  }

  render() {
    const note = this.props;
    if (!note) return null;

    return (
      <div className="modal-content">
        <div className="modal-header">
          <h1>Delete note?</h1>
          <button className="close-modal" onClick={this.props.closeModal}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div>
          <p>Note will be permanently moved to trash.</p>
        </div>
        <form id="notebook-form" onSubmit={this.deleteNote}>
          <div className="modal-buttons">
            <button
              className="cancel-button"
              onClick={this.props.closeModal}>Cancel
            </button>
            <button
              className="delete-button"
              type="submit"
              form="notebook-form">Delete
            </button>
          </div>
        </form>
      </div>
    )
  }

}


const mapStateToProps = (state) => {
  return {
    note: state.entities.notes[state.ui.modal.itemId]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteNote: noteId => dispatch(deleteNote(noteId)),
    requestNotes: () => dispatch(requestNotes()),
    closeModal: () => dispatch(closeModal())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeleteNoteModal));