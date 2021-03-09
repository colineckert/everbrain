import { 
  RECEIVE_TAGS,
  RECEIVE_TAG,
  REMOVE_TAG,
  RECEIVE_NOTE_TAG,
  REMOVE_NOTE_TAG
 } from '../actions/tag_actions';

const tagsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  const { noteId, tagId } = action;
  const tag = oldState[tagId];
  
  switch (action.type) {
    case RECEIVE_TAGS:
      return Object.assign({}, oldState, action.tags);
    case RECEIVE_TAG:
      return Object.assign({}, oldState, { [action.tag.id]: action.tag });
    case REMOVE_TAG:
      delete newState[action.tagId];
      return newState;
    
    // case RECEIVE_NOTE_TAG:
    //   return Object.assign({}, oldState,
    //     { [tagId]: Object.assign({}, tag, { note_ids: tag.note_ids.concat(noteId) }) } )
    // case REMOVE_NOTE_TAG:
    //   const noteIndex = tag.note_ids.indexOf(noteId);
    //   newState[tagId].note_ids.splice(noteIndex, 1);
    //   return newState;
    
    default:
      return oldState;
  }
}

export default tagsReducer;