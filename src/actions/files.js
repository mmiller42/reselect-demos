import uuid from 'uuid/v4';

/**
 * Action type for creating a file.
 * @type {string}
 */
export const CREATE_FILE = 'CREATE_FILE';

/**
 * Action creator for dispatching a create file action.
 * @param {string} name The name of the file to create.
 * @param {string|null} folderId The folder to create the file in (null for top level files).
 * @returns {Action}
 */
export const createFile = (name, folderId) => ({
  type: CREATE_FILE,
  payload: { id: uuid(), name, folderId }
});

/**
 * Action type for deleting a file.
 * @type {string}
 */
export const DELETE_FILE = 'DELETE_FILE';

/**
 * Action creator for dispatching a delete file action.
 * @param {string} id The id of the file to delete.
 * @returns {Action}
 */
export const deleteFile = id => ({
  type: DELETE_FILE,
  payload: { id }
});
