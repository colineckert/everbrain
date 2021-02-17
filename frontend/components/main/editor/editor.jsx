import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import EditorToolbar, { modules, formats } from './editor_toolbar';

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

    this.update = this.update.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  update(field) {
    return(e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleEditorChange(text) {
    this.setState({ body: text });
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
    const { note, notebook } = this.props;
    return (
      <div className="editor-container">
        <div className="editor-header">
          <h3><i className="fas fa-book"></i>{notebook.name}</h3>
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
          <EditorToolbar id="toolbar" />
        </div>
        <div className="quill-container" id="quill">
          <form onSubmit={(e) => e.preventDefault()}>
            <input name="title" type="text" className="note-title-edit"
              // onChange={this.update('title')}
              value={note.title}
              placeholder="Untitled">
            </input>
          </form>
          <ReactQuill
            theme="snow"
            value={note.body || ''}
            // onChange={this.handleEditorChange}
            modules={modules}
            formats={formats}
            placeholder="Start writing"
            bounds=".editor-container"
            scrollingContainer=".quill-container"
          />
        </div>
      </div>
    );
  }
}

export default Editor;