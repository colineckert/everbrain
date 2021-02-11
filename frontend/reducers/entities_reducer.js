import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import notebooksReducer from './notebook_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  notebooks: notebooksReducer
});

export default entitiesReducer;