import React from 'react';
import styles from '../styles/Form.module.css';

/**
 * Renders a value and buttons to increase or decrease it.
 * @param {object} props
 * @param {number} props.value The current count.
 * @param {function} props.onIncrement A function to call when the increment button is pressed.
 * @param {function} props.onDecrement A function to call when the decrement button is pressed.
 * @returns {Element}
 */
const Counter = ({ value, onIncrement, onDecrement }) => (
  <div className={styles.form}>
    <h3>Counter</h3>
    <p>(to demonstrate that Example 2 recomputes for irrelevant store changes)</p>
    <button onClick={onDecrement}>-</button>
    {value}
    <button onClick={onIncrement}>+</button>
  </div>
);

export default Counter;
