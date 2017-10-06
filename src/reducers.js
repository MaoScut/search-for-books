import { combineReducers } from 'redux';
import stateHistory from './userOptionHistory';
import * as types from './constant';

const defaults = {
  TOPIC: '',
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
const undo = reducer => (state = stateHistory.present, action) => {
  switch (action.type) {
    case types.UNDO:
      stateHistory.undo();
      break;
    case types.REDO:
      stateHistory.redo();
      break;
    case types.GOTO:
      stateHistory.gotoState(action.stateIndex);
      break;
    case types.FETCH_STARTED: {
      const newStateWithLoading = reducer(state, action);
      return newStateWithLoading;
    }
    default: {
      const newState = reducer(state, action);
      stateHistory.push(newState);
    }
  }
  return stateHistory.present;
};
const historyWrapper = reducer => (state, action) => {
  const unNecessaryToBeSavedActions = [types.FETCH_STARTED, types.SET_TOPIC];
  if (unNecessaryToBeSavedActions.includes(action.type)) {
    return reducer(state, action);
  }
  switch (action.type) {
    case types.UNDO:
      stateHistory.undo();
      break;
    case types.REDO:
      stateHistory.redo();
      break;
    case types.GOTO:
      stateHistory.gotoState(action.stateIndex);
      break;
    default: {
      const newState = reducer(state, action);
      stateHistory.push(newState);
    }
  }
  return stateHistory.present;
};
export default historyWrapper(combineReducers({
  topic: topicReducer,
  displayMode: displayModeReducer,
  books: fetchReducer,
  currentStatus: statusReducer,
}));
