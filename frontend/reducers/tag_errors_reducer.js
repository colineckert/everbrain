import { 
  RECIVE_TAG_ERRORS,
  REMOVE_TAG, 
  CLEAR_TAG_ERRORS 
} from '../actions/tag_actions';

const tagErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECIVE_TAG_ERRORS:
      return action.errors;
    case REMOVE_TAG:
      return [];
    case CLEAR_TAG_ERRORS:
      return [];
    default:
      return oldState;
  }
}

export default tagErrorsReducer;