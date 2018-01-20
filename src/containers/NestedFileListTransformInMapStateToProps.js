import { connect } from 'react-redux';
import transformFilesToTree from '../services/transformFilesToTree';
import NestedList from '../components/NestedList';

/**
 * Connects the NestedList component to the file tree. The data is transformed from how it is stored in the Redux store
 * to how the component accepts the data as props within the `mapStateToProps` function. This is a really bad idea:
 * `react-redux.connect` will call `mapStateToProps` every time anything in the store has changed. It will then take the
 * result and compare it to the previous invocation of `mapStateToProps`. If the results are not equal, then it will
 * re-render the component. In this case, the result of calling `transformFilesToTree` is *always* a fresh object, and
 * therefore never equal to the previous result. So any changes to the Redux store, relevant or not, will cause the
 * transform function to be re-run, and the component to be re-rendered.
 * @returns {Component}
 */
export default connect(
  state => ({
    nodes: transformFilesToTree(state.files, state.folders, 'NestedFileListTransformInMapStateToProps is computing the file tree')
  })
)(NestedList);
