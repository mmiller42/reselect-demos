import React, { Component } from 'react';
import Counter from '../containers/Counter';
import CreateFile from '../containers/CreateFile';
import DeleteFile from '../containers/DeleteFile';
import NestedFileListTransformInRender from '../containers/NestedFileListTransformInRender';
import NestedFileListTransformInMapStateToProps from '../containers/NestedFileListTransformInMapStateToProps';
import NestedFileListWithReselect from '../containers/NestedFileListWithReselect';
import styles from '../styles/Main.module.css';

/**
 * Renders the app.
 * @returns {Element}
 */
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { showExtensions: true };
  }

  toggleShowExtensions = () => this.setState({ showExtensions: !this.state.showExtensions });

  render() {
    const { showExtensions } = this.state;
    const NameComponent = showExtensions ? NameWithExtension : NameWithoutExtension;

    return (
      <div className={styles.container}>
        <div className={styles.cols}>
          <CreateFile />
          <DeleteFile />
          <Counter />
        </div>
        <div>
          <label>
            <input type="checkbox" onChange={this.toggleShowExtensions} checked={showExtensions} />
            Show extensions (to demonstrate that Example 1 recomputes when its props change)
          </label>
          <div className={styles.cols}>
            <div>
              <h3>Example 1</h3>
              <p>This example calls the data transformation function in the component itself, when it is rendered. Therefore, any time the component is re-rendered (for example, when the "Show extensions" checkbox is toggled), the data must be recomputed.</p>
              <NestedFileListTransformInRender nameComponent={NameComponent} />
            </div>
            <div>
              <h3>Example 2</h3>
              <p>This example calls the data transformation function in <code>mapStateToProps</code>. The result of <code>mapStateToProps</code> is therefore a fresh object every time, so any time the store is updated, it recomputes and re-renders.</p>
              <NestedFileListTransformInMapStateToProps nameComponent={NameComponent} />
            </div>
            <div>
              <h3>Example 3</h3>
              <p>This example uses reselect, and the selector calls the transformation function. It is only recomputed and re-rendered when the relevant slices of state are changed.</p>
              <NestedFileListWithReselect nameComponent={NameComponent} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/**
 * Renders a filename with its extension.
 * @param {object} props
 * @param {string} props.children The node name.
 * @returns {Element}
 */
const NameWithExtension = ({ children }) => (
  <span>{children}</span>
);

/**
 * Renders a filename, stripping its extension.
 * @param {object} props
 * @param {string} props.children The node name.
 * @returns {Element}
 */
const NameWithoutExtension = ({ children }) => (
  <span>{children.match(/^(.*?)(\.[^.]+)?$/)[1]}</span>
);
