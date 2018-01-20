import React, { Component } from 'react';
import styles from '../styles/Form.module.css';

/**
 * Renders a form for creating a new file.
 * @param {object} props
 * @param {Array.<{ id: string, name: string|null }>} props.folders The folders that the file could be created in.
 * @param {function({ name: string, folderId: string|null })} props.onCreate A function to call to create a file.
 * @returns {Element}
 */
export default class CreateFile extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', folderId: null };
  }

  handleNameChange = event => this.setState({ name: event.target.value });
  handleFolderChange = event => this.setState({ folderId: event.target.value || null });
  handleSubmit = event => {
    event.preventDefault();
    this.props.onCreate(this.state);
    this.setState({ name: '', folderId: null });
  };

  render() {
    const { folders } = this.props;
    const { name, folderId } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <h3>Create File</h3>
        <label>
          <span>Name</span>
          <input type="text" onChange={this.handleNameChange} value={name} />
        </label>
        <label>
          <span>Folder</span>
          <select onChange={this.handleFolderChange} value={folderId || ''}>
            <option key="" value="" />
            {folders.map(({ id, name }) => (
              <option key={id} value={id}>{name}</option>
            ))}
          </select>
        </label>
        <button type="submit" disabled={!name}>Create</button>
      </form>
    );
  }
}
