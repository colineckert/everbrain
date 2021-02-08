import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

// regular action creators
const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  }
}

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
}

const receiveSessionErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
}

 // thunk action creators
export const login = (user) => dispatch => {
  return SessionApiUtil.loginUser(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
}

export const logout = () => dispatch => {
  return SessionApiUtil.logoutUser()
    .then(() => dispatch(logoutCurrentUser()))
}

export const signup = (user) => dispatch => {
  return SessionApiUtil.createUser(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
}
