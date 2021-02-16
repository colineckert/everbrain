// returns the state's notebooks as an array of notebooks
export const getAllNotebooks = ({ entities: { notebooks } }) => {
  return Object.keys(notebooks).map(id => notebooks[id])
}

// returns the state's notes as an array of notes
export const getAllNotes = ({ entities: { notes } } = {}) => (
  Object.keys(notes).map(id => notes[id])
)

// return array of notes from a selected notebook
export const getAllNotebookNotes = ({ entities: { notebooks, notes } }, notebookId) => {
  const notebookNotes = [];
  notebooks[notebookId].note_ids.forEach(noteId => {
    notebookNotes.push(notes[noteId])
  });

  return notebookNotes;
}
