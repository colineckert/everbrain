import * as NotebookAPI from '../util/notebook_api_util';

export const RECEIVE_NOTEBOOKS = 'RECEIVE_NOTEBOOKS';
export const RECEIVE_NOTEBOOK = 'RECEIVE_NOTEBOOK';
export const REMOVE_NOTEBOOK = 'REMOVE_NOTEBOOK';

const receiveNotebooks = notebooks => {
  return {
    type: RECEIVE_NOTEBOOKS,
    notebooks
  }
}

const receiveNotebook = notebook => {
  return {
    type: RECEIVE_NOTEBOOK,
    notebook
  }
}

const removeNotebook = notebookId => {
  return {
    type: REMOVE_NOTEBOOK,
    notebookId
  }
}

// thunk actions
export const requestNotebooks = () => dispatch => {
  return NotebookAPI.fetchNotebooks()
    .then(notebooks => dispatch(receiveNotebooks(notebooks)))
}

export const requestNotebook = (notebookId) => dispatch => {
  return NotebookAPI.fetchNotebook(notebookId)
    .then(notebook => dispatch(receiveNotebook(notebook)))
}

export const createNotebook = (notebook) => dispatch => {
  return NotebookAPI.createNotebook(notebook)
    .then(notebook => dispatch(receiveNotebook(notebook)))
}

export const updateNotebook = (notebook) => dispatch => {
  return NotebookAPI.updateNotebook(notebook)
    .then(notebook => dispatch(receiveNotebook(notebook)))
}

export const deleteNotebook = (notebookId) => dispatch => {
  return NotebookAPI.deleteNotebook(notebookId)
    .then((notebook) => dispatch(removeNotebook(notebook.id)))
}
