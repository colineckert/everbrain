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
  if (!notebookId || Object.keys(notebooks).length === 0 || Object.keys(notes).length === 0) return [];

  const notebookNotes = [];
  notebooks[notebookId].note_ids.forEach(noteId => {
    notebookNotes.push(notes[noteId])
  });

  return notebookNotes;
}

export const getAllTags = ({ entities: { tags } }) => {
  debugger
  return Object.keys(tags).map(id => tags[id])
}