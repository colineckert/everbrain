import { RECEIVE_TAG_FILTER, REMOVE_TAG_FILTER } from '../actions/tag_actions';

const tagFiltersReducer = (oldState = null, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_TAG_FILTER:
      return action.tagId;
    case REMOVE_TAG_FILTER:
      return null;
    default:
      return oldState;
  }
}

export default tagFiltersReducer;