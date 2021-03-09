import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import tagFiltersReducer from './tag_filter_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  tagFilters: tagFiltersReducer
});

export default uiReducer;