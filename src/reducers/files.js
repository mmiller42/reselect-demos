import { keyBy, omit } from 'lodash';
import { CREATE_FILE, DELETE_FILE } from '../actions/files';
import mockFiles from '../mocks/files.json';

/**
 * Modifies the files state when relevant actions are dispatched.
 * @param {object} state The files, keyed by their `id`.
 * @param {object} action
 * @param {string} action.type The action type.
 * @param {object} action.payload Data associated with the action.
 * @returns {object}
 */
const files = (state = keyBy(mockFiles, 'id'), { type, payload }) => {
  switch (type) {
    case CREATE_FILE:
      return {
        ...state,
        [payload.id]: payload,
      };
    case DELETE_FILE:
      return omit(state, payload.id);
    default:
      return state;
  }
};

export default files;
