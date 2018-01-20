import { connect } from 'react-redux';
import DeleteFile from '../components/DeleteFile';
import { deleteFile } from '../actions/files';
import files from '../selectors/files';

/**
 * Connects the DeleteFile component to the Redux store.
 * @returns {Component}
 */
export default connect(
  state => ({ files: files(state) }),
  {
    onDelete: ({ id }) => deleteFile(id)
  }
)(DeleteFile);
