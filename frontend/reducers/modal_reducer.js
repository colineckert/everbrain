import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const modalReducer = (state = { modalName: null, notebookId: undefined }, action) => {
  switch (action.type) {
    case OPEN_MODAL:
    let nextState = Object.assign({}, state);
    nextState.modalName = action.modalName;
    nextState.notebookId = action.notebookId;  
    return nextState;
    case CLOSE_MODAL:
      return { modalName: null, notebookId: undefined };
    default:
      return state;
  }
}

export default modalReducer;