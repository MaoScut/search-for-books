import * as types from './constant';

export const setTopic = topic => ({
  type: types.SET_TOPIC,
  topic,
});
export const setDisplayMode = displayMode => ({
  type: types.SET_DISPLAY_MODE,
  displayMode,
});

const fetchStart = () => ({
  type: types.FETCH_STARTED,
});

const fetchComplete = json => ({
  type: types.FETCH_COMPLETE,
  json,
});

const fetchFailed = error => ({
  type: types.FETCH_FAILED,
  error,
});

const URL = 'https://www.googleapis.com/books/v1/volumes?q=';
const fetchCurrentTopic = (dispatch, state) => {
  dispatch(fetchStart());
  fetch(URL + state.topic)
    .then(res => res.json())
    .then((json) => {
      if (json.error) dispatch(fetchFailed(json.error));
      else dispatch(fetchComplete(json));
    })
    .catch(error => dispatch(fetchFailed(error)));
};
export const fetchBooks = () => ({
  type: types.BEGIN_FETCH,
  fn: fetchCurrentTopic,
});

export const redo = () => ({
  type: types.REDO,
});
export const undo = () => ({
  type: types.UNDO,
});
export const gotoState = stateIndex => ({
  type: types.GOTO,
  stateIndex,
});
