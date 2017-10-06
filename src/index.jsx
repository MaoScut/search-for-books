import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from './containers/app';
import store from './store';
// import { setTopic, setDisplayMode, fetchBooks } from './actions';

// store.dispatch(setTopic('javascript'));
// store.dispatch(setDisplayMode('THUMBNAIL'));
// store.dispatch(fetchBooks());

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
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
