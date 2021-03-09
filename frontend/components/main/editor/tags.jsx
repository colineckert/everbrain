import React, { Component } from 'react'

export default class Tags extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    const { note } = this.props;
    if (!note) return null;
    
    const tagsList = this.props.noteTags.map(tag => {
      if (!tag) return null;

      return (
        <li className="tags-list-item" key={tag.id}>
          {tag.name}
          <button>
            <i class="fas fa-angle-down"></i>
          </button>
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
      </div>
    )
  }
}
