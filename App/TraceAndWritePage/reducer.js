import { ActionTypes } from './actions';

const initialState = {
  targetPronunciation: 'Ta',
  targetJapanese: 'た',
};

export default function traceAndWritePage(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.NEXT: {
      return state;
    }
    case ActionTypes.RESET: {
      return state;
    }
    default:
      return state;
  }
}
