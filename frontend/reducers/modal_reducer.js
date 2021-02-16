import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const modalReducer = (state = { modalName: null, itemId: undefined }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_MODAL:
      let nextState = Object.assign({}, state);
      nextState.modalName = action.modalName;
      nextState.itemId = action.itemId;  
      return nextState;
    case CLOSE_MODAL:
      return { modalName: null, itemId: undefined };
    default:
      return state;
  }
}

export default modalReducer;