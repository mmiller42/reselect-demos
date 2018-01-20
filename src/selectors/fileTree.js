import { createSelector } from 'reselect';
import { sortBy } from 'lodash';
import transformFilesToTree from '../services/transformFilesToTree';

/**
 * @typedef {{ key: string, name: string, [children]: Array.<Node> }} Node
 * Converts the files and folders in state to the format needed by the `NestedList` component, which is a node tree.
 * Returns a cached copy unless the `files` or `folders` slices of the given state have changed.
 * @param {object} state The Redux store state.
 * @returns {Array.<Node>}
 */
export default createSelector(
  [state => state.files, state => state.folders],
  (files, folders) => transformFilesToTree(files, folders, 'reselect is computing the file tree')
);
