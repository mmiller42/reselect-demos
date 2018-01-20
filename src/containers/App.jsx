import React from 'react';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import store from '../services/store';
import Main from '../components/Main';

/**
 * Renders the app in a Redux provider container.
 * @returns {Element}
 */
const App = () => (
  <Provider store={store}>
    <div>
      <Main />
    </div>
  </Provider>
);

export default App;
