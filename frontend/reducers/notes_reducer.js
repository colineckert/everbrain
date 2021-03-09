import {
  RECEIVE_NOTES,
  RECEIVE_NOTE,
  REMOVE_NOTE
} from '../actions/note_actions';
import { RECEIVE_NOTEBOOK } from '../actions/notebook_actions';
import { RECEIVE_NOTE_TAG, REMOVE_NOTE_TAG } from '../actions/tag_actions';


const notesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  const { noteId, tagId } = action;
  const note = oldState[noteId];
  
  switch (action.type) {
    case RECEIVE_NOTES:
      return Object.assign({}, oldState, action.notes);
    case RECEIVE_NOTE:
      return Object.assign({}, oldState, { [action.note.id]: action.note });
    case REMOVE_NOTE:
      delete newState[action.noteId];
      return newState;
        
    case RECEIVE_NOTEBOOK:
      Object.values(action.notes).forEach(note => {
        newState[note.id] = note
      });
      return newState;

    case RECEIVE_NOTE_TAG:
      return Object.assign({}, oldState, 
          { [noteId]: Object.assign({}, note, {tag_ids: note.tag_ids.concat(tagId) }) } )
    case REMOVE_NOTE_TAG:
      const tagIndex = note.tag_ids.indexOf(tagId);
      newState[noteId].tag_ids.splice(tagIndex, 1);
      return newState;
  
    default:
      return oldState;
  }
}

export default notesReducer; 