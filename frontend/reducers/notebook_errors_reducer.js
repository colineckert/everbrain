import {
  RECEIVE_NOTEBOOK_ERRORS,
  REMOVE_NOTEBOOK,
  CLEAR_NOTEBOOK_ERRORS
} from '../actions/notebook_actions';

const notebookErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_NOTEBOOK_ERRORS:
      return action.errors;
    case REMOVE_NOTEBOOK:
      return [];
    case CLEAR_NOTEBOOK_ERRORS:
      return [];
    default:
      return oldState;
  }
}

export default notebookErrorsReducer;