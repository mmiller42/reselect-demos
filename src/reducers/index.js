import { combineReducers } from 'redux';
import count from './count';
import files from './files';
import folders from './folders';

export default combineReducers({
  count,
  files,
  folders
})
