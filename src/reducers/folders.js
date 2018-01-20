import { keyBy } from 'lodash';
import mockFolders from '../mocks/folders.json';

/**
 * Readonly reducer for the folders.
 * @param {object} state The folders, keyed by their `id`.
 * @returns {object}
 */
const folders = (state = keyBy(mockFolders, 'id')) => state;

export default folders;
