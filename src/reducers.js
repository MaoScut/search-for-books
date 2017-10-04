import { combineReducers } from 'redux';
import * as types from './constant';

const defaults = {
  TOPIC: 'javascript',
  DISPLAY_MODE: 'THUMBNAIL',
  BOOKS: [],
  STATUS: 'start the app!',
};

const topicReducer = (state = defaults.TOPIC, action) => {
  switch (action.type) {
    case types.SET_TOPIC: return action.topic;
    default: return state;
  }
};

const displayModeReducer = (state = defaults.DISPLAY_MODE, action) => {
  switch (action.type) {
    case types.SET_DISPLAY_MODE: return action.displayMode;
    default: return state;
  }
};

const fetchReducer = (state = defaults.BOOKS, action) => {
  switch (action.type) {
    case types.FETCH_STARTED:
    case types.FETCH_FAILED: return [];
    case types.FETCH_COMPLETE:
      return action.json.items;
    default: return state;
  }
};

const statusReducer = (state = defaults.STATUS, action) => {
  switch (action.type) {
    case types.FETCH_STARTED: return 'Fetching...';
    default: return 'complete';
  }
};

export default combineReducers({
  topic: topicReducer,
  displayMode: displayModeReducer,
  books: fetchReducer,
  currentStatus: statusReducer,
});
