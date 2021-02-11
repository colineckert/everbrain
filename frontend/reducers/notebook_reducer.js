import { 
  RECEIVE_NOTEBOOKS,
  RECEIVE_NOTEBOOK,
  REMOVE_NOTEBOOK
 } from '../actions/notebook_actions';

const notebooksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_NOTEBOOKS:
      return Object.assign({}, oldState, action.notebooks);
    case RECEIVE_NOTEBOOK:
      return Object.assign({}, oldState, { [action.notebook.id]: action.notebook });
    case REMOVE_NOTEBOOK:
      let newState = Object.assign({}, oldState);
      delete newState[action.notebookId];
      return newState;
    default:
      return oldState;
  }
}

 export default notebooksReducer;