import React, { Component } from 'react'

export default class Tags extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      tagName: "",
      tagActionsDropdown: {},
    }
  }

  removeNoteTag(tagId) {
    const noteId = this.props.note.id;
    this.props.deleteNoteTag({ noteId, tagId })
  }

  toggleTagActionsDropdown(tagId) {
    if (this.state.tagActionsDropdown[tagId] === true) {
      this.setState({ tagActionsDropdown: Object.assign({}, { [tagId]: false }) })
    } else {
      this.setState({ tagActionsDropdown: Object.assign({}, { [tagId]: true }) })
    }
  }

  render() {
    const { note } = this.props;
    if (!note) return null;
    
    const tagsList = this.props.noteTags.map(tag => {
      if (!tag) return null;
      const tagActionsDropdown = this.state.tagActionsDropdown[tag.id];

      return (
        <li className="tags-list-item" key={tag.id}>
          {tag.name}
          <div className="dropdown-anchor">
            <button className="tag-actions-button" 
              onClick={() => this.toggleTagActionsDropdown(tag.id)}>
              <i className="fas fa-angle-down"></i>
            </button>
            <ul className={`tag-dropdown dropdown ${tagActionsDropdown ? "" : "hidden"}`}>
              <li>
                <button onClick={() => {
                  this.props.receiveTagFilter(tag.id), 
                  this.toggleTagActionsDropdown(tag.id)
                }}>Filter by tag
                </button>
              </li>
              <li>
                <button onClick={() => {
                  this.removeNoteTag(tag.id),
                  this.toggleTagActionsDropdown(tag.id)
                }}>Remove tag
                </button>
              </li>
            </ul>
          </div>
        </li>
      )
    });
    
    return (
      <div className="editor-tags">
        <div>
          <i className="fas fa-tag list-icon"></i>
        </div>
        <ul className="editor-tags-list">
          {tagsList}
        </ul>
        <div className="dropdown-anchor">
          <form>
            <input type="text" className="tag-input"
              value={this.state.tagName}
              placeholder="Add tag"
            />
          </form>
        </div>
      </div>
    )
  }
}
