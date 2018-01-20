import { connect } from 'react-redux';
import CreateFile from '../components/CreateFile';
import { createFile } from '../actions/files';
import folders from '../selectors/folders';

/**
 * Connects the CreateFile component to the Redux store.
 * @returns {Component}
 */
export default connect(
  state => ({ folders: folders(state) }),
  {
    onCreate: ({ name, folderId }) => createFile(name, folderId)
  }
)(CreateFile);
