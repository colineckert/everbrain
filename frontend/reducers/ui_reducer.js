import { combineReducers } from 'redux';
import editorReducer from './editor_reducer';
import modalReducer from './modal_reducer';
import searchReducer from './search_reducer';
import tagFiltersReducer from './tag_filter_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  tagFilters: tagFiltersReducer,
  editor: editorReducer, 
  search: searchReducer
});

export default uiReducer;