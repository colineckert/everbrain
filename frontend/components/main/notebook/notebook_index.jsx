import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { parseDate } from '../../../util/date_util';

export default class NotebookIndex extends Component {
  constructor(props) {
    super(props)
  
    // this.state = {
       
    // }
  }
  

  componentDidMount() {
    this.props.requestNotebooks();
  }
  
  render() {
    const { notebooks } = this.props;
    const notebookList = notebooks.map(notebook => {
      
      const date = parseDate(notebook.updated_at);
      
      return (
        <li key={notebook.id}>
          <div>
            <Link to="/notebooks">{notebook.name}</Link>
          </div>
          <div>
            <p>{date}</p>
          </div>
        </li>
      )
    })


    return (
      <div>
        <h1>Notebooks</h1>
        <h5>Notebook List</h5>
        <div>
          <button onClick={() => this.props.openModal('newNotebook')}>
            <i className="fas fa-book-medical"></i>
            New Notebook
          </button>
        </div>
        <div>
          <div><h4>TITLE</h4></div>
          <div><h4>UPDATED</h4></div>
          <div><h4>ACTION</h4></div>
        </div>
        <div>
          <ul>
            {notebookList}
          </ul>
        </div>
      </div>
    )
  }
}
