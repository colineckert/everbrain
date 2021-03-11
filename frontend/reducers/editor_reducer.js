import { EXPAND_EDITOR, CLOSE_EDITOR } from '../actions/editor_actions';

const editorReducer = (oldState = null, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case EXPAND_EDITOR:
      return true;
    case CLOSE_EDITOR:
      return null
    default:
      return oldState;
  }
}

export default editorReducer;