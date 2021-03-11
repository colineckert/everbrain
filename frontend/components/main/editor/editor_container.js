import { connect } from 'react-redux';
import Editor from './editor';
import { requestNote, updateNote, deleteNote } from '../../../actions/note_actions';
import { getAllTags, getTags } from '../../../reducers/selectors';
import { createTag, createNoteTag, deleteNoteTag, receiveTagFilter } from '../../../actions/tag_actions';
import { openModal } from '../../../actions/modal_actions';
import { closeEditor, expandEditor } from '../../../actions/editor_actions';

const mapStateToProps = (state, ownProps) => {
  const note = state.entities.notes[ownProps.match.params.noteId];
  const notebook = note ? state.entities.notebooks[note.notebook_id] : { name: "No Notebook" };
  const noteTags = note ? getTags(state, note.tag_ids) : [];
  return {
    note: note,
    notebook: notebook,
    noteTags: noteTags, 
    allTags: getAllTags(state),
    userId: state.session.id, 
    editorExpand: state.ui.editor
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestNote: noteId => dispatch(requestNote(noteId)), 
    updateNote: note => dispatch(updateNote(note)),
    deleteNote: noteId => dispatch(deleteNote(noteId)),
    receiveTagFilter: tagId => dispatch(receiveTagFilter(tagId)),
    createTag: tag => dispatch(createTag(tag)),
    createNoteTag: noteTag => dispatch(createNoteTag(noteTag)),
    deleteNoteTag: noteTag => dispatch(deleteNoteTag(noteTag)),
    openModal: (modalName, itemId) => dispatch(openModal(modalName, itemId)),
    expandEditor: () => dispatch(expandEditor()),
    closeEditor: () => dispatch(closeEditor())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);