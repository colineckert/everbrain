import * as TagAPI from '../util/tag_api_util';

export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const RECEIVE_TAG = 'RECEIVE_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';
export const RECEIVE_TAG_ERRORS = 'RECEIVE_TAG_ERRORS';
export const CLEAR_TAG_ERRORS = 'CLEAR_TAG_ERRORS';


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

// note_tag actions???