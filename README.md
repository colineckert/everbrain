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

#### Notebooks
![Notebooks demo](https://github.com/colineckert/everbrain/blob/main/app/assets/images/notebooks_demo.gif)
Users can create notebooks to better organize their notes. From within the `Notebooks` index, users can rename and delete notebooks via modals, as well as view all notes within each of their notebooks and navigate directly to a selected note. 

Users can also view their notebooks on the side nav, and when selecting a notebook, the most recently updated note is automatically loaded in the editor.

#### Rich-Text Editor
![Note editor demo](https://github.com/colineckert/everbrain/blob/main/app/assets/images/note_editor_demo.gif)

Users can create a new note using the main "New Note" button and will be immediately loaded in the editor. 

From within the Everbrain editor, users have the ability to edit notes using different headings, font styles, sizes, and coloring, as well as add imgaes, links, formulas, and code blocks. 

Changes to notes or autosaved but can be undone (and redone) using custom buttons added to the editor toolbar. 

## In-progress tasks, planned features & known issues
- Tags
- Search
- Editor expanding
- Collapsible nav and notes sidebar
