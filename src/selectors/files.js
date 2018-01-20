import { createSelector } from 'reselect';
import { sortBy } from 'lodash';

/**
 * Gets an array of all files, sorted by their name. Returns a cached copy unless the `files` slice of the given state
 * has changed.
 * @param {object} state The Redux store state.
 * @returns {Array.<{ id: string, name: string, folderId: string|null }>}
 */
export default createSelector(
  [state => state.files],
  files => sortBy(files, 'name')
);
