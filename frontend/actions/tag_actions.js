import * as TagAPI from '../util/tag_api_util';

export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const RECEIVE_TAG = 'RECEIVE_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';
export const RECEIVE_TAG_ERRORS = 'RECEIVE_TAG_ERRORS';
export const CLEAR_TAG_ERRORS = 'CLEAR_TAG_ERRORS';
// export const RECEIVE_NOTE_TAG = 'RECEIVE_NOTE_TAG';
// export const REMOVE_NOTE_TAG = 'REMOVE_NOTE_TAG';
// export const RECEIVE_NOTE_TAG_ERRORS = 'RECEIVE_NOTE_TAG_ERRORS';

export const receiveTags = (tags) => {
  return {
    type: RECEIVE_TAGS,
    tags 
  }
}

export const receiveTag = (tag) => {
  return {
    type: RECEIVE_TAG,
    tag
  }
}

export const removeTag = (tagId) => {
  return {
    type: REMOVE_TAG,
    tagId
  }
}

const receiveTagErrors = (errors) => {
  return {
    type: RECEIVE_TAG_ERRORS,
    errors
  }
}

export const clearTagErrors = () => {
  return {
    type: CLEAR_TAG_ERRORS
  }
}

// export const receiveNoteTag = (noteTag) => {
//   return {
//     type: RECEIVE_NOTE_TAG, 
//     noteId: noteTag.note_id,
//     tagId: noteTag.tag_id
//   }
// }

// export const removeNoteTag = (noteTag) => {
//   return {
//     type: REMOVE_NOTE_TAG, 
//     noteId: noteTag.note_id,
//     tagId: noteTag.tag_id
//   }
// }


// export const receiveNoteTagErrors = (errors) => {
//   return {
//     type: RECEIVE_NOTE_TAG_ERRORS, 
//     errors
//   }
// }

// thunk actions
export const requestTags = () => dispatch => {
  return TagAPI.fetchTags()
    .then(tags => dispatch(receiveTags(tags)),
      errors => dispatch(receiveTagErrors(errors.responseJSON)))
}

export const requestTag = (tagId) => dispatch => {
  return TagAPI.fetchTag(tagId)
    .then(tag => dispatch(receiveTag(tag)),
      errors => dispatch(receiveTagErrors(errors.responseJSON)))
}

export const createTag = (tag) => dispatch => {
  return TagAPI.createTag(tag)
    .then(tag => dispatch(receiveTag(tag)),
      errors => dispatch(receiveTagErrors(errors.responseJSON)))
}

export const deleteTag = (tagId) => dispatch => {
  return TagAPI.deleteTag(tagId)
    .then(() => dispatch(removeTag(tagId)), 
      errors => dispatch(receiveTagErrors(errors.responseJSON)))
}

// export const createNoteTag = (noteTag) => dispatch => {
//   return TagAPI.createNoteTag(noteTag)
//     .then(noteTag => dispatch(receiveNoteTag(noteTag)), 
//       errors => dispatch(receiveNoteTagErrors(errors.responseJSON)))
// }

// export const deleteNoteTag = (noteTag) => dispatch => {
//   return TagAPI.deleteNoteTag(noteTag)
//     .then(() => dispatch(removeNoteTag(noteTag)), 
//       errors => dispatch(receiveNoteTagErrors(errors.responseJSON)))
// }
