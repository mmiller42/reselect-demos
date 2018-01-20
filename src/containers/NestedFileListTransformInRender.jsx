import React from 'react';
import { connect } from 'react-redux';
import transformFilesToTree from '../services/transformFilesToTree';
import NestedList from '../components/NestedList';

/**
 * Connects a component to the file tree. The component wraps the NestedList component and transforms the props from the
 * format they are stored in the Redux store to the format accepted by the NestedList component. Because this
 * transformation occurs in the wrapping component, the transformation is recomputed every time the component needs to
 * be re-rendered: i.e., when its props or state changes. This can be alleviated by writing a class component with a
 * `componentWillReceiveProps` lifecycle event listener that decides to only re-run the transformation function if
 * specific props change; however, this creates a lot of extra code, is error-prone, and creates a one-off component
 * just to wrap another component.
 * @type {Component}
 */
export default connect(
  state => ({
    files: state.files,
    folders: state.folders
  })
)(({ files, folders, ...props }) => (
  <NestedList
    nodes={transformFilesToTree(files, folders, 'NestedFileListTransformInRender is computing the file tree')}
    {...props}
  />
));
