/**
 * Action type for incrementing count.
 * @type {string}
 */
export const INCREMENT_COUNT = 'INCREMENT_COUNT';

/**
 * Action creator for dispatching an increment action.
 * @returns {Action}
 */
export const incrementCount = () => ({ type: INCREMENT_COUNT });

/**
 * Action type for decrementing count.
 * @type {string}
 */
export const DECREMENT_COUNT = 'DECREMENT_COUNT';

/**
 * Action creator for dispatching a decrement action.
 * @returns {Action}
 */
export const decrementCount = () => ({ type: DECREMENT_COUNT });
