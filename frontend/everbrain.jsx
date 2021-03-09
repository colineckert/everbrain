import React from 'react';
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import 'react-quill/dist/quill.snow.css';

// import { login, logout } from './actions/session_actions';
// import { 
//   requestNotebooks, requestNotebook, createNotebook, 
//   updateNotebook, deleteNotebook 
// } from './actions/notebook_actions';
// import {
//   requestNotes, requestNote, createNote,
//   updateNote, deleteNote 
// } from './actions/note_actions'

import { getAllNotebookNotes, getAllTags } from './reducers/selectors';
import { createTag, requestTags, requestTag, deleteTag } from './actions/tag_actions';


document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.login = login;
  // window.logout = logout;
  // // notebooks
  // window.requestNotebooks = requestNotebooks;
  // window.requestNotebook = requestNotebook;
  // window.createNotebook = createNotebook;
  // window.updateNotebook = updateNotebook;
  // window.deleteNotebook = deleteNotebook;
  // // notes
  // window.requestNotes = requestNotes;
  // window.requestNote = requestNote;
  // window.createNote = createNote;
  // window.updateNote = updateNote;
  // window.deleteNote = deleteNote;
  // tags
  window.requestTags = requestTags;
  window.requestTag = requestTag;
  window.createTag = createTag;
  window.deleteTag = deleteTag;
  // // selectors
  // window.getAllNotebookNotes = getAllNotebookNotes;
  window.getAllTags = getAllTags;
  // // TESTING END

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
