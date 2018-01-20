import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App';

const load = () => render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('app')
);

load();

if (module.hot) {
  module.hot.accept('./containers/App', load);
}
