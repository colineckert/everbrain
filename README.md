# Everbrain
![Everbrain splash page](https://github.com/colineckert/everbrain/blob/main/app/assets/images/everbrain-home.png)

### Demo
[Try Everbrain](https://everbrain.herokuapp.com) via the live demo login.

---

## 📖 Table of Contents
1. [Overview](https://github.com/colineckert/everbrain#overview)
2. [Technologies](https://github.com/colineckert/everbrain#technologies)
3. [Features](https://github.com/colineckert/everbrain#features)
4. [In-progress & Planned](https://github.com/colineckert/everbrain#in-progress-tasks-planned-features--known-issues)

---
## 📕 Overview
[Everbrain](https://everbrain.herokuapp.com) is a single-page note-taking app that features a rich-text editor, image uploading, autosaving, organization with notebooks, and user authentification. Everbrain is an [Evernote](https://www.evernote.com) clone.

## 📚 Technologies

#### Rails, PostgreSQL, jQuery, React, Redux
Everbrain is built using a Rails backend, PostgreSQL for the database management and jQuery/AJAX for database requests, and React/Redux for the frontend and state management. It's structured as a normalized  state and uses thunks for asynchronous CRUD actions.

#### ReactQuill
Everbrain's rich-text editor is built with [ReactQuill](https://github.com/zenoamaro/react-quill), a [Quill](https://quilljs.com/) component for React, to create a clean WYSIWYG editing experience. Modifications to the ReactQuill editor inlcude a **custom toolbar with edit undo and redo features**, CSS styling to the Snow theme, and **note autosaving** using [debounce](https://www.npmjs.com/package/debounce).

## 📓 Features

### Notebooks
![Notebooks demo](https://github.com/colineckert/everbrain/blob/main/app/assets/images/notebooks_demo.gif)
Users can create notebooks to better organize their notes. From within the `Notebooks` index, users can rename and delete notebooks via modals, as well as view all notes within each of their notebooks and navigate directly to a selected note. 

Users can also view their notebooks on the side nav, and when selecting a notebook, the most recently updated note is automatically loaded in the editor.

### Rich-Text Editor
![Note editor demo](https://github.com/colineckert/everbrain/blob/main/app/assets/images/note_editor_demo.gif)

Users can create a new note using the main "New Note" button and will be immediately loaded in the editor. 

From within the Everbrain editor, users have the ability to edit notes using different headings, font styles, sizes, and coloring, as well as add imgaes, links, formulas, and code blocks. 

Changes to notes are autosaved but can be undone (and redone) using custom buttons added to the editor toolbar. 

The editor toolbar is also hidden until the user clicks into the editor, showing the human-friendly last updated date when the editor is hidden.

### Search
![Search demo]()

Users can search all notebooks via the left search bar. As users input their search query, matching results appear in real-time, with exact text bolded for immediate search feedback. 

Clicking a note or notebook from the search results dropdown links directly to that note or notebook. Users also have the option to search all notes to query note contents, and Everbrain will display all the matching notes in the sidebar.

### Tags
![Tag demo]()

Users can add add and remove tags from notes, allowing an additional level of organiztion. When viewing all notes or a notebook's notes, the notes list can also be filter by selected a tag. 

Tags can be addeded to a note from within the note editor, where inputing a tag name will search for existing matching tags or create a new tag if no matches exist. 

```js
// return array of notes filtered by tag
export const getFilteredNotes = ({ entities: { notes }}, tagId) => {
  return Object.keys(notes).map(id => notes[id]).filter(note => note.tag_ids.includes(tagId));
}

// return an array of notes that meet search query
export const getSearchNotes = ({ entities: { notes } } = {}, search) => {
  const notesArr = Object.keys(notes).map(id => notes[id]);
  return notesArr.filter(note => {
    return note.body.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  })
}

// fetch notes depending on whether notes index is filtered by search or tag
export const getNotes = (state) => {
  const tagFilters = state.ui.tagFilters;
  const search = state.ui.search;
  
  if (!tagFilters && !search) {
    return getAllNotes(state);
  } else if (tagFilters) {
    return getFilteredNotes(state, tagFilters);
  } else {
    return getSearchNotes(state, search);
  }
};
```

## In-progress tasks, planned features & known issues

#### Reminders
As users are adding notes to their Everbrain second brain, they should have the ability to add reminders to notes to prompt them to review or continue working on the specified note. 

#### Media Embeds
Currently, users can only add images and links to their notes. More embed options, such as videos (Youtube) and audio files, with in-editor previews would be the ideal evolution of embeds and a more robust editor. 
