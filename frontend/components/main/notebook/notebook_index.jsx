import React, { Component } from 'react';

export default class NotebookIndex extends Component {
  constructor(props) {
    super(props)
  
    // this.state = {
       
    // }
  }
  

  componentDidMount() {
    this.props.fetchNotebooks();
  }
  
  render() {
    debugger

    const { notebooks } = this.props;
    return (
      <div>
        <h1>Notebooks</h1>
        <ul>
          <li>Notebook 1</li>
          {notebooks.map(notebook => (
            <li>{notebook.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}
