export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modalName, notebookId) => {
  return {
    type: OPEN_MODAL,
    modalName,
    notebookId
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
