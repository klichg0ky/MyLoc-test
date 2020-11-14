import {createStore} from 'redux';
import {SET_TRACK_ID} from './types';

const initialState = {
  trackId: '',
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_TRACK_ID: {
      return {
        ...state,
        trackId: action.trackId,
      };
    }
    default: {
      return state;
    }
  }
}

export default createStore(reducer);
