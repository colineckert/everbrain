// returns the state's notebooks as an array of notebooks
export const getAllNotebooks = ({ entities: { notebooks } } ) => {
  return Object.keys(notebooks).map(id => notebooks[id])
}

// returns the state's notes as an array of notes
export const getAllNotes = ({ entities: { notes } } = {}) => (
  Object.keys(notes).map(id => notes[id])
);