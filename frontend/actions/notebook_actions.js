import * as NotebookAPI from '../util/notebook_api_util';

export const RECEIVE_NOTEBOOKS = 'RECEIVE_NOTEBOOKS';
export const RECEIVE_NOTEBOOK = 'RECEIVE_NOTEBOOK';
export const REMOVE_NOTEBOOK = 'REMOVE_NOTEBOOK';
export const RECEIVE_NOTEBOOK_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_NOTEBOOK_ERRORS = 'CLEAR_NOTEBOOK_ERRORS';

const receiveNotebooks = (notebooks) => {
  return {
    type: RECEIVE_NOTEBOOKS,
    notebooks
  }
}

const receiveNotebook = (notebook, notes = {}) => {
  return {
    type: RECEIVE_NOTEBOOK,
    notebook,
    notes
  }
}

const removeNotebook = (notebookId) => {
  return {
    type: REMOVE_NOTEBOOK,
    notebookId
  }
}

const receiveNotebookErrors = (errors) => {
  return {
    type: RECEIVE_NOTEBOOK_ERRORS,
    errors
  }
}

export const clearNotebookErrors = () => {
  return {
    type: CLEAR_NOTEBOOK_ERRORS
  }
}

// thunk actions
export const requestNotebooks = () => dispatch => {
  return NotebookAPI.fetchNotebooks()
    .then(notebooks => dispatch(receiveNotebooks(notebooks)),
      errors => dispatch(receiveNotebookErrors(errors.responseJSON)))
}

export const requestNotebook = (notebookId) => dispatch => {
  return NotebookAPI.fetchNotebook(notebookId)
    .then(({ notebook, notes }) => dispatch(receiveNotebook(notebook, notes)),
      errors => dispatch(receiveNotebookErrors(errors.responseJSON)))
}

export const createNotebook = (notebook) => dispatch => {
  return NotebookAPI.createNotebook(notebook)
    .then(({ notebook, notes }) => dispatch(receiveNotebook(notebook, notes)),
      errors => dispatch(receiveNotebookErrors(errors.responseJSON)))
}

export const updateNotebook = (notebook) => dispatch => {
  return NotebookAPI.updateNotebook(notebook)
    .then(({ notebook, notes }) => dispatch(receiveNotebook(notebook, notes)),
      errors => dispatch(receiveNotebookErrors(errors.responseJSON)))
}

export const deleteNotebook = (notebookId) => dispatch => {
  return NotebookAPI.deleteNotebook(notebookId)
    .then(() => dispatch(removeNotebook(notebookId)),
      errors => dispatch(receiveNotebookErrors(errors.responseJSON)))
}
