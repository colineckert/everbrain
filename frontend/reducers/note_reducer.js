import {
  RECEIVE_NOTES,
  RECEIVE_NOTE,
  REMOVE_NOTE
} from '../actions/note_actions';
import { RECEIVE_NOTEBOOK } from '../actions/notebook_actions';

const notesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_NOTES:
      return Object.assign({}, oldState, action.notes);
    case RECEIVE_NOTE:
      return Object.assign({}, oldState, { [action.note.id]: action.note });
    // case RECEIVE_NOTEBOOK:

    case REMOVE_NOTE:
      let newState = Object.assign({}, oldState);
      delete newState[action.noteId];
      return newState;
    default:
      return oldState;
  }
}

export default notesReducer;