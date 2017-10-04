import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import { thunk } from './middleware';
import reducer from './reducers';

export default createStore(
  reducer,
  applyMiddleware(thunk),
);
