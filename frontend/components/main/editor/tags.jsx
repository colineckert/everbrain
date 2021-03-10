import React, { Component } from 'react'

export default class Tags extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      tagName: "",
      tagActionsDropdown: {},
      tagSearchDropdown: false,
      tagSearchMatches: []
    }

    this.removeNoteTag = this.removeNoteTag.bind(this);
    this.updateTagField = this.updateTagField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  removeNoteTag(tagId) {
    const noteId = this.props.note.id;
    this.props.deleteNoteTag({ noteId, tagId })
  }

  updateTagField(e) {
    this.setState({ tagName: e.target.value }, () => {
      if (this.state.tagName.length >= 1) {
        this.searchTags(this.state.tagName);
      } else {
        this.setState({ tagSearchDropdown: false });
      }
    })
  }

  searchTags(tagSearch) {
    const tagSearchResults = this.props.allTags.filter(tag => {
      return tag.name.toLowerCase().indexOf(tagSearch.toLowerCase()) !== -1;
    });

    tagSearchResults.length ? 
      this.setState({ tagSearchDropdown: true, tagSearchMatches: tagSearchResults }) :
      this.setState({ tagSearchDropdown: false })
  }

  renderTagSearchResults() {
    const tagMatches = this.state.tagSearchMatches;
    return tagMatches.map(tag => {
      return (
        <li key={tag.id}>
          <button >
            {tag.name}
          </button>
        </li>
      )
    })
  }

  handleSubmit(e) {
    e.preventDefault();
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

    const tagSearchDropdown = this.state.tagSearchDropdown;
    const tagSearchResults = this.renderTagSearchResults();
    
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
              onChange={this.updateTagField}
              placeholder="Add tag"
            />
          </form>
          <ul className={
            `tag-dropdown dropdown ${tagSearchDropdown ? "" : "hidden"}`}>
            {tagSearchResults}
          </ul>
        </div>
      </div>
    )
  }
}
