export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export const receiveSearch = (search) => {
  return {
    type: RECEIVE_SEARCH,
    search
  }
}

export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH
  }
}
