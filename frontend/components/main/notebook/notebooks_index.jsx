import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { parseDate } from '../../../util/date_util';

export default class NotebookIndex extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      actionsDropdown: {}
    }

    this.toggleActionsDropdown = this.toggleActionsDropdown.bind(this);
  }

  componentDidMount() {
    this.props.requestNotebooks();
  }

  toggleActionsDropdown(notebookId) {
    if (this.state.actionsDropdown[notebookId] === true) {
      this.setState({ actionsDropdown: Object.assign({}, { [notebookId]: false }) }) 
    } else {
      this.setState({ actionsDropdown: Object.assign({}, { [notebookId]: true }) })
    }
  }
  
  render() {
    const { notebooks, user } = this.props;
    const notebookList = notebooks.map(notebook => {
      
      const date = parseDate(notebook.updated_at);
      const actionsDropdown = this.state.actionsDropdown[notebook.id];

      return (
        <li key={notebook.id}>
          <div className="notebook-item-text">
            <div className="notebook-name">
              <button>
                <i className="fas fa-caret-right"></i>
              </button>
              <Link to="/notebooks">
                <i className="fas fa-book"></i>
                {notebook.name}
              </Link>
            </div>
            <div>
              {user.email}
            </div>
            <div>
              {date}
            </div>
            <div className="notebook-actions-dropdown">
              <button className="actions-dropdown-button" 
                onClick={() => this.toggleActionsDropdown(notebook.id)}>
                  <i className="fas fa-ellipsis-h"></i>
              </button>
              <ul className={`dropdown actions-dropdown
                ${actionsDropdown ? "" : "hidden"}`}>
                <li>
                  <button onClick={() => {
                    this.props.openModal("renameNotebook", notebook.id);
                    this.toggleActionsDropdown(notebook.id)}}>
                      Rename Notebook
                  </button>
                </li>
                <li>
                  <button onClick={() => {
                    this.props.openModal("deleteNotebook", notebook.id);
                    this.toggleActionsDropdown(notebook.id)}}>
                      Delete Notebook
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </li>
      )
    })


    return (
      <div className="notebook-index-container">
        <div className="notebook-index-header">
          <h1>Notebooks</h1>
        </div>
        <div className="notebook-index-header-2">
          <h4>My notebook list</h4>
        </div>
        <div className="new-notebook">
          <button onClick={() => this.props.openModal('newNotebook')}>
            <i className="fas fa-book-medical"></i>New Notebook</button>
        </div>

        <div className="notebook-index-col-header notebook-name"><h5>TITLE</h5></div>
        <div className="notebook-index-col-header"><h5>CREATED BY</h5></div>
        <div className="notebook-index-col-header"><h5>UPDATED</h5></div>
        <div className="notebook-index-col-header action"><h5>ACTION</h5></div>
        <div className="notebooks-list">
          <ul>
            {notebookList}
          </ul>
        </div>
      </div>
    )
  }
}
