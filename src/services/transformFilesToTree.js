import { get, groupBy, sortBy } from 'lodash';

/**
 * @typedef {{ key: string, name: string, [children]: Array.<Node> }} Node
 * Converts the given files and folders to a node tree structure, which is used by the NestedList component.
 * @param {Array.<{ id: string, name: string, folderId: string|null }>} files All of the files.
 * @param {Array.<{ id: string, name: string, parentFolderId: string|null }>} folders All of the folders.
 * @param [logStatement = null] A statement to log in the console every time this function runs, for demonstration
 * purposes.
 * @returns {Array.<node>}
 */
const transformFilesToTree = (files, folders, logStatement = null) => {
  if (logStatement) {
    console.log(logStatement);
  }

  const foldersByParent = groupBy(sortBy(folders, 'name'), 'parentFolderId');
  const filesByFolder = groupBy(sortBy(files, 'name'), 'folderId');

  const getFolderContents = folderId => [
    ...get(foldersByParent, folderId, []).map(subfolder => ({
      key: subfolder.id,
      name: subfolder.name,
      children: getFolderContents(subfolder.id)
    })),
    ...get(filesByFolder, folderId, []).map(file => ({
      key: file.id,
      name: file.name
    }))
  ];

  return getFolderContents(null);
};

export default transformFilesToTree;
