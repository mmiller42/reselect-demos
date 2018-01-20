import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { incrementCount, decrementCount } from '../actions/count';

/**
 * Connects the Counter component to the Redux store.
 * @returns {Component}
 */
export default connect(
  state => ({ value: state.count }),
  {
    onIncrement: incrementCount,
    onDecrement: decrementCount
  }
)(Counter);
