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
        <li className="tags-list-item">
          <i className="fas fa-tag"></i>
          {tag.name}
        </li>
      )
    });

    return (
      <div className="editor-tags">
        <ul className="editor-tags-list">
          {tagsList}
        </ul>
      </div>
    )
  }
}
