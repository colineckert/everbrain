import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../../actions/session_actions';
import SideNav from './side_nav';
import { getAllNotebooks, getAllNotes, getAllTags } from '../../../reducers/selectors';
import { requestNotebooks } from '../../../actions/notebook_actions';
import { createNote } from '../../../actions/note_actions';
import { receiveTagFilter, removeTagFilter, requestTags } from '../../../actions/tag_actions';
import { clearSearch, receiveSearch } from '../../../actions/search_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    notebooks: getAllNotebooks(state),
    notes: getAllNotes(state),
    tags: getAllTags(state), 
    tagFilter: state.ui.tagFilters,
    editorExpand: state.ui.editor
  }
}

const newNoteTemplate = (notebookId) => {
  return {
    title: '',
    body: '',
    notebook_id: notebookId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    requestNotebooks: () => dispatch(requestNotebooks()),
    createNewNote: notebookId => dispatch(createNote(newNoteTemplate(notebookId))),
    requestTags: () => dispatch(requestTags()), 
    receiveTagFilter: tagId => dispatch(receiveTagFilter(tagId)), 
    removeTagFilter: () => dispatch(removeTagFilter()), 
    receiveSearch: search => dispatch(receiveSearch(search)), 
    clearSearch: () => dispatch(clearSearch())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideNav));