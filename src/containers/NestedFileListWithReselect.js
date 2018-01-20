import { connect } from 'react-redux';
import fileTree from '../selectors/fileTree';
import NestedList from '../components/NestedList';

/**
 * Connects the NestedList component to the file tree. The `mapStateToProps` function is called every time any data in
 * the Redux store changes; however, the reselect selector returns a cached (memoized) result when it is invoked again,
 * unless the specific slices of state that it targets have changed. The selector listens for changes in the `files` and
 * `folders` slices of the store, so it will reuse the cached result if other state changes occur (such as `count`).
 * When `react-redux.connect` receives the return value of `mapStateToProps` and compares it to the previous result,
 * they are equal, so it does not re-render the component.
 * @type {Component}
 */
export default connect(
  state => ({ nodes: fileTree(state) })
)(NestedList);
