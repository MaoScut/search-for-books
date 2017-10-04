import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from './containers/app';
import store from './store';
import { setTopic, setDisplayMode } from './actions';

store.dispatch(setTopic('javascript'));
store.dispatch(setDisplayMode('THUMBNAIL'));

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider>
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
};
render();
if (module.hot) {
  module.hot.accept();
}
