import { RECEIVE_SEARCH, CLEAR_SEARCH } from '../actions/search_actions';

const searchReducer = (oldState = null, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SEARCH:
      return action.search;
    case CLEAR_SEARCH:
      return null
    default:
      return oldState;
  }
}

export default searchReducer;