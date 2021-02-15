import * as NoteAPI from '../util/note_api_util';

export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const RECEIVE_NOTE_ERRORS = 'RECEIVE_NOTE_ERRORS';


export const receiveNotes = (notes) => {
  return {
    type: RECEIVE_NOTES,
    notes
  }
}

export const receiveNote = (note) => {
  return {
    type: RECEIVE_NOTE,
    note
  }
}

export const removeNote = (noteId) => {
  return {
    type: REMOVE_NOTE,
    noteId
  }
}

export const receiveNoteErrors = (errors) => {
  return {
    type: RECEIVE_NOTE_ERRORS,
    errors
  }
}

// thunk actions
export const requestNotes = () => dispatch => {
  return NoteAPI.fetchNotes()
    .then(notes => dispatch(receiveNotes(notes)),
      errors => dispatch(receiveNoteErrors(errors.responseJSON)))
}

export const requestNote = (noteId) => dispatch => {
  return NoteAPI.fetchNote(noteId)
    .then(note => dispatch(receiveNote(note)),
      errors => dispatch(receiveNoteErrors(errors.responseJSON)))
}

export const createNote = (note) => dispatch => {
  return NoteAPI.createNote(note)
    .then(note => dispatch(receiveNote(note)),
      errors => dispatch(receiveNoteErrors(errors.responseJSON)))
}

export const updateNote = (note) => dispatch => {
  return NoteAPI.updateNote(note)
    .then(note => dispatch(receiveNote(note)),
      errors => dispatch(receiveNoteErrors(errors.responseJSON)))
}

export const deleteNote = (noteId) => dispatch => {
  return NoteAPI.deleteNote(noteId)
    .then((note) => dispatch(removeNote(note.id)),
      errors => dispatch(receiveNoteErrors(errors.responseJSON)))
}