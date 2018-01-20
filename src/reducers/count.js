import { INCREMENT_COUNT, DECREMENT_COUNT } from '../actions/count';

/**
 * Modifies the state count when relevant actions are dispatched.
 * @param {number} state The current count.
 * @param {object} action
 * @param {string} action.type The action type.
 * @returns {number}
 */
const count = (state = 0, { type }) => {
  switch (type) {
    case INCREMENT_COUNT:
      return state + 1;
    case DECREMENT_COUNT:
      return state - 1;
    default:
      return state;
  }
};

export default count;
