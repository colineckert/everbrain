import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import { debounce } from "debounce";
import { Link } from "react-router-dom";
import EditorToolbar, { modules, formats } from './editor_toolbar';
import Tags from './tags';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: '',
      body: '',
      updated_at: new Date(),
      noteDropdown: "hidden"
    }

    this.fetchNote = this.fetchNote.bind(this);
    this.update = this.update.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.deleteNote = this.deleteNote.bind(this);

    this.saveNote = this.saveNote.bind(this);
    this.autosave = debounce(this.saveNote, 1000); 
  }

  componentDidMount() {
    this.fetchNote();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.noteId !== prevProps.match.params.noteId || this.state.id === null) {
      this.fetchNote();
    }
  }
  
  fetchNote() {
    if (this.props.note) this.setState(this.props.note);
  }
  
  saveNote() {
    const { id, title, body } = this.state;
    this.props.updateNote({ id, title, body });
  }

  update(field) {
    return(e) => {
      this.setState({ [field]: e.target.value });
      this.autosave();
    }
  }

  handleEditorChange(text) {
    this.setState({ body: text });
    this.autosave();
  }

  deleteNote() {
    this.props.openModal("deleteNote", this.state.id);
    this.toggleHidden("noteDropdown");
  }

  toggleHidden(element) {
    this.state[element] === "hidden" ?
      this.setState({ [element]: "" }) : this.setState({ [element]: "hidden" });
  }

  render() {
    const { title, body } = this.state;

    return (
      <div className="editor-container">
        <div className="editor-header">
          <div className="col-1-1">
            <button className="expand-editor-button">
              <i className="fas fa-expand-alt"></i>
            </button>
            <Link to={`/notebooks/${this.props.notebook.id}`}>
              <h3><i className="fas fa-book"></i>{this.props.notebook.name}</h3>
            </Link>
          </div>
          <div className="col-2-1">
            <button className="note-dropdown-button dropdown-anchor"
              onClick={() => this.toggleHidden("noteDropdown")}>
                <i className="fas fa-ellipsis-h"></i>
            </button>
            <ul className={`actions-dropdown dropdown ${this.state.noteDropdown}`}>
              <li>
                <button id="note-dropdown"
                  onClick={this.deleteNote}>Delete note</button>
              </li>
            </ul>
          </div>
          <EditorToolbar id="toolbar" />
        </div>
        <div className="quill-container" id="quill">
          <form onSubmit={(e) => e.preventDefault()}>
            <input name="title" type="text" className="note-title-edit"
              onChange={this.update('title')}
              value={title}
              placeholder="Untitled">
            </input>
          </form>
          <ReactQuill
            theme="snow"
            value={body || ''}
            onChange={this.handleEditorChange}
            modules={modules}
            formats={formats}
            placeholder="Start writing, add a link, or upload an image"
            bounds=".editor-container"
            scrollingContainer=".quill-container"
          />
        </div>

        <Tags 
          note={this.props.note} noteTags={this.props.noteTags} 
          allTags={this.props.allTags} createTag={this.props.createTag}
          receiveTagFilter={this.props.receiveTagFilter}
          createNoteTag={this.props.createNoteTag}
          deleteNoteTag={this.props.deleteNoteTag}
          userId={this.props.userId}
        />
      </div>
    );
  }
}

export default Editor;