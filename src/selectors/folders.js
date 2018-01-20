import { createSelector } from 'reselect';
import { sortBy } from 'lodash';

/**
 * Gets an array of all folders, sorted by their name. Returns a cached copy unless the `folders` slice of the given
 * state has changed.
 * @param {object} state The Redux store state.
 * @returns {Array.<{ id: string, name: string, parentFolderId: string|null }>}
 */
export default createSelector(
  [state => state.folders],
  folders => sortBy(folders, 'name')
);
