# Everbrain
[Try Everbrain](https://everbrain.herokuapp.com)

---

## Table of Contents
1. Overview
2. Technologies
3. Features
4. In-progress & Planned

---
## Overview
[Everbrain](https://everbrain.herokuapp.com) is a note-taking app that features a rich-text editor, image uploading, autosaving, organization with notebooks, and user authentification. Everbrain is an [Evernote](https://www.evernote.com) clone.

## Technologies

#### Rails, PostgreSQL, React, Redux
Everbrain is built with a Ruby on Rails backend, PostgreSQL for the database, and React/Redux for the frontend and state management. It's structured as a normalized  state and uses thunks for asynchronous CRUD actions.

#### ReactQuill
Everbrain's rich-text editor is built with [ReactQuill](https://github.com/zenoamaro/react-quill), a [Quill](https://quilljs.com/) component for React, to create a clean WYSIWYG editing experience. Modifications to the ReactQuill editor inlcude a **custom toolbar with edit undo and redo features**, CSS styling to the Snow theme, and **note autosaving** using [debounce](https://www.npmjs.com/package/debounce).

## Features
#### Notebooks
Users can create notebooks to better organize their notes. From within the `Notebooks` index, users can rename and delete notebooks via modals, as well as view all notes within each of their notebooks and navigate directly to a selected note. 

Users can also view their notebooks on the side nav, and when selecting a notebook, the most recently updated note is automatically loaded in the editor.

#### Rich-Text Editor
From within the Everbrain editor, users have the ability to edit notes using different headings, font styles, sizes, and coloring, as well as add imgaes, links, formulas, and code blocks. 

Changes to notes or autosaved but can be undone (and redone) using custom buttons added to the editor toolbar. 

```jsx

```

## In-progress tasks, planned features & known issues
- Tags
- Search
- Editor expanding
- Collapsable nav and notes sidebar