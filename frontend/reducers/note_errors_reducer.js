import {
  RECEIVE_NOTE_ERRORS,
  REMOVE_NOTE,
  CLEAR_NOTE_ERRORS
} from '../actions/note_actions';

const noteErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_NOTE_ERRORS:
      return action.errors;
    case REMOVE_NOTE:
      return [];
    case CLEAR_NOTE_ERRORS:
      return [];
    default:
      return oldState;
  }
}

export default noteErrorsReducer;