export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modalName, itemId) => {
  return {
    type: OPEN_MODAL,
    modalName,
    itemId
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
