import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { parseDate } from '../../../util/date_util';

export default class NotebookIndex extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       notebookActionDropdown: "hidden"
    }

    this.toggleActionsDropdown = this.toggleActionsDropdown.bind(this);
  }

  componentDidMount() {
    this.props.requestNotebooks();
  }

  toggleActionsDropdown() {
    if (this.state.notebookActionDropdown === "hidden") {
      this.setState({notebookActionDropdown: ""})
    } else {
      this.setState({ notebookActionDropdown: "hidden" })
    }
  }
  
  render() {
    const { notebooks } = this.props;
    const notebookList = notebooks.map(notebook => {
      
      const date = parseDate(notebook.updated_at);
      
      return (
        <li key={notebook.id}>
          <div className="notebook-item-text">
            <div>
              <Link to="/notebooks">{notebook.name}</Link>
            </div>
            <div>
              Demo User
            </div>
            <div>
              {date}
            </div>
            <div className="notebook-actions-dropdown">
              <button className="actions-dropdown-button" onClick={this.toggleActionsDropdown}>
                <i className="fas fa-ellipsis-h"></i>
              </button>
              <ul className={`dropdown ${this.state.notebookActionDropdown} actions-dropdown`}>
                <li><button>Rename Notebook</button></li>
                <li><button>Delete Notebook</button></li>
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

        <div className="notebook-index-col-header"><h5>TITLE</h5></div>
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
