import { createStore, compose } from 'redux';
import rootReducer from '../reducers';

const initialState = {};
const enhancer = compose(...(window.devToolsExtension ? [window.devToolsExtension()] : []));

const store = createStore(rootReducer, initialState, enhancer);

if (module.hot) {
  module.hot.accept('../reducers', () => {
    store.replaceReducer(rootReducer, initialState, enhancer);
  });
}

/**
 * The Redux store.
 * @type {Store}
 */
export default store;
