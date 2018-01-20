import React, { Component } from 'react';
import styles from '../styles/Form.module.css';

/**
 * Renders a form for deleting a file.
 * @param {object} props
 * @param {Array.<{ id: string, name: string }>} props.files The files that can be deleted.
 * @param {function({ id: string })} props.onDelete A function to call to delete a file.
 * @returns {Element}
 */
export default class DeleteFile extends Component {
  constructor(props) {
    super(props);
    this.state = { fileId: null };
  }

  handleFileChange = event => this.setState({ fileId: event.target.value || null });
  handleSubmit = event => {
    event.preventDefault();
    this.props.onDelete({ id: this.state.fileId });
    this.setState({ fileId: null });
  };

  render() {
    const { files } = this.props;
    const { fileId } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <h3>Delete File</h3>
        <label>
          <span>File</span>
          <select onChange={this.handleFileChange} value={fileId || ''}>
            <option value="" />
            {files.map(({ id, name }) => (
              <option key={id} value={id}>{name}</option>
            ))}
          </select>
        </label>
        <button type="submit" disabled={!fileId}>Delete</button>
      </form>
    )
  }
}
